-- Example SQL schema to test interactive agent responses
-- This file contains intentional issues for the agent to detect and discuss

-- Table: api_keys
-- Purpose: Store API keys for third-party integrations
CREATE TABLE api_keys (
  id SERIAL PRIMARY KEY,
  tenant_id INTEGER NOT NULL,
  key_name VARCHAR(100) NOT NULL,
  api_key VARCHAR(255) NOT NULL,  -- Stored in plain text (security issue!)
  service_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table: user_preferences
-- Purpose: Store user settings and preferences
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  tenant_id UUID NOT NULL,
  preference_key VARCHAR(100) NOT NULL,
  preference_value TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Note: No RLS policies defined yet
-- Note: Missing indexes on tenant_id columns
-- Note: api_keys table uses SERIAL instead of UUID

-- Foreign key constraints
ALTER TABLE user_preferences
  ADD CONSTRAINT fk_user_preferences_user_id
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Some sample data
INSERT INTO api_keys (tenant_id, key_name, api_key, service_name)
VALUES
  (1, 'stripe_key', 'sk_live_1234567890abcdef', 'Stripe'),
  (1, 'sendgrid_key', 'SG.1234567890abcdef', 'SendGrid');

-- TODO: Add RLS policies
-- TODO: Add indexes
-- TODO: Hash API keys
-- TODO: Convert api_keys.id to UUID
