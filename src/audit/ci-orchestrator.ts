import * as path from 'path';
import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { DockerManager } from './docker-manager.js';
import { DbAuditor } from './db-auditor.js';
import { AiAnalyzer } from './ai-analyzer.js';
import { AuditCommenter } from '../github/audit-commenter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface CIConfig {
  githubToken: string;
  anthropicApiKey: string;
  repository: string;  // "owner/repo"
  prNumber: number;
  schemaPath: string;
  runUrl?: string;
}

export class CIOrchestrator {
  private config: CIConfig;

  constructor(config: CIConfig) {
    this.config = config;
  }

  async run(): Promise<void> {
    console.log('🚀 Iniciando auditoría de seguridad DB en CI/CD...\n');
    console.log(`📋 PR #${this.config.prNumber}`);
    console.log(`📂 Schema: ${this.config.schemaPath}\n`);

    const startTime = Date.now();
    const dockerManager = new DockerManager({
      image: 'postgres:15',
      containerName: `postgres-audit-pr-${this.config.prNumber}`,
      port: 5432,
      password: 'postgres'
    });

    let hasCriticalFindings = false;

    try {
      // 1. Iniciar PostgreSQL
      console.log('📦 [1/6] Levantando contenedor PostgreSQL...');
      const connInfo = await dockerManager.start();
      console.log('✅ PostgreSQL listo en puerto 5432\n');

      // 2. Cargar schema
      console.log('📂 [2/6] Cargando schema en base de datos...');
      await dockerManager.loadSchema(this.config.schemaPath);
      console.log('✅ Schema cargado exitosamente\n');

      // 3. Ejecutar queries de seguridad
      console.log('🔍 [3/6] Ejecutando 14 queries de seguridad...');
      const queriesPath = path.resolve(__dirname, 'queries/mini_suite_v2.sql');
      const auditor = new DbAuditor(connInfo, queriesPath);
      const auditResult = await auditor.runSecurityQueries();
      console.log(`✅ ${auditResult.totalFindings} hallazgos detectados\n`);

      // 4. Destruir contenedor (liberar recursos cuanto antes)
      console.log('🗑️  [4/6] Destruyendo contenedor...');
      await dockerManager.stop();
      console.log('✅ Contenedor destruido\n');

      // 5. Analizar con IA
      console.log('🤖 [5/6] Analizando hallazgos con Claude Sonnet 4.5...');
      const aiAnalyzer = new AiAnalyzer(this.config.anthropicApiKey);
      const aiAnalysis = await aiAnalyzer.analyze(auditResult);
      console.log('✅ Análisis de IA completado\n');

      // 6. Comentar en PR
      console.log('💬 [6/6] Posteando resultados en PR...');
      const [owner, repo] = this.config.repository.split('/');
      const commenter = new AuditCommenter(
        this.config.githubToken,
        owner,
        repo
      );

      await commenter.postComment(
        this.config.prNumber,
        auditResult,
        aiAnalysis,
        this.config.runUrl
      );
      console.log('✅ Comentario posteado exitosamente\n');

      // 7. Determinar si hay hallazgos críticos
      hasCriticalFindings = auditResult.criticalCount > 0;

      if (hasCriticalFindings) {
        console.log('🚨 HALLAZGOS CRÍTICOS DETECTADOS');
        // Crear flag file para que el workflow pueda fallar
        await fs.writeFile('audit-critical-found.flag', 'true');
      }

      // Resumen final
      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log('\n═══════════════════════════════════════════════════════');
      console.log('✅ AUDITORÍA DE SEGURIDAD COMPLETADA');
      console.log('═══════════════════════════════════════════════════════');
      console.log(`⏱️  Duración total: ${duration}s`);
      console.log(`📊 Hallazgos totales: ${auditResult.totalFindings}`);
      console.log(`   🔴 Críticos: ${auditResult.criticalCount}`);
      console.log(`   🟠 Altos: ${auditResult.highCount}`);
      console.log(`   🟡 Medios: ${auditResult.mediumCount}`);
      console.log(`   🟢 Bajos: ${auditResult.lowCount}`);
      console.log(`🎯 Nivel de riesgo: ${aiAnalysis.overallRisk}`);
      console.log(`💬 Comentario posteado en PR #${this.config.prNumber}`);
      console.log('═══════════════════════════════════════════════════════\n');

      if (hasCriticalFindings) {
        console.log('⚠️  NOTA: El workflow fallará debido a hallazgos críticos.');
        console.log('📋 Revisa el comentario del PR para ver los detalles y pasos de remediación.\n');
      }

    } catch (error) {
      console.error('\n❌ ERROR EN AUDITORÍA:', error);

      // Cleanup en caso de error
      try {
        console.log('🧹 Limpiando recursos...');
        await dockerManager.stop();
        console.log('✅ Cleanup completado');
      } catch (cleanupError) {
        console.error('❌ Error durante cleanup:', cleanupError);
      }

      throw error;
    }
  }
}

// Entry point para CI/CD
async function main() {
  console.log('🔧 Configurando auditoría desde variables de entorno...\n');

  // Validar variables de entorno
  const requiredEnvVars = [
    'GITHUB_TOKEN',
    'ANTHROPIC_API_KEY',
    'GITHUB_REPOSITORY',
    'PR_NUMBER'
  ];

  const missingVars = requiredEnvVars.filter(v => !process.env[v]);
  if (missingVars.length > 0) {
    console.error('❌ Variables de entorno faltantes:', missingVars.join(', '));
    console.error('\nAsegúrate de configurar estas variables en el workflow de GitHub Actions.\n');
    process.exit(1);
  }

  const config: CIConfig = {
    githubToken: process.env.GITHUB_TOKEN!,
    anthropicApiKey: process.env.ANTHROPIC_API_KEY!,
    repository: process.env.GITHUB_REPOSITORY!,
    prNumber: parseInt(process.env.PR_NUMBER!),
    schemaPath: path.resolve(__dirname, '../../sql/full_schema.sql'),
    runUrl: process.env.GITHUB_RUN_URL
  };

  console.log(`✅ Configuración cargada:`);
  console.log(`   Repository: ${config.repository}`);
  console.log(`   PR Number: ${config.prNumber}`);
  console.log(`   Schema: ${config.schemaPath}`);
  if (config.runUrl) {
    console.log(`   Run URL: ${config.runUrl}`);
  }
  console.log('');

  const orchestrator = new CIOrchestrator(config);
  await orchestrator.run();
}

// Ejecutar
main().catch((error) => {
  console.error('\n❌ AUDITORÍA FALLÓ:', error);
  console.error('\nStack trace:', error.stack);
  process.exit(1);
});
