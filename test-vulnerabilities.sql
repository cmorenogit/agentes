-- Migration: User Profiles Table
-- ESTE SQL TIENE VULNERABILIDADES INTENCIONALES PARA TESTING

-- Tabla sin tenant_id (CRITICAL: multi-tenant issue)
CREATE TABLE user_profiles (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID NOT NULL,
full_name TEXT,
bio TEXT,
avatar_url TEXT,
created_at TIMESTAMPTZ DEFAULT now()
);

-- FK sin ON DELETE (CRITICAL)
ALTER TABLE user_profiles
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) REFERENCES auth.users(id);

-- Índice faltante en columna filtrada (WARNING)
-- No hay índice en user_id que se usa en WHERE frecuentemente

-- RLS habilitado pero sin policies (WARNING)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- API Key almacenada en texto plano (CRITICAL: CWE-256)
CREATE TABLE api_integrations (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID NOT NULL,
service_name TEXT NOT NULL,
api_key TEXT NOT NULL, -- ❌ Debería ser hash
created_at TIMESTAMPTZ DEFAULT now()
);

-- Columna sensitive sin encriptar (HIGH)
CREATE TABLE payment_methods (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID NOT NULL,
card_number TEXT, -- ❌ Sin encriptación
cvv TEXT, -- ❌ NUNCA almacenar CVV
expiry_date TEXT,
created_at TIMESTAMPTZ DEFAULT now()
);
