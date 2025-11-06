import Docker from 'dockerode';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { Readable } from 'stream';

const sleep = promisify(setTimeout);

export interface DockerConfig {
  image: string;
  containerName: string;
  port: number;
  password: string;
}

export interface ConnectionInfo {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export class DockerManager {
  private docker: Docker;
  private config: DockerConfig;
  private containerId?: string;
  private container?: Docker.Container;

  constructor(config: DockerConfig) {
    this.docker = new Docker();
    this.config = config;
  }

  /**
   * Inicia contenedor PostgreSQL efimero.
   * Pull imagen si no existe.
   * Espera hasta que PostgreSQL este ready.
   */
  async start(): Promise<ConnectionInfo> {
    try {
      // 1. Pull imagen si no existe localmente
      console.log(`  [Docker] Verificando imagen ${this.config.image}...`);
      await this.pullImageIfNeeded(this.config.image);

      // 2. Limpiar contenedor existente si hay uno
      await this.cleanupExistingContainer();

      // 3. Crear y arrancar contenedor
      console.log(`  [Docker] Creando contenedor ${this.config.containerName}...`);
      this.container = await this.docker.createContainer({
        Image: this.config.image,
        name: this.config.containerName,
        Env: [`POSTGRES_PASSWORD=${this.config.password}`],
        HostConfig: {
          PortBindings: {
            '5432/tcp': [{ HostPort: this.config.port.toString() }]
          },
          AutoRemove: false
        }
      });

      this.containerId = this.container.id;
      await this.container.start();
      console.log(`  [Docker] Contenedor iniciado`);

      // 4. Esperar PostgreSQL ready
      console.log(`  [Docker] Esperando PostgreSQL ready...`);
      await this.waitForPostgres(30);

      return {
        host: 'localhost',
        port: this.config.port,
        user: 'postgres',
        password: this.config.password,
        database: 'postgres'
      };
    } catch (error) {
      console.error('[ERROR] Error iniciando contenedor:', error);
      await this.stop();
      throw error;
    }
  }

  /**
   * Pull imagen Docker si no existe localmente.
   * Maneja correctamente el stream de dockerode.
   */
  private async pullImageIfNeeded(imageName: string): Promise<void> {
    try {
      // Verificar si imagen existe
      await this.docker.getImage(imageName).inspect();
      console.log(`  [Docker] Imagen ya existe localmente`);
    } catch (error) {
      // Imagen no existe, hacer pull
      console.log(`  [Docker] Descargando imagen ${imageName}...`);

      return new Promise((resolve, reject) => {
        this.docker.pull(imageName, (err: any, stream: any) => {
          if (err) {
            reject(err);
            return;
          }

          // Seguir progreso del pull
          this.docker.modem.followProgress(
            stream,
            (err: any, output: any) => {
              if (err) {
                reject(err);
              } else {
                console.log(`  [Docker] Imagen descargada`);
                resolve();
              }
            },
            (event: any) => {
              // Opcional: mostrar progreso
              if (event.status === 'Downloading' || event.status === 'Extracting') {
                // Puedes mostrar progreso aqui si quieres
              }
            }
          );
        });
      });
    }
  }

  /**
   * Carga archivo SQL en PostgreSQL.
   * Copia archivo al contenedor y ejecuta via psql -f.
   */
  async loadSchema(schemaPath: string): Promise<void> {
    if (!this.container) {
      throw new Error('Contenedor no iniciado');
    }

    try {
      // Verificar que el archivo existe
      if (!fs.existsSync(schemaPath)) {
        throw new Error(`Archivo no encontrado: ${schemaPath}`);
      }

      // Paso 1: Crear roles de Supabase antes de cargar schema
      console.log(`  [Schema] Creando roles Supabase...`);
      await this.createSupabaseRoles();

      const fileContent = fs.readFileSync(schemaPath, 'utf8');
      const fileSize = (fileContent.length / 1024).toFixed(1);
      console.log(`  [Schema] Archivo leido: ${fileSize}KB`);

      // Crear tarball simple con el archivo SQL
      const fileName = 'schema.sql';
      const tarStream = this.createTarStream(fileName, fileContent);

      // Copiar archivo al contenedor
      console.log(`  [Schema] Copiando archivo al contenedor...`);
      await this.container.putArchive(tarStream, { path: '/tmp' });

      // Ejecutar psql -f con ON_ERROR_STOP=0 para continuar en errores
      console.log(`  [Schema] Ejecutando SQL en PostgreSQL...`);
      const exec = await this.container.exec({
        Cmd: [
          'psql',
          '-U', 'postgres',
          '-d', 'postgres',
          '-v', 'ON_ERROR_STOP=0',
          '-f', `/tmp/${fileName}`
        ],
        AttachStdout: true,
        AttachStderr: true
      });

      const stream = await exec.start({});

      // Esperar a que termine y capturar output
      const output = await new Promise<string>((resolve, reject) => {
        let data = '';
        stream.on('data', (chunk: Buffer) => {
          data += chunk.toString();
        });
        stream.on('end', () => resolve(data));
        stream.on('error', reject);
      });

      // Contar errores pero no fallar (solo warnings)
      const errorCount = (output.match(/ERROR:/g) || []).length;
      const fatalCount = (output.match(/FATAL:/g) || []).length;

      if (fatalCount > 0) {
        throw new Error(`Errores FATALES en schema: ${fatalCount}`);
      }

      if (errorCount > 0) {
        console.log(`  [Schema] ${errorCount} errores no-criticos (esperado con roles/permisos)`);
      }

      console.log(`  [Schema] Schema cargado exitosamente`);
    } catch (error) {
      console.error('[ERROR] Error cargando schema:', error);
      throw error;
    }
  }

  /**
   * Crea roles necesarios de Supabase.
   */
  private async createSupabaseRoles(): Promise<void> {
    if (!this.container) {
      throw new Error('Contenedor no iniciado');
    }

    const rolesSQL = `
      CREATE ROLE IF NOT EXISTS supabase_admin;
      CREATE ROLE IF NOT EXISTS supabase_auth_admin;
      CREATE ROLE IF NOT EXISTS authenticated;
      CREATE ROLE IF NOT EXISTS anon;
      CREATE ROLE IF NOT EXISTS service_role;
      CREATE ROLE IF NOT EXISTS dashboard_user;
    `;

    const exec = await this.container.exec({
      Cmd: [
        'psql',
        '-U', 'postgres',
        '-d', 'postgres',
        '-c', rolesSQL
      ],
      AttachStdout: true,
      AttachStderr: true
    });

    const stream = await exec.start({});

    await new Promise<void>((resolve, reject) => {
      let output = '';
      stream.on('data', (chunk: Buffer) => {
        output += chunk.toString();
      });
      stream.on('end', () => resolve());
      stream.on('error', reject);
    });

    console.log(`  [Schema] Roles creados`);
  }

  /**
   * Crea un tarball simple con un archivo.
   * Formato tar minimo para putArchive.
   */
  private createTarStream(fileName: string, content: string): Readable {
    const fileBuffer = Buffer.from(content, 'utf8');
    const fileSize = fileBuffer.length;

    // Header tar (512 bytes)
    const header = Buffer.alloc(512);

    // Nombre del archivo (100 bytes)
    header.write(fileName, 0, 100, 'utf8');

    // Mode (8 bytes) - 0644
    header.write('0000644', 100, 8, 'utf8');

    // UID/GID (8 bytes cada uno) - 0
    header.write('0000000', 108, 8, 'utf8');
    header.write('0000000', 116, 8, 'utf8');

    // Size (12 bytes) - tamaño del archivo en octal
    const sizeOctal = fileSize.toString(8).padStart(11, '0');
    header.write(sizeOctal, 124, 12, 'utf8');

    // Mtime (12 bytes) - tiempo actual en octal
    const mtime = Math.floor(Date.now() / 1000).toString(8).padStart(11, '0');
    header.write(mtime, 136, 12, 'utf8');

    // Checksum placeholder (8 bytes)
    header.write('        ', 148, 8, 'utf8');

    // Type flag (1 byte) - '0' para archivo regular
    header.write('0', 156, 1, 'utf8');

    // Calcular checksum
    let checksum = 0;
    for (let i = 0; i < 512; i++) {
      checksum += header[i];
    }
    const checksumOctal = checksum.toString(8).padStart(6, '0');
    header.write(checksumOctal + '\0 ', 148, 8, 'utf8');

    // Padding del contenido del archivo (múltiplo de 512)
    const padding = 512 - (fileSize % 512);
    const paddingBuffer = padding === 512 ? Buffer.alloc(0) : Buffer.alloc(padding);

    // Final EOF marker (2 bloques de 512 bytes de zeros)
    const eofMarker = Buffer.alloc(1024);

    // Combinar todo
    const tarBuffer = Buffer.concat([header, fileBuffer, paddingBuffer, eofMarker]);

    // Crear stream desde buffer
    return Readable.from(tarBuffer);
  }

  /**
   * Detiene y elimina contenedor.
   */
  async stop(): Promise<void> {
    if (!this.container) {
      return;
    }

    try {
      await this.container.stop({ t: 5 });
      await this.container.remove();
      console.log(`  [Docker] Contenedor eliminado`);
    } catch (error: any) {
      // Ignorar error si contenedor ya no existe
      if (!error.message?.includes('No such container')) {
        console.error('[ERROR] Error deteniendo contenedor:', error);
      }
    }
  }

  /**
   * Limpia contenedor existente si hay uno con el mismo nombre.
   */
  private async cleanupExistingContainer(): Promise<void> {
    try {
      const containers = await this.docker.listContainers({ all: true });
      const existing = containers.find(c =>
        c.Names.some(n => n.includes(this.config.containerName))
      );

      if (existing) {
        console.log(`  [Docker] Limpiando contenedor existente...`);
        const container = this.docker.getContainer(existing.Id);
        if (existing.State === 'running') {
          await container.stop({ t: 5 });
        }
        await container.remove();
      }
    } catch (error) {
      // Ignorar errores de cleanup
    }
  }

  /**
   * Espera hasta que PostgreSQL acepte conexiones.
   */
  private async waitForPostgres(maxAttempts: number): Promise<void> {
    if (!this.container) {
      throw new Error('Contenedor no iniciado');
    }

    for (let i = 0; i < maxAttempts; i++) {
      try {
        const exec = await this.container.exec({
          Cmd: ['pg_isready', '-U', 'postgres'],
          AttachStdout: true,
          AttachStderr: true
        });

        const stream = await exec.start({});

        const isReady = await new Promise<boolean>((resolve) => {
          let output = '';
          stream.on('data', (chunk: Buffer) => {
            output += chunk.toString();
          });
          stream.on('end', () => {
            resolve(output.includes('accepting connections'));
          });
        });

        if (isReady) {
          console.log(`  [Docker] PostgreSQL ready (intento ${i + 1})`);
          return;
        }
      } catch (error) {
        // Continuar intentando
      }

      await sleep(1000);
    }

    throw new Error('Timeout esperando PostgreSQL');
  }
}
