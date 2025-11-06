import { CommentMonitor } from './github/comment-monitor.js';
import { AgentResponder } from './agent/responder.js';
import { loadAgentsConfig } from './config/agents-config.js';

async function main() {
  console.log('🤖 SQL Agent - PR Comment Responder');
  console.log('=====================================\n');

  // Validar variables de entorno requeridas
  const requiredEnvVars = {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY,
    PR_NUMBER: process.env.PR_NUMBER,
    COMMENT_BODY: process.env.COMMENT_BODY,
    COMMENT_USER: process.env.COMMENT_USER,
  };

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    console.error('❌ Error: Faltan variables de entorno requeridas:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    process.exit(1);
  }

  const githubToken = requiredEnvVars.GITHUB_TOKEN!;
  const repository = requiredEnvVars.GITHUB_REPOSITORY!;
  const prNumber = parseInt(requiredEnvVars.PR_NUMBER!, 10);
  const commentBody = requiredEnvVars.COMMENT_BODY!;
  const commentUser = requiredEnvVars.COMMENT_USER!;

  console.log(`📌 PR: #${prNumber}`);
  console.log(`👤 Usuario: @${commentUser}`);
  console.log(`💬 Comentario: ${commentBody.substring(0, 100)}${commentBody.length > 100 ? '...' : ''}\n`);

  // Inicializar CommentMonitor
  const commentMonitor = new CommentMonitor(githubToken, repository);

  // Verificar si el comentario menciona al bot
  if (!commentMonitor.isBotMentioned(commentBody)) {
    console.log('ℹ️  El comentario no menciona al bot (@sql-agent). Saliendo...');
    return;
  }

  console.log('✅ Mención detectada. Procesando...\n');

  // Parsear la pregunta
  const parsedQuestion = commentMonitor.parseQuestion(commentBody);
  console.log('📝 Pregunta parseada:');
  console.log(`   - Comando: ${parsedQuestion.command || 'ninguno'}`);
  console.log(`   - Archivos mencionados: ${parsedQuestion.mentionedFiles?.join(', ') || 'ninguno'}`);
  console.log(`   - Pregunta: ${parsedQuestion.question}\n`);

  // Obtener comentarios previos del bot
  console.log('🔍 Buscando análisis previo...');
  const botComments = await commentMonitor.getBotPreviousComments(prNumber);
  console.log(`   Encontrados ${botComments.length} comentarios del bot\n`);

  // Extraer análisis previo relevante
  const previousAnalysis = commentMonitor.extractPreviousAnalysis(
    botComments,
    parsedQuestion.mentionedFiles?.[0] // Si se menciona un archivo, buscar su análisis
  );

  if (previousAnalysis) {
    console.log('✅ Análisis previo encontrado');
    console.log(`   Tamaño: ${previousAnalysis.length} caracteres\n`);
  } else {
    console.log('⚠️  No se encontró análisis previo\n');
  }

  // Cargar configuración de agentes
  const agentsConfig = loadAgentsConfig();
  console.log('⚙️  Configuración de agentes cargada\n');

  // Verificar qué agente usar para responder (prioridad: Claude > OpenAI > Gemini)
  let responder: AgentResponder | null = null;
  let agentName = '';

  if (agentsConfig.agents.claude.enabled && process.env.ANTHROPIC_API_KEY) {
    responder = new AgentResponder(process.env.ANTHROPIC_API_KEY);
    agentName = 'Claude Sonnet 4.5';
    console.log('🧠 Usando Claude Sonnet 4.5 para responder\n');
  } else if (agentsConfig.agents.openai.enabled && process.env.OPENAI_API_KEY) {
    // TODO: Implementar OpenAIResponder si es necesario
    console.log('⚠️  OpenAI configurado pero responder no implementado aún. Usando Claude como fallback.\n');
    if (process.env.ANTHROPIC_API_KEY) {
      responder = new AgentResponder(process.env.ANTHROPIC_API_KEY);
      agentName = 'Claude Sonnet 4.5 (fallback)';
    }
  } else if (agentsConfig.agents.gemini.enabled && process.env.GEMINI_API_KEY) {
    // TODO: Implementar GeminiResponder si es necesario
    console.log('⚠️  Gemini configurado pero responder no implementado aún. Usando Claude como fallback.\n');
    if (process.env.ANTHROPIC_API_KEY) {
      responder = new AgentResponder(process.env.ANTHROPIC_API_KEY);
      agentName = 'Claude Sonnet 4.5 (fallback)';
    }
  }

  if (!responder) {
    console.error('❌ Error: No hay agentes configurados o faltan API keys');
    console.error('   Por favor, configura al menos uno:');
    console.error('   - ANTHROPIC_API_KEY para Claude');
    console.error('   - OPENAI_API_KEY para OpenAI');
    console.error('   - GEMINI_API_KEY para Gemini');
    process.exit(1);
  }

  // Generar respuesta
  console.log('💭 Generando respuesta...');
  const responseResult = await responder.generateResponse({
    question: parsedQuestion,
    previousAnalysis,
    prNumber,
    userName: commentUser,
  });

  console.log(`   Confianza: ${responseResult.confidence}`);
  console.log(`   Necesita más contexto: ${responseResult.needsMoreContext ? 'Sí' : 'No'}\n`);

  // Agregar metadata al final de la respuesta
  const finalResponse = `${responseResult.answer}

---
<sub>🤖 Respondido por **${agentName}** | Confianza: ${responseResult.confidence === 'high' ? '🟢 Alta' : responseResult.confidence === 'medium' ? '🟡 Media' : '🔴 Baja'}</sub>`;

  // Publicar respuesta
  console.log('📤 Publicando respuesta en el PR...');
  await commentMonitor.replyToComment(prNumber, finalResponse);

  console.log('✅ ¡Respuesta publicada exitosamente!\n');
  console.log('=====================================');
  console.log('Respuesta generada:');
  console.log('-------------------------------------');
  console.log(finalResponse);
  console.log('=====================================');
}

// Ejecutar
main().catch(error => {
  console.error('❌ Error fatal:', error);
  process.exit(1);
});
