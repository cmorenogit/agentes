import * as path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import { DockerManager } from './docker-manager.js';
import { DbAuditor } from './db-auditor.js';
import { AiAnalyzer } from './ai-analyzer.js';
import { ReportGenerator } from './report-generator.js';

// Soporte para __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

async function main() {
  console.log('[INICIO] Iniciando auditoria de seguridad de base de datos...\n');

  const startTime = Date.now();
  const dockerManager = new DockerManager({
    image: process.env.POSTGRES_IMAGE || 'postgres:15',
    containerName: 'postgres-audit-temp',
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    password: process.env.POSTGRES_PASSWORD || 'postgres'
  });

  try {
    // Paso 1: Iniciar contenedor PostgreSQL
    console.log('[Docker] Iniciando contenedor PostgreSQL...');
    const connInfo = await dockerManager.start();
    console.log('[OK] PostgreSQL listo\n');

    // Paso 2: Cargar schema
    console.log('[Schema] Cargando schema sql/full_schema.sql...');
    const schemaPath = path.resolve(__dirname, '../../sql/full_schema.sql');
    await dockerManager.loadSchema(schemaPath);
    console.log('[OK] Schema cargado\n');

    // Paso 3: Ejecutar queries de seguridad
    console.log('[Audit] Ejecutando 14 queries de seguridad...');
    const queriesPath = path.resolve(__dirname, 'queries/mini_suite_v2.sql');
    const auditor = new DbAuditor(connInfo, queriesPath);
    const auditResult = await auditor.runSecurityQueries();
    console.log('[OK] Queries ejecutadas\n');

    // Paso 4: Destruir contenedor
    console.log('[Cleanup] Destruyendo contenedor...');
    await dockerManager.stop();
    console.log('[OK] Contenedor eliminado\n');

    // Paso 5: Analisis con IA
    console.log('[IA] Analizando hallazgos con Claude IA...');
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY no configurado en .env');
    }
    const aiAnalyzer = new AiAnalyzer(apiKey);
    const aiAnalysis = await aiAnalyzer.analyze(auditResult);
    console.log('[OK] Analisis IA completado\n');

    // Paso 6: Generar reporte
    console.log('[Report] Generando reporte markdown...');
    const reportGenerator = new ReportGenerator();
    await reportGenerator.generate(auditResult, aiAnalysis, {
      outputPath: 'audit-report.md',
      includeRawData: true,
      includeRemediationCode: true
    });
    console.log('[OK] Reporte generado: audit-report.md\n');

    // Resumen final
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log('===================================================');
    console.log('[OK] AUDITORIA COMPLETADA');
    console.log('===================================================');
    console.log(`[Tiempo] Duracion: ${duration}s`);
    console.log(`[Stats] Hallazgos:`);
    console.log(`   [CRITICO] Criticos: ${auditResult.criticalCount}`);
    console.log(`   [ALTO] Altos: ${auditResult.highCount}`);
    console.log(`   [MEDIO] Medios: ${auditResult.mediumCount}`);
    console.log(`   [BAJO] Bajos: ${auditResult.lowCount}`);
    console.log(`[Output] Reporte: audit-report.md`);
    console.log(`[Risk] Riesgo general: ${aiAnalysis.overallRisk}`);
    console.log('===================================================\n');

    process.exit(0);

  } catch (error) {
    console.error('[ERROR] Error en auditoria:', error);

    // Cleanup en caso de error
    try {
      await dockerManager.stop();
    } catch (cleanupError) {
      console.error('[ERROR] Error en cleanup:', cleanupError);
    }

    process.exit(1);
  }
}

// Ejecutar
main();
