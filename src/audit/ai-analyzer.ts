import Anthropic from '@anthropic-ai/sdk';
import { AuditResult, SecurityFinding } from './db-auditor.js';

export interface AIAnalysis {
  summary: string;
  businessContext: string;
  prioritizedFindings: Array<{
    findingId: number;
    businessImpact: string;
    realWorldScenario: string;
    remediation: {
      immediate: string[];
      shortTerm: string[];
      longTerm: string[];
    };
    estimatedEffort: string;
  }>;
  overallRisk: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  recommendations: string[];
}

export class AiAnalyzer {
  private client: Anthropic;
  private model: string;

  constructor(apiKey: string, model: string = 'claude-sonnet-4-5-20250929') {
    this.client = new Anthropic({ apiKey });
    this.model = model;
  }

  /**
   * Analiza hallazgos con Claude.
   */
  async analyze(auditResult: AuditResult): Promise<AIAnalysis> {
    const prompt = this.buildPrompt(auditResult);

    try {
      const message = await this.client.messages.create({
        model: this.model,
        max_tokens: 16384,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      });

      const responseText = message.content[0].type === 'text'
        ? message.content[0].text
        : '';

      return this.parseResponse(responseText);
    } catch (error) {
      console.error('Error llamando Claude API:', error);
      throw error;
    }
  }

  /**
   * Construye prompt para Claude.
   */
  private buildPrompt(auditResult: AuditResult): string {
    // Filtrar solo hallazgos con resultados
    const findingsWithResults = auditResult.findings.filter(f => f.count > 0);

    return `Eres un experto en seguridad de bases de datos PostgreSQL multi-tenant.

Se realiz� auditor�a de seguridad en esquema PostgreSQL/Supabase con los siguientes hallazgos:

RESUMEN:
- Total hallazgos: ${auditResult.totalFindings}
- Cr�ticos: ${auditResult.criticalCount}
- Altos: ${auditResult.highCount}
- Medios: ${auditResult.mediumCount}
- Bajos: ${auditResult.lowCount}

HALLAZGOS DETALLADOS:
${findingsWithResults
  .map(f => `
### ${f.queryName} [${f.severity}]
Descripci�n: ${f.description}
Cantidad: ${f.count} instancias
Ejemplos:
${JSON.stringify(f.results.slice(0, 3), null, 2)}
`)
  .join('\n')}

CONTEXTO:
- Aplicaci�n: SaaS multi-tenant (B2B)
- Datos sensibles: PII de usuarios, transacciones financieras, datos de empresas
- Regulaciones: Preparando auditor�a SOC 2
- Usuarios: ~1000 empresas, ~50000 usuarios finales

TAREA:
Analiza estos hallazgos y proporciona:

1. **Resumen ejecutivo** (3-4 oraciones)
2. **Contexto de negocio** (�Por qu� esto importa para un SaaS?)
3. **An�lisis detallado de cada hallazgo**:
   - Impacto real en el negocio
   - Escenario de ataque concreto
   - Pasos de remediaci�n:
     * Inmediatos (hoy)
     * Corto plazo (esta semana)
     * Largo plazo (este mes)
   - Esfuerzo estimado (horas)
4. **Riesgo general** (CRITICAL/HIGH/MEDIUM/LOW)
5. **Recomendaciones priorizadas** (top 5)

FORMATO DE RESPUESTA:
Responde en formato JSON estructurado con la siguiente forma:

{
  "summary": "...",
  "businessContext": "...",
  "prioritizedFindings": [
    {
      "findingId": 1,
      "businessImpact": "...",
      "realWorldScenario": "...",
      "remediation": {
        "immediate": ["paso 1", "paso 2"],
        "shortTerm": ["paso 1"],
        "longTerm": ["paso 1"]
      },
      "estimatedEffort": "X horas"
    }
  ],
  "overallRisk": "CRITICAL|HIGH|MEDIUM|LOW",
  "recommendations": ["rec 1", "rec 2", "rec 3", "rec 4", "rec 5"]
}

Solo responde con JSON v�lido, sin markdown ni texto adicional.`;
  }

  /**
   * Parsea respuesta de Claude a estructura AIAnalysis.
   */
  private parseResponse(response: string): AIAnalysis {
    try {
      // Limpiar markdown si lo hay
      let cleaned = response.trim();
      if (cleaned.startsWith('```json')) {
        cleaned = cleaned.substring(7);
      }
      if (cleaned.startsWith('```')) {
        cleaned = cleaned.substring(3);
      }
      if (cleaned.endsWith('```')) {
        cleaned = cleaned.substring(0, cleaned.length - 3);
      }

      const parsed = JSON.parse(cleaned.trim());

      // Validar estructura
      if (!parsed.summary || !parsed.businessContext || !parsed.overallRisk) {
        throw new Error('Respuesta de IA incompleta');
      }

      return parsed as AIAnalysis;
    } catch (error) {
      console.error('Error parseando respuesta de IA:', error);
      console.error('Respuesta raw:', response);
      throw new Error('No se pudo parsear respuesta de Claude');
    }
  }
}
