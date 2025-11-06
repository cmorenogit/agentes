import pkg from 'pg';
const { Pool } = pkg;
import * as fs from 'fs';
import { ConnectionInfo } from './docker-manager.js';

export interface SecurityFinding {
  queryId: number;
  queryName: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  description: string;
  results: any[];
  count: number;
}

export interface AuditResult {
  timestamp: Date;
  schemaFile: string;
  findings: SecurityFinding[];
  totalFindings: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
}

export class DbAuditor {
  private pool: pkg.Pool;
  private queriesPath: string;

  constructor(connInfo: ConnectionInfo, queriesPath: string) {
    this.pool = new Pool({
      host: connInfo.host,
      port: connInfo.port,
      user: connInfo.user,
      password: connInfo.password,
      database: connInfo.database
    });
    this.queriesPath = queriesPath;
  }

  /**
   * Ejecuta suite completa de 14 queries.
   */
  async runSecurityQueries(): Promise<AuditResult> {
    // Leer y parsear archivo de queries
    const queries = this.parseQueriesFile(
      fs.readFileSync(this.queriesPath, 'utf8')
    );

    const findings: SecurityFinding[] = [];

    // Ejecutar cada query
    for (const query of queries) {
      try {
        const finding = await this.executeQuery(query.id, query.sql);
        findings.push(finding);

        if (finding.count > 0) {
          console.log(`  ³ Query ${query.id}: ${finding.count} hallazgos [${finding.severity}]`);
        }
      } catch (error) {
        console.error(`  ³ Error en Query ${query.id}:`, error);
        // Continuar con las demás queries
      }
    }

    // Calcular estadísticas
    const criticalCount = findings.filter(f => f.severity === 'CRITICAL' && f.count > 0).length;
    const highCount = findings.filter(f => f.severity === 'HIGH' && f.count > 0).length;
    const mediumCount = findings.filter(f => f.severity === 'MEDIUM' && f.count > 0).length;
    const lowCount = findings.filter(f => f.severity === 'LOW' && f.count > 0).length;

    await this.pool.end();

    return {
      timestamp: new Date(),
      schemaFile: 'sql/full_schema.sql',
      findings,
      totalFindings: findings.filter(f => f.count > 0).length,
      criticalCount,
      highCount,
      mediumCount,
      lowCount
    };
  }

  /**
   * Ejecuta query individual y mapea resultados.
   */
  private async executeQuery(queryId: number, sql: string): Promise<SecurityFinding> {
    const metadata = this.getQueryMetadata(queryId);
    const result = await this.pool.query(sql);

    return {
      queryId,
      queryName: metadata.name,
      severity: metadata.severity,
      description: metadata.description,
      results: result.rows,
      count: result.rows.length
    };
  }

  /**
   * Mapea número de query a metadatos.
   */
  private getQueryMetadata(queryId: number): {
    name: string;
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
    description: string;
  } {
    const metadata: Record<number, any> = {
      1: {
        name: 'Tablas sin RLS forzado',
        severity: 'CRITICAL',
        description: 'Tablas sin Row Level Security habilitado o forzado'
      },
      2: {
        name: 'Policies triviales (USING true)',
        severity: 'HIGH',
        description: 'Políticas RLS que no filtran por tenant_id'
      },
      3: {
        name: 'Funciones SECURITY DEFINER sin search_path',
        severity: 'HIGH',
        description: 'Funciones privilegiadas vulnerables a trojan attacks'
      },
      4: {
        name: 'Tablas tenant_id sin FK',
        severity: 'HIGH',
        description: 'Tablas multi-tenant sin integridad referencial'
      },
      5: {
        name: 'idempotency_key sin UNIQUE',
        severity: 'MEDIUM',
        description: 'Permite transacciones duplicadas'
      },
      6: {
        name: 'Policies storage.objects',
        severity: 'HIGH',
        description: 'Control de acceso a archivos en storage'
      },
      7: {
        name: 'GRANTS a anon/public',
        severity: 'CRITICAL',
        description: 'Permisos amplios a usuarios no autenticados'
      },
      8: {
        name: 'Extensiones privilegiadas',
        severity: 'MEDIUM',
        description: 'Extensiones con capacidades peligrosas'
      },
      9: {
        name: 'pgaudit ausente',
        severity: 'LOW',
        description: 'Sin logging de auditoría configurado'
      },
      10: {
        name: 'Funciones con DEFAULT current_user',
        severity: 'LOW',
        description: 'Uso potencialmente inseguro de current_user'
      },
      11: {
        name: 'Triggers con código dinámico',
        severity: 'MEDIUM',
        description: 'Triggers con EXECUTE o SQL dinámico'
      },
      12: {
        name: 'Default privileges amplios',
        severity: 'HIGH',
        description: 'Permisos por defecto inseguros en schemas'
      },
      13: {
        name: 'Secuencias sin restricciones',
        severity: 'LOW',
        description: 'Secuencias sin control de acceso explícito'
      },
      14: {
        name: 'Versión PostgreSQL vulnerable',
        severity: 'CRITICAL',
        description: 'PostgreSQL < 15.3 vulnerable a CVE-2023-2454'
      }
    };

    return metadata[queryId];
  }

  /**
   * Parsea archivo mini_suite_v2.sql.
   * Separa queries individuales.
   */
  private parseQueriesFile(content: string): Array<{ id: number; sql: string }> {
    const queries: Array<{ id: number; sql: string }> = [];
    const lines = content.split('\n');

    let currentQuery = '';
    let currentId = 0;

    for (const line of lines) {
      // Detectar inicio de nueva query
      if (line.match(/^-- Query (\d+):/)) {
        // Guardar query anterior si existe
        if (currentQuery && currentId > 0) {
          queries.push({
            id: currentId,
            sql: currentQuery.trim()
          });
        }

        // Iniciar nueva query
        const match = line.match(/^-- Query (\d+):/);
        currentId = match ? parseInt(match[1]) : 0;
        currentQuery = '';
      }
      // Acumular líneas de SQL (ignorar comentarios y líneas vacías de separación)
      else if (!line.startsWith('--') && !line.match(/^={3,}/) && !line.match(/^-{3,}/)) {
        if (line.trim()) {
          currentQuery += line + '\n';
        }
      }
    }

    // Guardar última query
    if (currentQuery && currentId > 0) {
      queries.push({
        id: currentId,
        sql: currentQuery.trim()
      });
    }

    return queries;
  }
}
