# 🔒 Guía de Auditoría de Seguridad de Base de Datos en CI/CD

## 📋 Resumen

Sistema automatizado de auditoría de seguridad para esquemas PostgreSQL/Supabase que se ejecuta automáticamente en Pull Requests cuando se modifica el schema de la base de datos.

**¿Qué hace?**
- Levanta un contenedor PostgreSQL temporal
- Carga el schema completo
- Ejecuta 14 queries de seguridad especializadas
- Analiza hallazgos con Claude Sonnet 4.5
- Postea comentario detallado en el PR

**Tiempo de ejecución:** ~2-3 minutos

---

## 🚀 Cómo Funciona

### Flujo Automático en PRs

```
PR con cambios en sql/full_schema.sql
         │
         ▼
GitHub Actions: db-audit.yml
         │
         ├─► Levanta PostgreSQL 15
         ├─► Carga schema completo
         ├─► Ejecuta 14 queries de seguridad
         ├─► Destruye contenedor
         ├─► Analiza con Claude Sonnet 4.5
         └─► Comenta en PR
```

### Trigger

El workflow se ejecuta automáticamente cuando:
- Se crea o actualiza un Pull Request
- Y hay cambios en: `sql/**/*.sql` o `migrations/**/*.sql`

### Hallazgos Detectados

El sistema detecta **14 tipos de vulnerabilidades**:

| ID | Hallazgo | Severidad |
|----|----------|-----------|
| 1 | Tablas sin RLS forzado | 🔴 CRITICAL |
| 2 | Policies triviales (USING true) | 🟠 HIGH |
| 3 | Funciones SECURITY DEFINER sin search_path | 🟠 HIGH |
| 4 | Tablas tenant_id sin FK a tenants | 🟠 HIGH |
| 5 | idempotency_key sin UNIQUE | 🟡 MEDIUM |
| 6 | Policies storage.objects inseguras | 🟠 HIGH |
| 7 | GRANTS amplios a anon/public | 🔴 CRITICAL |
| 8 | Extensiones con privilegios elevados | 🟡 MEDIUM |
| 9 | pgaudit no configurado | 🟢 LOW |
| 10 | Funciones con DEFAULT current_user | 🟢 LOW |
| 11 | Triggers con código dinámico | 🟡 MEDIUM |
| 12 | Default privileges amplios | 🟠 HIGH |
| 13 | Secuencias sin restricciones | 🟢 LOW |
| 14 | Versión PostgreSQL vulnerable (CVE) | 🔴 CRITICAL |

---

## 📖 Uso

### Auditoría Automática (CI/CD)

1. Modifica `sql/full_schema.sql` en tu rama
2. Crea un Pull Request
3. Espera ~2-3 minutos
4. Revisa el comentario automático con hallazgos
5. Implementa las correcciones sugeridas
6. Push cambios → nueva auditoría automática

**El PR fallará** si se detectan hallazgos críticos (🔴).

### Auditoría Local (Desarrollo)

Ejecuta la auditoría localmente antes de crear el PR:

```bash
# 1. Configurar variables de entorno
export ANTHROPIC_API_KEY=sk-ant-your_key_here

# 2. Asegúrate de que Docker esté running
docker ps

# 3. Ejecutar auditoría local
npm run audit:db

# 4. Revisar reporte generado
cat docs/audit-report.md
```

**Requisitos:**
- Docker instalado y running
- Node.js 20+
- `ANTHROPIC_API_KEY` configurado
- Schema en `sql/full_schema.sql`

**Output:** `docs/audit-report.md` (~87KB)

---

## 📊 Ejemplo de Comentario en PR

### Resumen Ejecutivo

```markdown
## 🔒 Database Security Audit Report

**📅 Timestamp:** 2025-11-06T10:30:15Z
**📂 Schema:** sql/full_schema.sql
**🤖 Analyzed by:** Claude Sonnet 4.5

### 📊 Executive Summary

| Metric | Value |
|--------|-------|
| Total Findings | 12 |
| 🔴 Critical | 3 |
| 🟠 High | 5 |
| 🟡 Medium | 3 |
| 🟢 Low | 1 |
| **Risk Level** | **🔴 CRITICAL** |

### 📈 Severity Distribution

```
CRITICAL  ████████                          25%  (3)
HIGH      ████████████████                  42%  (5)
MEDIUM    ████████████                      25%  (3)
LOW       ████                               8%  (1)
```

> **🚨 CRITICAL** - 3 critical security issue(s) detected.
> **Immediate action required** before merging.
```

### Hallazgos Críticos (Expandido)

```markdown
### 🔴 Critical Findings (3)

#### 1. Tablas sin RLS forzado

**Severity:** 🔴 CRITICAL
**Instances Found:** 80
**Description:** Tablas sin Row Level Security habilitado o forzado

**Business Impact:**
Permite acceso cross-tenant. En un escenario de ataque, un usuario
malicioso de Tenant A podría modificar su JWT token para incluir el
org_id de Tenant B y acceder a todos sus datos sin restricción.

**Attack Scenario:**
1. Usuario de Tenant A se autentica normalmente
2. Modifica JWT token para incluir org_id de Tenant B
3. Sin RLS forzado, PostgreSQL no valida aislamiento
4. Resultado: Usuario A lee/escribe datos de Tenant B

**Remediation Steps:**

**🔴 Immediate (do now):**
- Habilitar RLS en todas las 80 tablas afectadas
- Forzar RLS con ALTER TABLE ... FORCE ROW LEVEL SECURITY

**🟡 Short-term (this week):**
- Crear policies de aislamiento por tenant_id
- Validar que auth.uid() esté correctamente configurado

**🟢 Long-term (this month):**
- Automatizar aplicación de RLS en pipeline CI/CD
- Agregar tests de penetración cross-tenant

**Estimated Effort:** 4 horas

<details>
<summary>📎 Show affected objects (3 of 80)</summary>

```json
[
  {
    "schema": "public",
    "table_name": "logs",
    "issue": "RLS no habilitado"
  },
  {
    "schema": "public",
    "table_name": "audit_trail",
    "issue": "RLS no habilitado"
  },
  {
    "schema": "public",
    "table_name": "system_config",
    "issue": "RLS no forzado"
  }
]
```
</details>
```

### Hallazgos High/Medium/Low (Colapsado)

Los hallazgos de menor severidad se muestran colapsados por defecto:

```markdown
<details>
<summary>🟠 High Severity Findings (4 types, 129 instances)</summary>

#### 1. Funciones SECURITY DEFINER sin search_path
**Instances:** 59
**Description:** Funciones privilegiadas vulnerables a trojan attacks
**Impact:** Un atacante podría crear funciones maliciosas...
**Recommended action:** Fijar search_path en cada función

...
</details>

<details>
<summary>🟡 Medium Severity Findings (3 types, 39 instances)</summary>
...
</details>

<details>
<summary>🟢 Low Severity Findings (1 type, 1 instance)</summary>
...
</details>
```

### Recomendaciones de IA

```markdown
### 📋 Top Recommendations

1. Revocar GRANTS a anon/public inmediatamente (15 min, impacto máximo)
2. Forzar RLS en todas las tablas multi-tenant (30 min, impacto máximo)
3. Agregar FKs tenant_id a tabla tenants (1h, previene inconsistencias)
4. Actualizar PostgreSQL ≥15.3 (2h staging, evita CVE-2023-2454)
5. Fijar search_path en funciones SECURITY DEFINER (1.5h, previene trojans)
```

---

## ⚙️ Configuración

### Secrets de GitHub

El workflow requiere estos secrets configurados en:
**Repository → Settings → Secrets and variables → Actions**

| Secret | Descripción | Requerido |
|--------|-------------|-----------|
| `ANTHROPIC_API_KEY` | API key de Anthropic Claude | ✅ Sí |
| `GITHUB_TOKEN` | Token de GitHub | ✅ Auto-provisto |

### Variables de Entorno (CI)

El workflow automáticamente configura:

```yaml
GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
GITHUB_REPOSITORY: ${{ github.repository }}
PR_NUMBER: ${{ github.event.pull_request.number }}
GITHUB_RUN_URL: https://github.com/owner/repo/actions/runs/123
```

### Archivos del Sistema

```
.github/workflows/db-audit.yml       # Workflow de GitHub Actions
src/audit/ci-orchestrator.ts         # Orquestador CI/CD
src/audit/docker-manager.ts          # Gestión Docker PostgreSQL
src/audit/db-auditor.ts              # Ejecutor de queries
src/audit/ai-analyzer.ts             # Análisis con Claude
src/audit/queries/mini_suite_v2.sql  # 14 queries de seguridad
src/github/audit-commenter.ts        # Comentador de PRs
```

---

## 🔧 Personalización

### Modificar Queries de Seguridad

Edita `src/audit/queries/mini_suite_v2.sql` para:
- Agregar nuevas queries de auditoría
- Modificar queries existentes
- Ajustar filtros (ej: schemas a revisar)

**Ejemplo - Agregar Query 15:**

```sql
-- Query 15: Passwords sin hash
SELECT
  table_name,
  column_name
FROM information_schema.columns
WHERE column_name LIKE '%password%'
  AND data_type = 'text';
```

Luego actualiza `src/audit/db-auditor.ts` para incluir metadata.

### Cambiar Criterios de Severidad

Edita `src/audit/db-auditor.ts` método `getQueryMetadata()`:

```typescript
1: {
  name: 'Tablas sin RLS forzado',
  severity: 'CRITICAL',  // Cambiar a 'HIGH'
  description: '...'
}
```

### Ajustar Prompt de IA

Edita `src/audit/ai-analyzer.ts` método `buildPrompt()` para:
- Cambiar contexto de negocio (SaaS, tipo de datos)
- Modificar instrucciones de análisis
- Ajustar formato de respuesta

---

## 📊 Métricas y Rendimiento

### Tiempos de Ejecución

| Fase | Tiempo |
|------|--------|
| Levantar PostgreSQL | ~5-10s |
| Cargar schema | ~15s |
| Ejecutar 14 queries | ~20s |
| Destruir contenedor | ~3s |
| Análisis Claude | ~30-60s |
| **Total** | **~2-3 min** |

### Costos

**GitHub Actions:**
- Free tier: 2000 min/mes
- Costo por PR: ~3 min
- Capacidad: ~650 PRs/mes

**Claude API:**
- Modelo: Claude Sonnet 4.5
- Tokens por auditoría: ~12K (input + output)
- Costo: ~$0.15 USD por auditoría

**Total mensual (50 PRs):** ~$7.50 USD

---

## 🆚 Comparación: SQL Analysis vs DB Audit

| Aspecto | SQL Analysis | DB Security Audit |
|---------|--------------|-------------------|
| **Trigger** | Cambios en `sql/**/*.sql` | Cambios en `sql/full_schema.sql` |
| **Método** | Análisis estático del código SQL | Auditoría en PostgreSQL real |
| **Herramienta** | Claude/GPT/Gemini análisis de texto | PostgreSQL + 14 queries especializadas |
| **Tiempo** | ~30-60s | ~2-3 min |
| **Scope** | Archivos individuales modificados | Schema completo de la base de datos |
| **Output** | Análisis de código, mejores prácticas | Hallazgos de seguridad operacionales |
| **Detecta** | Syntax, RLS ausente, indices faltantes | Vulnerabilidades activas en DB |
| **Cuando usar** | Cada cambio SQL individual | Antes de merge a main/producción |

**Recomendación:** Usa ambos sistemas para máxima cobertura:
- **SQL Analysis:** Feedback rápido en cada commit
- **DB Audit:** Validación profunda antes de merge

---

## 🐛 Troubleshooting

### Error: "Docker not found"

**Causa:** Docker no está instalado/running en el runner

**Solución:** GitHub Actions runners ubuntu-latest incluyen Docker por defecto. Si usas self-hosted runners, instala Docker:

```yaml
- name: Install Docker
  run: |
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
```

### Error: "ANTHROPIC_API_KEY no configurado"

**Causa:** Secret no configurado en GitHub

**Solución:**
1. Ve a **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name: `ANTHROPIC_API_KEY`
4. Value: `sk-ant-...`

### Error: "Schema file not found"

**Causa:** El archivo `sql/full_schema.sql` no existe

**Solución:** Asegúrate de que tu schema esté en la ruta correcta:

```bash
# Verificar que existe
ls sql/full_schema.sql

# Si usas múltiples archivos, concatena:
cat sql/*.sql > sql/full_schema.sql
```

### Workflow no se ejecuta

**Causa:** Los cambios no matchean el path trigger

**Solución:** Verifica que el workflow trigger incluya tu path:

```yaml
on:
  pull_request:
    paths:
      - 'sql/**/*.sql'        # Tu path aquí
      - 'migrations/**/*.sql'
```

### Auditoría toma >5 minutos

**Causa:** Schema muy grande (>5MB) o Claude API lento

**Solución:**
1. Optimiza schema (remover datos de ejemplo)
2. Aumenta timeout en workflow:

```yaml
- name: Run Database Security Audit
  timeout-minutes: 10  # Por defecto: 5
```

---

## 📚 Referencias

- [Documentación completa del diseño](./1.mvp-local-database-audit-design.md)
- [Reporte de estado MVP](./mvp-audit-status-report.md)
- [PostgreSQL Row Level Security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [CVE-2023-2454: RLS bypass](https://nvd.nist.gov/vuln/detail/CVE-2023-2454)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/auth/row-level-security)

---

## 🎓 Próximos Pasos

1. **Validar workflow:** Crea un PR de prueba
2. **Revisar hallazgos:** Analiza el comentario generado
3. **Implementar fixes:** Corrige vulnerabilidades críticas
4. **Iterar:** Push cambios y valida que se resuelven

**¿Preguntas?** Abre un issue en el repositorio.

---

**Generado:** 2025-11-06
**Versión:** 1.0
**Mantenido por:** Equipo de Desarrollo
