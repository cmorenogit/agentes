import Anthropic from '@anthropic-ai/sdk';
import { ParsedQuestion } from '../github/comment-monitor';

export interface ResponseContext {
  question: ParsedQuestion;
  previousAnalysis: string | null;
  prNumber: number;
  userName: string;
}

export interface ResponseResult {
  answer: string;
  confidence: 'high' | 'medium' | 'low';
  needsMoreContext: boolean;
}

export class AgentResponder {
  private anthropic: Anthropic;
  private modelName: string;

  constructor(apiKey: string, modelName: string = 'claude-sonnet-4-5-20250929') {
    this.anthropic = new Anthropic({ apiKey });
    this.modelName = modelName;
  }

  /**
   * Genera una respuesta inteligente basada en el contexto
   */
  async generateResponse(context: ResponseContext): Promise<ResponseResult> {
    const { question, previousAnalysis, userName } = context;

    // Manejar comandos especiales
    if (question.command) {
      return this.handleCommand(question.command, context);
    }

    // Si no hay análisis previo, indicar que no hay contexto
    if (!previousAnalysis) {
      return {
        answer: this.formatNoContextResponse(userName),
        confidence: 'high',
        needsMoreContext: true,
      };
    }

    // Generar respuesta usando Claude
    const prompt = this.buildResponsePrompt(question, previousAnalysis, userName);

    try {
      const response = await this.anthropic.messages.create({
        model: this.modelName,
        max_tokens: 2048,
        temperature: 0.7,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      const textContent = response.content.find(block => block.type === 'text');
      if (!textContent || textContent.type !== 'text') {
        throw new Error('No se recibió respuesta de texto de Claude');
      }

      return {
        answer: this.formatResponse(textContent.text, userName),
        confidence: this.assessConfidence(response),
        needsMoreContext: false,
      };
    } catch (error) {
      console.error('Error al generar respuesta:', error);
      return {
        answer: this.formatErrorResponse(userName),
        confidence: 'low',
        needsMoreContext: true,
      };
    }
  }

  /**
   * Construye el prompt para generar la respuesta
   */
  private buildResponsePrompt(
    question: ParsedQuestion,
    previousAnalysis: string,
    userName: string
  ): string {
    return `Eres un asistente experto en bases de datos SQL y revisión de código. Un usuario ha hecho una pregunta sobre un análisis de SQL que realizaste previamente en un Pull Request.

**Contexto del análisis previo:**
${previousAnalysis}

**Pregunta del usuario (@${userName}):**
${question.question}

${question.mentionedFiles ? `**Archivos mencionados:** ${question.mentionedFiles.join(', ')}` : ''}

**Tu tarea:**
1. Responde la pregunta del usuario de manera clara y concisa
2. Haz referencia específica al análisis previo cuando sea relevante
3. Si la pregunta es sobre una recomendación específica, explica el razonamiento técnico
4. Si el usuario cuestiona un hallazgo, considera sus puntos y ajusta tu respuesta si es necesario
5. Usa un tono profesional pero amigable
6. Formatea tu respuesta en Markdown
7. Si la pregunta no está clara, solicita aclaraciones específicas

**Respuesta:**`;
  }

  /**
   * Maneja comandos especiales
   */
  private async handleCommand(
    command: string,
    context: ResponseContext
  ): Promise<ResponseResult> {
    switch (command) {
      case 'help':
        return {
          answer: this.formatHelpResponse(context.userName),
          confidence: 'high',
          needsMoreContext: false,
        };

      case 'status':
        return {
          answer: this.formatStatusResponse(context),
          confidence: 'high',
          needsMoreContext: false,
        };

      case 'reanalyze':
        return {
          answer: this.formatReanalyzeResponse(context.userName),
          confidence: 'high',
          needsMoreContext: false,
        };

      case 'explain':
        // Para explain, necesitamos generar una respuesta con IA
        if (!context.previousAnalysis) {
          return {
            answer: this.formatNoContextResponse(context.userName),
            confidence: 'high',
            needsMoreContext: true,
          };
        }
        return this.generateResponse({
          ...context,
          question: {
            ...context.question,
            command: undefined,
            question: `Explica en detalle: ${context.question.question}`,
          },
        });

      default:
        return {
          answer: `@${context.userName} Comando desconocido: \`/${command}\`. Usa \`/help\` para ver los comandos disponibles.`,
          confidence: 'high',
          needsMoreContext: false,
        };
    }
  }

  /**
   * Formatea la respuesta final
   */
  private formatResponse(answer: string, userName: string): string {
    return `@${userName} 👋

${answer}

---
*💡 Usa \`/help\` para ver todos los comandos disponibles*`;
  }

  /**
   * Respuesta cuando no hay contexto previo
   */
  private formatNoContextResponse(userName: string): string {
    return `@${userName} 👋

No encontré un análisis previo de SQL en este Pull Request. Esto puede ocurrir porque:

1. 🔍 El análisis aún no se ha ejecutado
2. 📝 No hay archivos SQL modificados en este PR
3. ⚙️ Los agentes de análisis están deshabilitados en la configuración

**¿Qué puedes hacer?**
- Actualiza el PR con cambios en archivos \`.sql\` para activar el análisis automático
- Usa \`/help\` para ver los comandos disponibles

---
*Powered by Claude Sonnet 4.5*`;
  }

  /**
   * Respuesta de error
   */
  private formatErrorResponse(userName: string): string {
    return `@${userName} ⚠️

Lo siento, tuve un problema al procesar tu pregunta. Por favor:

1. Intenta reformular tu pregunta
2. Verifica que hayas mencionado \`@sql-agent\` correctamente
3. Si el problema persiste, contacta al administrador del repositorio

---
*Usa \`/help\` para ver ejemplos de preguntas*`;
  }

  /**
   * Respuesta del comando /help
   */
  private formatHelpResponse(userName: string): string {
    return `@${userName} 📚 **Guía de uso de SQL Agent**

**Comandos disponibles:**

\`\`\`
@sql-agent /help              - Muestra esta ayuda
@sql-agent /status            - Estado del análisis actual
@sql-agent /reanalyze         - Solicita re-análisis (requiere push)
@sql-agent /explain <tema>    - Explica un hallazgo específico
\`\`\`

**Ejemplos de preguntas:**

\`\`\`
@sql-agent ¿Por qué recomiendas agregar RLS a esta tabla?
@sql-agent ¿Hay algún problema de seguridad en migration.sql?
@sql-agent Explica la recomendación sobre índices
@sql-agent ¿Qué pasa si no implemento estas sugerencias?
\`\`\`

**Tips:**
- 💬 Puedes hacer preguntas en lenguaje natural
- 📄 Menciona archivos específicos para contexto (ej: \`users.sql\`)
- 🔍 Pregunta sobre hallazgos específicos del análisis
- ✅ Puedes cuestionar las recomendaciones

---
*Powered by Claude Sonnet 4.5 🤖*`;
  }

  /**
   * Respuesta del comando /status
   */
  private formatStatusResponse(context: ResponseContext): string {
    const hasAnalysis = context.previousAnalysis !== null;
    const filesCount = context.question.mentionedFiles?.length || 0;

    return `@${context.userName} 📊 **Estado del análisis**

**Pull Request:** #${context.prNumber}
**Análisis disponible:** ${hasAnalysis ? '✅ Sí' : '❌ No'}
${filesCount > 0 ? `**Archivos mencionados:** ${context.question.mentionedFiles?.join(', ')}` : ''}

${hasAnalysis ? '**Puedes hacer preguntas sobre:**\n- Hallazgos de seguridad\n- Recomendaciones de performance\n- Buenas prácticas\n- Explicaciones detalladas' : '**Acción requerida:**\nActualiza el PR con archivos .sql para activar el análisis'}

---
*Última actualización: ${new Date().toLocaleString('es-ES')}*`;
  }

  /**
   * Respuesta del comando /reanalyze
   */
  private formatReanalyzeResponse(userName: string): string {
    return `@${userName} 🔄 **Re-análisis solicitado**

Para ejecutar un nuevo análisis:

1. **Opción 1:** Realiza un nuevo commit con cambios en archivos SQL
   \`\`\`bash
   git commit --allow-empty -m "trigger: re-análisis SQL"
   git push
   \`\`\`

2. **Opción 2:** Actualiza los archivos SQL existentes en el PR

El análisis se ejecutará automáticamente cuando GitHub Actions detecte los cambios.

⏱️ **Tiempo estimado:** 2-5 minutos

---
*El análisis incluirá: Claude Sonnet 4.5 + modelos configurados*`;
  }

  /**
   * Evalúa la confianza de la respuesta
   */
  private assessConfidence(response: Anthropic.Messages.Message): 'high' | 'medium' | 'low' {
    // Análisis simple basado en longitud y estructura
    const textContent = response.content.find(block => block.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      return 'low';
    }

    const text = textContent.text;
    const wordCount = text.split(/\s+/).length;

    // Confianza alta: respuesta detallada (>100 palabras)
    if (wordCount > 100) {
      return 'high';
    }
    // Confianza media: respuesta moderada (30-100 palabras)
    if (wordCount > 30) {
      return 'medium';
    }
    // Confianza baja: respuesta corta (<30 palabras)
    return 'low';
  }
}
