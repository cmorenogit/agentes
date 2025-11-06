# 🤖 Guía del Agente SQL Interactivo

## 📖 Introducción

El Agente SQL Interactivo permite a los usuarios interactuar con el bot de análisis directamente en los comentarios de Pull Requests. El bot puede responder preguntas, explicar recomendaciones y proporcionar contexto adicional sobre los análisis realizados.

## 🚀 Inicio Rápido

### Para usar el bot en un PR:

1. **Menciona al bot** en cualquier comentario del PR:
   ```
   @sql-agent /help
   ```

2. **Espera la respuesta** (30-60 segundos)

3. **Interactúa** con preguntas adicionales

## 🎮 Comandos Disponibles

### `/help` - Guía de uso
Muestra la lista completa de comandos y ejemplos de uso.

**Ejemplo:**
```
@sql-agent /help
```

### `/status` - Estado del análisis
Muestra información sobre el análisis actual del PR.

**Ejemplo:**
```
@sql-agent /status
```

**Respuesta incluye:**
- ✅/❌ Si hay análisis disponible
- 📄 Archivos SQL analizados
- ⏰ Última actualización

### `/reanalyze` - Solicitar re-análisis
Proporciona instrucciones para ejecutar un nuevo análisis.

**Ejemplo:**
```
@sql-agent /reanalyze
```

**Respuesta incluye:**
- 📝 Pasos para forzar nuevo análisis
- 🔄 Comando git para commit vacío
- ⏱️ Tiempo estimado

### `/explain <tema>` - Explicación detallada
Solicita una explicación detallada sobre un tema específico del análisis.

**Ejemplo:**
```
@sql-agent /explain ¿por qué necesito RLS?
```

## 💬 Preguntas en Lenguaje Natural

El bot entiende preguntas en español o inglés. Puedes hacer preguntas sobre:

### 🔒 Seguridad
```
@sql-agent ¿Qué problemas de seguridad encontraste en users.sql?
@sql-agent ¿Por qué recomiendas hashing para las API keys?
@sql-agent ¿Es crítica la recomendación de RLS?
```

### 📊 Performance
```
@sql-agent ¿Por qué sugieres este índice?
@sql-agent ¿Mejorará el rendimiento si agrego BRIN?
@sql-agent ¿Cuál es el impacto de esta recomendación?
```

### 🏗️ Arquitectura
```
@sql-agent ¿Por qué usar UUID en lugar de SERIAL?
@sql-agent ¿Qué ventajas tiene el multi-tenant con RLS?
@sql-agent Explica la estructura de esta migración
```

### ✅ Implementación
```
@sql-agent ¿En qué orden debo implementar estas recomendaciones?
@sql-agent ¿Puedo ignorar alguna de estas sugerencias?
@sql-agent ¿Qué riesgos hay si no implemento esto?
```

## 📁 Mencionar Archivos Específicos

Puedes mencionar archivos específicos en tus preguntas:

```
@sql-agent ¿Hay problemas en migration_001.sql?
@sql-agent Explica las recomendaciones para users.sql
```

El bot buscará automáticamente el análisis de ese archivo específico.

## 🎯 Casos de Uso

### Caso 1: Entender una recomendación
```
Bot: "❌ CRÍTICO: Falta RLS en tabla users"

Tú: @sql-agent ¿Por qué es crítico agregar RLS a la tabla users?

Bot: [Explicación detallada sobre multi-tenancy y seguridad]
```

### Caso 2: Cuestionar un hallazgo
```
Bot: "⚠️ ADVERTENCIA: Considera agregar índice en email"

Tú: @sql-agent Esta tabla tendrá pocos registros, ¿realmente necesito el índice?

Bot: [Análisis contextual y recomendación ajustada]
```

### Caso 3: Priorizar acciones
```
Tú: @sql-agent Tengo 10 recomendaciones, ¿cuáles son las más importantes?

Bot: [Lista priorizada con justificación]
```

### Caso 4: Implementación paso a paso
```
Tú: @sql-agent ¿Cómo implemento la recomendación de hashear API keys?

Bot: [Guía paso a paso con código SQL]
```

## ⚙️ Configuración Técnica

### Variables de Entorno Requeridas

El workflow `pr-comment-responder.yml` requiere:

```bash
GITHUB_TOKEN          # Auto-provisto por GitHub Actions
GITHUB_REPOSITORY     # Auto-provisto
PR_NUMBER            # Auto-provisto
COMMENT_ID           # Auto-provisto
COMMENT_BODY         # Auto-provisto
COMMENT_USER         # Auto-provisto
ANTHROPIC_API_KEY    # Requerido (secreto del repo)
```

### Permisos de GitHub Actions

El workflow requiere:
```yaml
permissions:
  contents: read
  pull-requests: write
  issues: write
```

### Trigger del Workflow

```yaml
on:
  issue_comment:
    types: [created]
```

El workflow solo se ejecuta si:
1. El evento es un comentario en un PR (no en issue)
2. El comentario contiene `@sql-agent`

## 🔧 Arquitectura Interna

```
┌─────────────────────────────────────────────┐
│  Usuario comenta: @sql-agent /help          │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  GitHub Actions: pr-comment-responder.yml   │
│  - Detecta evento issue_comment             │
│  - Verifica que contiene @sql-agent         │
│  - Ejecuta npm run respond                  │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  response-handler.ts                        │
│  - Carga configuración y variables env      │
│  - Inicializa CommentMonitor                │
│  - Inicializa AgentResponder                │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
┌──────────────┐    ┌──────────────────┐
│ CommentMon.  │    │ AgentResponder   │
│              │    │                  │
│ • parsea     │───▶│ • genera prompt  │
│ • detecta    │    │ • llama Claude   │
│ • extrae     │    │ • evalúa resp.   │
└──────┬───────┘    └────────┬─────────┘
       │                     │
       └──────────┬──────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Publicar respuesta en PR                   │
│  - octokit.issues.createComment()           │
│  - Respuesta formateada en Markdown         │
└─────────────────────────────────────────────┘
```

## 🎨 Formato de Respuestas

Todas las respuestas del bot incluyen:

```markdown
@usuario 👋

[Respuesta principal del bot]

---
💡 Usa `/help` para ver todos los comandos disponibles

---
🤖 Respondido por **Claude Sonnet 4.5** | Confianza: 🟢 Alta
```

### Niveles de Confianza

- 🟢 **Alta**: Respuesta detallada (>100 palabras)
- 🟡 **Media**: Respuesta moderada (30-100 palabras)
- 🔴 **Baja**: Respuesta corta o falta contexto (<30 palabras)

## 📊 Métricas y Logs

### Logs en GitHub Actions

El workflow genera logs detallados:

```
🤖 SQL Agent - PR Comment Responder
=====================================

📌 PR: #123
👤 Usuario: @username
💬 Comentario: @sql-agent /help

✅ Mención detectada. Procesando...

📝 Pregunta parseada:
   - Comando: help
   - Archivos mencionados: ninguno
   - Pregunta: [...]

🔍 Buscando análisis previo...
   Encontrados 2 comentarios del bot

✅ Análisis previo encontrado
   Tamaño: 3456 caracteres

🧠 Usando Claude Sonnet 4.5 para responder

💭 Generando respuesta...
   Confianza: high
   Necesita más contexto: No

📤 Publicando respuesta en el PR...
✅ ¡Respuesta publicada exitosamente!
```

## 🐛 Troubleshooting

### El bot no responde

**Problema:** Comenté mencionando @sql-agent pero no hay respuesta.

**Soluciones:**
1. ✅ Verifica que mencionaste `@sql-agent` exactamente
2. ✅ Espera 2-3 minutos (puede haber delay)
3. ✅ Revisa los logs en GitHub Actions
4. ✅ Verifica que el secreto `ANTHROPIC_API_KEY` está configurado

### Respuesta genérica sin contexto

**Problema:** El bot responde pero parece no tener contexto.

**Causas posibles:**
- No hay análisis previo en este PR
- Los archivos SQL fueron removidos
- El análisis falló anteriormente

**Solución:**
```
@sql-agent /status
```
Esto te dirá si hay análisis disponible.

### Error en el workflow

**Problema:** El workflow falla en GitHub Actions.

**Revisa:**
1. Logs en Actions → pr-comment-responder
2. Variables de entorno configuradas
3. Permisos del workflow
4. API key válida de Anthropic

## 🔐 Seguridad y Privacidad

- ✅ El bot **no almacena** conversaciones
- ✅ Cada interacción es **independiente**
- ✅ Solo accede a **comentarios públicos del PR**
- ✅ No modifica código sin aprobación
- ✅ Usa **permisos mínimos** de GitHub

## 🚀 Futuras Mejoras

Posibles features a implementar:

- [ ] 💾 Memoria persistente de conversaciones
- [ ] 🎨 Visualizaciones y gráficos en respuestas
- [ ] 🤖 Soporte para OpenAI y Gemini en respuestas
- [ ] 🔔 Notificaciones proactivas de problemas críticos
- [ ] 📊 Dashboard de interacciones y métricas
- [ ] 🧵 Threading de conversaciones múltiples
- [ ] 🌐 Soporte multiidioma mejorado

## 📚 Referencias

- [Documentación GitHub Actions](https://docs.github.com/en/actions)
- [API de Anthropic Claude](https://docs.anthropic.com/)
- [Octokit REST API](https://octokit.github.io/rest.js/)

## 💡 Contribuir

¿Tienes ideas para mejorar el bot? ¡Contribuye!

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Implementa y prueba
4. Crea un PR con descripción detallada

---

**Última actualización:** 2025-11-06
**Versión:** 1.0.0
