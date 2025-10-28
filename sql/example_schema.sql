-- Example Supabase Schema: Multi-tenant SaaS Application

-- Tenants table
CREATE TABLE tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  domain TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT CHECK (role IN ('admin', 'user', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id),
  name TEXT NOT NULL,
  description TEXT,
  owner_id UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks table
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  assigned_to UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indices
CREATE INDEX idx_users_tenant_id ON users(tenant_id);
CREATE INDEX idx_projects_tenant_id ON projects(tenant_id);
CREATE INDEX idx_tasks_project_id ON tasks(project_id);

-- Note: This example intentionally has some issues for demonstration:
-- 1. RLS is NOT enabled on any table (CRITICAL)
-- 2. No RLS policies defined (CRITICAL)
-- 3. Missing index on tasks.assigned_to (WARNING)
-- 4. Missing index on projects.owner_id (WARNING)
