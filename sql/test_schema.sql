-- ============================================================================
-- TEST SCHEMA: Esquema de prueba con vulnerabilidades intencionales
-- Propósito: Validar sistema de auditoría de seguridad DB
-- Fecha: 2025-11-06
-- ============================================================================

-- Configuración inicial
SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

-- ============================================================================
-- TABLA 1: tenants (BIEN CONFIGURADA - Ejemplo de buenas prácticas)
-- ============================================================================

CREATE TABLE public.tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    settings JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- RLS correctamente habilitado y forzado
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tenants FORCE ROW LEVEL SECURITY;

-- Policy restrictiva correcta
CREATE POLICY "Users can only see their own tenant"
ON public.tenants
FOR SELECT
USING (id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

-- Índice en columna de búsqueda frecuente
CREATE INDEX idx_tenants_slug ON public.tenants(slug);

-- ============================================================================
-- TABLA 2: users (PARCIALMENTE VULNERABLE)
-- ============================================================================

CREATE TABLE public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,  -- ❌ SIN FK a tenants (VULNERABILIDAD)
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    role TEXT CHECK (role IN ('admin', 'user', 'viewer')),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ❌ RLS NO HABILITADO (VULNERABILIDAD CRÍTICA)
-- Sin ALTER TABLE users ENABLE ROW LEVEL SECURITY

-- Índice correcto
CREATE INDEX idx_users_tenant_id ON public.users(tenant_id);
CREATE INDEX idx_users_email ON public.users(email);

-- ============================================================================
-- TABLA 3: user_api_keys (CRÍTICO - Credenciales sin hash)
-- ============================================================================

CREATE TABLE public.user_api_keys (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,  -- ❌ SIN FK
    tenant_id UUID NOT NULL,  -- ❌ SIN FK
    api_key TEXT NOT NULL,  -- ❌ CRÍTICO: Inbound key sin hash
    name TEXT NOT NULL,
    last_used_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ❌ RLS NO HABILITADO (VULNERABILIDAD CRÍTICA)
-- ❌ Sin índices en FKs

-- ============================================================================
-- TABLA 4: orders (MÚLTIPLES VULNERABILIDADES)
-- ============================================================================

CREATE TABLE public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,  -- ❌ SIN FK
    user_id UUID,  -- ❌ SIN FK, permite NULL (puede ser problemático)
    status TEXT,  -- ❌ Sin CHECK constraint
    total NUMERIC(10, 2),
    metadata JSON,  -- ⚠️ Debería ser JSONB
    idempotency_key TEXT,  -- ❌ Sin UNIQUE constraint
    created_at TIMESTAMPTZ DEFAULT now()
    -- ❌ Falta updated_at
);

-- ❌ RLS NO HABILITADO
-- ❌ Sin índices

-- ============================================================================
-- TABLA 5: audit_logs (SIN RLS - Para logging)
-- ============================================================================

CREATE TABLE public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,  -- ❌ SIN FK
    user_id UUID,
    action TEXT NOT NULL,
    resource_type TEXT,
    resource_id UUID,
    details JSONB,
    ip_address INET,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ❌ RLS NO HABILITADO (logs cross-tenant visibles)
-- ❌ Sin índices en tenant_id

-- ============================================================================
-- TABLA 6: refresh_tokens (CRÍTICO - Tokens sin hash)
-- ============================================================================

CREATE TABLE public.refresh_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,  -- ❌ SIN FK
    token TEXT NOT NULL,  -- ❌ CRÍTICO: Refresh token sin hash
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ❌ RLS NO HABILITADO
-- ❌ Sin índice en token (búsqueda lenta)

-- ============================================================================
-- TABLA 7: products (BIEN CONFIGURADA CON RLS)
-- ============================================================================

CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,  -- ✅ FK correcta
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),  -- ✅ Validación
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ✅ RLS habilitado correctamente
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products FORCE ROW LEVEL SECURITY;

CREATE POLICY "Tenant isolation for products"
ON public.products
FOR ALL
USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()))
WITH CHECK (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

-- ✅ Índices correctos
CREATE INDEX idx_products_tenant_id ON public.products(tenant_id);
CREATE INDEX idx_products_is_active ON public.products(is_active);

-- ============================================================================
-- FUNCIÓN 1: SECURITY DEFINER sin search_path (VULNERABILIDAD)
-- ============================================================================

CREATE OR REPLACE FUNCTION public.get_user_orders(p_user_id UUID)
RETURNS TABLE(order_id UUID, total NUMERIC, status TEXT)
LANGUAGE plpgsql
SECURITY DEFINER  -- ❌ Sin search_path fijo (vulnerable a trojan attacks)
AS $$
BEGIN
    RETURN QUERY
    SELECT id, orders.total, orders.status
    FROM orders
    WHERE user_id = p_user_id;
END;
$$;

-- ============================================================================
-- FUNCIÓN 2: Con search_path correcto (BUENA PRÁCTICA)
-- ============================================================================

CREATE OR REPLACE FUNCTION public.get_tenant_stats(p_tenant_id UUID)
RETURNS TABLE(total_users INTEGER, total_orders INTEGER)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp  -- ✅ search_path fijo
AS $$
BEGIN
    RETURN QUERY
    SELECT
        (SELECT COUNT(*)::INTEGER FROM users WHERE tenant_id = p_tenant_id),
        (SELECT COUNT(*)::INTEGER FROM orders WHERE tenant_id = p_tenant_id);
END;
$$;

-- ============================================================================
-- TRIGGER: Con código dinámico (VULNERABILIDAD MEDIA)
-- ============================================================================

CREATE OR REPLACE FUNCTION public.log_changes()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    -- ⚠️ Usa EXECUTE con concatenación (potencialmente inseguro)
    EXECUTE 'INSERT INTO audit_logs (action, resource_type, resource_id, details) VALUES ($1, $2, $3, $4)'
    USING TG_OP, TG_TABLE_NAME, NEW.id, to_jsonb(NEW);
    RETURN NEW;
END;
$$;

CREATE TRIGGER orders_audit_trigger
    AFTER INSERT OR UPDATE ON public.orders
    FOR EACH ROW
    EXECUTE FUNCTION public.log_changes();

-- ============================================================================
-- GRANTS: Permisos amplios a anon/public (CRÍTICO)
-- ============================================================================

-- ❌ CRÍTICO: anon puede leer todas las tablas
GRANT SELECT ON public.users TO anon;
GRANT SELECT ON public.orders TO anon;
GRANT SELECT, INSERT ON public.user_api_keys TO anon;  -- ❌ Peor aún: INSERT

-- ❌ public tiene acceso amplio
GRANT SELECT ON ALL TABLES IN SCHEMA public TO public;

-- ============================================================================
-- COMENTARIOS DE RESUMEN
-- ============================================================================

COMMENT ON TABLE public.tenants IS 'Tabla bien configurada: RLS, FK, índices, validaciones ✅';
COMMENT ON TABLE public.users IS 'VULNERABLE: Sin RLS, sin FK a tenants ❌';
COMMENT ON TABLE public.user_api_keys IS 'CRÍTICO: API keys sin hash, sin RLS ❌❌';
COMMENT ON TABLE public.orders IS 'MÚLTIPLES VULNERABILIDADES: Sin RLS, sin FK, sin constraints ❌';
COMMENT ON TABLE public.audit_logs IS 'VULNERABLE: Sin RLS (logs cross-tenant) ❌';
COMMENT ON TABLE public.refresh_tokens IS 'CRÍTICO: Refresh tokens sin hash ❌❌';
COMMENT ON TABLE public.products IS 'Tabla bien configurada: RLS, FK, índices ✅';

COMMENT ON FUNCTION public.get_user_orders IS 'VULNERABLE: SECURITY DEFINER sin search_path ❌';
COMMENT ON FUNCTION public.get_tenant_stats IS 'SEGURA: search_path configurado ✅';

-- ============================================================================
-- HALLAZGOS ESPERADOS POR EL SISTEMA DE AUDITORÍA
-- ============================================================================

-- 🔴 CRÍTICOS:
--   1. Tablas sin RLS: users, user_api_keys, orders, audit_logs, refresh_tokens (5)
--   2. GRANTS a anon/public: 3 tablas con SELECT, 1 con INSERT
--   3. Credenciales sin hash: api_key, refresh_token (2 tablas)

-- 🟠 ALTOS:
--   4. SECURITY DEFINER sin search_path: get_user_orders()
--   5. Tablas tenant_id sin FK: users, user_api_keys, orders, audit_logs (4)

-- 🟡 MEDIOS:
--   6. idempotency_key sin UNIQUE: orders
--   7. Triggers con EXECUTE: log_changes()

-- 🟢 BAJOS:
--   8. JSON en lugar de JSONB: orders.metadata

-- ✅ BUENAS PRÁCTICAS:
--   - tenants: RLS + policies + índices + JSONB + UUIDs
--   - products: RLS + FK con CASCADE + validaciones + índices
--   - get_tenant_stats: SECURITY DEFINER con search_path fijo
--   - Uso de UUIDs como PKs
--   - Timestamps con DEFAULT now()
--   - CHECK constraints en products

-- ============================================================================
-- RESUMEN PARA TESTING
-- ============================================================================

-- Este schema generará aproximadamente:
-- - 5-7 hallazgos CRÍTICOS
-- - 4-5 hallazgos ALTOS
-- - 2-3 hallazgos MEDIOS
-- - 1-2 hallazgos BAJOS
-- - Risk Level: CRITICAL
-- - Score esperado: 4.5-5.5/10

-- Ideal para validar:
-- ✅ Detección de RLS ausente
-- ✅ Detección de credenciales sin hash
-- ✅ Detección de GRANTS inseguros
-- ✅ Detección de SECURITY DEFINER vulnerable
-- ✅ Detección de FK faltantes
-- ✅ Reconocimiento de buenas prácticas
-- ✅ Análisis de contexto de negocio por IA
-- ✅ Generación de remediación SQL

-- ============================================================================
