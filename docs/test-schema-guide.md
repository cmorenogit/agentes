# 🧪 Guía del Schema SQL de Prueba

## 📋 Resumen

Archivo: `sql/test_schema.sql`

Schema diseñado **con vulnerabilidades intencionales** para validar el sistema de auditoría de seguridad de bases de datos.

---

## 🎯 Propósito

- Probar el workflow de auditoría automática en PRs
- Validar detección de vulnerabilidades
- Verificar análisis de IA con Claude
- Comprobar formato de comentarios en PR
- Demostrar capacidades del sistema

---

## 📊 Contenido del Schema

### Tablas (7 total)

| # | Tabla | Estado | Vulnerabilidades | Buenas Prácticas |
|---|-------|--------|------------------|------------------|
| 1 | `tenants` | ✅ **SEGURA** | Ninguna | RLS, FK, índices, JSONB, UUIDs |
| 2 | `users` | ❌ **VULNERABLE** | Sin RLS, sin FK | Índices, UUIDs |
| 3 | `user_api_keys` | 🔴 **CRÍTICO** | Sin RLS, sin FK, **keys sin hash** | UUIDs |
| 4 | `orders` | ❌ **VULNERABLE** | Sin RLS, sin FK, sin constraints | UUIDs |
| 5 | `audit_logs` | ❌ **VULNERABLE** | Sin RLS (cross-tenant) | JSONB |
| 6 | `refresh_tokens` | 🔴 **CRÍTICO** | Sin RLS, **tokens sin hash** | UUIDs |
| 7 | `products` | ✅ **SEGURA** | Ninguna | RLS, FK CASCADE, validaciones |

### Funciones (2 total)

| # | Función | Estado | Problema |
|---|---------|--------|----------|
| 1 | `get_user_orders()` | ❌ **VULNERABLE** | SECURITY DEFINER sin search_path |
| 2 | `get_tenant_stats()` | ✅ **SEGURA** | search_path configurado |

### Triggers (1 total)

| # | Trigger | Estado | Problema |
|---|---------|--------|----------|
| 1 | `orders_audit_trigger` | ⚠️ **MEDIO** | Usa EXECUTE con concatenación |

### Permisos (GRANTS)

```sql
❌ GRANT SELECT ON users TO anon;
❌ GRANT SELECT ON orders TO anon;
❌ GRANT SELECT, INSERT ON user_api_keys TO anon;  # ¡Peor!
❌ GRANT SELECT ON ALL TABLES TO public;
```

---

## 🔍 Hallazgos Esperados

### 🔴 Críticos (5-7 hallazgos)

1. **Tablas sin RLS:** 5 tablas
   - `users`
   - `user_api_keys`
   - `orders`
   - `audit_logs`
   - `refresh_tokens`

2. **Credenciales sin hash:** 2 tablas
   - `user_api_keys.api_key` (inbound key)
   - `refresh_tokens.token` (refresh token)

3. **GRANTS amplios a anon/public:**
   - 3 tablas con SELECT para anon
   - 1 tabla con INSERT para anon
   - Todas las tablas con SELECT para public

### 🟠 Altos (4-5 hallazgos)

4. **SECURITY DEFINER sin search_path:**
   - `get_user_orders()` vulnerable a trojan attacks

5. **Tablas tenant_id sin FK:** 4 tablas
   - `users.tenant_id`
   - `user_api_keys.tenant_id`
   - `orders.tenant_id`
   - `audit_logs.tenant_id`

6. **Otras FK faltantes:**
   - `user_api_keys.user_id`
   - `orders.user_id`
   - `refresh_tokens.user_id`

### 🟡 Medios (2-3 hallazgos)

7. **idempotency_key sin UNIQUE:**
   - `orders.idempotency_key` permite duplicados

8. **Triggers con código dinámico:**
   - `log_changes()` usa EXECUTE

9. **JSON en lugar de JSONB:**
   - `orders.metadata` debería ser JSONB

### 🟢 Bajos (1-2 hallazgos)

10. **Otros:**
    - Campos sin NOT NULL apropiados
    - Falta de constraints en algunos campos

### ✅ Buenas Prácticas Detectadas

- Uso de UUIDs como primary keys (todas las tablas)
- Timestamps con DEFAULT now()
- RLS correctamente configurado en `tenants` y `products`
- FK con ON DELETE CASCADE en `products`
- CHECK constraints en `products` (price >= 0, stock >= 0)
- Uso de JSONB en lugar de JSON (excepto orders)
- Índices en columnas de búsqueda frecuente
- Función con search_path fijo (`get_tenant_stats`)

---

## 📈 Métricas Esperadas

```
Total Findings: 12-15
🔴 Critical: 5-7
🟠 High: 4-5
🟡 Medium: 2-3
🟢 Low: 1-2

Risk Level: 🔴 CRITICAL
Overall Score: ~4.5-5.5/10
Est. Fix Time: ~3-4 horas
```

---

## 🚀 Cómo Usar

### Opción 1: Probar en PR (Automático)

El schema de prueba ya está configurado como `sql/full_schema.sql`.

1. **Crear Pull Request:**
   ```bash
   # Ya pusheado a: claude/incomplete-request-011CUr4R6mRpQzhsq7Cr3HZs
   # Ve a GitHub y crea el PR
   ```

2. **Workflow se ejecuta automáticamente:**
   - Detecta cambios en `sql/full_schema.sql`
   - Levanta PostgreSQL
   - Carga `test_schema.sql`
   - Ejecuta 14 queries
   - Analiza con Claude
   - Comenta en PR (~2-3 min)

3. **Revisa el comentario:**
   - Hallazgos críticos expandidos
   - Contexto de negocio
   - Remediación detallada
   - Código SQL para fixes

### Opción 2: Probar Localmente

```bash
# 1. Asegurar que Docker esté running
docker ps

# 2. Configurar API key
export ANTHROPIC_API_KEY=your_key_here

# 3. Ejecutar auditoría local
npm run audit:db

# 4. Revisar reporte
cat docs/audit-report.md
```

### Opción 3: Testing en CI localmente

Simula el entorno CI:

```bash
# Configurar variables CI
export GITHUB_TOKEN=your_token
export ANTHROPIC_API_KEY=your_key
export GITHUB_REPOSITORY=cmorenogit/agentes
export PR_NUMBER=999
export GITHUB_RUN_URL=https://github.com/cmorenogit/agentes/actions/runs/123

# Ejecutar orquestador CI
npm run audit:db:ci
```

---

## 🔄 Restaurar Schema Original

Cuando termines de probar:

```bash
# Restaurar schema original
cp sql/full_schema.sql.backup sql/full_schema.sql

# Commit
git add sql/full_schema.sql
git commit -m "restore: Revert to original full_schema.sql"
git push
```

---

## 📝 Ejemplo de Comentario Esperado

### Resumen Ejecutivo

```markdown
## 🔒 Database Security Audit Report

📅 Timestamp: 2025-11-06T15:30:00Z
📂 Schema: sql/full_schema.sql
🤖 Analyzed by: Claude Sonnet 4.5

### 📊 Executive Summary

| Metric | Value |
|--------|-------|
| Total Findings | 14 |
| 🔴 Critical | 7 |
| 🟠 High | 5 |
| 🟡 Medium | 2 |
| 🟢 Low | 0 |
| Risk Level | 🔴 CRITICAL |

### 📈 Severity Distribution

```
CRITICAL  ████████████████████  50%  (7)
HIGH      █████████████████     36%  (5)
MEDIUM    ███████               14%  (2)
LOW                              0%  (0)
```

> **🚨 CRITICAL** - 7 critical security issue(s) detected.
> **Immediate action required** before merging.
```

### Hallazgos Críticos Detallados

```markdown
### 🔴 Critical Findings (7)

#### 1. Tablas sin RLS forzado

**Instances Found:** 5

**Description:** Las siguientes tablas no tienen Row Level Security
habilitado: users, user_api_keys, orders, audit_logs, refresh_tokens

**Business Impact:**
En un sistema SaaS multi-tenant, esto permite que un usuario malicioso
de Tenant A modifique su JWT para incluir el org_id de Tenant B y
acceder a TODOS sus datos sin restricción alguna. Esto constituye una
violación CRÍTICA de aislamiento multi-tenant.

**Attack Scenario:**
1. Atacante de Tenant A se autentica normalmente
2. Captura su JWT token de autenticación
3. Modifica el claim org_id para igualar al de Tenant B
4. Realiza queries a la API con el token modificado
5. PostgreSQL, sin RLS, no valida aislamiento
6. Resultado: Acceso completo a datos de Tenant B

**Remediation Steps:**

🔴 Immediate (do now):
- Habilitar RLS en las 5 tablas afectadas
- ALTER TABLE users ENABLE ROW LEVEL SECURITY
- ALTER TABLE users FORCE ROW LEVEL SECURITY
- Repetir para user_api_keys, orders, audit_logs, refresh_tokens

🟡 Short-term (this week):
- Crear policies de aislamiento por tenant_id
- Validar que auth.uid() funcione correctamente
- Testing de penetración cross-tenant

🟢 Long-term (this month):
- Automatizar RLS en pipeline CI/CD
- Agregar tests automatizados de aislamiento
- Documentar políticas de seguridad multi-tenant

**Estimated Effort:** 3 horas

#### 2. Credenciales almacenadas sin hash

**Instances Found:** 2

**Description:** user_api_keys.api_key y refresh_tokens.token
almacenados en texto plano

**Business Impact:**
Si la base de datos es comprometida (dump, backup expuesto, SQL injection),
el atacante obtiene TODAS las API keys y refresh tokens en texto plano.
Esto permite suplantación de identidad masiva y acceso permanente.

[... más detalles ...]
```

---

## 🎓 Lecciones del Schema

Este schema de prueba enseña:

1. **RLS es obligatorio** en tablas multi-tenant
2. **Credenciales SIEMPRE hasheadas** (inbound)
3. **FKs protegen integridad** referencial
4. **GRANTS restrictivos** por defecto
5. **SECURITY DEFINER** necesita search_path
6. **Validaciones previenen** datos corruptos
7. **Índices mejoran** performance
8. **JSONB > JSON** siempre

---

## ✅ Validación del Sistema

Este schema permite validar que el sistema de auditoría:

- ✅ Detecta tablas sin RLS
- ✅ Identifica credenciales sin hash
- ✅ Encuentra GRANTS inseguros
- ✅ Detecta funciones SECURITY DEFINER vulnerables
- ✅ Identifica FK faltantes
- ✅ Reconoce buenas prácticas
- ✅ Genera análisis contextualizado por IA
- ✅ Proporciona remediación SQL ejecutable
- ✅ Calcula scores correctamente
- ✅ Prioriza hallazgos por severidad
- ✅ Estima esfuerzo de remediación

---

## 📚 Referencias

- [Documentación de auditoría CI](./database-audit-ci-guide.md)
- [Diseño MVP original](./1.mvp-local-database-audit-design.md)
- [PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [Supabase Best Practices](https://supabase.com/docs/guides/auth/row-level-security)

---

**Creado:** 2025-11-06
**Versión:** 1.0
**Propósito:** Testing y validación
