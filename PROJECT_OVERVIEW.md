# Supabase SQL Schema Analysis Agent - Project Overview

## 📋 Executive Summary

Sistema automatizado de revisión de esquemas SQL para aplicaciones SaaS multi-tenant en Supabase. Analiza archivos SQL modificados en Pull Requests usando 3 modelos de IA diferentes (Claude Sonnet 4.5, GPT-5, Gemini 2.5 Pro) ejecutándose en paralelo para proporcionar análisis comparativos y exhaustivos.

**Propósito:** Detectar vulnerabilidades de seguridad, problemas de performance, violaciones de mejores prácticas y fallas en aislamiento multi-tenant antes de que el código llegue a producción.

---

## 🏗️ Arquitectura del Sistema

### Stack Tecnológico

```
Language: TypeScript 5.7.2
Runtime: Node.js 20
Package Manager: npm
APIs:
  - Anthropic Claude API (@anthropic-ai/sdk ^0.32.1)
  - OpenAI API (openai)
  - Google Generative AI (@google/generative-ai)
  - GitHub REST API (@octokit/rest ^21.0.2)
Deployment: GitHub Actions (ubuntu-latest)
```

### Estructura de Directorios

```
agentes/
├── .github/
│   └── workflows/
│       └── sql-review.yml          # GitHub Actions workflow
├── src/
│   ├── agent/
│   │   ├── analyzer.ts             # Claude Sonnet 4.5 analyzer
│   │   ├── openai-analyzer.ts      # GPT-5 analyzer
│   │   ├── gemini-analyzer.ts      # Gemini 2.5 Pro analyzer
│   │   └── prompt.ts               # Shared analysis prompt (v6.0)
│   ├── parser/
│   │   └── sql-reader.ts           # Lee archivos SQL del filesystem
│   ├── github/
│   │   ├── pr-handler.ts           # Interactúa con GitHub API para PRs
│   │   ├── commenter.ts            # Posta comentarios en PRs
│   │   └── reporter.ts             # Genera reportes detallados
│   └── index.ts                    # Punto de entrada principal
├── sql/                            # Directorio monitoreado (archivos SQL)
├── package.json
├── tsconfig.json
├── .env.example
└── PROJECT_OVERVIEW.md             # Este archivo
```

---

## 🔄 Flujo de Trabajo Completo

### 1. Trigger (GitHub Actions)

**Evento disparador:**
```yaml
on:
  pull_request:
    paths:
      - 'sql/**/*.sql'
```

**Condiciones:**
- Solo se ejecuta en Pull Requests (no en push directo a main)
- Solo si hay cambios en archivos dentro de `sql/` con extensión `.sql`

### 2. Inicialización

**Variables de entorno requeridas:**
```
GITHUB_TOKEN          # Auto-provisto por GitHub Actions
ANTHROPIC_API_KEY     # Secret: API key de Anthropic
OPENAI_API_KEY        # Secret: API key de OpenAI
GEMINI_API_KEY        # Secret: API key de Google AI
GITHUB_REPOSITORY     # Auto: owner/repo
PR_NUMBER             # Auto: número del PR
```

**Componentes instanciados:**
```typescript
PRHandler(githubToken, owner, repo)           // Maneja operaciones con GitHub API
SQLReader('sql')                              // Lee archivos del directorio sql/
SQLAnalyzer(anthropicApiKey)                  // Analizador Claude
OpenAIAnalyzer(openaiApiKey)                  // Analizador GPT-5
GeminiAnalyzer(geminiApiKey)                  // Analizador Gemini
PRCommenter(githubToken, owner, repo)         // Posta comentarios
```

### 3. Detección de Archivos Modificados

**Proceso:**
1. `PRHandler.getPRInfo(prNumber)` → obtiene metadata del PR
2. `PRHandler.getChangedSQLFiles(prNumber)` → lista archivos modificados
3. Filtra solo archivos en `sql/` directory
4. Excluye archivos con status `removed`

**Resultado:** Array de `{filename, status}` donde status = `added|modified|renamed`

### 4. Lectura de Contenido SQL

**Proceso:**
1. `SQLReader.readMultipleSQLFiles(filenames)`
2. Lee contenido de cada archivo usando `fs.promises.readFile`
3. Detecta encoding (UTF-8)

**Resultado:** Array de `{filename, content}`

### 5. Análisis Multi-Modelo (Paralelo)

**Ejecución:**
```typescript
const [anthropicResults, openaiResults, geminiResults] = await Promise.all([
  anthropicAnalyzer.analyzeMultipleFiles(files),
  openaiAnalyzer.analyzeMultipleFiles(files),
  geminiAnalyzer.analyzeMultipleFiles(files)
]);
```

**Dentro de cada analyzer:**
1. Itera secuencialmente sobre cada archivo (para mantener rate limits)
2. Construye prompt usando `getAnalysisPrompt(sqlContent, filename)`
3. Llama a API del modelo correspondiente
4. Extrae JSON de respuesta (maneja code blocks)
5. Parsea a `AnalysisResult`
6. Maneja errores y retorna resultado default si falla

**Configuración de modelos:**
```typescript
// Claude Sonnet 4.5
model: 'claude-sonnet-4-5-20250929'
max_tokens: 4096
temperature: 1.0 (default, no especificado)

// GPT-5
model: 'gpt-5'
max_tokens: 4096
temperature: 1.0

// Gemini 2.5 Pro
model: 'gemini-2.5-pro'
maxOutputTokens: 4096
temperature: 1.0
```

### 6. Generación de Comentarios

**Proceso:**
1. Para cada modelo (3 comentarios separados):
   - Formatea resultado usando `commenter.formatAnalysisComment()`
   - Incluye metadata: AI model name + version
   - Calcula métricas agregadas (score promedio, total de issues)
   - Genera executive summary
   - Lista issues por archivo
   - Incluye good practices encontradas
   - Genera action plan
2. Posta comentario vía GitHub API: `octokit.issues.createComment()`

**Orden de posteo:**
1. Claude Sonnet 4.5
2. GPT-5
3. Gemini 2.5 Pro

### 7. Reporte Job Summary

**Proceso:**
1. `GitHubReporter.generateJobSummary(results)` → genera markdown detallado
2. `GitHubReporter.writeJobSummary()` → escribe a `GITHUB_STEP_SUMMARY`
3. Visible en la pestaña "Summary" de GitHub Actions run

---

## 🤖 Sistema de Análisis de IA

### Prompt Engineering (v6.0)

**Ubicación:** `src/agent/prompt.ts` → `getAnalysisPrompt()`

**Características del prompt:**

#### Contexto del Proyecto
```
- Sistema SaaS multi-tenant (tenant_id en mayoría de tablas)
- RLS, índices y triggers en /supabase/migrations/
- Secrets globales (Resend, Tremendous, Stripe) en Supabase Vault
- Edge Functions acceden secrets vía Deno.env.get()
```

#### Convenciones de Seguridad
```
✅ Outbound keys (servidor → API externa): texto plano OK
🚨 Inbound keys (cliente → servidor): hasheadas obligatorio
🚨 Refresh tokens: hasheados obligatorio
⚠️ SSO tokens: OK si TTL < 60s + cleanup automático
```

#### 5 Áreas de Evaluación

1. **Seguridad Multi-Tenant**
   - ENABLE ROW LEVEL SECURITY visible
   - Aislamiento entre tenants verificable
   - Riesgo de data leakage

2. **Integridad de Datos**
   - Foreign Keys correctas con ON DELETE apropiado
   - UNIQUE y CHECK constraints correctos
   - Campos críticos con NOT NULL

3. **Seguridad de Credenciales**
   - Inbound keys/tokens sin hash → CRITICAL
   - Outbound keys visibles → OK
   - Secrets sensibles fuera de Vault

4. **Performance y Escalabilidad**
   - Índices en tenant_id, user_id o FK ausentes
   - Escalabilidad para >10k registros/tenant

5. **Mejores Prácticas y Convenciones**
   - UUIDs como PKs
   - Campos created_at y updated_at
   - Naming snake_case
   - Uso de JSONB en lugar de JSON

#### Clasificación de Severidad

**CRITICAL** (problema visible en archivo):
- Inbound key/token sin hash
- Contraseña en texto plano
- FK rota o mal definida
- NULL en campo crítico (tenant_id, user_id)
- Violación del aislamiento multi-tenant

**WARNING** (ausencia verificable, puede estar en migraciones):
- RLS no visible
- Índices faltantes
- TTL o constraint ausente

**SUGGESTION** (mejora opcional):
- Naming
- Cascade policies
- Index tuning

#### Formato de Respuesta JSON

```json
{
  "score": 8.7,
  "summary": "Breve resumen del archivo (snapshot/migración)",
  "critical": [
    {
      "table": "user_api_keys",
      "issue": "Inbound API key sin hash",
      "location": "CREATE TABLE user_api_keys (key TEXT ...)",
      "risk": "Exposición total de credenciales",
      "fix": "ALTER TABLE ... ADD COLUMN key_hash TEXT;",
      "present_in_file": true,
      "confidence": 100,
      "verification_needed": null
    }
  ],
  "warnings": [
    {
      "table": "orders",
      "issue": "RLS no visible",
      "impact": "Aislamiento multi-tenant podría romperse",
      "fix": "Verificar en /supabase/migrations/",
      "present_in_file": false,
      "confidence": 90,
      "verification_needed": "/supabase/migrations/*.sql"
    }
  ],
  "suggestions": [...],
  "goodPractices": [
    "Uso de UUIDs como PK",
    "Campos created_at y updated_at presentes"
  ],
  "actionPlan": [
    "1. [CRÍTICO] Hashear inbound keys - inmediato",
    "2. [VERIFICAR] Confirmar RLS en migrations - 5 min"
  ]
}
```

#### Pre-Check Obligatorio

Antes de generar JSON, el modelo debe verificar:
- ✅ Identificó tipo de archivo (snapshot, migración, dump)
- ✅ Diferenció "no presente aquí" vs "no existe en sistema"
- ✅ Incluyó present_in_file, confidence, verification_needed
- ✅ No marcó CRITICAL por algo que podría estar en migraciones
- ✅ Citó bloque SQL exacto en location
- ✅ Identificó al menos 3 buenas prácticas (o [] si no hay)
- ✅ Score refleja solo problemas visibles

#### Reglas Anti-Falsos Positivos

- ❌ No marcar CRITICAL por RLS/índices ausentes (pueden estar en migraciones)
- ❌ No inventar hechos técnicos sin evidencia textual
- ❌ No citar "práctica estándar" sin URL oficial
- ❌ No declarar falsos positivos sin ver SQL
- ✅ Usar WARNING + verificación para dudas legítimas

#### Notas Técnicas

```
JSONB vs JSON → usa JSONB (indexable, eficiente)
auth.uid() → debe usarse en RLS (no current_user)
Vault secrets → nunca en SQL, se acceden desde Edge Functions
```

---

## 📊 Formato de Comentarios en PR

### Estructura de Cada Comentario

```markdown
## 🔍 Supabase SQL Schema Analysis

**🤖 AI Model:** Claude Sonnet 4.5 / GPT-5 / Gemini 2.5 Pro
**📌 Version:** `claude-sonnet-4-5-20250929` / `gpt-5` / `gemini-2.5-pro`

### 📊 Executive Summary

| Metric | Value |
|--------|-------|
| Files Analyzed | 2 |
| Overall Score | **8.5/10** |
| 🚨 Critical Issues | 1 |
| ⚠️ Warnings | 3 |
| ℹ️ Suggestions | 2 |
| ⏱️ Est. Fix Time | ~20 min |

> **🚨 ACTION REQUIRED** - 1 critical issue(s) must be resolved before merging

[📋 View detailed report in GitHub Actions](https://github.com/...)

---

### 📄 `schema.sql` - Score: **8.5/10**

**Summary:** Schema snapshot con estructura multi-tenant correcta.

#### 🚨 Critical Issues (1)

**1.** Tabla 'user_api_keys' sin hash
- **Risk:** Exposición de credenciales si la base es comprometida
- **Fix:**
```sql
ALTER TABLE user_api_keys ADD COLUMN key_hash TEXT;
-- aplicar bcrypt/argon2 en capa de aplicación
```

#### ⚠️ Warnings (3)

**1.** RLS no visible en este snapshot
- **Impact:** Si no está en migraciones: aislamiento multi-tenant podría romperse
- **Fix:**
```sql
-- Verificar en /supabase/migrations/:
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
```

#### ℹ️ Suggestions (2)

**1.** Considerar agregar ON DELETE CASCADE
- **Benefit:** Limpieza automática de datos huérfanos
- **Implementation:**
```sql
ALTER TABLE orders DROP CONSTRAINT orders_user_id_fkey;
ALTER TABLE orders ADD CONSTRAINT orders_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
```

#### ✅ Good Practices Found

- Uso de UUIDs como PK
- Campos created_at y updated_at presentes
- FKs con nombres descriptivos
- NOT NULL en campos críticos

#### 📋 Action Plan

1. [CRÍTICO] Hashear inbound API keys - inmediato
2. [VERIFICAR] Confirmar RLS en /supabase/migrations/ - 5 min
3. [IMPORTANTE] Agregar índices en tenant_id y FKs - 10 min

---

*Analysis powered by Claude Sonnet 4.5 (claude-sonnet-4-5-20250929) | Generated by [Supabase SQL Agent](https://github.com/...)*
```

---

## 🔧 Configuración y Setup

### Variables de Entorno (.env)

```bash
# GitHub Configuration
GITHUB_TOKEN=ghp_your_github_token_here
GITHUB_REPOSITORY=owner/repo

# AI Model API Keys
ANTHROPIC_API_KEY=sk-ant-your_api_key_here
OPENAI_API_KEY=sk-your_openai_key_here
GEMINI_API_KEY=your_gemini_key_here

# Pull Request Number (automatically set by GitHub Actions)
PR_NUMBER=1
```

### GitHub Secrets Requeridos

```
Repository → Settings → Secrets and variables → Actions → New repository secret

ANTHROPIC_API_KEY → API key de Anthropic Claude
OPENAI_API_KEY    → API key de OpenAI
GEMINI_API_KEY    → API key de Google AI Studio
```

### Instalación Local

```bash
# 1. Clonar repositorio
git clone https://github.com/owner/repo.git
cd agentes

# 2. Instalar dependencias
npm install

# 3. Compilar TypeScript
npm run build

# 4. Configurar .env (copiar de .env.example)
cp .env.example .env
# Editar .env con tus API keys

# 5. Ejecutar localmente
npm start
```

### Scripts npm

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx src/index.ts"
  }
}
```

---

## 🎯 Casos de Uso y Escenarios

### Escenario 1: Nueva Tabla Multi-Tenant

**Archivo:** `sql/create_tenants_table.sql`
```sql
CREATE TABLE tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

**Análisis esperado:**
- ⚠️ WARNING: RLS no visible en snapshot
- ⚠️ WARNING: Falta índice en campos de búsqueda frecuente
- ✅ GOOD: UUIDs como PK
- ✅ GOOD: created_at con DEFAULT
- Score: ~7.5-8.0/10

### Escenario 2: API Keys sin Hash (CRÍTICO)

**Archivo:** `sql/add_api_keys.sql`
```sql
CREATE TABLE user_api_keys (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  api_key TEXT NOT NULL,  -- ❌ INBOUND KEY SIN HASH
  created_at TIMESTAMPTZ DEFAULT now()
);
```

**Análisis esperado:**
- 🚨 CRITICAL: Inbound API key sin hash
- ⚠️ WARNING: RLS no visible
- ⚠️ WARNING: Falta ON DELETE en FK
- Score: ≤6.0/10 (por issue crítico)

### Escenario 3: Schema Perfecto

**Archivo:** `sql/orders_table.sql`
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'cancelled')),
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_orders_tenant_id ON orders(tenant_id);
CREATE INDEX idx_orders_user_id ON orders(user_id);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can only see their tenant orders" ON orders
  FOR SELECT USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));
```

**Análisis esperado:**
- ✅ GOOD: UUIDs, timestamps, NOT NULL, CHECK constraint
- ✅ GOOD: JSONB (no JSON)
- ✅ GOOD: Índices en FKs y tenant_id
- ✅ GOOD: ON DELETE CASCADE
- ✅ GOOD: RLS habilitado con política correcta
- Score: 9.5-10.0/10

---

## 📈 Métricas y KPIs

### Métricas Calculadas

```typescript
// Por análisis
avgScore = sum(scores) / totalFiles
totalCritical = sum(critical.length)
totalWarnings = sum(warnings.length)
totalSuggestions = sum(suggestions.length)
estimatedTime = critical * 5 + warnings * 3 + suggestions * 2 (minutos)

// Status badge logic
if (totalCritical > 0) → "🚨 ACTION REQUIRED"
else if (totalWarnings > 0) → "✅ READY"
else → "🎉 EXCELLENT"
```

### Criterios de Score

```
10.0 → Schema perfecto, cero issues
9.0-9.9 → Excelente, solo sugerencias menores
8.0-8.9 → Bueno, algunos warnings no críticos
7.0-7.9 → Aceptable, warnings importantes
6.0-6.9 → Revisar, múltiples warnings o 1 critical
<6.0 → Bloquear, múltiples critical issues
```

---

## 🔍 Áreas de Mejora Identificadas

### 1. Performance y Escalabilidad

**Problema actual:**
- Análisis secuencial dentro de cada modelo (para evitar rate limits)
- 3 modelos en paralelo, pero cada uno procesa archivos uno por uno

**Mejora propuesta:**
- Implementar batching inteligente
- Rate limiting configurable por modelo
- Cache de resultados para archivos no modificados

### 2. Detección de Cambios

**Problema actual:**
- Analiza archivo completo aunque solo cambió 1 línea

**Mejora propuesta:**
- Diff analysis: analizar solo líneas modificadas
- Context-aware: mantener contexto de tablas relacionadas
- Incremental analysis: comparar con versión anterior

### 3. Consenso Multi-Modelo

**Problema actual:**
- 3 comentarios separados, sin síntesis

**Mejora propuesta:**
- Comentario adicional con consenso:
  - Issues detectados por 2+ modelos (alta confianza)
  - Issues detectados por 1 modelo (requiere validación)
  - Discrepancias significativas en scores
  - Recomendación final consolidada

### 4. False Positives

**Problema actual:**
- Puede marcar warnings por RLS ausente aunque esté en migraciones

**Mejora propuesta:**
- Escaneo de `/supabase/migrations/` para verificar RLS, índices, triggers
- Cross-reference entre snapshot y migraciones
- Confianza ajustada basada en verificación cruzada

### 5. Testing y Validación

**Problema actual:**
- No hay tests automatizados

**Mejora propuesta:**
- Unit tests para cada analyzer
- Integration tests con mocks de APIs
- Fixture SQLs con casos conocidos
- Regression tests para evitar falsos positivos

### 6. Cost Optimization

**Problema actual:**
- 3 llamadas API completas por archivo (costo $$$)

**Mejora propuesta:**
- Modo "fast" con solo 1 modelo para PRs pequeños
- Modo "thorough" con 3 modelos para PRs críticos
- Caching de resultados para re-análisis
- Sampling inteligente (analizar subset de archivos)

### 7. Observabilidad

**Problema actual:**
- Logging limitado, difícil debuggear fallos

**Mejora propuesta:**
- Structured logging (JSON)
- Métricas de latencia por modelo
- Error tracking (Sentry/similar)
- Dashboard de análisis históricos

### 8. Configurabilidad

**Problema actual:**
- Prompt hardcoded, no customizable por proyecto

**Mejora propuesta:**
- `sql-analysis.config.json` en root:
  ```json
  {
    "models": ["claude", "gpt5"],
    "strictness": "high",
    "customRules": [...],
    "ignorePatterns": ["migrations/seed_*.sql"]
  }
  ```

### 9. Soporte para Otros Databases

**Problema actual:**
- Solo Supabase/PostgreSQL

**Mejora propuesta:**
- Detección automática de DB engine
- Prompts específicos por engine (MySQL, MongoDB, etc.)
- Plugins extensibles para nuevos engines

### 10. Auto-Fix Capabilities

**Problema actual:**
- Solo sugiere fixes, no los aplica

**Mejora propuesta:**
- Modo "auto-fix" para issues no-críticos
- PR automático con fixes propuestos
- Aprobación humana antes de merge

---

## 🚀 Roadmap Sugerido

### Phase 1: Stability & Testing (1-2 semanas)
- [ ] Agregar unit tests (coverage >80%)
- [ ] Integration tests con mocks
- [ ] Error handling robusto
- [ ] Structured logging

### Phase 2: Intelligence (2-3 semanas)
- [ ] Consenso multi-modelo
- [ ] Cross-reference con migrations
- [ ] Diff-based analysis
- [ ] False positive reduction

### Phase 3: Performance (1-2 semanas)
- [ ] Caching de resultados
- [ ] Rate limiting inteligente
- [ ] Batch processing optimizado
- [ ] Cost tracking

### Phase 4: Extensibility (2-3 semanas)
- [ ] Config file support
- [ ] Plugin system
- [ ] Custom rules engine
- [ ] Multi-database support

### Phase 5: Automation (1-2 semanas)
- [ ] Auto-fix para issues simples
- [ ] PR automático con fixes
- [ ] Dashboard de métricas
- [ ] Historical analysis

---

## 📚 Referencias y Documentación

### APIs Utilizadas

- **Anthropic Claude:** https://docs.anthropic.com/claude/reference/
- **OpenAI:** https://platform.openai.com/docs/api-reference
- **Google Gemini:** https://ai.google.dev/gemini-api/docs
- **GitHub REST API:** https://docs.github.com/rest
- **Octokit:** https://octokit.github.io/rest.js/

### Best Practices

- **Supabase RLS:** https://supabase.com/docs/guides/auth/row-level-security
- **PostgreSQL Security:** https://www.postgresql.org/docs/current/ddl-rowsecurity.html
- **Multi-tenant Architecture:** https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/
- **SQL Injection Prevention:** https://owasp.org/www-community/attacks/SQL_Injection

### Herramientas Relacionadas

- **sqlfluff:** SQL linter (reglas estáticas)
- **pganalyze:** Performance monitoring para Postgres
- **Liquibase:** Database schema versioning
- **Flyway:** Database migrations

---

## 🎓 Conclusión

Este proyecto representa una solución robusta para automatizar la revisión de seguridad y calidad de esquemas SQL en entornos multi-tenant. La arquitectura multi-modelo proporciona redundancia y diversidad de perspectivas, reduciendo significativamente el riesgo de falsos negativos.

**Fortalezas principales:**
1. ✅ Análisis exhaustivo en 5 áreas críticas
2. ✅ Multi-modelo para alta confianza
3. ✅ Prompt v6.0 con anti-falsos positivos
4. ✅ Integración nativa con GitHub Actions
5. ✅ Comentarios detallados y accionables

**Limitaciones actuales:**
1. ⚠️ Alto costo por análisis (3 modelos x archivo)
2. ⚠️ No considera migraciones existentes
3. ⚠️ Sin tests automatizados
4. ⚠️ Falta consenso entre modelos
5. ⚠️ No soporta auto-fixes

**Next Steps:**
- Implementar testing suite completo
- Agregar consenso multi-modelo
- Cross-reference con migrations directory
- Cost optimization mediante sampling inteligente

---

**Versión del documento:** 1.0
**Última actualización:** 2025-10-30
**Autor:** Sistema automatizado
**Modelos activos:** Claude Sonnet 4.5, GPT-5, Gemini 2.5 Pro
