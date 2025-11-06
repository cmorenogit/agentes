import * as fs from 'fs';
import { AuditResult, SecurityFinding } from './db-auditor.js';
import { AIAnalysis } from './ai-analyzer.js';

export interface ReportOptions {
  outputPath: string;
  includeRawData: boolean;
  includeRemediationCode: boolean;
}

export class ReportGenerator {
  /**
   * Genera reporte Markdown completo.
   */
  async generate(
    auditResult: AuditResult,
    aiAnalysis: AIAnalysis,
    options: ReportOptions
  ): Promise<void> {
    const sections: string[] = [];

    // Header
    sections.push(this.generateHeader(auditResult));

    // Resumen ejecutivo
    sections.push(this.generateExecutiveSummary(auditResult, aiAnalysis));

    // Hallazgos críticos
    const criticalFindings = auditResult.findings.filter(
      f => f.severity === 'CRITICAL' && f.count > 0
    );
    if (criticalFindings.length > 0) {
      sections.push(this.generateFindingsSection('CRITICAL', criticalFindings, aiAnalysis));
    }

    // Hallazgos altos
    const highFindings = auditResult.findings.filter(
      f => f.severity === 'HIGH' && f.count > 0
    );
    if (highFindings.length > 0) {
      sections.push(this.generateFindingsSection('HIGH', highFindings, aiAnalysis));
    }

    // Hallazgos medios
    const mediumFindings = auditResult.findings.filter(
      f => f.severity === 'MEDIUM' && f.count > 0
    );
    if (mediumFindings.length > 0) {
      sections.push(this.generateFindingsSection('MEDIUM', mediumFindings, aiAnalysis));
    }

    // Hallazgos bajos
    const lowFindings = auditResult.findings.filter(
      f => f.severity === 'LOW' && f.count > 0
    );
    if (lowFindings.length > 0) {
      sections.push(this.generateFindingsSection('LOW', lowFindings, aiAnalysis));
    }

    // Plan de remediación
    sections.push(this.generateRemediationPlan(aiAnalysis));

    // Datos raw (opcional)
    if (options.includeRawData) {
      sections.push(this.generateRawDataSection(auditResult));
    }

    // Footer
    sections.push(this.generateFooter());

    // Escribir archivo
    const markdown = sections.join('\n\n---\n\n');
    fs.writeFileSync(options.outputPath, markdown, 'utf8');
  }

  private generateHeader(auditResult: AuditResult): string {
    return `# 🔒 Auditoría de Seguridad - Base de Datos PostgreSQL

**Fecha:** ${auditResult.timestamp.toISOString()}
**Schema:** ${auditResult.schemaFile}
**Analizado por:** Claude (Anthropic)`;
  }

  private generateExecutiveSummary(auditResult: AuditResult, aiAnalysis: AIAnalysis): string {
    const chart = this.generateSeverityChart(auditResult);

    return `## 📊 Resumen Ejecutivo

### Estadísticas

| Métrica | Valor |
|---------|-------|
| Total hallazgos | ${auditResult.totalFindings} |
| 🔴 Críticos | ${auditResult.criticalCount} |
| 🟠 Altos | ${auditResult.highCount} |
| 🟡 Medios | ${auditResult.mediumCount} |
| 🟢 Bajos | ${auditResult.lowCount} |
| **Riesgo General** | **${this.getRiskEmoji(aiAnalysis.overallRisk)} ${aiAnalysis.overallRisk}** |

### Distribución de Severidad

\`\`\`
${chart}
\`\`\`

### Análisis IA: Contexto de Negocio

${aiAnalysis.businessContext}

### Resumen

${aiAnalysis.summary}`;
  }

  private generateSeverityChart(auditResult: AuditResult): string {
    const total = auditResult.totalFindings || 1;
    const criticalPct = Math.round((auditResult.criticalCount / total) * 100);
    const highPct = Math.round((auditResult.highCount / total) * 100);
    const mediumPct = Math.round((auditResult.mediumCount / total) * 100);
    const lowPct = Math.round((auditResult.lowCount / total) * 100);

    const barLength = 40;
    const criticalBar = '█'.repeat(Math.round((criticalPct / 100) * barLength));
    const highBar = '█'.repeat(Math.round((highPct / 100) * barLength));
    const mediumBar = '█'.repeat(Math.round((mediumPct / 100) * barLength));
    const lowBar = '█'.repeat(Math.round((lowPct / 100) * barLength));

    return `CRÍTICO  ${criticalBar}  ${criticalPct}%  (${auditResult.criticalCount})
ALTO     ${highBar}  ${highPct}%  (${auditResult.highCount})
MEDIO    ${mediumBar}  ${mediumPct}%  (${auditResult.mediumCount})
BAJO     ${lowBar}  ${lowPct}%  (${auditResult.lowCount})`;
  }

  private generateFindingsSection(
    severity: string,
    findings: SecurityFinding[],
    aiAnalysis: AIAnalysis
  ): string {
    const emoji = this.getRiskEmoji(severity);
    let section = `## ${emoji} Hallazgos ${severity === 'CRITICAL' ? 'Críticos' : severity === 'HIGH' ? 'Altos' : severity === 'MEDIUM' ? 'Medios' : 'Bajos'}\n\n`;

    for (const finding of findings) {
      section += this.generateFindingDetail(finding, aiAnalysis);
      section += '\n\n';
    }

    return section;
  }

  private generateFindingDetail(finding: SecurityFinding, aiAnalysis: AIAnalysis): string {
    const aiDetail = aiAnalysis.prioritizedFindings.find(
      pf => pf.findingId === finding.queryId
    );

    let detail = `### ${finding.queryId}. ${finding.queryName}

**Severidad:** ${this.getRiskEmoji(finding.severity)} ${finding.severity}
**Instancias:** ${finding.count}

#### Descripción Técnica

${finding.description}

**Hallazgos:**
${this.formatResults(finding.results)}`;

    if (aiDetail) {
      detail += `\n\n#### Impacto de Negocio

${aiDetail.businessImpact}

**Escenario de ataque:**
${aiDetail.realWorldScenario}

#### Remediación

**Inmediato (hoy):**
${aiDetail.remediation.immediate.map(r => `- ${r}`).join('\n')}

${aiDetail.remediation.shortTerm.length > 0 ? `**Corto plazo (esta semana):**
${aiDetail.remediation.shortTerm.map(r => `- ${r}`).join('\n')}` : ''}

${aiDetail.remediation.longTerm.length > 0 ? `**Largo plazo (este mes):**
${aiDetail.remediation.longTerm.map(r => `- ${r}`).join('\n')}` : ''}

**Esfuerzo estimado:** ${aiDetail.estimatedEffort}`;
    }

    return detail;
  }

  private formatResults(results: any[]): string {
    if (results.length === 0) {
      return 'No se encontraron resultados.';
    }

    // Crear tabla Markdown
    const keys = Object.keys(results[0]);
    let table = `| ${keys.join(' | ')} |\n`;
    table += `|${keys.map(() => '---').join('|')}|\n`;

    for (const row of results.slice(0, 5)) {
      table += `| ${keys.map(k => String(row[k] || '').substring(0, 50)).join(' | ')} |\n`;
    }

    if (results.length > 5) {
      table += `\n*... y ${results.length - 5} más*`;
    }

    return table;
  }

  private generateRemediationPlan(aiAnalysis: AIAnalysis): string {
    return `## 📋 Plan de Remediación Priorizado

### Top 5 Recomendaciones

${aiAnalysis.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}`;
  }

  private generateRawDataSection(auditResult: AuditResult): string {
    return `## 📎 Anexo: Datos Raw

<details>
<summary>Ver JSON completo de hallazgos</summary>

\`\`\`json
${JSON.stringify(auditResult, null, 2)}
\`\`\`

</details>`;
  }

  private generateFooter(): string {
    return `---

**Generado por:** Claude Code (MVP Local Database Audit System)
**Versión:** 1.0.0`;
  }

  private getRiskEmoji(severity: string): string {
    switch (severity.toUpperCase()) {
      case 'CRITICAL':
        return '🔴';
      case 'HIGH':
        return '🟠';
      case 'MEDIUM':
        return '🟡';
      case 'LOW':
        return '🟢';
      default:
        return '⚪';
    }
  }
}
