-- =======================================================================
-- MINI SUITE V2: Auditoría de Seguridad PostgreSQL Multi-Tenant
-- Base: vFinal-IA_1.md (Consolidado Multi-IA)
-- Fecha: 2025-11-04
-- =======================================================================

-- -----------------------------------------------------------------------
-- Query 1: Tablas sin RLS forzado
-- Riesgo: CRÍTICO - Permite acceso cross-tenant
-- -----------------------------------------------------------------------
SELECT
  n.nspname AS schema,
  c.relname AS table_name,
  CASE
    WHEN c.relrowsecurity = false THEN 'RLS no habilitado'
    WHEN c.relforcerowsecurity = false THEN 'RLS no forzado'
  END AS issue
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE c.relkind = 'r'
  AND n.nspname = 'public'
  AND (c.relrowsecurity = false OR c.relforcerowsecurity = false);

-- -----------------------------------------------------------------------
-- Query 2: Policies triviales (USING true / WITH CHECK true)
-- Riesgo: ALTO - Políticas no filtran por tenant_id
-- -----------------------------------------------------------------------
SELECT
  schemaname,
  tablename,
  policyname,
  cmd,
  qual AS using_clause,
  with_check
FROM pg_policies
WHERE qual ~* '^\s*true\s*$' OR with_check ~* '^\s*true\s*$';

-- -----------------------------------------------------------------------
-- Query 3: Funciones SECURITY DEFINER sin search_path fijo
-- Riesgo: ALTO - Vulnerable a trojan function attacks
-- -----------------------------------------------------------------------
SELECT
  n.nspname AS schema,
  p.proname AS function_name,
  p.prosecdef AS is_security_definer,
  p.proconfig AS configuration,
  CASE
    WHEN p.proconfig IS NULL THEN 'Sin search_path configurado'
    WHEN NOT (p.proconfig::text ~* 'search_path') THEN 'Sin search_path configurado'
    ELSE 'search_path configurado'
  END AS search_path_status
FROM pg_proc p
JOIN pg_namespace n ON n.oid = p.pronamespace
WHERE p.prosecdef = true
  AND n.nspname = 'public';

-- -----------------------------------------------------------------------
-- Query 4: Tablas con tenant_id sin FK a tenants
-- Riesgo: ALTO - Inconsistencia referencial cross-tenant
-- -----------------------------------------------------------------------
WITH tables_with_tenant_id AS (
  SELECT
    n.nspname AS schema,
    c.relname AS table_name
  FROM pg_class c
  JOIN pg_namespace n ON n.oid = c.relnamespace
  WHERE c.relkind = 'r'
    AND n.nspname = 'public'
    AND EXISTS (
      SELECT 1
      FROM information_schema.columns
      WHERE table_schema = n.nspname
        AND table_name = c.relname
        AND column_name = 'tenant_id'
    )
)
SELECT
  t.schema,
  t.table_name,
  'Sin FK a tenants' AS issue
FROM tables_with_tenant_id t
WHERE NOT EXISTS (
  SELECT 1
  FROM information_schema.table_constraints tc
  JOIN information_schema.constraint_column_usage ccu
    ON tc.constraint_name = ccu.constraint_name
  WHERE tc.table_schema = t.schema
    AND tc.table_name = t.table_name
    AND tc.constraint_type = 'FOREIGN KEY'
    AND ccu.column_name = 'tenant_id'
    AND ccu.table_name = 'tenants'
);

-- -----------------------------------------------------------------------
-- Query 5: idempotency_key sin UNIQUE
-- Riesgo: MEDIO - Permite transacciones duplicadas
-- -----------------------------------------------------------------------
SELECT
  c.table_schema AS schema,
  c.table_name,
  'idempotency_key sin constraint UNIQUE' AS issue
FROM information_schema.columns c
WHERE c.table_schema = 'public'
  AND c.column_name = 'idempotency_key'
  AND NOT EXISTS (
    SELECT 1
    FROM information_schema.table_constraints tc
    JOIN information_schema.constraint_column_usage ccu
      ON tc.constraint_name = ccu.constraint_name
    WHERE tc.table_schema = c.table_schema
      AND tc.table_name = c.table_name
      AND tc.constraint_type = 'UNIQUE'
      AND ccu.column_name = 'idempotency_key'
  );

-- -----------------------------------------------------------------------
-- Query 6: Policies de storage.objects
-- Riesgo: ALTO - Acceso no controlado a archivos cross-tenant
-- -----------------------------------------------------------------------
SELECT
  policyname,
  roles,
  cmd,
  qual AS using_clause,
  with_check
FROM pg_policies
WHERE schemaname = 'storage'
  AND tablename = 'objects';

-- -----------------------------------------------------------------------
-- Query 7: GRANTS amplios a anon/public
-- Riesgo: CRÍTICO - Usuarios no autenticados con permisos
-- -----------------------------------------------------------------------
SELECT
  table_schema AS schema,
  table_name,
  privilege_type,
  grantee
FROM information_schema.role_table_grants
WHERE table_schema IN ('public', 'storage')
  AND grantee IN ('public', 'anon')
ORDER BY table_schema, table_name, privilege_type;

-- -----------------------------------------------------------------------
-- Query 8: Extensiones con privilegios elevados
-- Riesgo: MEDIO - Extensiones peligrosas habilitadas
-- -----------------------------------------------------------------------
SELECT
  e.extname AS extension_name,
  r.rolname AS owner,
  e.extversion AS version,
  r.rolsuper AS owner_is_superuser,
  CASE
    WHEN e.extname IN ('pg_cron', 'pg_net', 'http', 'plv8', 'plpythonu')
    THEN 'Extensión potencialmente peligrosa'
    ELSE 'Revisar necesidad'
  END AS risk_level
FROM pg_extension e
JOIN pg_roles r ON r.oid = e.extowner
WHERE r.rolsuper = true
   OR e.extname IN ('pg_cron', 'pg_net', 'http', 'plv8', 'plpythonu');

-- -----------------------------------------------------------------------
-- Query 9: Validación de pgaudit
-- Riesgo: BAJO - Sin logging de auditoría
-- -----------------------------------------------------------------------
SELECT
  name,
  setting,
  source
FROM pg_settings
WHERE name IN ('shared_preload_libraries', 'pgaudit.log', 'pgaudit.log_catalog');

-- -----------------------------------------------------------------------
-- Query 10: Funciones con DEFAULT inseguros
-- Riesgo: BAJO - Uso de current_user/current_role en defaults
-- -----------------------------------------------------------------------
SELECT
  n.nspname AS schema,
  p.proname AS function_name,
  pg_get_functiondef(p.oid) AS function_definition
FROM pg_proc p
JOIN pg_namespace n ON n.oid = p.pronamespace
WHERE pg_get_functiondef(p.oid) ~* 'default\s+current_(user|role)'
  AND n.nspname = 'public'
  AND p.prokind != 'a';

-- -----------------------------------------------------------------------
-- Query 11: Triggers con código dinámico
-- Riesgo: MEDIO - SQL dinámico sin validación
-- -----------------------------------------------------------------------
SELECT
  t.tgname AS trigger_name,
  c.relname AS table_name,
  pg_get_triggerdef(t.oid) AS trigger_definition
FROM pg_trigger t
JOIN pg_class c ON c.oid = t.tgrelid
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE pg_get_triggerdef(t.oid) ~* '(EXECUTE|eval|json_to_record)'
  AND n.nspname = 'public'
  AND NOT t.tgisinternal;

-- -----------------------------------------------------------------------
-- Query 12: Default privileges amplios
-- Riesgo: ALTO - Permisos por defecto inseguros
-- -----------------------------------------------------------------------
SELECT
  pg_get_userbyid(defaclrole) AS role,
  COALESCE(defaclnamespace::regnamespace::text, 'all schemas') AS schema,
  CASE defaclobjtype
    WHEN 'r' THEN 'tables'
    WHEN 'S' THEN 'sequences'
    WHEN 'f' THEN 'functions'
    WHEN 'T' THEN 'types'
    WHEN 'n' THEN 'schemas'
  END AS object_type,
  defaclacl AS default_acl
FROM pg_default_acl
WHERE defaclnamespace IS NULL
   OR defaclnamespace IN (
     SELECT oid
     FROM pg_namespace
     WHERE nspname IN ('public', 'storage')
   );

-- -----------------------------------------------------------------------
-- Query 13: Secuencias sin restricciones
-- Riesgo: BAJO - Secuencias sin control de acceso
-- -----------------------------------------------------------------------
SELECT
  sequence_schema AS schema,
  sequence_name,
  'Revisar permisos USAGE/SELECT' AS recommendation
FROM information_schema.sequences
WHERE sequence_schema = 'public';

-- -----------------------------------------------------------------------
-- Query 14: Validación de versión PostgreSQL
-- Riesgo: CRÍTICO si < 15.3 (CVE-2023-2454: RLS bypass)
-- -----------------------------------------------------------------------
SELECT
  version() AS postgresql_version,
  CASE
    WHEN version() ~* 'PostgreSQL (1[0-4]\.|15\.[0-2])'
    THEN 'VULNERABLE a CVE-2023-2454 (RLS bypass)'
    ELSE 'Versión segura'
  END AS security_status;

-- =======================================================================
-- FIN MINI SUITE V2
-- =======================================================================
