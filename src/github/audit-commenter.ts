import { Octokit } from '@octokit/rest';
import { AuditResult, SecurityFinding } from '../audit/db-auditor.js';
import { AIAnalysis } from '../audit/ai-analyzer.js';

export class AuditCommenter {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor(githubToken: string, owner: string, repo: string) {
    this.octokit = new Octokit({ auth: githubToken });
    this.owner = owner;
    this.repo = repo;
  }

  formatAuditComment(
    auditResult: AuditResult,
    aiAnalysis: AIAnalysis,
    runUrl?: string
  ): string {
    let comment = `## 🔒 Database Security Audit Report\n\n`;

    comment += `**📅 Timestamp:** ${auditResult.timestamp.toISOString()}\n`;
    comment += `**📂 Schema:** \`${auditResult.schemaFile}\`\n`;
    comment += `**🤖 Analyzed by:** Claude Sonnet 4.5\n\n`;

    comment += `---\n\n`;

    // Executive Summary
    comment += `### 📊 Executive Summary\n\n`;
    comment += `| Metric | Value |\n`;
    comment += `|--------|-------|\n`;
    comment += `| Total Findings | ${auditResult.totalFindings} |\n`;
    comment += `| 🔴 Critical | ${auditResult.criticalCount} |\n`;
    comment += `| 🟠 High | ${auditResult.highCount} |\n`;
    comment += `| 🟡 Medium | ${auditResult.mediumCount} |\n`;
    comment += `| 🟢 Low | ${auditResult.lowCount} |\n`;
    comment += `| **Risk Level** | **${this.getRiskEmoji(aiAnalysis.overallRisk)} ${aiAnalysis.overallRisk}** |\n\n`;

    // Severity Distribution Chart
    comment += `### 📈 Severity Distribution\n\n`;
    comment += '```\n';
    comment += this.generateSeverityChart(auditResult);
    comment += '```\n\n';

    // AI Business Context
    comment += `### 🎯 Business Context\n\n`;
    comment += `${aiAnalysis.businessContext}\n\n`;

    comment += `### 💡 Summary\n\n`;
    comment += `${aiAnalysis.summary}\n\n`;

    // Status Badge
    if (auditResult.criticalCount > 0) {
      comment += `> **🚨 CRITICAL** - ${auditResult.criticalCount} critical security issue(s) detected. **Immediate action required** before merging.\n\n`;
    } else if (auditResult.highCount > 0) {
      comment += `> **⚠️ WARNING** - ${auditResult.highCount} high severity issue(s) found. Review recommended before merging.\n\n`;
    } else if (auditResult.totalFindings > 0) {
      comment += `> **✅ ACCEPTABLE** - Only medium/low severity issues found. Review and address when possible.\n\n`;
    } else {
      comment += `> **🎉 EXCELLENT** - No security issues detected!\n\n`;
    }

    if (runUrl) {
      comment += `[📋 View detailed logs in GitHub Actions](${runUrl})\n\n`;
    }

    comment += `---\n\n`;

    // Critical Findings (expandido)
    if (auditResult.criticalCount > 0) {
      comment += `### 🔴 Critical Findings (${auditResult.criticalCount})\n\n`;

      const criticalFindings = auditResult.findings.filter(f =>
        f.severity === 'CRITICAL' && f.count > 0
      );

      criticalFindings.forEach((finding, idx) => {
        const prioritized = aiAnalysis.prioritizedFindings.find(
          pf => pf.findingId === finding.queryId
        );

        comment += `#### ${idx + 1}. ${finding.queryName}\n\n`;
        comment += `**Severity:** 🔴 CRITICAL\n\n`;
        comment += `**Instances Found:** ${finding.count}\n\n`;
        comment += `**Description:** ${finding.description}\n\n`;

        if (prioritized) {
          comment += `**Business Impact:**\n${prioritized.businessImpact}\n\n`;

          comment += `**Attack Scenario:**\n${prioritized.realWorldScenario}\n\n`;

          comment += `**Remediation Steps:**\n\n`;
          if (prioritized.remediation.immediate.length > 0) {
            comment += `**🔴 Immediate (do now):**\n`;
            prioritized.remediation.immediate.forEach(step => {
              comment += `- ${step}\n`;
            });
            comment += `\n`;
          }
          if (prioritized.remediation.shortTerm.length > 0) {
            comment += `**🟡 Short-term (this week):**\n`;
            prioritized.remediation.shortTerm.forEach(step => {
              comment += `- ${step}\n`;
            });
            comment += `\n`;
          }
          if (prioritized.remediation.longTerm.length > 0) {
            comment += `**🟢 Long-term (this month):**\n`;
            prioritized.remediation.longTerm.forEach(step => {
              comment += `- ${step}\n`;
            });
            comment += `\n`;
          }
          comment += `**Estimated Effort:** ${prioritized.estimatedEffort}\n\n`;
        }

        // Sample findings (primeros 3)
        if (finding.results.length > 0) {
          comment += `<details>\n<summary>📎 Show affected objects (${Math.min(finding.results.length, 3)} of ${finding.results.length})</summary>\n\n`;
          comment += '```json\n';
          comment += JSON.stringify(finding.results.slice(0, 3), null, 2);
          comment += '\n```\n\n';
          comment += '</details>\n\n';
        }
      });
    }

    // High Findings (colapsado)
    const highFindings = auditResult.findings.filter(f =>
      f.severity === 'HIGH' && f.count > 0
    );
    if (highFindings.length > 0) {
      const totalHighCount = highFindings.reduce((sum, f) => sum + f.count, 0);

      comment += `<details>\n<summary>🟠 High Severity Findings (${highFindings.length} types, ${totalHighCount} instances)</summary>\n\n`;

      highFindings.forEach((finding, idx) => {
        const prioritized = aiAnalysis.prioritizedFindings.find(
          pf => pf.findingId === finding.queryId
        );

        comment += `#### ${idx + 1}. ${finding.queryName}\n\n`;
        comment += `**Instances:** ${finding.count}\n\n`;
        comment += `**Description:** ${finding.description}\n\n`;

        if (prioritized) {
          comment += `**Impact:** ${prioritized.businessImpact}\n\n`;

          if (prioritized.remediation.immediate.length > 0) {
            comment += `**Recommended action:** ${prioritized.remediation.immediate[0]}\n\n`;
          }
        }

        // Sample findings
        if (finding.results.length > 0 && finding.results.length <= 3) {
          comment += '```json\n';
          comment += JSON.stringify(finding.results, null, 2);
          comment += '\n```\n\n';
        }
      });

      comment += '</details>\n\n';
    }

    // Medium Findings (colapsado)
    const mediumFindings = auditResult.findings.filter(f =>
      f.severity === 'MEDIUM' && f.count > 0
    );
    if (mediumFindings.length > 0) {
      const totalMediumCount = mediumFindings.reduce((sum, f) => sum + f.count, 0);

      comment += `<details>\n<summary>🟡 Medium Severity Findings (${mediumFindings.length} types, ${totalMediumCount} instances)</summary>\n\n`;

      mediumFindings.forEach((finding, idx) => {
        comment += `#### ${idx + 1}. ${finding.queryName}\n\n`;
        comment += `**Instances:** ${finding.count}\n\n`;
        comment += `**Description:** ${finding.description}\n\n`;
      });

      comment += '</details>\n\n';
    }

    // Low Findings (colapsado)
    const lowFindings = auditResult.findings.filter(f =>
      f.severity === 'LOW' && f.count > 0
    );
    if (lowFindings.length > 0) {
      const totalLowCount = lowFindings.reduce((sum, f) => sum + f.count, 0);

      comment += `<details>\n<summary>🟢 Low Severity Findings (${lowFindings.length} types, ${totalLowCount} instances)</summary>\n\n`;

      lowFindings.forEach((finding, idx) => {
        comment += `#### ${idx + 1}. ${finding.queryName}\n\n`;
        comment += `**Instances:** ${finding.count}\n\n`;
        comment += `**Description:** ${finding.description}\n\n`;
      });

      comment += '</details>\n\n';
    }

    // AI Recommendations
    if (aiAnalysis.recommendations.length > 0) {
      comment += `### 📋 Top Recommendations\n\n`;
      aiAnalysis.recommendations.slice(0, 5).forEach((rec, idx) => {
        comment += `${idx + 1}. ${rec}\n`;
      });
      comment += `\n`;
    }

    comment += `---\n\n`;
    comment += `*Powered by Claude Sonnet 4.5 | [Database Security Audit System](https://github.com/${this.owner}/${this.repo})*`;

    return comment;
  }

  private generateSeverityChart(auditResult: AuditResult): string {
    const total = auditResult.totalFindings;
    if (total === 0) return 'No findings detected ✅';

    const criticalPct = (auditResult.criticalCount / total) * 100;
    const highPct = (auditResult.highCount / total) * 100;
    const mediumPct = (auditResult.mediumCount / total) * 100;
    const lowPct = (auditResult.lowCount / total) * 100;

    const barLength = 40;
    const criticalBar = '█'.repeat(Math.round((criticalPct / 100) * barLength));
    const highBar = '█'.repeat(Math.round((highPct / 100) * barLength));
    const mediumBar = '█'.repeat(Math.round((mediumPct / 100) * barLength));
    const lowBar = '█'.repeat(Math.round((lowPct / 100) * barLength));

    return `CRITICAL  ${criticalBar.padEnd(barLength, ' ')}  ${criticalPct.toFixed(0)}%  (${auditResult.criticalCount})
HIGH      ${highBar.padEnd(barLength, ' ')}  ${highPct.toFixed(0)}%  (${auditResult.highCount})
MEDIUM    ${mediumBar.padEnd(barLength, ' ')}  ${mediumPct.toFixed(0)}%  (${auditResult.mediumCount})
LOW       ${lowBar.padEnd(barLength, ' ')}  ${lowPct.toFixed(0)}%  (${auditResult.lowCount})`;
  }

  private getRiskEmoji(risk: string): string {
    const emojiMap: Record<string, string> = {
      'CRITICAL': '🔴',
      'HIGH': '🟠',
      'MEDIUM': '🟡',
      'LOW': '🟢'
    };
    return emojiMap[risk] || '⚪';
  }

  async postComment(
    prNumber: number,
    auditResult: AuditResult,
    aiAnalysis: AIAnalysis,
    runUrl?: string
  ): Promise<void> {
    const comment = this.formatAuditComment(auditResult, aiAnalysis, runUrl);

    try {
      await this.octokit.issues.createComment({
        owner: this.owner,
        repo: this.repo,
        issue_number: prNumber,
        body: comment,
      });

      console.log(`✅ Audit comment posted to PR #${prNumber}`);
    } catch (error) {
      console.error('❌ Error posting comment:', error);
      throw error;
    }
  }
}
