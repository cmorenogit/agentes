


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE SCHEMA IF NOT EXISTS "auth";


ALTER SCHEMA "auth" OWNER TO "supabase_admin";


CREATE SCHEMA IF NOT EXISTS "public";


ALTER SCHEMA "public" OWNER TO "pg_database_owner";


COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE TYPE "auth"."aal_level" AS ENUM (
    'aal1',
    'aal2',
    'aal3'
);


ALTER TYPE "auth"."aal_level" OWNER TO "supabase_auth_admin";


CREATE TYPE "auth"."code_challenge_method" AS ENUM (
    's256',
    'plain'
);


ALTER TYPE "auth"."code_challenge_method" OWNER TO "supabase_auth_admin";


CREATE TYPE "auth"."factor_status" AS ENUM (
    'unverified',
    'verified'
);


ALTER TYPE "auth"."factor_status" OWNER TO "supabase_auth_admin";


CREATE TYPE "auth"."factor_type" AS ENUM (
    'totp',
    'webauthn',
    'phone'
);


ALTER TYPE "auth"."factor_type" OWNER TO "supabase_auth_admin";


CREATE TYPE "auth"."oauth_authorization_status" AS ENUM (
    'pending',
    'approved',
    'denied',
    'expired'
);


ALTER TYPE "auth"."oauth_authorization_status" OWNER TO "supabase_auth_admin";


CREATE TYPE "auth"."oauth_client_type" AS ENUM (
    'public',
    'confidential'
);


ALTER TYPE "auth"."oauth_client_type" OWNER TO "supabase_auth_admin";


CREATE TYPE "auth"."oauth_registration_type" AS ENUM (
    'dynamic',
    'manual'
);


ALTER TYPE "auth"."oauth_registration_type" OWNER TO "supabase_auth_admin";


CREATE TYPE "auth"."oauth_response_type" AS ENUM (
    'code'
);


ALTER TYPE "auth"."oauth_response_type" OWNER TO "supabase_auth_admin";


CREATE TYPE "auth"."one_time_token_type" AS ENUM (
    'confirmation_token',
    'reauthentication_token',
    'recovery_token',
    'email_change_token_new',
    'email_change_token_current',
    'phone_change_token'
);


ALTER TYPE "auth"."one_time_token_type" OWNER TO "supabase_auth_admin";


CREATE TYPE "public"."allowed_granters" AS ENUM (
    'all',
    'managers',
    'hr',
    'custom'
);


ALTER TYPE "public"."allowed_granters" OWNER TO "postgres";


CREATE TYPE "public"."allowed_origin" AS ENUM (
    'app',
    'slack'
);


ALTER TYPE "public"."allowed_origin" OWNER TO "postgres";


CREATE TYPE "public"."app_role" AS ENUM (
    'admin',
    'manager',
    'hr',
    'user'
);


ALTER TYPE "public"."app_role" OWNER TO "postgres";


CREATE TYPE "public"."approval_status" AS ENUM (
    'pending',
    'approved',
    'rejected'
);


ALTER TYPE "public"."approval_status" OWNER TO "postgres";


CREATE TYPE "public"."award_eligibility" AS ENUM (
    'all',
    'managers',
    'same-team',
    'same-department',
    'custom'
);


ALTER TYPE "public"."award_eligibility" OWNER TO "postgres";


CREATE TYPE "public"."award_periodicity" AS ENUM (
    'monthly',
    'quarterly',
    'semiannual',
    'annual',
    'ad-hoc'
);


ALTER TYPE "public"."award_periodicity" OWNER TO "postgres";


CREATE TYPE "public"."award_phase" AS ENUM (
    'setup',
    'nomination',
    'voting',
    'announcement',
    'completed'
);


ALTER TYPE "public"."award_phase" OWNER TO "postgres";


CREATE TYPE "public"."award_scope" AS ENUM (
    'individual',
    'team',
    'department',
    'company'
);


ALTER TYPE "public"."award_scope" OWNER TO "postgres";


CREATE TYPE "public"."award_status" AS ENUM (
    'draft',
    'active',
    'closed',
    'archived'
);


ALTER TYPE "public"."award_status" OWNER TO "postgres";


CREATE TYPE "public"."award_voting_mode" AS ENUM (
    'public',
    'jury',
    'mixed'
);


ALTER TYPE "public"."award_voting_mode" OWNER TO "postgres";


CREATE TYPE "public"."badge_category" AS ENUM (
    'values',
    'custom'
);


ALTER TYPE "public"."badge_category" OWNER TO "postgres";


CREATE TYPE "public"."badge_status" AS ENUM (
    'draft',
    'active',
    'inactive'
);


ALTER TYPE "public"."badge_status" OWNER TO "postgres";


CREATE TYPE "public"."batch_queue_status" AS ENUM (
    'queued',
    'processing',
    'completed',
    'failed'
);


ALTER TYPE "public"."batch_queue_status" OWNER TO "postgres";


CREATE TYPE "public"."budget_tx_type" AS ENUM (
    'ALLOCATE',
    'ADJUST',
    'CONSUME',
    'REFUND',
    'CARRYOVER_IN',
    'CARRYOVER_OUT',
    'LOCK',
    'UNLOCK'
);


ALTER TYPE "public"."budget_tx_type" OWNER TO "postgres";


CREATE TYPE "public"."challenge_action_type" AS ENUM (
    'manual_entry',
    'recognition_received',
    'self_reported'
);


ALTER TYPE "public"."challenge_action_type" OWNER TO "postgres";


CREATE TYPE "public"."challenge_family" AS ENUM (
    'valores',
    'crecimiento',
    'performance'
);


ALTER TYPE "public"."challenge_family" OWNER TO "postgres";


CREATE TYPE "public"."challenge_nudge_type" AS ENUM (
    'reminder',
    'streak',
    'closing_soon',
    'congratulations'
);


ALTER TYPE "public"."challenge_nudge_type" OWNER TO "postgres";


CREATE TYPE "public"."challenge_participant_status" AS ENUM (
    'active',
    'completed',
    'dropped'
);


ALTER TYPE "public"."challenge_participant_status" OWNER TO "postgres";


CREATE TYPE "public"."challenge_registration_type" AS ENUM (
    'manual',
    'automatic',
    'invitation'
);


ALTER TYPE "public"."challenge_registration_type" OWNER TO "postgres";


CREATE TYPE "public"."challenge_status" AS ENUM (
    'draft',
    'scheduled',
    'active',
    'paused',
    'completed',
    'archived'
);


ALTER TYPE "public"."challenge_status" OWNER TO "postgres";


CREATE TYPE "public"."challenge_tier" AS ENUM (
    'bronze',
    'silver',
    'gold'
);


ALTER TYPE "public"."challenge_tier" OWNER TO "postgres";


CREATE TYPE "public"."challenge_type" AS ENUM (
    'individual',
    'team'
);


ALTER TYPE "public"."challenge_type" OWNER TO "postgres";


CREATE TYPE "public"."challenge_validation_status" AS ENUM (
    'pending',
    'approved',
    'rejected'
);


ALTER TYPE "public"."challenge_validation_status" OWNER TO "postgres";


CREATE TYPE "public"."currency_code" AS ENUM (
    'CLP',
    'COP',
    'MXN',
    'PEN',
    'USD',
    'EUR',
    'BGN',
    'CZK',
    'DKK',
    'HUF',
    'PLN',
    'RON',
    'SEK',
    'ARS',
    'BOB',
    'BRL',
    'CAD',
    'CRC',
    'DOP',
    'GTQ',
    'HNL',
    'NIO',
    'PAB',
    'PYG',
    'UYU',
    'VES',
    'GBP',
    'CHF',
    'NOK',
    'ISK',
    'HRK',
    'RSD',
    'TRY',
    'UAH',
    'RUB',
    'BAM',
    'MKD',
    'ALL',
    'MDL',
    'GEL',
    'AMD',
    'AZN'
);


ALTER TYPE "public"."currency_code" OWNER TO "postgres";


COMMENT ON TYPE "public"."currency_code" IS 'Códigos de moneda ISO 4217 soportados para América y Europa';



CREATE TYPE "public"."funding_status" AS ENUM (
    'CREATED',
    'PENDING',
    'PAID',
    'FAILED',
    'CANCELED'
);


ALTER TYPE "public"."funding_status" OWNER TO "postgres";


CREATE TYPE "public"."ledger_entry_type" AS ENUM (
    'FUNDING_CREDIT',
    'ADMIN_DISBURSE_DEBIT',
    'ADJUSTMENT',
    'REVERSAL',
    'GIFT_CARD_REDEMPTION',
    'HOLD',
    'HOLD_RELEASE',
    'REDEMPTION_DEBIT'
);


ALTER TYPE "public"."ledger_entry_type" OWNER TO "postgres";


COMMENT ON TYPE "public"."ledger_entry_type" IS 'Wallet ledger entry types:
- FUNDING_CREDIT: Points added via funding order
- ADJUSTMENT: Manual adjustments by admin
- ADMIN_DISBURSE_DEBIT: Points removed by admin
- GIFT_CARD_REDEMPTION: Points used for gift card (committed HOLD)
- HOLD: Points temporarily reserved for pending transaction (added in reserve-execute-commit pattern)
- HOLD_RELEASE: Points returned from failed/cancelled transaction (added in reserve-execute-commit pattern)
- REVERSAL: Reversal of previous transaction';



CREATE TYPE "public"."mission_type" AS ENUM (
    'complete_module',
    'daily_login',
    'complete_quiz',
    'watch_video',
    'read_content',
    'complete_practice',
    'progressive',
    'milestone',
    'daily'
);


ALTER TYPE "public"."mission_type" OWNER TO "postgres";


COMMENT ON TYPE "public"."mission_type" IS 'Types of training missions: progressive (incremental progress), milestone (one-time achievement), daily (daily habit), and legacy types for compatibility';



CREATE TYPE "public"."occasion_status" AS ENUM (
    'draft',
    'active',
    'inactive'
);


ALTER TYPE "public"."occasion_status" OWNER TO "postgres";


CREATE TYPE "public"."progress_type" AS ENUM (
    'manual',
    'autodeclarado',
    'reconocimiento'
);


ALTER TYPE "public"."progress_type" OWNER TO "postgres";


CREATE TYPE "public"."recognition_source" AS ENUM (
    'manual',
    'automatic_event',
    'award',
    'occasion',
    'recognition_type'
);


ALTER TYPE "public"."recognition_source" OWNER TO "postgres";


CREATE TYPE "public"."recognition_status" AS ENUM (
    'draft',
    'active',
    'inactive'
);


ALTER TYPE "public"."recognition_status" OWNER TO "postgres";


CREATE TYPE "public"."transaction_type" AS ENUM (
    'earned',
    'spent',
    'expired',
    'adjusted',
    'reverted'
);


ALTER TYPE "public"."transaction_type" OWNER TO "postgres";


CREATE TYPE "public"."visibility_type" AS ENUM (
    'public',
    'private'
);


ALTER TYPE "public"."visibility_type" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "auth"."email"() RETURNS "text"
    LANGUAGE "sql" STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.email', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'email')
  )::text
$$;


ALTER FUNCTION "auth"."email"() OWNER TO "supabase_auth_admin";


COMMENT ON FUNCTION "auth"."email"() IS 'Deprecated. Use auth.jwt() -> ''email'' instead.';



CREATE OR REPLACE FUNCTION "auth"."jwt"() RETURNS "jsonb"
    LANGUAGE "sql" STABLE
    AS $$
  select 
    coalesce(
        nullif(current_setting('request.jwt.claim', true), ''),
        nullif(current_setting('request.jwt.claims', true), '')
    )::jsonb
$$;


ALTER FUNCTION "auth"."jwt"() OWNER TO "supabase_auth_admin";


CREATE OR REPLACE FUNCTION "auth"."role"() RETURNS "text"
    LANGUAGE "sql" STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.role', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')
  )::text
$$;


ALTER FUNCTION "auth"."role"() OWNER TO "supabase_auth_admin";


COMMENT ON FUNCTION "auth"."role"() IS 'Deprecated. Use auth.jwt() -> ''role'' instead.';



CREATE OR REPLACE FUNCTION "auth"."uid"() RETURNS "uuid"
    LANGUAGE "sql" STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
  )::uuid
$$;


ALTER FUNCTION "auth"."uid"() OWNER TO "supabase_auth_admin";


COMMENT ON FUNCTION "auth"."uid"() IS 'Deprecated. Use auth.jwt() -> ''sub'' instead.';



CREATE OR REPLACE FUNCTION "public"."admin_disburse"("_disb_id" "uuid", "_actor" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _disb admin_disbursements;
  _balance tenant_wallet_balances;
  _existing_ledger wallet_ledger;
BEGIN
  SELECT * INTO _disb FROM admin_disbursements WHERE id = _disb_id;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Disbursement not found');
  END IF;
  
  IF _disb.idempotency_key IS NOT NULL THEN
    SELECT * INTO _existing_ledger 
    FROM wallet_ledger 
    WHERE tenant_id = _disb.tenant_id 
      AND idempotency_key = _disb.idempotency_key;
    
    IF FOUND THEN
      RETURN jsonb_build_object('success', true, 'message', 'Already disbursed');
    END IF;
  END IF;
  
  SELECT * INTO _balance FROM tenant_wallet_balances WHERE tenant_id = _disb.tenant_id;
  
  IF _balance.available_points < _disb.amount_points THEN
    RETURN jsonb_build_object(
      'success', false, 
      'error', 'Insufficient balance',
      'available', _balance.available_points,
      'required', _disb.amount_points
    );
  END IF;
  
  INSERT INTO wallet_ledger (
    tenant_id, entry_type, amount_points, reference_type,
    reference_id, actor_user_id, idempotency_key, note
  ) VALUES (
    _disb.tenant_id, 'ADMIN_DISBURSE_DEBIT', -_disb.amount_points,
    'admin_disbursement', _disb.id, _actor, _disb.idempotency_key, _disb.reason
  );
  
  INSERT INTO audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
  VALUES (_disb.tenant_id, _actor, 'ADMIN_DISBURSE', 'disbursement', _disb.id,
          jsonb_build_object('points', _disb.amount_points, 'reason', _disb.reason));
  
  RETURN jsonb_build_object('success', true, 'points_disbursed', _disb.amount_points);
END;
$$;


ALTER FUNCTION "public"."admin_disburse"("_disb_id" "uuid", "_actor" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."apply_budget_policy"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date", "_envelope_points" integer, "_policy_id" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  RETURN jsonb_build_object(
    'status', 'not_implemented', 
    'message', 'Smart Budgets (A-D) pendiente'
  );
END;
$$;


ALTER FUNCTION "public"."apply_budget_policy"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date", "_envelope_points" integer, "_policy_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."archive_award"("_award_id" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _tenant_id uuid;
  _user_id uuid;
  _is_authorized boolean;
BEGIN
  -- Get current user
  _user_id := auth.uid();
  
  -- Get user's tenant
  _tenant_id := public.get_user_tenant(_user_id);
  
  IF _tenant_id IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'User not associated with any tenant'
    );
  END IF;
  
  -- Check if user has admin or manager role
  _is_authorized := public.has_role(_user_id, _tenant_id, 'admin'::app_role) 
                    OR public.has_role(_user_id, _tenant_id, 'manager'::app_role);
  
  IF NOT _is_authorized THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'Unauthorized: Admin or Manager role required'
    );
  END IF;
  
  -- Archive the award
  UPDATE public.awards
  SET 
    archived_at = now(),
    status = 'archived'::award_status,
    updated_at = now()
  WHERE id = _award_id AND tenant_id = _tenant_id;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'Award not found or access denied'
    );
  END IF;
  
  RETURN jsonb_build_object('success', true);
END;
$$;


ALTER FUNCTION "public"."archive_award"("_award_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_automatic_events"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'CREATE', 'automatic_event', NEW.id, to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'UPDATE', 'automatic_event', NEW.id, to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values)
        VALUES (OLD.tenant_id, auth.uid(), 'DELETE', 'automatic_event', OLD.id, to_jsonb(OLD));
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$;


ALTER FUNCTION "public"."audit_automatic_events"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_awards"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'CREATE', 'award', NEW.id, to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'UPDATE', 'award', NEW.id, to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values)
        VALUES (OLD.tenant_id, auth.uid(), 'DELETE', 'award', OLD.id, to_jsonb(OLD));
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$;


ALTER FUNCTION "public"."audit_awards"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_badges"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'CREATE', 'badge', NEW.id, to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'UPDATE', 'badge', NEW.id, to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values)
        VALUES (OLD.tenant_id, auth.uid(), 'DELETE', 'badge', OLD.id, to_jsonb(OLD));
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$;


ALTER FUNCTION "public"."audit_badges"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_global_provider_configs"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.provider_audit_logs (
      tenant_id,
      provider_id,
      user_id,
      action,
      new_values,
      metadata
    ) VALUES (
      '00000000-0000-0000-0000-000000000000'::uuid, -- Global config
      NEW.provider_id,
      auth.uid(),
      'global_config_created',
      jsonb_build_object(
        'mode', NEW.mode,
        'endpoint', NEW.endpoint
      ),
      jsonb_build_object('type', 'global')
    );
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO public.provider_audit_logs (
      tenant_id,
      provider_id,
      user_id,
      action,
      old_values,
      new_values,
      metadata
    ) VALUES (
      '00000000-0000-0000-0000-000000000000'::uuid,
      NEW.provider_id,
      auth.uid(),
      'global_config_updated',
      jsonb_build_object(
        'mode', OLD.mode,
        'endpoint', OLD.endpoint
      ),
      jsonb_build_object(
        'mode', NEW.mode,
        'endpoint', NEW.endpoint
      ),
      jsonb_build_object('type', 'global')
    );
  END IF;
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."audit_global_provider_configs"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_occasions"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'CREATE', 'occasion', NEW.id, to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'UPDATE', 'occasion', NEW.id, to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values)
        VALUES (OLD.tenant_id, auth.uid(), 'DELETE', 'occasion', OLD.id, to_jsonb(OLD));
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$;


ALTER FUNCTION "public"."audit_occasions"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_organizational_values"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'CREATE', 'organizational_value', NEW.id, to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'UPDATE', 'organizational_value', NEW.id, to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values)
        VALUES (OLD.tenant_id, auth.uid(), 'DELETE', 'organizational_value', OLD.id, to_jsonb(OLD));
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$;


ALTER FUNCTION "public"."audit_organizational_values"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_provider_config_changes"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.provider_audit_logs (tenant_id, provider_id, config_id, user_id, action, new_values)
    VALUES (NEW.tenant_id, NEW.provider_id, NEW.id, auth.uid(), 'connected', to_jsonb(NEW));
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO public.provider_audit_logs (tenant_id, provider_id, config_id, user_id, action, old_values, new_values)
    VALUES (NEW.tenant_id, NEW.provider_id, NEW.id, auth.uid(), 'updated', to_jsonb(OLD), to_jsonb(NEW));
    
    -- Log specific action if default changed
    IF NEW.is_default = true AND OLD.is_default = false THEN
      INSERT INTO public.provider_audit_logs (tenant_id, provider_id, config_id, user_id, action, new_values)
      VALUES (NEW.tenant_id, NEW.provider_id, NEW.id, auth.uid(), 'set_default', jsonb_build_object('is_default', true));
    END IF;
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO public.provider_audit_logs (tenant_id, provider_id, config_id, user_id, action, old_values)
    VALUES (OLD.tenant_id, OLD.provider_id, OLD.id, auth.uid(), 'disconnected', to_jsonb(OLD));
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$;


ALTER FUNCTION "public"."audit_provider_config_changes"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_recognition_types"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'CREATE', 'recognition_type', NEW.id, to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'UPDATE', 'recognition_type', NEW.id, to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values)
        VALUES (OLD.tenant_id, auth.uid(), 'DELETE', 'recognition_type', OLD.id, to_jsonb(OLD));
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$;


ALTER FUNCTION "public"."audit_recognition_types"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_recognitions"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'CREATE', 'recognition', NEW.id, to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values, new_values)
        VALUES (NEW.tenant_id, auth.uid(), 'UPDATE', 'recognition', NEW.id, to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO public.audit_logs (tenant_id, user_id, action, resource_type, resource_id, old_values)
        VALUES (OLD.tenant_id, auth.uid(), 'DELETE', 'recognition', OLD.id, to_jsonb(OLD));
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$;


ALTER FUNCTION "public"."audit_recognitions"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."audit_tenant_tremendous_mapping"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.provider_audit_logs (
      tenant_id,
      provider_id,
      user_id,
      action,
      new_values
    ) VALUES (
      NEW.tenant_id,
      'tremendous',
      auth.uid(),
      'mapping_created',
      jsonb_build_object(
        'team_id', NEW.tremendous_team_id,
        'budget_id', NEW.tremendous_budget_id
      )
    );
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO public.provider_audit_logs (
      tenant_id,
      provider_id,
      user_id,
      action,
      old_values,
      new_values
    ) VALUES (
      NEW.tenant_id,
      'tremendous',
      auth.uid(),
      'mapping_updated',
      jsonb_build_object(
        'team_id', OLD.tremendous_team_id,
        'budget_id', OLD.tremendous_budget_id
      ),
      jsonb_build_object(
        'team_id', NEW.tremendous_team_id,
        'budget_id', NEW.tremendous_budget_id
      )
    );
  END IF;
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."audit_tenant_tremendous_mapping"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."auto_categorize_reward_items"("p_tenant_id" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
  category_record RECORD;
  rule JSONB;
  items_assigned INTEGER := 0;
  total_mappings INTEGER := 0;
BEGIN
  -- Clear existing auto-assigned mappings for this tenant
  DELETE FROM reward_item_categories
  WHERE tenant_id = p_tenant_id AND assignment_type = 'auto';
  
  -- Process each category
  FOR category_record IN 
    SELECT id, name, matching_rules 
    FROM reward_categories 
    WHERE tenant_id = p_tenant_id AND visible = true
  LOOP
    -- Process each matching rule
    FOR rule IN SELECT * FROM jsonb_array_elements(category_record.matching_rules)
    LOOP
      -- Apply rule based on operator
      IF (rule->>'operator') = 'contains_any' THEN
        -- Match items where field contains any of the values
        IF (rule->>'field') = 'tags' THEN
          -- Insert mappings for items matching tags
          INSERT INTO reward_item_categories (tenant_id, reward_item_id, category_id, assignment_type)
          SELECT DISTINCT 
            p_tenant_id,
            ri.id,
            category_record.id,
            'auto'
          FROM reward_items ri
          CROSS JOIN jsonb_array_elements_text(rule->'values') AS value
          WHERE ri.tags && ARRAY[value::text]
            AND EXISTS (
              SELECT 1 FROM tenant_reward_visibility trv
              WHERE trv.tenant_id = p_tenant_id 
                AND trv.reward_item_id = ri.id 
                AND trv.visible = true
            )
          ON CONFLICT (tenant_id, reward_item_id, category_id) DO NOTHING;
          
          GET DIAGNOSTICS items_assigned = ROW_COUNT;
          total_mappings := total_mappings + items_assigned;
          
        ELSIF (rule->>'field') = 'brand' THEN
          -- Insert mappings for items matching brand
          INSERT INTO reward_item_categories (tenant_id, reward_item_id, category_id, assignment_type)
          SELECT DISTINCT 
            p_tenant_id,
            ri.id,
            category_record.id,
            'auto'
          FROM reward_items ri
          CROSS JOIN jsonb_array_elements_text(rule->'values') AS value
          WHERE ri.brand ILIKE '%' || value::text || '%'
            AND EXISTS (
              SELECT 1 FROM tenant_reward_visibility trv
              WHERE trv.tenant_id = p_tenant_id 
                AND trv.reward_item_id = ri.id 
                AND trv.visible = true
            )
          ON CONFLICT (tenant_id, reward_item_id, category_id) DO NOTHING;
          
          GET DIAGNOSTICS items_assigned = ROW_COUNT;
          total_mappings := total_mappings + items_assigned;
        END IF;
      END IF;
    END LOOP;
  END LOOP;
  
  -- Update items_count for each category
  UPDATE reward_categories rc
  SET items_count = (
    SELECT COUNT(DISTINCT ric.reward_item_id)
    FROM reward_item_categories ric
    WHERE ric.category_id = rc.id AND ric.tenant_id = p_tenant_id
  )
  WHERE rc.tenant_id = p_tenant_id;
  
  RETURN jsonb_build_object(
    'success', true,
    'tenant_id', p_tenant_id,
    'total_mappings', total_mappings
  );
END;
$$;


ALTER FUNCTION "public"."auto_categorize_reward_items"("p_tenant_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."calculate_avg_time_to_publish"("_tenant_id" "uuid") RETURNS interval
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _avg_interval INTERVAL;
BEGIN
  SELECT AVG(published_at - ai_suggested_at) INTO _avg_interval
  FROM trainings
  WHERE tenant_id = _tenant_id
    AND ai_suggested_at IS NOT NULL
    AND published_at IS NOT NULL
    AND published_at > ai_suggested_at;
  
  RETURN COALESCE(_avg_interval, INTERVAL '0 seconds');
END;
$$;


ALTER FUNCTION "public"."calculate_avg_time_to_publish"("_tenant_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."calculate_tenant_apply_rate"("_tenant_id" "uuid") RETURNS integer
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _total_missions BIGINT;
  _completed_missions BIGINT;
  _apply_rate INTEGER;
BEGIN
  -- Count total active missions across all trainings
  SELECT COUNT(*) INTO _total_missions
  FROM user_mission_completions umc
  WHERE umc.tenant_id = _tenant_id;
  
  -- Count completed missions
  SELECT COUNT(*) INTO _completed_missions
  FROM user_mission_completions umc
  WHERE umc.tenant_id = _tenant_id
    AND umc.completed = true;
  
  -- Calculate percentage
  IF _total_missions > 0 THEN
    _apply_rate := ROUND((_completed_missions::float / _total_missions::float) * 100)::integer;
  ELSE
    _apply_rate := 0;
  END IF;
  
  RETURN _apply_rate;
END;
$$;


ALTER FUNCTION "public"."calculate_tenant_apply_rate"("_tenant_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."cleanup_expired_sso_tokens"() RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  DELETE FROM public.sso_tokens
  WHERE expires_at < now() OR used_at IS NOT NULL;
END;
$$;


ALTER FUNCTION "public"."cleanup_expired_sso_tokens"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."cleanup_old_rate_limits"() RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  DELETE FROM public.api_rate_limits
  WHERE window_start < (now() - interval '1 hour');
END;
$$;


ALTER FUNCTION "public"."cleanup_old_rate_limits"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."complete_training_section"("_user_id" "uuid", "_tenant_id" "uuid", "_training_id" "uuid", "_section_id" "uuid", "_enrollment_id" "uuid", "_completion_method" "text", "_metadata" "jsonb") RETURNS "uuid"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _completion_id UUID;
BEGIN
  -- Verify that the authenticated user is the same as the one being registered
  IF auth.uid() != _user_id THEN
    RAISE EXCEPTION 'Unauthorized: Cannot complete section for another user';
  END IF;

  -- Insert or update the completion
  INSERT INTO public.training_section_completions (
    tenant_id,
    user_id,
    training_id,
    section_id,
    enrollment_id,
    completion_method,
    completed_at,
    metadata
  )
  VALUES (
    _tenant_id,
    _user_id,
    _training_id,
    _section_id,
    _enrollment_id,
    _completion_method,
    NOW(),
    _metadata
  )
  ON CONFLICT (user_id, section_id)
  DO UPDATE SET
    completed_at = NOW(),
    completion_method = EXCLUDED.completion_method,
    metadata = EXCLUDED.metadata
  RETURNING id INTO _completion_id;

  RETURN _completion_id;
END;
$$;


ALTER FUNCTION "public"."complete_training_section"("_user_id" "uuid", "_tenant_id" "uuid", "_training_id" "uuid", "_section_id" "uuid", "_enrollment_id" "uuid", "_completion_method" "text", "_metadata" "jsonb") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."decrement_candidates_count"("_award_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE public.awards
  SET candidates_count = GREATEST(candidates_count - 1, 0),
      updated_at = now()
  WHERE id = _award_id;
END;
$$;


ALTER FUNCTION "public"."decrement_candidates_count"("_award_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."decrement_category_items_count"("p_category_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE reward_categories
  SET items_count = GREATEST(items_count - 1, 0)
  WHERE id = p_category_id;
END;
$$;


ALTER FUNCTION "public"."decrement_category_items_count"("p_category_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."decrement_nomination_votes"("_nomination_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE public.nominations
  SET votes = GREATEST(votes - 1, 0),
      updated_at = now()
  WHERE id = _nomination_id;
END;
$$;


ALTER FUNCTION "public"."decrement_nomination_votes"("_nomination_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."ensure_single_default_provider"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  IF NEW.is_default = true THEN
    -- Unset other defaults for this tenant
    UPDATE public.tenant_provider_configs
    SET is_default = false
    WHERE tenant_id = NEW.tenant_id
      AND id != NEW.id
      AND is_default = true;
  END IF;
  
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."ensure_single_default_provider"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."extract_subdomain_from_url"("url" "text") RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $_$
DECLARE
  domain text;
BEGIN
  -- Remove protocol (http://, https://)
  domain := regexp_replace(url, '^https?://', '', 'i');
  
  -- Remove www prefix
  domain := regexp_replace(domain, '^www\.', '', 'i');
  
  -- Remove path and query parameters
  domain := regexp_replace(domain, '/.*$', '');
  
  -- Extract first part (subdomain/company name)
  domain := split_part(domain, '.', 1);
  
  -- Return lowercase
  RETURN lower(domain);
END;
$_$;


ALTER FUNCTION "public"."extract_subdomain_from_url"("url" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."generate_invitation_token"() RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'extensions'
    AS $$
DECLARE
    base64_token text;
BEGIN
    -- Generate random bytes using fully qualified name and encode as base64
    base64_token := encode(extensions.gen_random_bytes(32), 'base64');
    
    -- Convert to URL-safe base64 by replacing characters
    base64_token := replace(base64_token, '+', '-');
    base64_token := replace(base64_token, '/', '_');
    base64_token := replace(base64_token, '=', '');
    
    RETURN base64_token;
END;
$$;


ALTER FUNCTION "public"."generate_invitation_token"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_jwt_email"() RETURNS "text"
    LANGUAGE "sql" STABLE SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
  SELECT COALESCE(
    current_setting('request.jwt.claims', true)::json->>'email',
    ''
  )::text
$$;


ALTER FUNCTION "public"."get_jwt_email"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_organizational_value_usage"("_value_id" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
    _tenant_id uuid;
    _value_name text;
    _badges_count integer;
    _awards_count integer;
    _events_count integer;
    _recognition_types_count integer;
    _total_count integer;
BEGIN
    -- Obtener tenant_id y name del valor
    SELECT tenant_id, name INTO _tenant_id, _value_name
    FROM public.organizational_values
    WHERE id = _value_id;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('error', 'Value not found');
    END IF;

    -- Contar badges que usan este valor
    SELECT COUNT(*)::integer INTO _badges_count
    FROM public.badges
    WHERE tenant_id = _tenant_id
        AND archived_at IS NULL
        AND _value_name = ANY(associated_values);

    -- Contar awards que usan este valor
    SELECT COUNT(*)::integer INTO _awards_count
    FROM public.awards
    WHERE tenant_id = _tenant_id
        AND archived_at IS NULL
        AND _value_name = ANY(associated_values);

    -- Contar automatic events que usan este valor
    SELECT COUNT(*)::integer INTO _events_count
    FROM public.automatic_events
    WHERE tenant_id = _tenant_id
        AND archived_at IS NULL
        AND _value_name = ANY(associated_values);

    -- Contar recognition types que mencionan este valor
    SELECT COUNT(*)::integer INTO _recognition_types_count
    FROM public.recognition_types
    WHERE tenant_id = _tenant_id
        AND archived_at IS NULL
        AND (
            organizational_values LIKE '%' || _value_name || '%'
            OR organizational_values = _value_name
        );

    _total_count := _badges_count + _awards_count + _events_count + _recognition_types_count;

    RETURN jsonb_build_object(
        'value_id', _value_id,
        'value_name', _value_name,
        'total', _total_count,
        'badges', _badges_count,
        'awards', _awards_count,
        'events', _events_count,
        'recognition_types', _recognition_types_count
    );
END;
$$;


ALTER FUNCTION "public"."get_organizational_value_usage"("_value_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_user_tenant"("_user_id" "uuid") RETURNS "uuid"
    LANGUAGE "sql" STABLE SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
    SELECT tenant_id
    FROM public.user_roles
    WHERE user_id = _user_id
    LIMIT 1
$$;


ALTER FUNCTION "public"."get_user_tenant"("_user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_user_tenant_with_brand"("_user_id" "uuid") RETURNS TABLE("tenant_id" "uuid", "brand_id" "uuid")
    LANGUAGE "sql" STABLE SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
  SELECT t.id as tenant_id, t.brand_id
  FROM public.user_roles ur
  JOIN public.tenants t ON t.id = ur.tenant_id
  WHERE ur.user_id = _user_id
  LIMIT 1;
$$;


ALTER FUNCTION "public"."get_user_tenant_with_brand"("_user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    INSERT INTO public.profiles (id, email, display_name, first_name, last_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(
          NEW.raw_user_meta_data ->> 'display_name',
          CONCAT_WS(' ', NEW.raw_user_meta_data ->> 'first_name', NEW.raw_user_meta_data ->> 'last_name'),
          NEW.email
        ),
        NEW.raw_user_meta_data ->> 'first_name',
        NEW.raw_user_meta_data ->> 'last_name'
    );
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."has_role"("_user_id" "uuid", "_tenant_id" "uuid", "_role" "public"."app_role") RETURNS boolean
    LANGUAGE "sql" STABLE SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.user_roles
        WHERE user_id = _user_id
          AND tenant_id = _tenant_id
          AND role = _role
    )
$$;


ALTER FUNCTION "public"."has_role"("_user_id" "uuid", "_tenant_id" "uuid", "_role" "public"."app_role") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."increment_budget_allocation"("_budget_id" "uuid", "_points" integer) RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE recognition_budgets
  SET allocated_points = allocated_points + _points,
      updated_at = now()
  WHERE id = _budget_id;
END;
$$;


ALTER FUNCTION "public"."increment_budget_allocation"("_budget_id" "uuid", "_points" integer) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."increment_candidates_count"("_award_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE public.awards
  SET candidates_count = candidates_count + 1,
      updated_at = now()
  WHERE id = _award_id;
END;
$$;


ALTER FUNCTION "public"."increment_candidates_count"("_award_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."increment_category_items_count"("p_category_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE reward_categories
  SET items_count = items_count + 1
  WHERE id = p_category_id;
END;
$$;


ALTER FUNCTION "public"."increment_category_items_count"("p_category_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."increment_nomination_votes"("_nomination_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  UPDATE public.nominations
  SET votes = votes + 1,
      updated_at = now()
  WHERE id = _nomination_id;
END;
$$;


ALTER FUNCTION "public"."increment_nomination_votes"("_nomination_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."initialize_user_missions"("_user_id" "uuid", "_training_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _tenant_id UUID;
  _mission RECORD;
BEGIN
  -- Obtener tenant del usuario
  SELECT tenant_id INTO _tenant_id
  FROM user_roles
  WHERE user_id = _user_id
  LIMIT 1;
  
  -- Insertar completaciones para cada misión activa del entrenamiento
  FOR _mission IN 
    SELECT id, target_value, tenant_id
    FROM training_micro_missions
    WHERE training_id = _training_id 
      AND is_active = true
  LOOP
    INSERT INTO user_mission_completions (
      tenant_id,
      user_id,
      mission_id,
      training_id,
      target_value
    ) VALUES (
      _mission.tenant_id,
      _user_id,
      _mission.id,
      _training_id,
      _mission.target_value
    )
    ON CONFLICT (user_id, mission_id) DO NOTHING;
  END LOOP;
END;
$$;


ALTER FUNCTION "public"."initialize_user_missions"("_user_id" "uuid", "_training_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."is_feature_enabled"("_tenant_id" "uuid", "_flag_key" "text") RETURNS boolean
    LANGUAGE "sql" STABLE SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
  SELECT COALESCE(
    (SELECT enabled FROM public.tenant_feature_flags 
     WHERE tenant_id = _tenant_id AND flag_key = _flag_key),
    false
  )
$$;


ALTER FUNCTION "public"."is_feature_enabled"("_tenant_id" "uuid", "_flag_key" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."mark_funding_paid_and_credit"("_funding_id" "uuid", "_actor" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _order funding_orders;
  _existing_ledger wallet_ledger;
BEGIN
  SELECT * INTO _order FROM funding_orders WHERE id = _funding_id;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Funding order not found');
  END IF;
  
  IF _order.status = 'PAID' THEN
    RETURN jsonb_build_object('success', true, 'message', 'Already paid');
  END IF;
  
  IF _order.idempotency_key IS NOT NULL THEN
    SELECT * INTO _existing_ledger 
    FROM wallet_ledger 
    WHERE tenant_id = _order.tenant_id 
      AND idempotency_key = _order.idempotency_key;
    
    IF FOUND THEN
      RETURN jsonb_build_object('success', true, 'message', 'Already credited');
    END IF;
  END IF;
  
  UPDATE funding_orders 
  SET status = 'PAID', updated_at = now()
  WHERE id = _funding_id;
  
  INSERT INTO wallet_ledger (
    tenant_id, entry_type, amount_points, amount_local, currency,
    fx_rate_to_point, reference_type, reference_id, actor_user_id,
    idempotency_key, note
  ) VALUES (
    _order.tenant_id, 'FUNDING_CREDIT', _order.points_to_credit,
    _order.amount_local, _order.currency, _order.fx_rate_to_point,
    'funding_order', _order.id, _actor, _order.idempotency_key,
    'Funding credited: ' || COALESCE(_order.provider_payment_id, 'manual')
  );
  
  INSERT INTO audit_logs (tenant_id, user_id, action, resource_type, resource_id, new_values)
  VALUES (_order.tenant_id, _actor, 'FUNDING_PAID', 'funding_order', _order.id, 
          jsonb_build_object('points', _order.points_to_credit));
  
  RETURN jsonb_build_object('success', true, 'points_credited', _order.points_to_credit);
END;
$$;


ALTER FUNCTION "public"."mark_funding_paid_and_credit"("_funding_id" "uuid", "_actor" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."populate_user_dates_for_tenant"("_tenant_id" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  user_record RECORD;
  user_count INTEGER := 0;
  updated_count INTEGER := 0;
  _birth_date DATE;
  _hire_date DATE;
  _age_years INTEGER;
  _tenure_days INTEGER;
  _min_hire_date DATE;
  _month_index INTEGER := 0;
  _months_array INTEGER[] := ARRAY[1,2,3,4,5,6,7,8,9,10,11,12];
BEGIN
  -- Count active users in tenant
  SELECT COUNT(*) INTO user_count
  FROM public.profiles p
  JOIN public.user_roles ur ON ur.user_id = p.id
  WHERE ur.tenant_id = _tenant_id AND p.is_active = true;
  
  -- Shuffle months array randomly
  _months_array := (
    SELECT ARRAY_AGG(month ORDER BY random())
    FROM unnest(_months_array) AS month
  );
  
  -- Iterate over each user
  FOR user_record IN 
    SELECT p.id, p.email, p.first_name, p.last_name
    FROM public.profiles p
    JOIN public.user_roles ur ON ur.user_id = p.id
    WHERE ur.tenant_id = _tenant_id AND p.is_active = true
    ORDER BY random()
  LOOP
    -- Generate random age between 22 and 55 years
    _age_years := 22 + floor(random() * 34)::INTEGER;
    
    -- Assign month from array (cycle if more users than months)
    _month_index := (_month_index % 12) + 1;
    
    -- Generate date_of_birth
    _birth_date := DATE(
      EXTRACT(YEAR FROM CURRENT_DATE) - _age_years || '-' ||
      LPAD(_months_array[_month_index]::TEXT, 2, '0') || '-' ||
      LPAD((1 + floor(random() * 28))::TEXT, 2, '0')
    );
    
    -- Determine tenure according to distribution
    CASE 
      WHEN random() < 0.20 THEN -- 20% new (1-30 days)
        _tenure_days := 1 + floor(random() * 30)::INTEGER;
      WHEN random() < 0.50 THEN -- 30% recent (31 days - 1 year)
        _tenure_days := 31 + floor(random() * 334)::INTEGER;
      WHEN random() < 0.80 THEN -- 30% intermediate (1-5 years)
        _tenure_days := 365 + floor(random() * 1460)::INTEGER;
      ELSE -- 20% veterans (5-15 years)
        _tenure_days := 1825 + floor(random() * 3650)::INTEGER;
    END CASE;
    
    -- Calculate hire_date
    _hire_date := CURRENT_DATE - _tenure_days;
    
    -- Validate that hire_date is after turning 18
    _min_hire_date := _birth_date + INTERVAL '18 years';
    IF _hire_date < _min_hire_date THEN
      _hire_date := _min_hire_date + INTERVAL '1 day';
    END IF;
    
    -- Update profile
    UPDATE public.profiles
    SET 
      date_of_birth = _birth_date,
      hire_date = _hire_date,
      updated_at = NOW()
    WHERE id = user_record.id;
    
    updated_count := updated_count + 1;
  END LOOP;
  
  RETURN jsonb_build_object(
    'success', true,
    'tenant_id', _tenant_id,
    'total_users', user_count,
    'updated_users', updated_count,
    'message', 'Fechas actualizadas exitosamente'
  );
END;
$$;


ALTER FUNCTION "public"."populate_user_dates_for_tenant"("_tenant_id" "uuid") OWNER TO "postgres";


COMMENT ON FUNCTION "public"."populate_user_dates_for_tenant"("_tenant_id" "uuid") IS 'Populates date_of_birth and hire_date for active users in a tenant with realistic distributions';



CREATE OR REPLACE FUNCTION "public"."publish_budgets"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  RETURN jsonb_build_object(
    'status', 'not_implemented', 
    'message', 'Smart Budgets (A-D) pendiente'
  );
END;
$$;


ALTER FUNCTION "public"."publish_budgets"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."recalculate_all_tenant_budgets"("_tenant_id" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  budget_rec RECORD;
  results jsonb := '[]'::jsonb;
  recalc_result jsonb;
  total_count integer := 0;
  success_count integer := 0;
BEGIN
  FOR budget_rec IN 
    SELECT id, scope_id
    FROM recognition_budgets 
    WHERE tenant_id = _tenant_id
      AND is_published = true
  LOOP
    total_count := total_count + 1;
    recalc_result := recalculate_budget_consumed(budget_rec.id);
    
    IF (recalc_result->>'success')::boolean THEN
      success_count := success_count + 1;
    END IF;
    
    results := results || jsonb_build_array(recalc_result);
  END LOOP;
  
  RETURN jsonb_build_object(
    'success', true,
    'tenant_id', _tenant_id,
    'total_budgets', total_count,
    'recalculated', success_count,
    'details', results
  );
END;
$$;


ALTER FUNCTION "public"."recalculate_all_tenant_budgets"("_tenant_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."recalculate_budget_consumed"("_budget_id" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _tenant_id uuid;
  _scope_type text;
  _scope_id uuid;
  _period_start date;
  _period_end date;
  _total_consumed bigint;
  _scope_data record;
BEGIN
  -- Obtener datos del budget
  SELECT b.tenant_id, s.scope_type, b.scope_id, b.period_start, b.period_end
  INTO _tenant_id, _scope_type, _scope_id, _period_start, _period_end
  FROM recognition_budgets b
  JOIN recognition_scopes s ON s.id = b.scope_id
  WHERE b.id = _budget_id;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'Budget not found'
    );
  END IF;

  -- Obtener datos adicionales del scope según tipo
  SELECT * INTO _scope_data FROM recognition_scopes WHERE id = _scope_id;
  
  -- Calcular consumed según scope type
  IF _scope_type = 'user' THEN
    -- Budget USUARIO: sumar solo reconocimientos del usuario específico
    SELECT COALESCE(SUM(rr.points_awarded), 0)::bigint INTO _total_consumed
    FROM recognition_transactions rt
    JOIN recognition_recipients rr ON rr.transaction_id = rt.id
    WHERE rt.tenant_id = _tenant_id
      AND rt.status = 'completed'
      AND DATE(rt.completed_at) >= _period_start
      AND DATE(rt.completed_at) <= _period_end
      AND rr.receiver_id = _scope_data.user_id;

  ELSIF _scope_type = 'manager' THEN
    -- Budget MANAGER: sumar reconocimientos del manager específico
    SELECT COALESCE(SUM(rr.points_awarded), 0)::bigint INTO _total_consumed
    FROM recognition_transactions rt
    JOIN recognition_recipients rr ON rr.transaction_id = rt.id
    WHERE rt.tenant_id = _tenant_id
      AND rt.status = 'completed'
      AND DATE(rt.completed_at) >= _period_start
      AND DATE(rt.completed_at) <= _period_end
      AND rr.receiver_id = _scope_data.manager_user_id;

  ELSIF _scope_type = 'team' THEN
    -- Budget EQUIPO: sumar reconocimientos de todos los miembros del equipo
    SELECT COALESCE(SUM(rr.points_awarded), 0)::bigint INTO _total_consumed
    FROM recognition_transactions rt
    JOIN recognition_recipients rr ON rr.transaction_id = rt.id
    JOIN profiles p ON p.id = rr.receiver_id
    WHERE rt.tenant_id = _tenant_id
      AND rt.status = 'completed'
      AND DATE(rt.completed_at) >= _period_start
      AND DATE(rt.completed_at) <= _period_end
      AND p.team_id = _scope_data.team_id;

  ELSIF _scope_type = 'department' THEN
    -- Budget DEPARTAMENTO: sumar reconocimientos de todos los miembros del departamento
    SELECT COALESCE(SUM(rr.points_awarded), 0)::bigint INTO _total_consumed
    FROM recognition_transactions rt
    JOIN recognition_recipients rr ON rr.transaction_id = rt.id
    JOIN profiles p ON p.id = rr.receiver_id
    JOIN departments d ON d.name = p.department
    WHERE rt.tenant_id = _tenant_id
      AND rt.status = 'completed'
      AND DATE(rt.completed_at) >= _period_start
      AND DATE(rt.completed_at) <= _period_end
      AND d.id = _scope_data.department_id;

  ELSIF _scope_type = 'company' THEN
    -- Budget COMPAÑÍA: sumar TODOS los reconocimientos del tenant
    SELECT COALESCE(SUM(rr.points_awarded), 0)::bigint INTO _total_consumed
    FROM recognition_transactions rt
    JOIN recognition_recipients rr ON rr.transaction_id = rt.id
    WHERE rt.tenant_id = _tenant_id
      AND rt.status = 'completed'
      AND DATE(rt.completed_at) >= _period_start
      AND DATE(rt.completed_at) <= _period_end;
  
  ELSE
    RETURN jsonb_build_object(
      'success', false,
      'error', 'Unknown scope type: ' || _scope_type
    );
  END IF;
  
  -- Actualizar consumed_points
  UPDATE recognition_budgets
  SET consumed_points = _total_consumed,
      updated_at = now()
  WHERE id = _budget_id;
  
  RETURN jsonb_build_object(
    'success', true,
    'budget_id', _budget_id,
    'scope_type', _scope_type,
    'consumed_points', _total_consumed,
    'period_start', _period_start,
    'period_end', _period_end
  );
END;
$$;


ALTER FUNCTION "public"."recalculate_budget_consumed"("_budget_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."reconcile_reward_visibility"("p_tenant_id" "uuid", "p_user_id" "uuid", "p_provider_id" "text" DEFAULT 'tremendous'::"text") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  v_missing_count integer;
  v_created_count integer;
  v_total_items integer;
BEGIN
  -- Contar total de items del proveedor
  SELECT COUNT(*) INTO v_total_items
  FROM reward_items
  WHERE provider_id = p_provider_id;
  
  -- Contar items sin visibilidad para este tenant
  SELECT COUNT(*) INTO v_missing_count
  FROM reward_items ri
  WHERE ri.provider_id = p_provider_id
    AND NOT EXISTS (
      SELECT 1 
      FROM tenant_reward_visibility trv 
      WHERE trv.tenant_id = p_tenant_id 
        AND trv.reward_item_id = ri.id
    );
  
  -- Crear registros de visibilidad para items faltantes
  INSERT INTO tenant_reward_visibility (tenant_id, reward_item_id, visible, updated_by, updated_at)
  SELECT 
    p_tenant_id,
    ri.id,
    true,
    p_user_id,
    NOW()
  FROM reward_items ri
  WHERE ri.provider_id = p_provider_id
    AND NOT EXISTS (
      SELECT 1 
      FROM tenant_reward_visibility trv 
      WHERE trv.tenant_id = p_tenant_id 
        AND trv.reward_item_id = ri.id
    )
  ON CONFLICT (tenant_id, reward_item_id) DO NOTHING;
  
  GET DIAGNOSTICS v_created_count = ROW_COUNT;
  
  RETURN jsonb_build_object(
    'total_items', v_total_items,
    'missing_items', v_missing_count,
    'created_records', v_created_count,
    'success', true,
    'provider_id', p_provider_id
  );
END;
$$;


ALTER FUNCTION "public"."reconcile_reward_visibility"("p_tenant_id" "uuid", "p_user_id" "uuid", "p_provider_id" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."seed_reward_categories"("p_tenant_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
BEGIN
  INSERT INTO reward_categories (tenant_id, name, description, icon, color, bg_color, matching_rules, sort_order) VALUES
  (p_tenant_id, 'Donaciones', 'Dona a ONGs con matching corporativo', 'Heart', '#EC4899', '#FCE7F3', 
   '[{"field": "tags", "operator": "contains_any", "values": ["charity", "donation", "nonprofit"]}]'::jsonb, 0),
  (p_tenant_id, 'Catálogo Global', 'Productos y servicios variados', 'ShoppingBag', '#8B5CF6', '#EDE9FE', 
   '[{"field": "brand", "operator": "contains_any", "values": ["Amazon", "eBay", "Walmart", "Target"]}]'::jsonb, 1),
  (p_tenant_id, 'Experiencias', 'Actividades y vivencias únicas', 'Plane', '#F59E0B', '#FEF3C7', 
   '[{"field": "tags", "operator": "contains_any", "values": ["travel", "experiences", "activities", "entertainment"]}]'::jsonb, 2),
  (p_tenant_id, 'Bienestar', 'Beneficios de salud y bienestar', 'HeartPulse', '#10B981', '#D1FAE5', 
   '[{"field": "tags", "operator": "contains_any", "values": ["health", "wellness", "fitness", "spa"]}]'::jsonb, 3),
  (p_tenant_id, 'Tecnología', 'Gadgets y dispositivos', 'Smartphone', '#3B82F6', '#DBEAFE', 
   '[{"field": "brand", "operator": "contains_any", "values": ["Apple", "Samsung", "Microsoft", "Best Buy"]}]'::jsonb, 4),
  (p_tenant_id, 'Gastronomía', 'Vouchers de restaurantes', 'Coffee', '#EF4444', '#FEE2E2', 
   '[{"field": "brand", "operator": "contains_any", "values": ["Starbucks", "Uber Eats", "DoorDash"]}]'::jsonb, 5)
  ON CONFLICT (tenant_id, name) DO NOTHING;
END;
$$;


ALTER FUNCTION "public"."seed_reward_categories"("p_tenant_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."suggest_challenge_icon"("challenge_name" "text", "challenge_description" "text", "challenge_family" "text", "challenge_type" "text") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  suggested_icon text;
  suggested_color text;
  suggested_bg_color text;
BEGIN
  -- Default values
  suggested_icon := 'Target';
  suggested_color := '#3B82F6';
  suggested_bg_color := '#EFF6FF';
  
  -- Analyze challenge properties to suggest appropriate icon
  -- Valores challenges
  IF challenge_family = 'valores' THEN
    IF challenge_name ILIKE '%colabora%' OR challenge_description ILIKE '%colabora%' OR challenge_description ILIKE '%equipo%' THEN
      suggested_icon := 'Users';
      suggested_color := '#10B981';
      suggested_bg_color := '#D1FAE5';
    ELSIF challenge_name ILIKE '%innova%' OR challenge_description ILIKE '%innova%' OR challenge_description ILIKE '%creativi%' THEN
      suggested_icon := 'Lightbulb';
      suggested_color := '#F59E0B';
      suggested_bg_color := '#FEF3C7';
    ELSIF challenge_name ILIKE '%mentor%' OR challenge_description ILIKE '%mentor%' OR challenge_description ILIKE '%enseñ%' THEN
      suggested_icon := 'GraduationCap';
      suggested_color := '#8B5CF6';
      suggested_bg_color := '#EDE9FE';
    ELSIF challenge_name ILIKE '%lider%' OR challenge_description ILIKE '%lider%' THEN
      suggested_icon := 'Crown';
      suggested_color := '#F59E0B';
      suggested_bg_color := '#FEF3C7';
    ELSIF challenge_name ILIKE '%comunica%' OR challenge_description ILIKE '%comunica%' THEN
      suggested_icon := 'MessageSquare';
      suggested_color := '#3B82F6';
      suggested_bg_color := '#DBEAFE';
    ELSE
      suggested_icon := 'Heart';
      suggested_color := '#EC4899';
      suggested_bg_color := '#FCE7F3';
    END IF;
  
  -- Crecimiento challenges
  ELSIF challenge_family = 'crecimiento' THEN
    IF challenge_name ILIKE '%entrena%' OR challenge_description ILIKE '%entrena%' OR challenge_description ILIKE '%curso%' THEN
      suggested_icon := 'BookOpen';
      suggested_color := '#8B5CF6';
      suggested_bg_color := '#EDE9FE';
    ELSIF challenge_name ILIKE '%certifica%' OR challenge_description ILIKE '%certifica%' THEN
      suggested_icon := 'Award';
      suggested_color := '#F59E0B';
      suggested_bg_color := '#FEF3C7';
    ELSIF challenge_name ILIKE '%lectur%' OR challenge_description ILIKE '%lectur%' OR challenge_description ILIKE '%libro%' THEN
      suggested_icon := 'BookMarked';
      suggested_color := '#6366F1';
      suggested_bg_color := '#E0E7FF';
    ELSIF challenge_name ILIKE '%habilidad%' OR challenge_description ILIKE '%habilidad%' THEN
      suggested_icon := 'Wrench';
      suggested_color := '#14B8A6';
      suggested_bg_color := '#CCFBF1';
    ELSE
      suggested_icon := 'TrendingUp';
      suggested_color := '#10B981';
      suggested_bg_color := '#D1FAE5';
    END IF;
  
  -- Performance challenges
  ELSIF challenge_family = 'performance' THEN
    IF challenge_name ILIKE '%venta%' OR challenge_description ILIKE '%venta%' THEN
      suggested_icon := 'DollarSign';
      suggested_color := '#10B981';
      suggested_bg_color := '#D1FAE5';
    ELSIF challenge_name ILIKE '%productividad%' OR challenge_description ILIKE '%productividad%' OR challenge_description ILIKE '%eficiencia%' THEN
      suggested_icon := 'Zap';
      suggested_color := '#F59E0B';
      suggested_bg_color := '#FEF3C7';
    ELSIF challenge_name ILIKE '%calidad%' OR challenge_description ILIKE '%calidad%' THEN
      suggested_icon := 'CheckCircle';
      suggested_color := '#10B981';
      suggested_bg_color := '#D1FAE5';
    ELSIF challenge_name ILIKE '%cliente%' OR challenge_description ILIKE '%cliente%' OR challenge_description ILIKE '%satisfacción%' THEN
      suggested_icon := 'Smile';
      suggested_color := '#F59E0B';
      suggested_bg_color := '#FEF3C7';
    ELSIF challenge_name ILIKE '%tiempo%' OR challenge_description ILIKE '%tiempo%' OR challenge_description ILIKE '%velocidad%' THEN
      suggested_icon := 'Clock';
      suggested_color := '#3B82F6';
      suggested_bg_color := '#DBEAFE';
    ELSE
      suggested_icon := 'BarChart';
      suggested_color := '#6366F1';
      suggested_bg_color := '#E0E7FF';
    END IF;
  END IF;
  
  -- Wellness/bienestar related
  IF challenge_name ILIKE '%wellness%' OR challenge_name ILIKE '%bienestar%' OR challenge_name ILIKE '%salud%' 
     OR challenge_description ILIKE '%wellness%' OR challenge_description ILIKE '%bienestar%' OR challenge_description ILIKE '%salud%' THEN
    suggested_icon := 'Heart';
    suggested_color := '#EC4899';
    suggested_bg_color := '#FCE7F3';
  END IF;
  
  -- Steps/pasos related
  IF challenge_name ILIKE '%paso%' OR challenge_description ILIKE '%paso%' OR challenge_description ILIKE '%camina%' THEN
    suggested_icon := 'Footprints';
    suggested_color := '#14B8A6';
    suggested_bg_color := '#CCFBF1';
  END IF;
  
  -- Sports/deporte related
  IF challenge_name ILIKE '%deport%' OR challenge_description ILIKE '%deport%' OR challenge_description ILIKE '%ejercicio%' THEN
    suggested_icon := 'Activity';
    suggested_color := '#EF4444';
    suggested_bg_color := '#FEE2E2';
  END IF;
  
  RETURN jsonb_build_object(
    'icon', suggested_icon,
    'color', suggested_color,
    'bg_color', suggested_bg_color
  );
END;
$$;


ALTER FUNCTION "public"."suggest_challenge_icon"("challenge_name" "text", "challenge_description" "text", "challenge_family" "text", "challenge_type" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."trigger_decrement_nomination_votes"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  PERFORM decrement_nomination_votes(OLD.nomination_id);
  PERFORM update_award_votes_count(OLD.award_id);
  RETURN OLD;
END;
$$;


ALTER FUNCTION "public"."trigger_decrement_nomination_votes"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."trigger_gift_card_email"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  request_id bigint;
  supabase_url text := 'https://uzziggtodurpxgztxqjg.supabase.co';
  service_role_key text;
BEGIN
  -- Only send email if status changed to 'fulfilled' and has redemption info
  IF NEW.status = 'fulfilled' AND OLD.status != 'fulfilled' AND 
     (NEW.redemption_url IS NOT NULL OR NEW.redemption_code IS NOT NULL) THEN
    
    -- Get the service role key from Vault
    BEGIN
      SELECT decrypted_secret INTO service_role_key
      FROM vault.decrypted_secrets
      WHERE name = 'SUPABASE_SERVICE_ROLE_KEY'
      LIMIT 1;
    EXCEPTION WHEN OTHERS THEN
      service_role_key := NULL;
    END;
    
    -- If no service role key, log and exit
    IF service_role_key IS NULL THEN
      RAISE NOTICE 'Cannot send gift card email: SUPABASE_SERVICE_ROLE_KEY not found in Vault';
      RETURN NEW;
    END IF;
    
    -- Call the edge function asynchronously using pg_net
    SELECT net.http_post(
      url := format('%s/functions/v1/send-gift-card-email', supabase_url),
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', format('Bearer %s', service_role_key)
      ),
      body := jsonb_build_object('order_id', NEW.id::text)
    ) INTO request_id;
    
    -- Log for debugging
    RAISE NOTICE 'Gift card email triggered for order % (request_id: %)', NEW.id, request_id;
  END IF;
  
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."trigger_gift_card_email"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."trigger_increment_nomination_votes"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  PERFORM increment_nomination_votes(NEW.nomination_id);
  PERFORM update_award_votes_count(NEW.award_id);
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."trigger_increment_nomination_votes"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."trigger_update_candidates_count"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  IF NEW.status = 'candidate' AND OLD.status != 'candidate' THEN
    PERFORM increment_candidates_count(NEW.award_id);
  END IF;
  
  IF OLD.status = 'candidate' AND NEW.status != 'candidate' THEN
    PERFORM decrement_candidates_count(NEW.award_id);
  END IF;
  
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."trigger_update_candidates_count"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_award_votes_count"("_award_id" "uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  _votes_count int;
BEGIN
  SELECT COUNT(*) INTO _votes_count
  FROM public.votes
  WHERE award_id = _award_id;
  
  UPDATE public.awards
  SET votes_count = _votes_count,
      updated_at = now()
  WHERE id = _award_id;
END;
$$;


ALTER FUNCTION "public"."update_award_votes_count"("_award_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_brands_updated_at"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_brands_updated_at"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_organizational_value_usage_counts"() RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
    value_record RECORD;
    usage_data jsonb;
BEGIN
    -- Recalcular usage_count para todos los valores activos
    FOR value_record IN 
        SELECT id FROM public.organizational_values WHERE status = 'active'
    LOOP
        usage_data := public.get_organizational_value_usage(value_record.id);
        
        UPDATE public.organizational_values
        SET usage_count = (usage_data->>'total')::integer,
            updated_at = now()
        WHERE id = value_record.id;
    END LOOP;
END;
$$;


ALTER FUNCTION "public"."update_organizational_value_usage_counts"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_training_updated_at"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_training_updated_at"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_updated_at_column"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_updated_at_column"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_updated_at_global_configs"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_updated_at_global_configs"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_user_balance"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
    -- Insert or update balance
    INSERT INTO public.user_point_balances (
        user_id, 
        tenant_id, 
        current_balance,
        lifetime_earned,
        lifetime_spent,
        last_transaction_at,
        updated_at
    )
    VALUES (
        NEW.user_id,
        NEW.tenant_id,
        NEW.balance_after,
        CASE WHEN NEW.transaction_type IN ('earned', 'adjusted') AND NEW.points_delta > 0 
             THEN NEW.points_delta ELSE 0 END,
        CASE WHEN NEW.transaction_type IN ('spent', 'adjusted') AND NEW.points_delta < 0 
             THEN ABS(NEW.points_delta) ELSE 0 END,
        NEW.created_at,
        now()
    )
    ON CONFLICT (user_id, tenant_id) DO UPDATE SET
        current_balance = NEW.balance_after,
        lifetime_earned = user_point_balances.lifetime_earned + 
            CASE WHEN NEW.transaction_type IN ('earned', 'adjusted') AND NEW.points_delta > 0 
                 THEN NEW.points_delta ELSE 0 END,
        lifetime_spent = user_point_balances.lifetime_spent + 
            CASE WHEN NEW.transaction_type IN ('spent', 'adjusted') AND NEW.points_delta < 0 
                 THEN ABS(NEW.points_delta) ELSE 0 END,
        last_transaction_at = NEW.created_at,
        updated_at = now();
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_user_balance"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."use_invitation"("_token" "text", "_user_id" "uuid") RETURNS TABLE("tenant_id" "uuid", "role" "public"."app_role")
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
    invitation_record RECORD;
BEGIN
    -- Get the invitation
    SELECT ti.tenant_id, ti.role, ti.email, ti.expires_at, ti.used_at
    INTO invitation_record
    FROM public.tenant_invitations ti
    WHERE ti.token = _token;
    
    -- Check if invitation exists and is valid
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Invalid invitation token';
    END IF;
    
    IF invitation_record.expires_at <= now() THEN
        RAISE EXCEPTION 'Invitation has expired';
    END IF;
    
    IF invitation_record.used_at IS NOT NULL THEN
        RAISE EXCEPTION 'Invitation has already been used';
    END IF;
    
    -- Mark invitation as used
    UPDATE public.tenant_invitations 
    SET used_at = now(), updated_at = now()
    WHERE token = _token;
    
    -- Create user role
    INSERT INTO public.user_roles (user_id, tenant_id, role)
    VALUES (_user_id, invitation_record.tenant_id, invitation_record.role);
    
    -- Return tenant and role
    RETURN QUERY SELECT invitation_record.tenant_id, invitation_record.role;
END;
$$;


ALTER FUNCTION "public"."use_invitation"("_token" "text", "_user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."user_belongs_to_tenant"("p_user_id" "uuid", "p_tenant_id" "uuid") RETURNS boolean
    LANGUAGE "sql" STABLE SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
  SELECT EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = p_user_id
    AND tenant_id = p_tenant_id
  );
$$;


ALTER FUNCTION "public"."user_belongs_to_tenant"("p_user_id" "uuid", "p_tenant_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."validate_api_key"("_key" "text") RETURNS TABLE("tenant_id" "uuid", "user_id" "uuid", "is_valid" boolean)
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ak.tenant_id,
    ak.user_id,
    (ak.is_active AND (ak.expires_at IS NULL OR ak.expires_at > NOW()))::BOOLEAN as is_valid
  FROM public.api_keys ak
  WHERE ak.key = _key;
END;
$$;


ALTER FUNCTION "public"."validate_api_key"("_key" "text") OWNER TO "postgres";


COMMENT ON FUNCTION "public"."validate_api_key"("_key" "text") IS 'Validates API key and returns tenant/user info for edge functions';



CREATE OR REPLACE FUNCTION "public"."validate_profile_dates"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  -- Validate date_of_birth (must be at least 18 years ago)
  IF NEW.date_of_birth IS NOT NULL THEN
    IF NEW.date_of_birth > CURRENT_DATE - INTERVAL '18 years' THEN
      RAISE EXCEPTION 'El usuario debe tener al menos 18 años';
    END IF;
    IF NEW.date_of_birth < CURRENT_DATE - INTERVAL '100 years' THEN
      RAISE EXCEPTION 'Fecha de nacimiento inválida (más de 100 años)';
    END IF;
  END IF;
  
  -- Validate hire_date (cannot be in the future)
  IF NEW.hire_date IS NOT NULL THEN
    IF NEW.hire_date > CURRENT_DATE THEN
      RAISE EXCEPTION 'La fecha de ingreso no puede ser futura';
    END IF;
    
    -- If we have both dates, validate that hire_date is after turning 18
    IF NEW.date_of_birth IS NOT NULL THEN
      IF NEW.hire_date < NEW.date_of_birth + INTERVAL '18 years' THEN
        RAISE EXCEPTION 'La fecha de ingreso debe ser después de cumplir 18 años';
      END IF;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."validate_profile_dates"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "auth"."audit_log_entries" (
    "instance_id" "uuid",
    "id" "uuid" NOT NULL,
    "payload" json,
    "created_at" timestamp with time zone,
    "ip_address" character varying(64) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE "auth"."audit_log_entries" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."audit_log_entries" IS 'Auth: Audit trail for user actions.';



CREATE TABLE IF NOT EXISTS "auth"."flow_state" (
    "id" "uuid" NOT NULL,
    "user_id" "uuid",
    "auth_code" "text" NOT NULL,
    "code_challenge_method" "auth"."code_challenge_method" NOT NULL,
    "code_challenge" "text" NOT NULL,
    "provider_type" "text" NOT NULL,
    "provider_access_token" "text",
    "provider_refresh_token" "text",
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "authentication_method" "text" NOT NULL,
    "auth_code_issued_at" timestamp with time zone
);


ALTER TABLE "auth"."flow_state" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."flow_state" IS 'stores metadata for pkce logins';



CREATE TABLE IF NOT EXISTS "auth"."identities" (
    "provider_id" "text" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "identity_data" "jsonb" NOT NULL,
    "provider" "text" NOT NULL,
    "last_sign_in_at" timestamp with time zone,
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "email" "text" GENERATED ALWAYS AS ("lower"(("identity_data" ->> 'email'::"text"))) STORED,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "auth"."identities" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."identities" IS 'Auth: Stores identities associated to a user.';



COMMENT ON COLUMN "auth"."identities"."email" IS 'Auth: Email is a generated column that references the optional email property in the identity_data';



CREATE TABLE IF NOT EXISTS "auth"."instances" (
    "id" "uuid" NOT NULL,
    "uuid" "uuid",
    "raw_base_config" "text",
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone
);


ALTER TABLE "auth"."instances" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."instances" IS 'Auth: Manages users across multiple sites.';



CREATE TABLE IF NOT EXISTS "auth"."mfa_amr_claims" (
    "session_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone NOT NULL,
    "updated_at" timestamp with time zone NOT NULL,
    "authentication_method" "text" NOT NULL,
    "id" "uuid" NOT NULL
);


ALTER TABLE "auth"."mfa_amr_claims" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."mfa_amr_claims" IS 'auth: stores authenticator method reference claims for multi factor authentication';



CREATE TABLE IF NOT EXISTS "auth"."mfa_challenges" (
    "id" "uuid" NOT NULL,
    "factor_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone NOT NULL,
    "verified_at" timestamp with time zone,
    "ip_address" "inet" NOT NULL,
    "otp_code" "text",
    "web_authn_session_data" "jsonb"
);


ALTER TABLE "auth"."mfa_challenges" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."mfa_challenges" IS 'auth: stores metadata about challenge requests made';



CREATE TABLE IF NOT EXISTS "auth"."mfa_factors" (
    "id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "friendly_name" "text",
    "factor_type" "auth"."factor_type" NOT NULL,
    "status" "auth"."factor_status" NOT NULL,
    "created_at" timestamp with time zone NOT NULL,
    "updated_at" timestamp with time zone NOT NULL,
    "secret" "text",
    "phone" "text",
    "last_challenged_at" timestamp with time zone,
    "web_authn_credential" "jsonb",
    "web_authn_aaguid" "uuid"
);


ALTER TABLE "auth"."mfa_factors" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."mfa_factors" IS 'auth: stores metadata about factors';



CREATE TABLE IF NOT EXISTS "auth"."oauth_authorizations" (
    "id" "uuid" NOT NULL,
    "authorization_id" "text" NOT NULL,
    "client_id" "uuid" NOT NULL,
    "user_id" "uuid",
    "redirect_uri" "text" NOT NULL,
    "scope" "text" NOT NULL,
    "state" "text",
    "resource" "text",
    "code_challenge" "text",
    "code_challenge_method" "auth"."code_challenge_method",
    "response_type" "auth"."oauth_response_type" DEFAULT 'code'::"auth"."oauth_response_type" NOT NULL,
    "status" "auth"."oauth_authorization_status" DEFAULT 'pending'::"auth"."oauth_authorization_status" NOT NULL,
    "authorization_code" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "expires_at" timestamp with time zone DEFAULT ("now"() + '00:03:00'::interval) NOT NULL,
    "approved_at" timestamp with time zone,
    CONSTRAINT "oauth_authorizations_authorization_code_length" CHECK (("char_length"("authorization_code") <= 255)),
    CONSTRAINT "oauth_authorizations_code_challenge_length" CHECK (("char_length"("code_challenge") <= 128)),
    CONSTRAINT "oauth_authorizations_expires_at_future" CHECK (("expires_at" > "created_at")),
    CONSTRAINT "oauth_authorizations_redirect_uri_length" CHECK (("char_length"("redirect_uri") <= 2048)),
    CONSTRAINT "oauth_authorizations_resource_length" CHECK (("char_length"("resource") <= 2048)),
    CONSTRAINT "oauth_authorizations_scope_length" CHECK (("char_length"("scope") <= 4096)),
    CONSTRAINT "oauth_authorizations_state_length" CHECK (("char_length"("state") <= 4096))
);


ALTER TABLE "auth"."oauth_authorizations" OWNER TO "supabase_auth_admin";


CREATE TABLE IF NOT EXISTS "auth"."oauth_clients" (
    "id" "uuid" NOT NULL,
    "client_secret_hash" "text",
    "registration_type" "auth"."oauth_registration_type" NOT NULL,
    "redirect_uris" "text" NOT NULL,
    "grant_types" "text" NOT NULL,
    "client_name" "text",
    "client_uri" "text",
    "logo_uri" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "deleted_at" timestamp with time zone,
    "client_type" "auth"."oauth_client_type" DEFAULT 'confidential'::"auth"."oauth_client_type" NOT NULL,
    CONSTRAINT "oauth_clients_client_name_length" CHECK (("char_length"("client_name") <= 1024)),
    CONSTRAINT "oauth_clients_client_uri_length" CHECK (("char_length"("client_uri") <= 2048)),
    CONSTRAINT "oauth_clients_logo_uri_length" CHECK (("char_length"("logo_uri") <= 2048))
);


ALTER TABLE "auth"."oauth_clients" OWNER TO "supabase_auth_admin";


CREATE TABLE IF NOT EXISTS "auth"."oauth_consents" (
    "id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "client_id" "uuid" NOT NULL,
    "scopes" "text" NOT NULL,
    "granted_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "revoked_at" timestamp with time zone,
    CONSTRAINT "oauth_consents_revoked_after_granted" CHECK ((("revoked_at" IS NULL) OR ("revoked_at" >= "granted_at"))),
    CONSTRAINT "oauth_consents_scopes_length" CHECK (("char_length"("scopes") <= 2048)),
    CONSTRAINT "oauth_consents_scopes_not_empty" CHECK (("char_length"(TRIM(BOTH FROM "scopes")) > 0))
);


ALTER TABLE "auth"."oauth_consents" OWNER TO "supabase_auth_admin";


CREATE TABLE IF NOT EXISTS "auth"."one_time_tokens" (
    "id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "token_type" "auth"."one_time_token_type" NOT NULL,
    "token_hash" "text" NOT NULL,
    "relates_to" "text" NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "one_time_tokens_token_hash_check" CHECK (("char_length"("token_hash") > 0))
);


ALTER TABLE "auth"."one_time_tokens" OWNER TO "supabase_auth_admin";


CREATE TABLE IF NOT EXISTS "auth"."refresh_tokens" (
    "instance_id" "uuid",
    "id" bigint NOT NULL,
    "token" character varying(255),
    "user_id" character varying(255),
    "revoked" boolean,
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "parent" character varying(255),
    "session_id" "uuid"
);


ALTER TABLE "auth"."refresh_tokens" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."refresh_tokens" IS 'Auth: Store of tokens used to refresh JWT tokens once they expire.';



CREATE SEQUENCE IF NOT EXISTS "auth"."refresh_tokens_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE "auth"."refresh_tokens_id_seq" OWNER TO "supabase_auth_admin";


ALTER SEQUENCE "auth"."refresh_tokens_id_seq" OWNED BY "auth"."refresh_tokens"."id";



CREATE TABLE IF NOT EXISTS "auth"."saml_providers" (
    "id" "uuid" NOT NULL,
    "sso_provider_id" "uuid" NOT NULL,
    "entity_id" "text" NOT NULL,
    "metadata_xml" "text" NOT NULL,
    "metadata_url" "text",
    "attribute_mapping" "jsonb",
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "name_id_format" "text",
    CONSTRAINT "entity_id not empty" CHECK (("char_length"("entity_id") > 0)),
    CONSTRAINT "metadata_url not empty" CHECK ((("metadata_url" = NULL::"text") OR ("char_length"("metadata_url") > 0))),
    CONSTRAINT "metadata_xml not empty" CHECK (("char_length"("metadata_xml") > 0))
);


ALTER TABLE "auth"."saml_providers" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."saml_providers" IS 'Auth: Manages SAML Identity Provider connections.';



CREATE TABLE IF NOT EXISTS "auth"."saml_relay_states" (
    "id" "uuid" NOT NULL,
    "sso_provider_id" "uuid" NOT NULL,
    "request_id" "text" NOT NULL,
    "for_email" "text",
    "redirect_to" "text",
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "flow_state_id" "uuid",
    CONSTRAINT "request_id not empty" CHECK (("char_length"("request_id") > 0))
);


ALTER TABLE "auth"."saml_relay_states" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."saml_relay_states" IS 'Auth: Contains SAML Relay State information for each Service Provider initiated login.';



CREATE TABLE IF NOT EXISTS "auth"."schema_migrations" (
    "version" character varying(255) NOT NULL
);


ALTER TABLE "auth"."schema_migrations" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."schema_migrations" IS 'Auth: Manages updates to the auth system.';



CREATE TABLE IF NOT EXISTS "auth"."sessions" (
    "id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "factor_id" "uuid",
    "aal" "auth"."aal_level",
    "not_after" timestamp with time zone,
    "refreshed_at" timestamp without time zone,
    "user_agent" "text",
    "ip" "inet",
    "tag" "text",
    "oauth_client_id" "uuid"
);


ALTER TABLE "auth"."sessions" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."sessions" IS 'Auth: Stores session data associated to a user.';



COMMENT ON COLUMN "auth"."sessions"."not_after" IS 'Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired.';



CREATE TABLE IF NOT EXISTS "auth"."sso_domains" (
    "id" "uuid" NOT NULL,
    "sso_provider_id" "uuid" NOT NULL,
    "domain" "text" NOT NULL,
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    CONSTRAINT "domain not empty" CHECK (("char_length"("domain") > 0))
);


ALTER TABLE "auth"."sso_domains" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."sso_domains" IS 'Auth: Manages SSO email address domain mapping to an SSO Identity Provider.';



CREATE TABLE IF NOT EXISTS "auth"."sso_providers" (
    "id" "uuid" NOT NULL,
    "resource_id" "text",
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "disabled" boolean,
    CONSTRAINT "resource_id not empty" CHECK ((("resource_id" = NULL::"text") OR ("char_length"("resource_id") > 0)))
);


ALTER TABLE "auth"."sso_providers" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."sso_providers" IS 'Auth: Manages SSO identity provider information; see saml_providers for SAML.';



COMMENT ON COLUMN "auth"."sso_providers"."resource_id" IS 'Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code.';



CREATE TABLE IF NOT EXISTS "auth"."users" (
    "instance_id" "uuid",
    "id" "uuid" NOT NULL,
    "aud" character varying(255),
    "role" character varying(255),
    "email" character varying(255),
    "encrypted_password" character varying(255),
    "email_confirmed_at" timestamp with time zone,
    "invited_at" timestamp with time zone,
    "confirmation_token" character varying(255),
    "confirmation_sent_at" timestamp with time zone,
    "recovery_token" character varying(255),
    "recovery_sent_at" timestamp with time zone,
    "email_change_token_new" character varying(255),
    "email_change" character varying(255),
    "email_change_sent_at" timestamp with time zone,
    "last_sign_in_at" timestamp with time zone,
    "raw_app_meta_data" "jsonb",
    "raw_user_meta_data" "jsonb",
    "is_super_admin" boolean,
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone,
    "phone" "text" DEFAULT NULL::character varying,
    "phone_confirmed_at" timestamp with time zone,
    "phone_change" "text" DEFAULT ''::character varying,
    "phone_change_token" character varying(255) DEFAULT ''::character varying,
    "phone_change_sent_at" timestamp with time zone,
    "confirmed_at" timestamp with time zone GENERATED ALWAYS AS (LEAST("email_confirmed_at", "phone_confirmed_at")) STORED,
    "email_change_token_current" character varying(255) DEFAULT ''::character varying,
    "email_change_confirm_status" smallint DEFAULT 0,
    "banned_until" timestamp with time zone,
    "reauthentication_token" character varying(255) DEFAULT ''::character varying,
    "reauthentication_sent_at" timestamp with time zone,
    "is_sso_user" boolean DEFAULT false NOT NULL,
    "deleted_at" timestamp with time zone,
    "is_anonymous" boolean DEFAULT false NOT NULL,
    CONSTRAINT "users_email_change_confirm_status_check" CHECK ((("email_change_confirm_status" >= 0) AND ("email_change_confirm_status" <= 2)))
);


ALTER TABLE "auth"."users" OWNER TO "supabase_auth_admin";


COMMENT ON TABLE "auth"."users" IS 'Auth: Stores user login data within a secure schema.';



COMMENT ON COLUMN "auth"."users"."is_sso_user" IS 'Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails.';



CREATE TABLE IF NOT EXISTS "public"."admin_disbursements" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "admin_user_id" "uuid" NOT NULL,
    "amount_points" numeric(18,2) NOT NULL,
    "reason" "text",
    "reference_user_id" "uuid",
    "cost_center_id" "uuid",
    "idempotency_key" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "admin_disbursements_amount_points_check" CHECK (("amount_points" > (0)::numeric))
);


ALTER TABLE "public"."admin_disbursements" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."ai_categorization_log" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "reward_item_id" "uuid" NOT NULL,
    "suggested_categories" "jsonb" NOT NULL,
    "action_taken" "text" NOT NULL,
    "assigned_by" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "ai_categorization_log_action_taken_check" CHECK (("action_taken" = ANY (ARRAY['auto_assigned'::"text", 'needs_review'::"text", 'rejected'::"text"])))
);


ALTER TABLE "public"."ai_categorization_log" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."ai_suggestions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "category" "text" NOT NULL,
    "type" "text" NOT NULL,
    "title" "text" NOT NULL,
    "description" "text" NOT NULL,
    "objective" "text" NOT NULL,
    "scope" "text" NOT NULL,
    "audience" "text" NOT NULL,
    "estimated_participants" integer,
    "suggested_date" "text",
    "points" integer,
    "duration" "text",
    "suggestion_data" "jsonb" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "ai_suggestions_category_check" CHECK (("category" = ANY (ARRAY['growth'::"text", 'recognition'::"text"])))
);


ALTER TABLE "public"."ai_suggestions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."api_keys" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "key" "text" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "is_active" boolean DEFAULT true,
    "last_used_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "created_by" "uuid",
    "expires_at" timestamp with time zone,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb"
);


ALTER TABLE "public"."api_keys" OWNER TO "postgres";


COMMENT ON TABLE "public"."api_keys" IS 'API keys for external applications to authenticate training endpoints';



CREATE TABLE IF NOT EXISTS "public"."api_rate_limits" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "endpoint" "text" NOT NULL,
    "request_count" integer DEFAULT 0 NOT NULL,
    "window_start" timestamp with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."api_rate_limits" OWNER TO "postgres";


COMMENT ON TABLE "public"."api_rate_limits" IS 'Tracks API request counts for rate limiting';



COMMENT ON COLUMN "public"."api_rate_limits"."request_count" IS 'Number of requests made in this time window';



COMMENT ON COLUMN "public"."api_rate_limits"."window_start" IS 'Start of the time window for rate limiting (typically 1 minute windows)';



CREATE TABLE IF NOT EXISTS "public"."audit_logs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid",
    "action" "text" NOT NULL,
    "resource_type" "text" NOT NULL,
    "resource_id" "uuid" NOT NULL,
    "old_values" "jsonb",
    "new_values" "jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."audit_logs" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."automatic_events" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text" NOT NULL,
    "icon" "text" NOT NULL,
    "color" "text" NOT NULL,
    "bg_color" "text" NOT NULL,
    "trigger_type" "text" NOT NULL,
    "trigger_source" "text",
    "default_points" integer,
    "ecard_template" "text",
    "associated_badges" "text"[] DEFAULT ARRAY[]::"text"[],
    "associated_values" "text"[] DEFAULT ARRAY[]::"text"[],
    "category" "text" NOT NULL,
    "monthly_triggers" integer DEFAULT 0,
    "status" "text" DEFAULT 'draft'::"text" NOT NULL,
    "active" boolean DEFAULT false NOT NULL,
    "archived_at" timestamp with time zone,
    "version" integer DEFAULT 1 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "created_by" "uuid",
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "fixed_points" integer DEFAULT 50 NOT NULL,
    "frequency_type" "text" DEFAULT 'once_per_user_per_year'::"text" NOT NULL,
    "dynamic_variable" "text",
    "fixed_date" "date",
    "offset_value" integer,
    "offset_unit" "text",
    "calendar_event_type" "text",
    "next_occurrence_date" "date",
    "next_occurrence_description" "text",
    "filters" "jsonb" DEFAULT '[]'::"jsonb",
    CONSTRAINT "automatic_events_frequency_type_check" CHECK (("frequency_type" = ANY (ARRAY['once_per_user'::"text", 'once_per_user_per_year'::"text"]))),
    CONSTRAINT "automatic_events_offset_unit_check" CHECK ((("offset_unit" IS NULL) OR ("offset_unit" = ANY (ARRAY['days'::"text", 'months'::"text", 'years'::"text"])))),
    CONSTRAINT "automatic_events_trigger_type_check" CHECK (("trigger_type" = ANY (ARRAY['fixed_date'::"text", 'dynamic_variable'::"text", 'dynamic_with_offset'::"text", 'calendar_variable'::"text", 'integration'::"text"])))
);


ALTER TABLE "public"."automatic_events" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."award_audit" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "award_id" "uuid" NOT NULL,
    "actor_id" "uuid" NOT NULL,
    "action" "text" NOT NULL,
    "payload" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."award_audit" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."award_jury" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "award_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "role" "text" DEFAULT 'juror'::"text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."award_jury" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."award_payouts" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "award_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "place" integer NOT NULL,
    "points" integer DEFAULT 0 NOT NULL,
    "badges" "uuid"[],
    "meta" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "award_payouts_place_check" CHECK (("place" > 0))
);


ALTER TABLE "public"."award_payouts" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."awards" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text" NOT NULL,
    "icon" "text" NOT NULL,
    "color" "text" NOT NULL,
    "bg_color" "text" NOT NULL,
    "scope" "public"."award_scope" DEFAULT 'individual'::"public"."award_scope" NOT NULL,
    "periodicity" "public"."award_periodicity" DEFAULT 'monthly'::"public"."award_periodicity" NOT NULL,
    "winners_count" integer DEFAULT 1 NOT NULL,
    "winners_by_segment" boolean DEFAULT false NOT NULL,
    "nomination_duration" integer DEFAULT 7 NOT NULL,
    "voting_duration" integer DEFAULT 5 NOT NULL,
    "announcement_date" timestamp with time zone,
    "who_can_nominate" "public"."award_eligibility" DEFAULT 'all'::"public"."award_eligibility" NOT NULL,
    "who_can_be_nominated" "public"."award_eligibility" DEFAULT 'all'::"public"."award_eligibility" NOT NULL,
    "custom_nominators" "text"[],
    "custom_eligible" "text"[],
    "voting_mode" "public"."award_voting_mode" DEFAULT 'public'::"public"."award_voting_mode" NOT NULL,
    "jury_members" "text"[],
    "public_vote_weight" integer,
    "jury_vote_weight" integer,
    "status" "public"."award_status" DEFAULT 'draft'::"public"."award_status" NOT NULL,
    "current_phase" "public"."award_phase" DEFAULT 'setup'::"public"."award_phase" NOT NULL,
    "nominations_count" integer DEFAULT 0 NOT NULL,
    "candidates_count" integer DEFAULT 0 NOT NULL,
    "votes_count" integer DEFAULT 0 NOT NULL,
    "winners" "text"[] DEFAULT ARRAY[]::"text"[],
    "notify_on_nomination" boolean DEFAULT true NOT NULL,
    "notify_on_voting" boolean DEFAULT true NOT NULL,
    "notify_winners" boolean DEFAULT true NOT NULL,
    "slack_integration" boolean DEFAULT false NOT NULL,
    "teams_integration" boolean DEFAULT false NOT NULL,
    "created_by" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "archived_at" timestamp with time zone,
    "version" integer DEFAULT 1 NOT NULL,
    "skip_nomination_phase" boolean DEFAULT false NOT NULL,
    "predefined_candidates" "text"[],
    "points_distribution_mode" "text" DEFAULT 'per_winner'::"text",
    "total_points" integer,
    "second_place_points" integer,
    "third_place_points" integer,
    "associated_values" "text"[] DEFAULT ARRAY[]::"text"[],
    "associated_badges" "uuid"[] DEFAULT ARRAY[]::"uuid"[],
    "scope_entity_id" "uuid",
    "scope_entity_name" "text",
    "renewal_day" integer,
    "renewal_month" integer,
    "renewal_date" "date",
    "renewal_count" integer,
    "last_renewal_date" "date",
    CONSTRAINT "awards_jury_vote_weight_check" CHECK ((("jury_vote_weight" >= 0) AND ("jury_vote_weight" <= 100))),
    CONSTRAINT "awards_nomination_duration_check" CHECK ((("nomination_duration" > 0) AND ("nomination_duration" <= 90))),
    CONSTRAINT "awards_points_distribution_mode_check" CHECK (("points_distribution_mode" = ANY (ARRAY['per_winner'::"text", 'total_pool'::"text"]))),
    CONSTRAINT "awards_public_vote_weight_check" CHECK ((("public_vote_weight" >= 0) AND ("public_vote_weight" <= 100))),
    CONSTRAINT "awards_renewal_count_check" CHECK (("renewal_count" > 0)),
    CONSTRAINT "awards_renewal_day_check" CHECK ((("renewal_day" >= 1) AND ("renewal_day" <= 31))),
    CONSTRAINT "awards_renewal_month_check" CHECK ((("renewal_month" >= 1) AND ("renewal_month" <= 12))),
    CONSTRAINT "awards_voting_duration_check" CHECK ((("voting_duration" > 0) AND ("voting_duration" <= 30))),
    CONSTRAINT "awards_winners_count_check" CHECK ((("winners_count" > 0) AND ("winners_count" <= 100)))
);


ALTER TABLE "public"."awards" OWNER TO "postgres";


COMMENT ON COLUMN "public"."awards"."skip_nomination_phase" IS 'When true, skips nomination phase and goes directly to voting with predefined candidates';



COMMENT ON COLUMN "public"."awards"."predefined_candidates" IS 'Array of user IDs who are predefined as candidates (nominees)';



COMMENT ON COLUMN "public"."awards"."points_distribution_mode" IS 'Modo de distribución: per_winner (puntos a cada ganador) o total_pool (bolsa total a repartir)';



COMMENT ON COLUMN "public"."awards"."total_points" IS 'Puntos totales del premio (por ganador o bolsa total según el modo)';



COMMENT ON COLUMN "public"."awards"."second_place_points" IS 'Puntos para segundo lugar (solo cuando hay 1 ganador)';



COMMENT ON COLUMN "public"."awards"."third_place_points" IS 'Puntos para tercer lugar (solo cuando hay 1 ganador)';



COMMENT ON COLUMN "public"."awards"."associated_values" IS 'Array of organizational values associated with this award';



COMMENT ON COLUMN "public"."awards"."associated_badges" IS 'Array of badge IDs that can be awarded with this award';



COMMENT ON COLUMN "public"."awards"."scope_entity_id" IS 'ID de la entidad específica según scope (team_id, department_id, etc.)';



COMMENT ON COLUMN "public"."awards"."scope_entity_name" IS 'Nombre de la entidad para mostrar en UI';



COMMENT ON COLUMN "public"."awards"."renewal_day" IS 'Día del mes para renovación mensual (1-31)';



COMMENT ON COLUMN "public"."awards"."renewal_month" IS 'Mes para renovación anual (1-12)';



COMMENT ON COLUMN "public"."awards"."renewal_date" IS 'Fecha específica de renovación';



COMMENT ON COLUMN "public"."awards"."renewal_count" IS 'Cantidad de veces que se renueva el premio';



COMMENT ON COLUMN "public"."awards"."last_renewal_date" IS 'Última fecha en que se renovó el premio (para tracking)';



CREATE TABLE IF NOT EXISTS "public"."badges" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text" NOT NULL,
    "icon" "text" NOT NULL,
    "color" "text" NOT NULL,
    "bg_color" "text" NOT NULL,
    "associated_values" "text"[] DEFAULT ARRAY[]::"text"[],
    "category" "public"."badge_category" DEFAULT 'values'::"public"."badge_category" NOT NULL,
    "awarded_count" integer DEFAULT 0 NOT NULL,
    "active" boolean DEFAULT true NOT NULL,
    "status" "public"."badge_status" DEFAULT 'draft'::"public"."badge_status" NOT NULL,
    "archived_at" timestamp with time zone,
    "version" integer DEFAULT 1 NOT NULL,
    "visibility" "public"."visibility_type" DEFAULT 'public'::"public"."visibility_type" NOT NULL,
    "requires_approval" boolean DEFAULT false NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "department_ids" "uuid"[]
);


ALTER TABLE "public"."badges" OWNER TO "postgres";


COMMENT ON COLUMN "public"."badges"."associated_values" IS 'Array of organizational value IDs (UUIDs as text)';



COMMENT ON COLUMN "public"."badges"."department_ids" IS 'Optional list of department IDs that can use this badge. NULL means available to all departments.';



CREATE TABLE IF NOT EXISTS "public"."batch_processing_queue" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "batch_id" "uuid" NOT NULL,
    "status" "public"."batch_queue_status" DEFAULT 'queued'::"public"."batch_queue_status" NOT NULL,
    "started_at" timestamp with time zone,
    "completed_at" timestamp with time zone,
    "error_message" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."batch_processing_queue" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."batch_recipients" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "batch_id" "uuid" NOT NULL,
    "recipient_type" "text" NOT NULL,
    "recipient_id" "uuid" NOT NULL,
    "recipient_name" "text" NOT NULL,
    "recipient_email" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "batch_recipients_recipient_type_check" CHECK (("recipient_type" = ANY (ARRAY['user'::"text", 'team'::"text", 'department'::"text"])))
);


ALTER TABLE "public"."batch_recipients" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."brands" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "domain" "text" NOT NULL,
    "name" "text" NOT NULL,
    "slug" "text" NOT NULL,
    "theme_config" "jsonb" DEFAULT '{"logo": "/logos/brand-default.svg", "fonts": {"heading": "Inter, sans-serif", "primary": "Inter, sans-serif"}, "colors": {"accent": "350 85% 96%", "primary": "350 78% 58%", "secondary": "350 85% 96%", "background": "0 0% 99.5%", "foreground": "220 8% 18%", "primaryHover": "350 66% 52%"}}'::"jsonb",
    "features" "jsonb" DEFAULT '{"awards": true, "challenges": true, "ai_suggestions": false, "rewards_catalog": true, "white_label_mode": false}'::"jsonb",
    "settings" "jsonb" DEFAULT '{"default_locale": "es-ES", "allow_self_signup": false, "supported_currencies": ["USD", "EUR", "CLP"], "require_admin_approval": true}'::"jsonb",
    "is_active" boolean DEFAULT true,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "email_config" "jsonb" DEFAULT '{"reply_to": null, "template": {"header_bg": null, "accent_color": null, "button_color": null}, "from_name": null}'::"jsonb"
);


ALTER TABLE "public"."brands" OWNER TO "postgres";


COMMENT ON COLUMN "public"."brands"."settings" IS 'Brand settings including user_app_url for SSO app switching';



CREATE TABLE IF NOT EXISTS "public"."budget_overrides" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "scope_id" "uuid" NOT NULL,
    "period_start" "date" NOT NULL,
    "period_end" "date" NOT NULL,
    "override_points" integer,
    "delta_percent" numeric(5,2),
    "note" "text" NOT NULL,
    "created_by" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."budget_overrides" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."budget_policies" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "formula_type" "text" NOT NULL,
    "weights" "jsonb",
    "metadata" "jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "budget_policies_formula_type_check" CHECK (("formula_type" = ANY (ARRAY['fixed'::"text", 'tiered'::"text", 'dynamic'::"text", 'ml'::"text"])))
);


ALTER TABLE "public"."budget_policies" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."budget_scope_limits" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "parent_scope_id" "uuid" NOT NULL,
    "child_scope_type" "text" NOT NULL,
    "max_hard_cap" integer,
    "max_soft_cap" integer,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "budget_scope_limits_child_scope_type_check" CHECK (("child_scope_type" = ANY (ARRAY['department'::"text", 'team'::"text", 'manager'::"text", 'user'::"text"])))
);


ALTER TABLE "public"."budget_scope_limits" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."budget_templates" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "scope_type" "text" NOT NULL,
    "default_hard_cap" integer NOT NULL,
    "default_soft_cap" integer NOT NULL,
    "is_active" boolean DEFAULT true NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "period_start" "date",
    "period_end" "date",
    CONSTRAINT "budget_templates_scope_type_check" CHECK (("scope_type" = ANY (ARRAY['company'::"text", 'department'::"text", 'team'::"text", 'manager'::"text", 'user'::"text"])))
);


ALTER TABLE "public"."budget_templates" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."catalog_sync_status" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "provider_id" "text" NOT NULL,
    "status" "text" NOT NULL,
    "progress" "jsonb" DEFAULT '{"total": 0, "processed": 0, "current_product": "", "available_countries": [], "available_currencies": []}'::"jsonb",
    "started_at" timestamp with time zone DEFAULT "now"(),
    "completed_at" timestamp with time zone,
    "error_message" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    CONSTRAINT "catalog_sync_status_status_check" CHECK (("status" = ANY (ARRAY['processing'::"text", 'completed'::"text", 'failed'::"text"])))
);


ALTER TABLE "public"."catalog_sync_status" OWNER TO "postgres";


COMMENT ON COLUMN "public"."catalog_sync_status"."metadata" IS 'Stores AI categorization results and other sync metadata';



CREATE TABLE IF NOT EXISTS "public"."challenge_actions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "challenge_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "action_type" "public"."challenge_action_type" NOT NULL,
    "description" "text",
    "value" integer DEFAULT 1 NOT NULL,
    "points_awarded" integer DEFAULT 1 NOT NULL,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "evidence_url" "text",
    "validated_by" "uuid",
    "validated_at" timestamp with time zone,
    "validation_status" "public"."challenge_validation_status" DEFAULT 'pending'::"public"."challenge_validation_status",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."challenge_actions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."challenge_nudge_logs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "nudge_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "sent_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "delivery_status" "text" DEFAULT 'sent'::"text",
    CONSTRAINT "challenge_nudge_logs_delivery_status_check" CHECK (("delivery_status" = ANY (ARRAY['sent'::"text", 'failed'::"text", 'opened'::"text"])))
);


ALTER TABLE "public"."challenge_nudge_logs" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."challenge_nudges" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "challenge_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "nudge_type" "public"."challenge_nudge_type" NOT NULL,
    "trigger_condition" "text" NOT NULL,
    "trigger_days_before" integer,
    "message_template" "text" NOT NULL,
    "is_active" boolean DEFAULT true,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."challenge_nudges" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."challenge_participants" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "challenge_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "joined_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "registration_type" "public"."challenge_registration_type" NOT NULL,
    "current_progress" integer DEFAULT 0,
    "progress_percentage" numeric(5,2) DEFAULT 0,
    "total_points" integer DEFAULT 0,
    "actions_completed" integer DEFAULT 0,
    "tier_achieved" "public"."challenge_tier",
    "tier_achieved_at" timestamp with time zone,
    "status" "public"."challenge_participant_status" DEFAULT 'active'::"public"."challenge_participant_status" NOT NULL,
    "completed_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."challenge_participants" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."challenges" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text" NOT NULL,
    "objective" "text" NOT NULL,
    "family" "public"."challenge_family" NOT NULL,
    "challenge_type" "public"."challenge_type" NOT NULL,
    "start_date" timestamp with time zone NOT NULL,
    "end_date" timestamp with time zone NOT NULL,
    "target_audience" "jsonb" DEFAULT '{"ids": [], "type": "all"}'::"jsonb" NOT NULL,
    "progress_type" "public"."progress_type" NOT NULL,
    "target_metric" "text",
    "target_value" integer,
    "points_per_action" integer DEFAULT 1,
    "completion_bonus" integer DEFAULT 3,
    "enable_tiers" boolean DEFAULT false,
    "tier_bronze_threshold" integer DEFAULT 60,
    "tier_silver_threshold" integer DEFAULT 80,
    "tier_gold_threshold" integer DEFAULT 100,
    "badge_id" "uuid",
    "status" "public"."challenge_status" DEFAULT 'draft'::"public"."challenge_status" NOT NULL,
    "created_by" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "archived_at" timestamp with time zone,
    "progress_sources" "jsonb" DEFAULT '[]'::"jsonb",
    "scoring_weights" "jsonb" DEFAULT '{"kpi": 60, "growth": 15, "values": 25}'::"jsonb",
    "fair_play_rules" "jsonb" DEFAULT '{"normalize_kpis": false, "limit_same_person": 3, "require_validation": false}'::"jsonb",
    "nudges_config" "jsonb" DEFAULT '{"enabled": false, "messages": []}'::"jsonb",
    "impact_metrics" "jsonb" DEFAULT '{}'::"jsonb",
    "metas" "jsonb" DEFAULT '[]'::"jsonb",
    "icon" "text" DEFAULT 'Target'::"text" NOT NULL,
    "color" "text" DEFAULT '#3B82F6'::"text" NOT NULL,
    "bg_color" "text" DEFAULT '#EFF6FF'::"text" NOT NULL,
    CONSTRAINT "valid_dates" CHECK (("end_date" > "start_date")),
    CONSTRAINT "valid_tier_thresholds" CHECK ((("tier_bronze_threshold" <= "tier_silver_threshold") AND ("tier_silver_threshold" <= "tier_gold_threshold")))
);


ALTER TABLE "public"."challenges" OWNER TO "postgres";


COMMENT ON TABLE "public"."challenges" IS 'Challenges table with multi-goal support (v1.7)';



COMMENT ON COLUMN "public"."challenges"."progress_sources" IS 'Array of progress sources with weights: [{type: "automatic|social|manual", source: "crm|lms|recognition", weight: 70, config: {}}]';



COMMENT ON COLUMN "public"."challenges"."scoring_weights" IS 'Distribution of scoring: {kpi: 60, values: 25, growth: 15} - must sum 100';



COMMENT ON COLUMN "public"."challenges"."fair_play_rules" IS 'Anti-gaming rules: {normalize_kpis: bool, limit_same_person: number, require_validation: bool, auto_moderate: bool}';



COMMENT ON COLUMN "public"."challenges"."nudges_config" IS 'Automated nudges: {enabled: bool, messages: [{trigger: "start|50%|80%|end", message: "text", days_before: number}]}';



COMMENT ON COLUMN "public"."challenges"."impact_metrics" IS 'Results and impact: {participation: {}, cultural_impact: {}, operational_impact: {}, roi: {}}';



COMMENT ON COLUMN "public"."challenges"."metas" IS 'Array of goals/metas for the challenge. Each meta has: nombre, tipo, fuente, objetivo, peso, niveles, reglas_especificas, nudges';



CREATE TABLE IF NOT EXISTS "public"."departments" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "manager_id" "uuid",
    "parent_department_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "archived_at" timestamp with time zone
);


ALTER TABLE "public"."departments" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."funding_orders" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "provider" "text" DEFAULT 'DLOCAL'::"text",
    "status" "public"."funding_status" DEFAULT 'CREATED'::"public"."funding_status",
    "amount_local" numeric(18,2) NOT NULL,
    "currency" "public"."currency_code" NOT NULL,
    "points_to_credit" numeric(18,2) NOT NULL,
    "fx_rate_to_point" numeric(18,6),
    "provider_payment_id" "text",
    "provider_payload" "jsonb" DEFAULT '{}'::"jsonb",
    "idempotency_key" "text",
    "created_by" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "funding_orders_amount_local_check" CHECK (("amount_local" > (0)::numeric)),
    CONSTRAINT "funding_orders_points_to_credit_check" CHECK (("points_to_credit" > (0)::numeric))
);

ALTER TABLE ONLY "public"."funding_orders" REPLICA IDENTITY FULL;


ALTER TABLE "public"."funding_orders" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."gift_card_batches" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "created_by" "uuid" NOT NULL,
    "status" "text" DEFAULT 'pending'::"text" NOT NULL,
    "catalog_item_id" "uuid" NOT NULL,
    "denomination" numeric(10,2) NOT NULL,
    "currency" "text" NOT NULL,
    "provider_id" "text" NOT NULL,
    "total_recipients" integer DEFAULT 0 NOT NULL,
    "total_orders" integer DEFAULT 0 NOT NULL,
    "fulfilled_orders" integer DEFAULT 0 NOT NULL,
    "failed_orders" integer DEFAULT 0 NOT NULL,
    "pending_orders" integer DEFAULT 0 NOT NULL,
    "total_amount" numeric(12,2) DEFAULT 0 NOT NULL,
    "custom_message" "text",
    "scheduled_for" timestamp with time zone,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "completed_at" timestamp with time zone,
    CONSTRAINT "gift_card_batches_status_check" CHECK (("status" = ANY (ARRAY['pending'::"text", 'processing'::"text", 'completed'::"text", 'failed'::"text", 'cancelled'::"text"])))
);


ALTER TABLE "public"."gift_card_batches" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."global_provider_configs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "provider_id" "text" NOT NULL,
    "mode" "text" DEFAULT 'tenant'::"text" NOT NULL,
    "endpoint" "text",
    "funding_source_id" "text",
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."global_provider_configs" OWNER TO "postgres";


COMMENT ON TABLE "public"."global_provider_configs" IS 'Configuración global de proveedores. Las credenciales sensibles se gestionan como secretos de Supabase.';



CREATE TABLE IF NOT EXISTS "public"."liability_snapshots" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "snapshot_date" "date" NOT NULL,
    "redeemable_points" bigint NOT NULL,
    "assumed_eur_per_point" numeric(18,6) NOT NULL,
    "wallet_available_eur" numeric(18,2) NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "currency" "text" DEFAULT 'CLP'::"text" NOT NULL,
    "points_to_currency_rate" numeric(18,6) DEFAULT 1.0 NOT NULL,
    "wallet_available_local" numeric(18,2),
    "exposure_local" numeric(18,2)
);


ALTER TABLE "public"."liability_snapshots" OWNER TO "postgres";


COMMENT ON COLUMN "public"."liability_snapshots"."currency" IS 'Código de moneda local (CLP, EUR, USD, etc.)';



COMMENT ON COLUMN "public"."liability_snapshots"."points_to_currency_rate" IS 'Tasa de conversión: 1 punto = X unidades de moneda (default: 1.0)';



COMMENT ON COLUMN "public"."liability_snapshots"."wallet_available_local" IS 'Saldo wallet en moneda local';



COMMENT ON COLUMN "public"."liability_snapshots"."exposure_local" IS 'Exposición total (puntos canjeables) en moneda local';



CREATE TABLE IF NOT EXISTS "public"."nominations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "award_id" "uuid" NOT NULL,
    "nominee_id" "uuid" NOT NULL,
    "nominee_name" "text" NOT NULL,
    "nominee_avatar" "text",
    "nominator_id" "uuid" NOT NULL,
    "nominator_name" "text" NOT NULL,
    "department" "text",
    "reason" "text" NOT NULL,
    "attachments" "text"[],
    "values" "text"[],
    "status" "text" DEFAULT 'received'::"text" NOT NULL,
    "moderation_flags" "text"[],
    "votes" integer DEFAULT 0 NOT NULL,
    "score" numeric(10,2),
    "submitted_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "reviewed_at" timestamp with time zone,
    "reviewed_by" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "nominations_status_check" CHECK (("status" = ANY (ARRAY['received'::"text", 'in-review'::"text", 'approved'::"text", 'rejected'::"text", 'candidate'::"text", 'winner'::"text"])))
);


ALTER TABLE "public"."nominations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."occasions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text" NOT NULL,
    "icon" "text" NOT NULL,
    "color" "text" NOT NULL,
    "bg_color" "text" NOT NULL,
    "status" "public"."occasion_status" DEFAULT 'draft'::"public"."occasion_status" NOT NULL,
    "active" boolean DEFAULT false NOT NULL,
    "archived_at" timestamp with time zone,
    "version" integer DEFAULT 1 NOT NULL,
    "usage_this_month" integer DEFAULT 0 NOT NULL,
    "templates_count" integer DEFAULT 0 NOT NULL,
    "frequency" "text" DEFAULT 'Ilimitado'::"text" NOT NULL,
    "auto_trigger" boolean DEFAULT false NOT NULL,
    "trigger_date_type" "text",
    "trigger_offset_days" integer DEFAULT 0,
    "notification_enabled" boolean DEFAULT true NOT NULL,
    "ecard_templates" "text"[],
    "organizational_events" "text",
    "visibility" "public"."visibility_type" DEFAULT 'public'::"public"."visibility_type" NOT NULL,
    "requires_approval" boolean DEFAULT false NOT NULL,
    "allowed_granters" "public"."allowed_granters" DEFAULT 'all'::"public"."allowed_granters" NOT NULL,
    "custom_granters" "text",
    "allowed_origins" "public"."allowed_origin"[] DEFAULT ARRAY['app'::"public"."allowed_origin"] NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."occasions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."organizational_values" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "icon" "text" DEFAULT 'Heart'::"text" NOT NULL,
    "color" "text" DEFAULT '#3B82F6'::"text" NOT NULL,
    "bg_color" "text" DEFAULT '#EFF6FF'::"text" NOT NULL,
    "sort_order" integer DEFAULT 0 NOT NULL,
    "status" "text" DEFAULT 'active'::"text" NOT NULL,
    "usage_count" integer DEFAULT 0 NOT NULL,
    "archived_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "organizational_values_status_check" CHECK (("status" = ANY (ARRAY['active'::"text", 'archived'::"text"])))
);


ALTER TABLE "public"."organizational_values" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."point_transactions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "recognition_id" "uuid",
    "user_id" "uuid" NOT NULL,
    "transaction_type" "public"."transaction_type" NOT NULL,
    "points_delta" integer NOT NULL,
    "balance_before" integer NOT NULL,
    "balance_after" integer NOT NULL,
    "expires_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    CONSTRAINT "point_transactions_balance_valid" CHECK (("balance_after" >= 0))
);


ALTER TABLE "public"."point_transactions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" "uuid" NOT NULL,
    "email" "text" NOT NULL,
    "first_name" "text",
    "last_name" "text",
    "display_name" "text",
    "avatar_url" "text",
    "phone" "text",
    "department" "text",
    "position" "text",
    "is_active" boolean DEFAULT true NOT NULL,
    "last_login_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "manager_id" "uuid",
    "date_of_birth" "date",
    "hire_date" "date"
);


ALTER TABLE "public"."profiles" OWNER TO "postgres";


COMMENT ON COLUMN "public"."profiles"."date_of_birth" IS 'Fecha de nacimiento del usuario (opcional)';



COMMENT ON COLUMN "public"."profiles"."hire_date" IS 'Fecha de ingreso a la empresa (opcional)';



CREATE TABLE IF NOT EXISTS "public"."provider_audit_logs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "provider_id" "text" NOT NULL,
    "config_id" "uuid",
    "user_id" "uuid" NOT NULL,
    "action" "text" NOT NULL,
    "old_values" "jsonb",
    "new_values" "jsonb",
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "provider_audit_logs_action_check" CHECK (("action" = ANY (ARRAY['connected'::"text", 'disconnected'::"text", 'updated'::"text", 'set_default'::"text", 'test_connection'::"text"])))
);


ALTER TABLE "public"."provider_audit_logs" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."providers" (
    "id" "text" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "logo_url" "text",
    "category" "text" DEFAULT 'rewards'::"text" NOT NULL,
    "supported_countries" "text"[] DEFAULT ARRAY[]::"text"[],
    "supported_currencies" "text"[] DEFAULT ARRAY[]::"text"[],
    "requires_api_key" boolean DEFAULT true,
    "requires_client_id" boolean DEFAULT false,
    "requires_client_secret" boolean DEFAULT false,
    "requires_region" boolean DEFAULT false,
    "webhook_supported" boolean DEFAULT false,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."providers" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."recognition_approvals" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "recognition_id" "uuid" NOT NULL,
    "approver_id" "uuid" NOT NULL,
    "status" "public"."approval_status" DEFAULT 'pending'::"public"."approval_status" NOT NULL,
    "comments" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "transaction_id" "uuid"
);


ALTER TABLE "public"."recognition_approvals" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."recognition_budget_ledger" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "budget_id" "uuid" NOT NULL,
    "tx_type" "public"."budget_tx_type" NOT NULL,
    "points_delta" integer NOT NULL,
    "related_object" "jsonb",
    "note" "text",
    "actor_user_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "point_transaction_id" "uuid"
);


ALTER TABLE "public"."recognition_budget_ledger" OWNER TO "postgres";


COMMENT ON COLUMN "public"."recognition_budget_ledger"."point_transaction_id" IS 'References the point_transactions record that triggered this budget ledger entry';



CREATE TABLE IF NOT EXISTS "public"."recognition_budgets" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "scope_id" "uuid" NOT NULL,
    "period_start" "date" NOT NULL,
    "period_end" "date" NOT NULL,
    "hard_cap_points" integer NOT NULL,
    "soft_cap_points" integer NOT NULL,
    "carryover_policy" "text" NOT NULL,
    "carryover_percent" integer,
    "allocated_points" integer DEFAULT 0 NOT NULL,
    "consumed_points" integer DEFAULT 0 NOT NULL,
    "is_locked" boolean DEFAULT false NOT NULL,
    "is_published" boolean DEFAULT true NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "recognition_budgets_carryover_percent_check" CHECK ((("carryover_percent" >= 0) AND ("carryover_percent" <= 100))),
    CONSTRAINT "recognition_budgets_carryover_policy_check" CHECK (("carryover_policy" = ANY (ARRAY['none'::"text", 'unused_to_next'::"text", 'percent_to_next'::"text"]))),
    CONSTRAINT "recognition_budgets_check" CHECK (("soft_cap_points" <= "hard_cap_points")),
    CONSTRAINT "recognition_budgets_hard_cap_points_check" CHECK (("hard_cap_points" >= 0)),
    CONSTRAINT "recognition_budgets_soft_cap_points_check" CHECK (("soft_cap_points" >= 0))
);


ALTER TABLE "public"."recognition_budgets" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."recognition_comments" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "transaction_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "comment_text" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "edited" boolean DEFAULT false NOT NULL,
    CONSTRAINT "recognition_comments_comment_text_check" CHECK ((("length"(TRIM(BOTH FROM "comment_text")) > 0) AND ("length"("comment_text") <= 1000)))
);


ALTER TABLE "public"."recognition_comments" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."recognition_reactions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "transaction_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "reaction_type" "text" DEFAULT 'like'::"text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "recognition_reactions_reaction_type_check" CHECK (("reaction_type" = ANY (ARRAY['like'::"text", 'love'::"text", 'celebrate'::"text", 'clap'::"text"])))
);


ALTER TABLE "public"."recognition_reactions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."recognition_recipients" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "transaction_id" "uuid" NOT NULL,
    "recipient_id" "uuid" NOT NULL,
    "recipient_type" "text" NOT NULL,
    "points_awarded" integer DEFAULT 0 NOT NULL,
    "status" "text" DEFAULT 'pending'::"text" NOT NULL,
    "processed_at" timestamp with time zone,
    "error_message" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "recognition_recipients_recipient_type_check" CHECK (("recipient_type" = ANY (ARRAY['individual'::"text", 'department_member'::"text", 'team_member'::"text"]))),
    CONSTRAINT "recognition_recipients_status_check" CHECK (("status" = ANY (ARRAY['pending'::"text", 'processed'::"text", 'failed'::"text"])))
);


ALTER TABLE "public"."recognition_recipients" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."recognition_scopes" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "scope_type" "text" NOT NULL,
    "department_id" "uuid",
    "team_id" "uuid",
    "manager_user_id" "uuid",
    "user_id" "uuid",
    "name" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "recognition_scopes_scope_type_check" CHECK (("scope_type" = ANY (ARRAY['company'::"text", 'department'::"text", 'team'::"text", 'manager'::"text", 'user'::"text"])))
);


ALTER TABLE "public"."recognition_scopes" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."recognition_snapshots" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "recognition_id" "uuid" NOT NULL,
    "recognition_type_config" "jsonb" DEFAULT '{}'::"jsonb" NOT NULL,
    "organizational_values_active" "jsonb" DEFAULT '[]'::"jsonb" NOT NULL,
    "points_config" "jsonb" DEFAULT '{}'::"jsonb" NOT NULL,
    "approval_rules" "jsonb" DEFAULT '{}'::"jsonb" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."recognition_snapshots" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."recognition_transactions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "giver_id" "uuid" NOT NULL,
    "transaction_type" "text" NOT NULL,
    "recognition_type_id" "uuid",
    "source_type" "text" DEFAULT 'manual'::"text" NOT NULL,
    "source_id" "uuid",
    "status" "text" DEFAULT 'draft'::"text" NOT NULL,
    "total_recipients" integer DEFAULT 0 NOT NULL,
    "total_points_awarded" integer DEFAULT 0 NOT NULL,
    "points_per_recipient" integer DEFAULT 0 NOT NULL,
    "message" "text",
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "completed_at" timestamp with time zone,
    "source_reference_id" "uuid",
    "source_reference_type" "text",
    "visibility" "public"."visibility_type" DEFAULT 'public'::"public"."visibility_type" NOT NULL,
    CONSTRAINT "recognition_transactions_source_type_check" CHECK (("source_type" = ANY (ARRAY['recognition_type'::"text", 'occasion'::"text", 'automatic_event'::"text", 'award'::"text"]))),
    CONSTRAINT "recognition_transactions_status_check" CHECK (("status" = ANY (ARRAY['draft'::"text", 'pending_approval'::"text", 'approved'::"text", 'rejected'::"text", 'completed'::"text", 'failed'::"text"]))),
    CONSTRAINT "recognition_transactions_transaction_type_check" CHECK (("transaction_type" = ANY (ARRAY['recognition_type'::"text", 'occasion'::"text", 'automatic_event'::"text", 'award'::"text"])))
);


ALTER TABLE "public"."recognition_transactions" OWNER TO "postgres";


COMMENT ON COLUMN "public"."recognition_transactions"."visibility" IS 'Controla si el reconocimiento aparece en el feed público. Definido por el usuario al momento de otorgar el reconocimiento mediante publishInFeed.';



CREATE TABLE IF NOT EXISTS "public"."recognition_types" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text" NOT NULL,
    "icon" "text" NOT NULL,
    "color" "text" NOT NULL,
    "bg_color" "text" NOT NULL,
    "status" "public"."recognition_status" DEFAULT 'draft'::"public"."recognition_status" NOT NULL,
    "active" boolean DEFAULT false NOT NULL,
    "archived_at" timestamp with time zone,
    "version" integer DEFAULT 1 NOT NULL,
    "usage_this_month" integer DEFAULT 0 NOT NULL,
    "points_min" integer,
    "points_max" integer,
    "default_points" integer,
    "point_range" "text",
    "points_expiry" "text",
    "frequency" "text" DEFAULT 'Ilimitado'::"text" NOT NULL,
    "max_per_person_month" integer,
    "max_per_team_month" integer,
    "allowed_granters" "public"."allowed_granters" DEFAULT 'all'::"public"."allowed_granters",
    "custom_granters" "text",
    "allowed_origins" "public"."allowed_origin"[] DEFAULT ARRAY['app'::"public"."allowed_origin"],
    "allows_video" boolean DEFAULT false,
    "allows_multiple_recipients" boolean DEFAULT false,
    "allows_team_recognition" boolean DEFAULT false,
    "use_team_budget" boolean DEFAULT false,
    "visibility" "public"."visibility_type" DEFAULT 'public'::"public"."visibility_type",
    "requires_approval" boolean DEFAULT false,
    "organizational_values" "text",
    "associated_badges" "text",
    "related_events" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "is_flash_mode" boolean DEFAULT false NOT NULL,
    CONSTRAINT "consistent_status_active" CHECK (((("status" = 'draft'::"public"."recognition_status") AND ("active" = false)) OR ("status" <> 'draft'::"public"."recognition_status"))),
    CONSTRAINT "recognition_types_description_check" CHECK ((("length"("description") >= 1) AND ("length"("description") <= 255))),
    CONSTRAINT "recognition_types_name_check" CHECK ((("length"("name") >= 1) AND ("length"("name") <= 100))),
    CONSTRAINT "valid_default_points" CHECK ((("default_points" IS NULL) OR (("points_min" IS NOT NULL) AND ("points_max" IS NOT NULL) AND ("default_points" >= "points_min") AND ("default_points" <= "points_max")))),
    CONSTRAINT "valid_limits" CHECK (((("max_per_person_month" IS NULL) OR ("max_per_person_month" >= 0)) AND (("max_per_team_month" IS NULL) OR ("max_per_team_month" >= 0)))),
    CONSTRAINT "valid_points_range" CHECK (((("points_min" IS NULL) AND ("points_max" IS NULL)) OR (("points_min" IS NOT NULL) AND ("points_max" IS NOT NULL) AND ("points_max" >= "points_min"))))
);


ALTER TABLE "public"."recognition_types" OWNER TO "postgres";


COMMENT ON COLUMN "public"."recognition_types"."is_flash_mode" IS 'Indicates if this recognition type is a flash/quick mode recognition for faster, simpler workflows';



CREATE TABLE IF NOT EXISTS "public"."recognitions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "recognition_type_id" "uuid",
    "giver_id" "uuid" NOT NULL,
    "receiver_id" "uuid" NOT NULL,
    "receiver_team_id" "uuid",
    "source_type" "public"."recognition_source" DEFAULT 'manual'::"public"."recognition_source" NOT NULL,
    "source_id" "uuid",
    "status" "public"."recognition_status" DEFAULT 'draft'::"public"."recognition_status" NOT NULL,
    "message" "text",
    "points_awarded" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "completed_at" timestamp with time zone,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    CONSTRAINT "recognitions_points_positive" CHECK (("points_awarded" >= 0))
);


ALTER TABLE "public"."recognitions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."redemption_orders" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "batch_id" "uuid",
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "recipient_email" "text" NOT NULL,
    "recipient_name" "text" NOT NULL,
    "catalog_item_id" "uuid" NOT NULL,
    "provider_id" "text" NOT NULL,
    "denomination" numeric(10,2) NOT NULL,
    "currency" "text" NOT NULL,
    "status" "text" DEFAULT 'pending'::"text" NOT NULL,
    "external_id" "text",
    "external_order_id" "text",
    "idempotency_key" "text" NOT NULL,
    "custom_message" "text",
    "error_message" "text",
    "redemption_url" "text",
    "redemption_code" "text",
    "provider_response" "jsonb",
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "fulfilled_at" timestamp with time zone,
    "failed_at" timestamp with time zone,
    CONSTRAINT "redemption_orders_status_check" CHECK (("status" = ANY (ARRAY['pending'::"text", 'processing'::"text", 'fulfilled'::"text", 'failed'::"text", 'cancelled'::"text"])))
);


ALTER TABLE "public"."redemption_orders" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."reward_catalog_items" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "provider_id" "text" NOT NULL,
    "external_id" "text" NOT NULL,
    "brand" "text" NOT NULL,
    "country" "text" NOT NULL,
    "currency" "text" NOT NULL,
    "denom_min" numeric(10,2) NOT NULL,
    "denom_max" numeric(10,2) NOT NULL,
    "tags" "text"[] DEFAULT ARRAY[]::"text"[],
    "available" boolean DEFAULT true NOT NULL,
    "visible" boolean DEFAULT false NOT NULL,
    "selectable" boolean DEFAULT true NOT NULL,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."reward_catalog_items" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."reward_categories" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "icon" "text" DEFAULT 'ShoppingBag'::"text" NOT NULL,
    "color" "text" DEFAULT '#3B82F6'::"text" NOT NULL,
    "bg_color" "text" DEFAULT '#EFF6FF'::"text" NOT NULL,
    "matching_rules" "jsonb" DEFAULT '[]'::"jsonb" NOT NULL,
    "sort_order" integer DEFAULT 0 NOT NULL,
    "visible" boolean DEFAULT true NOT NULL,
    "is_featured" boolean DEFAULT false NOT NULL,
    "items_count" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."reward_categories" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."reward_featured_items" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "reward_item_id" "uuid" NOT NULL,
    "title" "text",
    "description" "text",
    "sort_order" integer DEFAULT 0 NOT NULL,
    "featured_from" timestamp with time zone DEFAULT "now"(),
    "featured_until" timestamp with time zone,
    "created_by" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."reward_featured_items" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."reward_item_categories" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "reward_item_id" "uuid" NOT NULL,
    "category_id" "uuid" NOT NULL,
    "assignment_type" "text" DEFAULT 'auto'::"text" NOT NULL,
    "assigned_by" "uuid",
    "assigned_at" timestamp with time zone DEFAULT "now"(),
    "created_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."reward_item_categories" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."reward_items" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "provider_id" "text" NOT NULL,
    "external_id" "text" NOT NULL,
    "brand" "text" NOT NULL,
    "country" "text" NOT NULL,
    "currency" "text" NOT NULL,
    "denom_min" numeric NOT NULL,
    "denom_max" numeric NOT NULL,
    "tags" "text"[] DEFAULT '{}'::"text"[],
    "available" boolean DEFAULT true NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "tremendous_product_id" "text",
    "provider_data" "jsonb" DEFAULT '{}'::"jsonb",
    "skus" "jsonb" DEFAULT '[]'::"jsonb",
    "fulfillment_type" "text",
    "cost_source" "text",
    "unit_price" numeric(18,2),
    "currency_code" "text",
    "enabled_when_cr" numeric(4,2) DEFAULT 0.00,
    "requires_approval" boolean DEFAULT false,
    "sla_hours" integer,
    "stock_qty" integer,
    CONSTRAINT "reward_items_cost_source_check" CHECK (("cost_source" = ANY (ARRAY['none'::"text", 'wallet'::"text", 'prepaid_stock'::"text"]))),
    CONSTRAINT "reward_items_fulfillment_type_check" CHECK (("fulfillment_type" = ANY (ARRAY['internal'::"text", 'external'::"text", 'prepaid_stock'::"text"])))
);


ALTER TABLE "public"."reward_items" OWNER TO "postgres";


COMMENT ON COLUMN "public"."reward_items"."tremendous_product_id" IS 'Stores the actual Tremendous API product ID (different from our internal external_id)';



COMMENT ON COLUMN "public"."reward_items"."provider_data" IS 'Complete raw product data from the provider API for future reference';



COMMENT ON COLUMN "public"."reward_items"."skus" IS 'Array of SKU objects from Tremendous API, each with min and max denomination values that the product supports';



CREATE TABLE IF NOT EXISTS "public"."reward_redemptions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "reward_item_id" "uuid" NOT NULL,
    "points_spent" integer NOT NULL,
    "wallet_amount_local" numeric NOT NULL,
    "wallet_currency" "text" NOT NULL,
    "fx_rate" numeric,
    "status" "text" DEFAULT 'pending'::"text" NOT NULL,
    "provider_id" "text" NOT NULL,
    "provider_order_id" "text",
    "point_tx_id" "uuid",
    "wallet_ledger_id" "uuid",
    "idempotency_key" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "fulfilled_at" timestamp with time zone,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb"
);


ALTER TABLE "public"."reward_redemptions" OWNER TO "postgres";


COMMENT ON TABLE "public"."reward_redemptions" IS 'Tracks all reward redemptions that consume enterprise wallet funds';



COMMENT ON COLUMN "public"."reward_redemptions"."points_spent" IS 'User points debited for this redemption';



COMMENT ON COLUMN "public"."reward_redemptions"."wallet_amount_local" IS 'Wallet amount debited in local currency';



COMMENT ON COLUMN "public"."reward_redemptions"."fx_rate" IS 'Exchange rate used (points to currency)';



CREATE TABLE IF NOT EXISTS "public"."sso_tokens" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "token" "text" NOT NULL,
    "access_token" "text" NOT NULL,
    "refresh_token" "text" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "expires_at" timestamp with time zone DEFAULT ("now"() + '00:00:30'::interval) NOT NULL,
    "used_at" timestamp with time zone
);


ALTER TABLE "public"."sso_tokens" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."teams" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "department_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "manager_id" "uuid",
    "parent_team_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "archived_at" timestamp with time zone
);


ALTER TABLE "public"."teams" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenant_feature_flags" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "flag_key" "text" NOT NULL,
    "enabled" boolean DEFAULT false,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."tenant_feature_flags" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenant_integrations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "integration_type" "text" NOT NULL,
    "config" "jsonb" DEFAULT '{}'::"jsonb" NOT NULL,
    "metadata" "jsonb",
    "is_active" boolean DEFAULT false NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "created_by" "uuid"
);


ALTER TABLE "public"."tenant_integrations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenant_invitations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "email" "text" NOT NULL,
    "role" "public"."app_role" DEFAULT 'user'::"public"."app_role" NOT NULL,
    "token" "text" NOT NULL,
    "invited_by" "uuid",
    "expires_at" timestamp with time zone DEFAULT ("now"() + '7 days'::interval) NOT NULL,
    "used_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."tenant_invitations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenant_provider_configs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "provider_id" "text" NOT NULL,
    "status" "text" DEFAULT 'disabled'::"text" NOT NULL,
    "is_default" boolean DEFAULT false,
    "priority" integer DEFAULT 0,
    "api_key" "text",
    "client_id" "text",
    "client_secret" "text",
    "region" "text",
    "endpoint" "text",
    "allowed_countries" "text"[] DEFAULT ARRAY[]::"text"[],
    "allowed_currencies" "text"[] DEFAULT ARRAY[]::"text"[],
    "daily_limit" integer,
    "monthly_limit" integer,
    "webhook_url" "text",
    "webhook_secret" "text",
    "last_test_at" timestamp with time zone,
    "last_test_status" "text",
    "last_test_message" "text",
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "created_by" "uuid",
    CONSTRAINT "tenant_provider_configs_last_test_status_check" CHECK (("last_test_status" = ANY (ARRAY['success'::"text", 'failed'::"text"]))),
    CONSTRAINT "tenant_provider_configs_status_check" CHECK (("status" = ANY (ARRAY['enabled'::"text", 'disabled'::"text", 'error'::"text"])))
);


ALTER TABLE "public"."tenant_provider_configs" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenant_reward_visibility" (
    "tenant_id" "uuid" NOT NULL,
    "reward_item_id" "uuid" NOT NULL,
    "visible" boolean DEFAULT false NOT NULL,
    "updated_by" "uuid",
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."tenant_reward_visibility" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenant_tremendous_mapping" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "tremendous_team_id" "text" NOT NULL,
    "tremendous_budget_id" "text",
    "funding_source_id" "text",
    "catalog_filter" "jsonb" DEFAULT '[]'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."tenant_tremendous_mapping" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenant_wallets" (
    "tenant_id" "uuid" NOT NULL,
    "base_currency" "public"."currency_code" NOT NULL,
    "credit_limit_points" numeric(18,2) DEFAULT 0,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "tenant_wallets_credit_limit_points_check" CHECK (("credit_limit_points" >= (0)::numeric))
);


ALTER TABLE "public"."tenant_wallets" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."wallet_ledger" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "entry_type" "public"."ledger_entry_type" NOT NULL,
    "amount_points" numeric(18,2) NOT NULL,
    "amount_local" numeric(18,2),
    "currency" "public"."currency_code",
    "fx_rate_to_point" numeric(18,6),
    "reference_type" "text",
    "reference_id" "uuid",
    "actor_user_id" "uuid",
    "idempotency_key" "text",
    "note" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "reference_user_id" "uuid",
    "metadata" "jsonb" DEFAULT '{}'::"jsonb"
);

ALTER TABLE ONLY "public"."wallet_ledger" REPLICA IDENTITY FULL;


ALTER TABLE "public"."wallet_ledger" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."tenant_wallet_balances" AS
 SELECT "tw"."tenant_id",
    "tw"."created_at",
    "tw"."updated_at",
    "tw"."credit_limit_points",
    "tw"."base_currency",
    COALESCE("sum"("wl"."amount_points") FILTER (WHERE ("wl"."entry_type" = ANY (ARRAY['FUNDING_CREDIT'::"public"."ledger_entry_type", 'ADJUSTMENT'::"public"."ledger_entry_type", 'HOLD_RELEASE'::"public"."ledger_entry_type"]))), (0)::numeric) AS "total_credits",
    (COALESCE("sum"("wl"."amount_points") FILTER (WHERE ("wl"."entry_type" = ANY (ARRAY['FUNDING_CREDIT'::"public"."ledger_entry_type", 'ADJUSTMENT'::"public"."ledger_entry_type", 'HOLD_RELEASE'::"public"."ledger_entry_type"]))), (0)::numeric) - COALESCE("abs"("sum"("wl"."amount_points") FILTER (WHERE (("wl"."entry_type" = ANY (ARRAY['ADMIN_DISBURSE_DEBIT'::"public"."ledger_entry_type", 'GIFT_CARD_REDEMPTION'::"public"."ledger_entry_type"])) AND ("wl"."amount_points" < (0)::numeric)))), (0)::numeric)) AS "current_balance",
    COALESCE("abs"("sum"("wl"."amount_points") FILTER (WHERE (("wl"."entry_type" = ANY (ARRAY['ADMIN_DISBURSE_DEBIT'::"public"."ledger_entry_type", 'GIFT_CARD_REDEMPTION'::"public"."ledger_entry_type"])) AND ("wl"."amount_points" < (0)::numeric)))), (0)::numeric) AS "total_spent",
    COALESCE("abs"("sum"("wl"."amount_points") FILTER (WHERE (("wl"."entry_type" = 'HOLD'::"public"."ledger_entry_type") AND ("wl"."amount_points" < (0)::numeric)))), (0)::numeric) AS "held_points",
    (((COALESCE("sum"("wl"."amount_points") FILTER (WHERE ("wl"."entry_type" = ANY (ARRAY['FUNDING_CREDIT'::"public"."ledger_entry_type", 'ADJUSTMENT'::"public"."ledger_entry_type", 'HOLD_RELEASE'::"public"."ledger_entry_type"]))), (0)::numeric) - COALESCE("abs"("sum"("wl"."amount_points") FILTER (WHERE (("wl"."entry_type" = ANY (ARRAY['ADMIN_DISBURSE_DEBIT'::"public"."ledger_entry_type", 'GIFT_CARD_REDEMPTION'::"public"."ledger_entry_type"])) AND ("wl"."amount_points" < (0)::numeric)))), (0)::numeric)) - COALESCE("abs"("sum"("wl"."amount_points") FILTER (WHERE (("wl"."entry_type" = 'HOLD'::"public"."ledger_entry_type") AND ("wl"."amount_points" < (0)::numeric)))), (0)::numeric)) + "tw"."credit_limit_points") AS "available_points"
   FROM ("public"."tenant_wallets" "tw"
     LEFT JOIN "public"."wallet_ledger" "wl" ON (("tw"."tenant_id" = "wl"."tenant_id")))
  GROUP BY "tw"."tenant_id", "tw"."created_at", "tw"."updated_at", "tw"."credit_limit_points", "tw"."base_currency";


ALTER VIEW "public"."tenant_wallet_balances" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenants" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" "text" NOT NULL,
    "subdomain" "text" NOT NULL,
    "settings" "jsonb" DEFAULT '{"locale": "es-ES", "timezone": "Europe/Madrid", "dateFormat": "dd/MM/yyyy", "currencyCode": "EUR", "numberFormat": "es-ES"}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "base_currency" "public"."currency_code" DEFAULT 'USD'::"public"."currency_code",
    "brand_id" "uuid" NOT NULL
);


ALTER TABLE "public"."tenants" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."training_enrollments" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "training_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "enrolled_by" "uuid",
    "enrollment_type" "text" NOT NULL,
    "status" "text" DEFAULT 'enrolled'::"text" NOT NULL,
    "enrolled_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "started_at" timestamp with time zone,
    "completed_at" timestamp with time zone,
    "dropped_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "training_enrollments_enrollment_type_check" CHECK (("enrollment_type" = ANY (ARRAY['manual'::"text", 'auto'::"text", 'self'::"text"]))),
    CONSTRAINT "training_enrollments_status_check" CHECK (("status" = ANY (ARRAY['enrolled'::"text", 'in_progress'::"text", 'completed'::"text", 'dropped'::"text"])))
);


ALTER TABLE "public"."training_enrollments" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."trainings" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "title" "text" NOT NULL,
    "description" "text",
    "organizational_values" "uuid"[] DEFAULT '{}'::"uuid"[],
    "recognition_type_id" "uuid",
    "points_on_completion" integer DEFAULT 50,
    "duration_weeks" integer DEFAULT 4 NOT NULL,
    "status" "text" DEFAULT 'draft'::"text",
    "audience" "text" DEFAULT 'all'::"text",
    "custom_audience" "uuid"[],
    "created_by" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "archived_at" timestamp with time zone,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "ai_context" "jsonb" DEFAULT '{}'::"jsonb",
    "ai_suggested_at" timestamp with time zone,
    "published_at" timestamp with time zone,
    "sections_count" integer DEFAULT 0,
    "progress_weights" "jsonb" DEFAULT '{"quizzes": 0.0, "missions": 0.0, "sections": 1.0}'::"jsonb",
    "milestone_thresholds" integer[] DEFAULT ARRAY[25, 50, 75, 100],
    "min_quiz_score_pct" integer DEFAULT 70,
    "completion_requirements" "jsonb" DEFAULT '{"require_quiz_pass": true, "require_all_missions": false, "require_all_sections": true}'::"jsonb",
    CONSTRAINT "trainings_status_check" CHECK (("status" = ANY (ARRAY['draft'::"text", 'active'::"text", 'archived'::"text"])))
);


ALTER TABLE "public"."trainings" OWNER TO "postgres";


COMMENT ON COLUMN "public"."trainings"."progress_weights" IS 'Fase 4: Pesos dinámicos para cálculo de progreso (sections, quizzes, missions)';



COMMENT ON COLUMN "public"."trainings"."milestone_thresholds" IS 'Fase 4: Umbrales configurables de milestones (ej: [25, 50, 75, 100])';



COMMENT ON COLUMN "public"."trainings"."min_quiz_score_pct" IS 'Fase 4: Score mínimo requerido para aprobar quizzes globalmente';



COMMENT ON COLUMN "public"."trainings"."completion_requirements" IS 'Fase 4: Requisitos de completación configurables';



CREATE OR REPLACE VIEW "public"."top_mentors_view" AS
 SELECT "t"."created_by" AS "user_id",
    "p"."display_name",
    "p"."first_name",
    "p"."last_name",
    "p"."avatar_url",
    "t"."tenant_id",
    "count"(DISTINCT "t"."id") AS "total_trainings",
    "count"(DISTINCT
        CASE
            WHEN ("t"."status" = 'active'::"text") THEN "t"."id"
            ELSE NULL::"uuid"
        END) AS "active_trainings",
    (COALESCE("avg"(
        CASE
            WHEN ("te"."total_enrollments" > 0) THEN ((("te"."completed_enrollments")::double precision / ("te"."total_enrollments")::double precision) * (100)::double precision)
            ELSE NULL::double precision
        END), (0)::double precision))::integer AS "avg_completion_rate",
    (((("count"(DISTINCT "t"."id") * 100))::double precision + (COALESCE("avg"(
        CASE
            WHEN ("te"."total_enrollments" > 0) THEN ((("te"."completed_enrollments")::double precision / ("te"."total_enrollments")::double precision) * (100)::double precision)
            ELSE NULL::double precision
        END), (0)::double precision) * ("count"(DISTINCT
        CASE
            WHEN ("t"."status" = 'active'::"text") THEN "t"."id"
            ELSE NULL::"uuid"
        END))::double precision)))::integer AS "mentor_score"
   FROM (("public"."trainings" "t"
     JOIN "public"."profiles" "p" ON (("p"."id" = "t"."created_by")))
     LEFT JOIN LATERAL ( SELECT "count"(*) AS "total_enrollments",
            "count"(*) FILTER (WHERE ("te_inner"."status" = 'completed'::"text")) AS "completed_enrollments"
           FROM "public"."training_enrollments" "te_inner"
          WHERE ("te_inner"."training_id" = "t"."id")) "te" ON (true))
  WHERE ("t"."archived_at" IS NULL)
  GROUP BY "t"."created_by", "p"."display_name", "p"."first_name", "p"."last_name", "p"."avatar_url", "t"."tenant_id";


ALTER VIEW "public"."top_mentors_view" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."training_feed_events" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "training_id" "uuid" NOT NULL,
    "milestone" integer NOT NULL,
    "points_earned" integer NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "training_feed_events_milestone_check" CHECK (("milestone" = ANY (ARRAY[25, 50, 75, 100])))
);


ALTER TABLE "public"."training_feed_events" OWNER TO "postgres";


COMMENT ON TABLE "public"."training_feed_events" IS 'Tracks training milestones and achievements for the activity feed';



CREATE TABLE IF NOT EXISTS "public"."training_micro_missions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "training_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "description" "text" NOT NULL,
    "mission_type" "public"."mission_type" NOT NULL,
    "target_value" integer DEFAULT 1 NOT NULL,
    "points_reward" integer DEFAULT 10 NOT NULL,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "is_active" boolean DEFAULT true NOT NULL,
    "sort_order" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."training_micro_missions" OWNER TO "postgres";


COMMENT ON TABLE "public"."training_micro_missions" IS 'Micro-misiones configurables por entrenamiento para engagement';



CREATE TABLE IF NOT EXISTS "public"."training_progress" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "enrollment_id" "uuid" NOT NULL,
    "training_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "progress_pct" integer DEFAULT 0 NOT NULL,
    "milestones_completed" "jsonb" DEFAULT '[]'::"jsonb",
    "last_activity_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "breakdown" "jsonb" DEFAULT '{"quizzes": {"ratio": 0, "avg_score": 0, "total_count": 0, "passed_count": 0}, "missions": {"ratio": 0, "total": 0, "completed": 0}, "sections": {"ratio": 0, "total": 0, "completed": 0}}'::"jsonb",
    "last_recalculated_at" timestamp with time zone,
    "recalculation_count" integer DEFAULT 0,
    CONSTRAINT "training_progress_progress_pct_check" CHECK ((("progress_pct" >= 0) AND ("progress_pct" <= 100)))
);


ALTER TABLE "public"."training_progress" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."training_quiz_attempts" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "training_id" "uuid" NOT NULL,
    "section_id" "uuid" NOT NULL,
    "enrollment_id" "uuid",
    "attempt_number" integer DEFAULT 1 NOT NULL,
    "score_pct" numeric(5,2) NOT NULL,
    "passed" boolean NOT NULL,
    "answers" "jsonb" NOT NULL,
    "correct_count" integer NOT NULL,
    "total_questions" integer NOT NULL,
    "started_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "submitted_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "time_taken_seconds" integer,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb"
);


ALTER TABLE "public"."training_quiz_attempts" OWNER TO "postgres";


COMMENT ON TABLE "public"."training_quiz_attempts" IS 'Stores quiz attempts for training progress tracking. Emits: training.quiz.submitted, training.quiz.passed';



CREATE TABLE IF NOT EXISTS "public"."training_section_completions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "training_id" "uuid" NOT NULL,
    "section_id" "uuid" NOT NULL,
    "enrollment_id" "uuid",
    "completed_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "completion_method" "text",
    "time_spent_seconds" integer DEFAULT 0,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "training_section_completions_completion_method_check" CHECK (("completion_method" = ANY (ARRAY['manual'::"text", 'auto_scroll'::"text", 'quiz_passed'::"text"])))
);


ALTER TABLE "public"."training_section_completions" OWNER TO "postgres";


COMMENT ON TABLE "public"."training_section_completions" IS 'Stores section completions for training progress tracking. Emits: training.section.completed';



CREATE TABLE IF NOT EXISTS "public"."training_sections" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "training_id" "uuid" NOT NULL,
    "title" "text" NOT NULL,
    "content_markdown" "text" NOT NULL,
    "section_type" "text" DEFAULT 'lesson'::"text" NOT NULL,
    "sort_order" integer DEFAULT 0 NOT NULL,
    "duration_minutes" integer,
    "learning_objectives" "text"[],
    "resources" "jsonb" DEFAULT '[]'::"jsonb",
    "quiz" "jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."training_sections" OWNER TO "postgres";


COMMENT ON TABLE "public"."training_sections" IS 'Stores pedagogical sections and learning content for trainings';



CREATE TABLE IF NOT EXISTS "public"."tremendous_teams_cache" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "team_id" "text" NOT NULL,
    "name" "text" NOT NULL,
    "budgets" "jsonb" DEFAULT '[]'::"jsonb",
    "metadata" "jsonb" DEFAULT '{}'::"jsonb",
    "last_synced_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."tremendous_teams_cache" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_mission_completions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "mission_id" "uuid" NOT NULL,
    "training_id" "uuid" NOT NULL,
    "current_progress" integer DEFAULT 0 NOT NULL,
    "target_value" integer NOT NULL,
    "completed" boolean DEFAULT false NOT NULL,
    "current_streak" integer DEFAULT 0 NOT NULL,
    "longest_streak" integer DEFAULT 0 NOT NULL,
    "last_activity_date" "date",
    "points_earned" integer DEFAULT 0 NOT NULL,
    "recognition_created" boolean DEFAULT false NOT NULL,
    "started_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "completed_at" timestamp with time zone,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "metadata" "jsonb" DEFAULT '{}'::"jsonb"
);


ALTER TABLE "public"."user_mission_completions" OWNER TO "postgres";


COMMENT ON TABLE "public"."user_mission_completions" IS 'Tracking de progreso de usuarios en micro-misiones con sistema de rachas';



CREATE TABLE IF NOT EXISTS "public"."user_organizational_assignments" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "department_id" "uuid",
    "team_id" "uuid",
    "is_manager" boolean DEFAULT false NOT NULL,
    "assigned_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "user_organizational_assignments_check" CHECK ((("department_id" IS NOT NULL) OR ("team_id" IS NOT NULL))),
    CONSTRAINT "user_organizational_assignments_check1" CHECK ((NOT (("department_id" IS NOT NULL) AND ("team_id" IS NOT NULL))))
);


ALTER TABLE "public"."user_organizational_assignments" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_point_balances" (
    "user_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "current_balance" integer DEFAULT 0 NOT NULL,
    "lifetime_earned" integer DEFAULT 0 NOT NULL,
    "lifetime_spent" integer DEFAULT 0 NOT NULL,
    "pending_points" integer DEFAULT 0 NOT NULL,
    "last_transaction_at" timestamp with time zone,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "user_point_balances_lifetime_positive" CHECK ((("lifetime_earned" >= 0) AND ("lifetime_spent" >= 0))),
    CONSTRAINT "user_point_balances_pending_positive" CHECK (("pending_points" >= 0)),
    CONSTRAINT "user_point_balances_positive" CHECK (("current_balance" >= 0))
);


ALTER TABLE "public"."user_point_balances" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_roles" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "role" "public"."app_role" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."user_roles" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."v_budget_planner" WITH ("security_invoker"='true') AS
 SELECT "rb"."id",
    "rb"."tenant_id",
    "rs"."name" AS "scope_name",
    "rs"."scope_type",
    "rb"."period_start",
    "rb"."period_end",
    "rb"."hard_cap_points",
    "rb"."soft_cap_points",
    "rb"."allocated_points",
    "rb"."consumed_points",
    "rb"."is_published",
    ("rb"."hard_cap_points" - "rb"."consumed_points") AS "remaining_points",
    "round"(((("rb"."consumed_points")::numeric / (NULLIF("rb"."hard_cap_points", 0))::numeric) * (100)::numeric), 2) AS "utilization_pct"
   FROM ("public"."recognition_budgets" "rb"
     JOIN "public"."recognition_scopes" "rs" ON (("rb"."scope_id" = "rs"."id")))
  WHERE ("rb"."is_published" = true);


ALTER VIEW "public"."v_budget_planner" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."v_liability_snapshots" WITH ("security_invoker"='true') AS
 SELECT "id",
    "tenant_id",
    "snapshot_date",
    "redeemable_points",
    "currency",
    "points_to_currency_rate",
    "wallet_available_local",
    (("redeemable_points")::numeric * "points_to_currency_rate") AS "exposure_local",
        CASE
            WHEN ((("redeemable_points")::numeric * "points_to_currency_rate") > (0)::numeric) THEN ("wallet_available_local" / (("redeemable_points")::numeric * "points_to_currency_rate"))
            ELSE (999)::numeric
        END AS "coverage_ratio",
    "assumed_eur_per_point",
    "wallet_available_eur",
    (("redeemable_points")::numeric * "assumed_eur_per_point") AS "exposure_eur",
    "created_at"
   FROM "public"."liability_snapshots";


ALTER VIEW "public"."v_liability_snapshots" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."votes" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "award_id" "uuid" NOT NULL,
    "nomination_id" "uuid" NOT NULL,
    "voter_id" "uuid" NOT NULL,
    "voter_type" "text" NOT NULL,
    "weight" integer DEFAULT 1 NOT NULL,
    "score" numeric,
    "meta" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "votes_voter_type_check" CHECK (("voter_type" = ANY (ARRAY['public'::"text", 'jury'::"text"])))
);


ALTER TABLE "public"."votes" OWNER TO "postgres";


ALTER TABLE ONLY "auth"."refresh_tokens" ALTER COLUMN "id" SET DEFAULT "nextval"('"auth"."refresh_tokens_id_seq"'::"regclass");



ALTER TABLE ONLY "auth"."mfa_amr_claims"
    ADD CONSTRAINT "amr_id_pk" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."audit_log_entries"
    ADD CONSTRAINT "audit_log_entries_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."flow_state"
    ADD CONSTRAINT "flow_state_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."identities"
    ADD CONSTRAINT "identities_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."identities"
    ADD CONSTRAINT "identities_provider_id_provider_unique" UNIQUE ("provider_id", "provider");



ALTER TABLE ONLY "auth"."instances"
    ADD CONSTRAINT "instances_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."mfa_amr_claims"
    ADD CONSTRAINT "mfa_amr_claims_session_id_authentication_method_pkey" UNIQUE ("session_id", "authentication_method");



ALTER TABLE ONLY "auth"."mfa_challenges"
    ADD CONSTRAINT "mfa_challenges_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."mfa_factors"
    ADD CONSTRAINT "mfa_factors_last_challenged_at_key" UNIQUE ("last_challenged_at");



ALTER TABLE ONLY "auth"."mfa_factors"
    ADD CONSTRAINT "mfa_factors_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."oauth_authorizations"
    ADD CONSTRAINT "oauth_authorizations_authorization_code_key" UNIQUE ("authorization_code");



ALTER TABLE ONLY "auth"."oauth_authorizations"
    ADD CONSTRAINT "oauth_authorizations_authorization_id_key" UNIQUE ("authorization_id");



ALTER TABLE ONLY "auth"."oauth_authorizations"
    ADD CONSTRAINT "oauth_authorizations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."oauth_clients"
    ADD CONSTRAINT "oauth_clients_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."oauth_consents"
    ADD CONSTRAINT "oauth_consents_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."oauth_consents"
    ADD CONSTRAINT "oauth_consents_user_client_unique" UNIQUE ("user_id", "client_id");



ALTER TABLE ONLY "auth"."one_time_tokens"
    ADD CONSTRAINT "one_time_tokens_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."refresh_tokens"
    ADD CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."refresh_tokens"
    ADD CONSTRAINT "refresh_tokens_token_unique" UNIQUE ("token");



ALTER TABLE ONLY "auth"."saml_providers"
    ADD CONSTRAINT "saml_providers_entity_id_key" UNIQUE ("entity_id");



ALTER TABLE ONLY "auth"."saml_providers"
    ADD CONSTRAINT "saml_providers_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."saml_relay_states"
    ADD CONSTRAINT "saml_relay_states_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."schema_migrations"
    ADD CONSTRAINT "schema_migrations_pkey" PRIMARY KEY ("version");



ALTER TABLE ONLY "auth"."sessions"
    ADD CONSTRAINT "sessions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."sso_domains"
    ADD CONSTRAINT "sso_domains_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."sso_providers"
    ADD CONSTRAINT "sso_providers_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "auth"."users"
    ADD CONSTRAINT "users_phone_key" UNIQUE ("phone");



ALTER TABLE ONLY "auth"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."admin_disbursements"
    ADD CONSTRAINT "admin_disbursements_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."ai_categorization_log"
    ADD CONSTRAINT "ai_categorization_log_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."ai_suggestions"
    ADD CONSTRAINT "ai_suggestions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."api_keys"
    ADD CONSTRAINT "api_keys_key_key" UNIQUE ("key");



ALTER TABLE ONLY "public"."api_keys"
    ADD CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."api_rate_limits"
    ADD CONSTRAINT "api_rate_limits_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."api_rate_limits"
    ADD CONSTRAINT "api_rate_limits_tenant_id_user_id_endpoint_window_start_key" UNIQUE ("tenant_id", "user_id", "endpoint", "window_start");



ALTER TABLE ONLY "public"."audit_logs"
    ADD CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."automatic_events"
    ADD CONSTRAINT "automatic_events_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."award_audit"
    ADD CONSTRAINT "award_audit_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."award_jury"
    ADD CONSTRAINT "award_jury_award_id_user_id_key" UNIQUE ("award_id", "user_id");



ALTER TABLE ONLY "public"."award_jury"
    ADD CONSTRAINT "award_jury_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."award_payouts"
    ADD CONSTRAINT "award_payouts_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."awards"
    ADD CONSTRAINT "awards_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."badges"
    ADD CONSTRAINT "badges_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."batch_processing_queue"
    ADD CONSTRAINT "batch_processing_queue_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."batch_recipients"
    ADD CONSTRAINT "batch_recipients_batch_id_recipient_type_recipient_id_key" UNIQUE ("batch_id", "recipient_type", "recipient_id");



ALTER TABLE ONLY "public"."batch_recipients"
    ADD CONSTRAINT "batch_recipients_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."brands"
    ADD CONSTRAINT "brands_domain_key" UNIQUE ("domain");



ALTER TABLE ONLY "public"."brands"
    ADD CONSTRAINT "brands_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."brands"
    ADD CONSTRAINT "brands_slug_key" UNIQUE ("slug");



ALTER TABLE ONLY "public"."budget_overrides"
    ADD CONSTRAINT "budget_overrides_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."budget_policies"
    ADD CONSTRAINT "budget_policies_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."budget_scope_limits"
    ADD CONSTRAINT "budget_scope_limits_parent_scope_id_child_scope_type_key" UNIQUE ("parent_scope_id", "child_scope_type");



ALTER TABLE ONLY "public"."budget_scope_limits"
    ADD CONSTRAINT "budget_scope_limits_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."budget_templates"
    ADD CONSTRAINT "budget_templates_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."budget_templates"
    ADD CONSTRAINT "budget_templates_tenant_scope_period_key" UNIQUE ("tenant_id", "scope_type", "period_start", "period_end");



ALTER TABLE ONLY "public"."catalog_sync_status"
    ADD CONSTRAINT "catalog_sync_status_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."challenge_actions"
    ADD CONSTRAINT "challenge_actions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."challenge_nudge_logs"
    ADD CONSTRAINT "challenge_nudge_logs_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."challenge_nudges"
    ADD CONSTRAINT "challenge_nudges_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."challenge_participants"
    ADD CONSTRAINT "challenge_participants_challenge_id_user_id_key" UNIQUE ("challenge_id", "user_id");



ALTER TABLE ONLY "public"."challenge_participants"
    ADD CONSTRAINT "challenge_participants_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."challenges"
    ADD CONSTRAINT "challenges_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."departments"
    ADD CONSTRAINT "departments_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."departments"
    ADD CONSTRAINT "departments_tenant_id_name_key" UNIQUE ("tenant_id", "name");



ALTER TABLE ONLY "public"."funding_orders"
    ADD CONSTRAINT "funding_orders_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."gift_card_batches"
    ADD CONSTRAINT "gift_card_batches_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."global_provider_configs"
    ADD CONSTRAINT "global_provider_configs_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."global_provider_configs"
    ADD CONSTRAINT "global_provider_configs_provider_id_key" UNIQUE ("provider_id");



ALTER TABLE ONLY "public"."liability_snapshots"
    ADD CONSTRAINT "liability_snapshots_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."liability_snapshots"
    ADD CONSTRAINT "liability_snapshots_tenant_id_snapshot_date_key" UNIQUE ("tenant_id", "snapshot_date");



ALTER TABLE ONLY "public"."nominations"
    ADD CONSTRAINT "nominations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."occasions"
    ADD CONSTRAINT "occasions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."organizational_values"
    ADD CONSTRAINT "organizational_values_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."point_transactions"
    ADD CONSTRAINT "point_transactions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."provider_audit_logs"
    ADD CONSTRAINT "provider_audit_logs_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."providers"
    ADD CONSTRAINT "providers_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_approvals"
    ADD CONSTRAINT "recognition_approvals_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_budget_ledger"
    ADD CONSTRAINT "recognition_budget_ledger_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_budgets"
    ADD CONSTRAINT "recognition_budgets_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_budgets"
    ADD CONSTRAINT "recognition_budgets_tenant_id_scope_id_period_start_period__key" UNIQUE ("tenant_id", "scope_id", "period_start", "period_end");



ALTER TABLE ONLY "public"."recognition_comments"
    ADD CONSTRAINT "recognition_comments_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_reactions"
    ADD CONSTRAINT "recognition_reactions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_reactions"
    ADD CONSTRAINT "recognition_reactions_transaction_id_user_id_reaction_type_key" UNIQUE ("transaction_id", "user_id", "reaction_type");



ALTER TABLE ONLY "public"."recognition_recipients"
    ADD CONSTRAINT "recognition_recipients_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_scopes"
    ADD CONSTRAINT "recognition_scopes_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_snapshots"
    ADD CONSTRAINT "recognition_snapshots_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_transactions"
    ADD CONSTRAINT "recognition_transactions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognition_types"
    ADD CONSTRAINT "recognition_types_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."recognitions"
    ADD CONSTRAINT "recognitions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."redemption_orders"
    ADD CONSTRAINT "redemption_orders_idempotency_key_key" UNIQUE ("idempotency_key");



ALTER TABLE ONLY "public"."redemption_orders"
    ADD CONSTRAINT "redemption_orders_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."reward_catalog_items"
    ADD CONSTRAINT "reward_catalog_items_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."reward_catalog_items"
    ADD CONSTRAINT "reward_catalog_items_provider_id_external_id_key" UNIQUE ("provider_id", "external_id");



ALTER TABLE ONLY "public"."reward_categories"
    ADD CONSTRAINT "reward_categories_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."reward_categories"
    ADD CONSTRAINT "reward_categories_tenant_id_name_key" UNIQUE ("tenant_id", "name");



ALTER TABLE ONLY "public"."reward_featured_items"
    ADD CONSTRAINT "reward_featured_items_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."reward_featured_items"
    ADD CONSTRAINT "reward_featured_items_tenant_id_reward_item_id_key" UNIQUE ("tenant_id", "reward_item_id");



ALTER TABLE ONLY "public"."reward_item_categories"
    ADD CONSTRAINT "reward_item_categories_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."reward_item_categories"
    ADD CONSTRAINT "reward_item_categories_tenant_id_reward_item_id_category_id_key" UNIQUE ("tenant_id", "reward_item_id", "category_id");



ALTER TABLE ONLY "public"."reward_items"
    ADD CONSTRAINT "reward_items_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."reward_items"
    ADD CONSTRAINT "reward_items_provider_id_external_id_key" UNIQUE ("provider_id", "external_id");



ALTER TABLE ONLY "public"."reward_redemptions"
    ADD CONSTRAINT "reward_redemptions_idempotency_key_key" UNIQUE ("idempotency_key");



ALTER TABLE ONLY "public"."reward_redemptions"
    ADD CONSTRAINT "reward_redemptions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."sso_tokens"
    ADD CONSTRAINT "sso_tokens_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."sso_tokens"
    ADD CONSTRAINT "sso_tokens_token_key" UNIQUE ("token");



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_tenant_id_department_id_name_key" UNIQUE ("tenant_id", "department_id", "name");



ALTER TABLE ONLY "public"."tenant_feature_flags"
    ADD CONSTRAINT "tenant_feature_flags_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tenant_feature_flags"
    ADD CONSTRAINT "tenant_feature_flags_tenant_id_flag_key_key" UNIQUE ("tenant_id", "flag_key");



ALTER TABLE ONLY "public"."tenant_integrations"
    ADD CONSTRAINT "tenant_integrations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tenant_integrations"
    ADD CONSTRAINT "tenant_integrations_tenant_id_integration_type_key" UNIQUE ("tenant_id", "integration_type");



ALTER TABLE ONLY "public"."tenant_invitations"
    ADD CONSTRAINT "tenant_invitations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tenant_invitations"
    ADD CONSTRAINT "tenant_invitations_token_key" UNIQUE ("token");



ALTER TABLE ONLY "public"."tenant_provider_configs"
    ADD CONSTRAINT "tenant_provider_configs_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tenant_provider_configs"
    ADD CONSTRAINT "tenant_provider_configs_tenant_id_provider_id_key" UNIQUE ("tenant_id", "provider_id");



ALTER TABLE ONLY "public"."tenant_reward_visibility"
    ADD CONSTRAINT "tenant_reward_visibility_pkey" PRIMARY KEY ("tenant_id", "reward_item_id");



ALTER TABLE ONLY "public"."tenant_tremendous_mapping"
    ADD CONSTRAINT "tenant_tremendous_mapping_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tenant_tremendous_mapping"
    ADD CONSTRAINT "tenant_tremendous_mapping_tenant_id_key" UNIQUE ("tenant_id");



ALTER TABLE ONLY "public"."tenant_wallets"
    ADD CONSTRAINT "tenant_wallets_pkey" PRIMARY KEY ("tenant_id");



ALTER TABLE ONLY "public"."tenants"
    ADD CONSTRAINT "tenants_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."training_enrollments"
    ADD CONSTRAINT "training_enrollments_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."training_enrollments"
    ADD CONSTRAINT "training_enrollments_tenant_id_training_id_user_id_key" UNIQUE ("tenant_id", "training_id", "user_id");



ALTER TABLE ONLY "public"."training_feed_events"
    ADD CONSTRAINT "training_feed_events_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."training_micro_missions"
    ADD CONSTRAINT "training_micro_missions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."training_progress"
    ADD CONSTRAINT "training_progress_enrollment_id_key" UNIQUE ("enrollment_id");



ALTER TABLE ONLY "public"."training_progress"
    ADD CONSTRAINT "training_progress_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."training_progress"
    ADD CONSTRAINT "training_progress_training_user_unique" UNIQUE ("training_id", "user_id");



ALTER TABLE ONLY "public"."training_quiz_attempts"
    ADD CONSTRAINT "training_quiz_attempts_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."training_section_completions"
    ADD CONSTRAINT "training_section_completions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."training_sections"
    ADD CONSTRAINT "training_sections_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."trainings"
    ADD CONSTRAINT "trainings_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tremendous_teams_cache"
    ADD CONSTRAINT "tremendous_teams_cache_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tremendous_teams_cache"
    ADD CONSTRAINT "tremendous_teams_cache_team_id_key" UNIQUE ("team_id");



ALTER TABLE ONLY "public"."training_quiz_attempts"
    ADD CONSTRAINT "unique_section_attempt" UNIQUE ("user_id", "section_id", "attempt_number");



ALTER TABLE ONLY "public"."training_micro_missions"
    ADD CONSTRAINT "unique_training_mission" UNIQUE ("training_id", "name");



ALTER TABLE ONLY "public"."user_mission_completions"
    ADD CONSTRAINT "unique_user_mission" UNIQUE ("user_id", "mission_id");



ALTER TABLE ONLY "public"."training_section_completions"
    ADD CONSTRAINT "unique_user_section_completion" UNIQUE ("user_id", "section_id");



ALTER TABLE ONLY "public"."organizational_values"
    ADD CONSTRAINT "unique_value_per_tenant" UNIQUE ("tenant_id", "name");



ALTER TABLE ONLY "public"."user_mission_completions"
    ADD CONSTRAINT "user_mission_completions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."user_organizational_assignments"
    ADD CONSTRAINT "user_organizational_assignments_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."user_organizational_assignments"
    ADD CONSTRAINT "user_organizational_assignments_user_id_tenant_id_key" UNIQUE ("user_id", "tenant_id");



ALTER TABLE ONLY "public"."user_point_balances"
    ADD CONSTRAINT "user_point_balances_pkey" PRIMARY KEY ("user_id", "tenant_id");



ALTER TABLE ONLY "public"."user_roles"
    ADD CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."user_roles"
    ADD CONSTRAINT "user_roles_user_id_tenant_id_role_key" UNIQUE ("user_id", "tenant_id", "role");



ALTER TABLE ONLY "public"."votes"
    ADD CONSTRAINT "votes_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."votes"
    ADD CONSTRAINT "votes_tenant_id_award_id_nomination_id_voter_id_key" UNIQUE ("tenant_id", "award_id", "nomination_id", "voter_id");



ALTER TABLE ONLY "public"."wallet_ledger"
    ADD CONSTRAINT "wallet_ledger_pkey" PRIMARY KEY ("id");



CREATE INDEX "audit_logs_instance_id_idx" ON "auth"."audit_log_entries" USING "btree" ("instance_id");



CREATE UNIQUE INDEX "confirmation_token_idx" ON "auth"."users" USING "btree" ("confirmation_token") WHERE (("confirmation_token")::"text" !~ '^[0-9 ]*$'::"text");



CREATE UNIQUE INDEX "email_change_token_current_idx" ON "auth"."users" USING "btree" ("email_change_token_current") WHERE (("email_change_token_current")::"text" !~ '^[0-9 ]*$'::"text");



CREATE UNIQUE INDEX "email_change_token_new_idx" ON "auth"."users" USING "btree" ("email_change_token_new") WHERE (("email_change_token_new")::"text" !~ '^[0-9 ]*$'::"text");



CREATE INDEX "factor_id_created_at_idx" ON "auth"."mfa_factors" USING "btree" ("user_id", "created_at");



CREATE INDEX "flow_state_created_at_idx" ON "auth"."flow_state" USING "btree" ("created_at" DESC);



CREATE INDEX "identities_email_idx" ON "auth"."identities" USING "btree" ("email" "text_pattern_ops");



COMMENT ON INDEX "auth"."identities_email_idx" IS 'Auth: Ensures indexed queries on the email column';



CREATE INDEX "identities_user_id_idx" ON "auth"."identities" USING "btree" ("user_id");



CREATE INDEX "idx_auth_code" ON "auth"."flow_state" USING "btree" ("auth_code");



CREATE INDEX "idx_user_id_auth_method" ON "auth"."flow_state" USING "btree" ("user_id", "authentication_method");



CREATE INDEX "mfa_challenge_created_at_idx" ON "auth"."mfa_challenges" USING "btree" ("created_at" DESC);



CREATE UNIQUE INDEX "mfa_factors_user_friendly_name_unique" ON "auth"."mfa_factors" USING "btree" ("friendly_name", "user_id") WHERE (TRIM(BOTH FROM "friendly_name") <> ''::"text");



CREATE INDEX "mfa_factors_user_id_idx" ON "auth"."mfa_factors" USING "btree" ("user_id");



CREATE INDEX "oauth_auth_pending_exp_idx" ON "auth"."oauth_authorizations" USING "btree" ("expires_at") WHERE ("status" = 'pending'::"auth"."oauth_authorization_status");



CREATE INDEX "oauth_clients_deleted_at_idx" ON "auth"."oauth_clients" USING "btree" ("deleted_at");



CREATE INDEX "oauth_consents_active_client_idx" ON "auth"."oauth_consents" USING "btree" ("client_id") WHERE ("revoked_at" IS NULL);



CREATE INDEX "oauth_consents_active_user_client_idx" ON "auth"."oauth_consents" USING "btree" ("user_id", "client_id") WHERE ("revoked_at" IS NULL);



CREATE INDEX "oauth_consents_user_order_idx" ON "auth"."oauth_consents" USING "btree" ("user_id", "granted_at" DESC);



CREATE INDEX "one_time_tokens_relates_to_hash_idx" ON "auth"."one_time_tokens" USING "hash" ("relates_to");



CREATE INDEX "one_time_tokens_token_hash_hash_idx" ON "auth"."one_time_tokens" USING "hash" ("token_hash");



CREATE UNIQUE INDEX "one_time_tokens_user_id_token_type_key" ON "auth"."one_time_tokens" USING "btree" ("user_id", "token_type");



CREATE UNIQUE INDEX "reauthentication_token_idx" ON "auth"."users" USING "btree" ("reauthentication_token") WHERE (("reauthentication_token")::"text" !~ '^[0-9 ]*$'::"text");



CREATE UNIQUE INDEX "recovery_token_idx" ON "auth"."users" USING "btree" ("recovery_token") WHERE (("recovery_token")::"text" !~ '^[0-9 ]*$'::"text");



CREATE INDEX "refresh_tokens_instance_id_idx" ON "auth"."refresh_tokens" USING "btree" ("instance_id");



CREATE INDEX "refresh_tokens_instance_id_user_id_idx" ON "auth"."refresh_tokens" USING "btree" ("instance_id", "user_id");



CREATE INDEX "refresh_tokens_parent_idx" ON "auth"."refresh_tokens" USING "btree" ("parent");



CREATE INDEX "refresh_tokens_session_id_revoked_idx" ON "auth"."refresh_tokens" USING "btree" ("session_id", "revoked");



CREATE INDEX "refresh_tokens_updated_at_idx" ON "auth"."refresh_tokens" USING "btree" ("updated_at" DESC);



CREATE INDEX "saml_providers_sso_provider_id_idx" ON "auth"."saml_providers" USING "btree" ("sso_provider_id");



CREATE INDEX "saml_relay_states_created_at_idx" ON "auth"."saml_relay_states" USING "btree" ("created_at" DESC);



CREATE INDEX "saml_relay_states_for_email_idx" ON "auth"."saml_relay_states" USING "btree" ("for_email");



CREATE INDEX "saml_relay_states_sso_provider_id_idx" ON "auth"."saml_relay_states" USING "btree" ("sso_provider_id");



CREATE INDEX "sessions_not_after_idx" ON "auth"."sessions" USING "btree" ("not_after" DESC);



CREATE INDEX "sessions_oauth_client_id_idx" ON "auth"."sessions" USING "btree" ("oauth_client_id");



CREATE INDEX "sessions_user_id_idx" ON "auth"."sessions" USING "btree" ("user_id");



CREATE UNIQUE INDEX "sso_domains_domain_idx" ON "auth"."sso_domains" USING "btree" ("lower"("domain"));



CREATE INDEX "sso_domains_sso_provider_id_idx" ON "auth"."sso_domains" USING "btree" ("sso_provider_id");



CREATE UNIQUE INDEX "sso_providers_resource_id_idx" ON "auth"."sso_providers" USING "btree" ("lower"("resource_id"));



CREATE INDEX "sso_providers_resource_id_pattern_idx" ON "auth"."sso_providers" USING "btree" ("resource_id" "text_pattern_ops");



CREATE UNIQUE INDEX "unique_phone_factor_per_user" ON "auth"."mfa_factors" USING "btree" ("user_id", "phone");



CREATE INDEX "user_id_created_at_idx" ON "auth"."sessions" USING "btree" ("user_id", "created_at");



CREATE UNIQUE INDEX "users_email_partial_key" ON "auth"."users" USING "btree" ("email") WHERE ("is_sso_user" = false);



COMMENT ON INDEX "auth"."users_email_partial_key" IS 'Auth: A partial unique index that applies only when is_sso_user is false';



CREATE INDEX "users_instance_id_email_idx" ON "auth"."users" USING "btree" ("instance_id", "lower"(("email")::"text"));



CREATE INDEX "users_instance_id_idx" ON "auth"."users" USING "btree" ("instance_id");



CREATE INDEX "users_is_anonymous_idx" ON "auth"."users" USING "btree" ("is_anonymous");



CREATE INDEX "ai_suggestions_created_at_idx" ON "public"."ai_suggestions" USING "btree" ("created_at" DESC);



CREATE INDEX "ai_suggestions_tenant_id_idx" ON "public"."ai_suggestions" USING "btree" ("tenant_id");



CREATE INDEX "ai_suggestions_user_id_idx" ON "public"."ai_suggestions" USING "btree" ("user_id");



CREATE INDEX "idx_actions_challenge" ON "public"."challenge_actions" USING "btree" ("challenge_id");



CREATE INDEX "idx_actions_date" ON "public"."challenge_actions" USING "btree" ("created_at");



CREATE INDEX "idx_actions_tenant" ON "public"."challenge_actions" USING "btree" ("tenant_id");



CREATE INDEX "idx_actions_user" ON "public"."challenge_actions" USING "btree" ("user_id");



CREATE INDEX "idx_actions_validation" ON "public"."challenge_actions" USING "btree" ("validation_status");



CREATE UNIQUE INDEX "idx_admin_disbursements_idempotency" ON "public"."admin_disbursements" USING "btree" ("tenant_id", "idempotency_key") WHERE ("idempotency_key" IS NOT NULL);



CREATE INDEX "idx_admin_disbursements_tenant" ON "public"."admin_disbursements" USING "btree" ("tenant_id");



CREATE INDEX "idx_ai_categorization_log_created" ON "public"."ai_categorization_log" USING "btree" ("created_at" DESC);



CREATE INDEX "idx_ai_categorization_log_tenant_item" ON "public"."ai_categorization_log" USING "btree" ("tenant_id", "reward_item_id");



CREATE INDEX "idx_api_keys_key" ON "public"."api_keys" USING "btree" ("key") WHERE ("is_active" = true);



CREATE INDEX "idx_api_keys_tenant" ON "public"."api_keys" USING "btree" ("tenant_id");



CREATE INDEX "idx_api_keys_user" ON "public"."api_keys" USING "btree" ("user_id");



CREATE INDEX "idx_assignments_department" ON "public"."user_organizational_assignments" USING "btree" ("department_id");



CREATE INDEX "idx_assignments_team" ON "public"."user_organizational_assignments" USING "btree" ("team_id");



CREATE INDEX "idx_assignments_tenant" ON "public"."user_organizational_assignments" USING "btree" ("tenant_id");



CREATE INDEX "idx_assignments_user" ON "public"."user_organizational_assignments" USING "btree" ("user_id");



CREATE INDEX "idx_audit_logs_tenant_resource" ON "public"."audit_logs" USING "btree" ("tenant_id", "resource_type", "resource_id");



CREATE INDEX "idx_automatic_events_next_occurrence" ON "public"."automatic_events" USING "btree" ("next_occurrence_date") WHERE (("next_occurrence_date" IS NOT NULL) AND ("active" = true));



CREATE INDEX "idx_award_audit_actor_id" ON "public"."award_audit" USING "btree" ("actor_id");



CREATE INDEX "idx_award_audit_award_id" ON "public"."award_audit" USING "btree" ("award_id");



CREATE INDEX "idx_award_audit_created_at" ON "public"."award_audit" USING "btree" ("created_at");



CREATE INDEX "idx_award_audit_tenant_id" ON "public"."award_audit" USING "btree" ("tenant_id");



CREATE INDEX "idx_award_jury_award_id" ON "public"."award_jury" USING "btree" ("award_id");



CREATE INDEX "idx_award_jury_tenant_id" ON "public"."award_jury" USING "btree" ("tenant_id");



CREATE INDEX "idx_award_jury_user_id" ON "public"."award_jury" USING "btree" ("user_id");



CREATE INDEX "idx_award_payouts_award_id" ON "public"."award_payouts" USING "btree" ("award_id");



CREATE INDEX "idx_award_payouts_tenant_id" ON "public"."award_payouts" USING "btree" ("tenant_id");



CREATE INDEX "idx_award_payouts_user_id" ON "public"."award_payouts" USING "btree" ("user_id");



CREATE INDEX "idx_awards_archived_at" ON "public"."awards" USING "btree" ("archived_at") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_awards_scope_entity_id" ON "public"."awards" USING "btree" ("scope_entity_id");



CREATE INDEX "idx_awards_status" ON "public"."awards" USING "btree" ("status");



CREATE INDEX "idx_awards_tenant_id" ON "public"."awards" USING "btree" ("tenant_id");



CREATE INDEX "idx_badges_archived_at" ON "public"."badges" USING "btree" ("archived_at") WHERE ("archived_at" IS NOT NULL);



CREATE INDEX "idx_badges_category" ON "public"."badges" USING "btree" ("category");



CREATE INDEX "idx_badges_department_ids" ON "public"."badges" USING "gin" ("department_ids");



CREATE INDEX "idx_badges_status" ON "public"."badges" USING "btree" ("status");



CREATE INDEX "idx_badges_tenant_id" ON "public"."badges" USING "btree" ("tenant_id");



CREATE INDEX "idx_batch_queue_tenant_status" ON "public"."batch_processing_queue" USING "btree" ("tenant_id", "status", "created_at");



CREATE INDEX "idx_batch_recipients_batch" ON "public"."batch_recipients" USING "btree" ("batch_id");



CREATE INDEX "idx_batch_recipients_recipient" ON "public"."batch_recipients" USING "btree" ("recipient_type", "recipient_id");



CREATE INDEX "idx_brands_domain" ON "public"."brands" USING "btree" ("domain");



CREATE INDEX "idx_brands_slug" ON "public"."brands" USING "btree" ("slug");



CREATE INDEX "idx_budget_ledger_point_tx" ON "public"."recognition_budget_ledger" USING "btree" ("point_transaction_id");



CREATE INDEX "idx_budget_scope_limits_parent_scope" ON "public"."budget_scope_limits" USING "btree" ("parent_scope_id");



CREATE INDEX "idx_budget_scope_limits_tenant" ON "public"."budget_scope_limits" USING "btree" ("tenant_id");



CREATE INDEX "idx_budget_templates_period" ON "public"."budget_templates" USING "btree" ("tenant_id", "scope_type", "period_start", "period_end") WHERE ("is_active" = true);



CREATE INDEX "idx_budget_templates_tenant" ON "public"."budget_templates" USING "btree" ("tenant_id");



CREATE UNIQUE INDEX "idx_budget_templates_unique_period" ON "public"."budget_templates" USING "btree" ("tenant_id", "scope_type", "period_start", "period_end") WHERE ("is_active" = true);



CREATE INDEX "idx_challenges_active" ON "public"."challenges" USING "btree" ("tenant_id", "status") WHERE ("status" = ANY (ARRAY['active'::"public"."challenge_status", 'scheduled'::"public"."challenge_status"]));



CREATE INDEX "idx_challenges_dates" ON "public"."challenges" USING "btree" ("start_date", "end_date");



CREATE INDEX "idx_challenges_family" ON "public"."challenges" USING "btree" ("family");



CREATE INDEX "idx_challenges_status" ON "public"."challenges" USING "btree" ("status");



CREATE INDEX "idx_challenges_tenant" ON "public"."challenges" USING "btree" ("tenant_id");



CREATE INDEX "idx_departments_manager" ON "public"."departments" USING "btree" ("manager_id") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_departments_parent" ON "public"."departments" USING "btree" ("parent_department_id") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_departments_tenant" ON "public"."departments" USING "btree" ("tenant_id") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_enr_status" ON "public"."training_enrollments" USING "btree" ("status") WHERE ("status" <> 'dropped'::"text");



CREATE INDEX "idx_enr_tenant_training" ON "public"."training_enrollments" USING "btree" ("tenant_id", "training_id");



CREATE INDEX "idx_enr_user" ON "public"."training_enrollments" USING "btree" ("user_id");



CREATE UNIQUE INDEX "idx_funding_orders_idempotency" ON "public"."funding_orders" USING "btree" ("tenant_id", "idempotency_key") WHERE ("idempotency_key" IS NOT NULL);



CREATE INDEX "idx_funding_orders_provider_payment_id" ON "public"."funding_orders" USING "btree" ("provider_payment_id");



CREATE INDEX "idx_funding_orders_status" ON "public"."funding_orders" USING "btree" ("status");



CREATE INDEX "idx_funding_orders_tenant" ON "public"."funding_orders" USING "btree" ("tenant_id");



CREATE INDEX "idx_gift_card_batches_created_at" ON "public"."gift_card_batches" USING "btree" ("created_at" DESC);



CREATE INDEX "idx_gift_card_batches_created_by" ON "public"."gift_card_batches" USING "btree" ("created_by");



CREATE INDEX "idx_gift_card_batches_status" ON "public"."gift_card_batches" USING "btree" ("status");



CREATE INDEX "idx_gift_card_batches_tenant" ON "public"."gift_card_batches" USING "btree" ("tenant_id");



CREATE INDEX "idx_liability_snapshots_tenant_date" ON "public"."liability_snapshots" USING "btree" ("tenant_id", "snapshot_date" DESC);



CREATE INDEX "idx_ls_tenant_date" ON "public"."liability_snapshots" USING "btree" ("tenant_id", "snapshot_date" DESC);



CREATE INDEX "idx_nominations_award_id" ON "public"."nominations" USING "btree" ("award_id");



CREATE INDEX "idx_nominations_nominator_id" ON "public"."nominations" USING "btree" ("nominator_id");



CREATE INDEX "idx_nominations_nominee_id" ON "public"."nominations" USING "btree" ("nominee_id");



CREATE INDEX "idx_nominations_tenant_id" ON "public"."nominations" USING "btree" ("tenant_id");



CREATE INDEX "idx_nudge_logs_sent" ON "public"."challenge_nudge_logs" USING "btree" ("sent_at");



CREATE INDEX "idx_nudge_logs_user" ON "public"."challenge_nudge_logs" USING "btree" ("user_id");



CREATE INDEX "idx_nudges_active" ON "public"."challenge_nudges" USING "btree" ("is_active");



CREATE INDEX "idx_nudges_challenge" ON "public"."challenge_nudges" USING "btree" ("challenge_id");



CREATE INDEX "idx_nudges_type" ON "public"."challenge_nudges" USING "btree" ("nudge_type");



CREATE INDEX "idx_organizational_values_status" ON "public"."organizational_values" USING "btree" ("status");



CREATE INDEX "idx_organizational_values_tenant" ON "public"."organizational_values" USING "btree" ("tenant_id");



CREATE INDEX "idx_organizational_values_tenant_status" ON "public"."organizational_values" USING "btree" ("tenant_id", "status") WHERE ("status" = 'active'::"text");



CREATE INDEX "idx_participants_challenge" ON "public"."challenge_participants" USING "btree" ("challenge_id");



CREATE INDEX "idx_participants_status" ON "public"."challenge_participants" USING "btree" ("status");



CREATE INDEX "idx_participants_tenant" ON "public"."challenge_participants" USING "btree" ("tenant_id");



CREATE INDEX "idx_participants_user" ON "public"."challenge_participants" USING "btree" ("user_id");



CREATE INDEX "idx_point_transactions_created_at" ON "public"."point_transactions" USING "btree" ("created_at" DESC);



CREATE INDEX "idx_point_transactions_expires_at" ON "public"."point_transactions" USING "btree" ("expires_at") WHERE ("expires_at" IS NOT NULL);



CREATE INDEX "idx_point_transactions_recognition" ON "public"."point_transactions" USING "btree" ("recognition_id");



CREATE INDEX "idx_point_transactions_tenant" ON "public"."point_transactions" USING "btree" ("tenant_id");



CREATE INDEX "idx_point_transactions_user" ON "public"."point_transactions" USING "btree" ("user_id");



CREATE INDEX "idx_profiles_date_of_birth" ON "public"."profiles" USING "btree" ("date_of_birth") WHERE ("date_of_birth" IS NOT NULL);



CREATE INDEX "idx_profiles_email" ON "public"."profiles" USING "btree" ("email");



CREATE INDEX "idx_profiles_hire_date" ON "public"."profiles" USING "btree" ("hire_date") WHERE ("hire_date" IS NOT NULL);



CREATE INDEX "idx_profiles_manager" ON "public"."profiles" USING "btree" ("manager_id");



CREATE INDEX "idx_profiles_tenant_user" ON "public"."profiles" USING "btree" ("id");



CREATE INDEX "idx_prog_enrollment" ON "public"."training_progress" USING "btree" ("enrollment_id");



CREATE INDEX "idx_prog_user" ON "public"."training_progress" USING "btree" ("user_id");



CREATE INDEX "idx_provider_audit_logs_created_at" ON "public"."provider_audit_logs" USING "btree" ("created_at" DESC);



CREATE INDEX "idx_provider_audit_logs_tenant_id" ON "public"."provider_audit_logs" USING "btree" ("tenant_id");



CREATE INDEX "idx_quiz_attempts_enrollment" ON "public"."training_quiz_attempts" USING "btree" ("enrollment_id");



CREATE INDEX "idx_quiz_attempts_section" ON "public"."training_quiz_attempts" USING "btree" ("section_id", "user_id");



CREATE INDEX "idx_quiz_attempts_tenant" ON "public"."training_quiz_attempts" USING "btree" ("tenant_id");



CREATE INDEX "idx_rate_limits_lookup" ON "public"."api_rate_limits" USING "btree" ("tenant_id", "user_id", "endpoint", "window_start");



CREATE INDEX "idx_rb_scope_period" ON "public"."recognition_budgets" USING "btree" ("scope_id", "period_start", "period_end");



CREATE INDEX "idx_rb_tenant_period" ON "public"."recognition_budgets" USING "btree" ("tenant_id", "period_start", "period_end");



CREATE INDEX "idx_rbl_budget" ON "public"."recognition_budget_ledger" USING "btree" ("budget_id", "created_at");



CREATE INDEX "idx_rbl_tenant" ON "public"."recognition_budget_ledger" USING "btree" ("tenant_id", "created_at");



CREATE INDEX "idx_recognition_approvals_approver" ON "public"."recognition_approvals" USING "btree" ("approver_id");



CREATE INDEX "idx_recognition_approvals_recognition" ON "public"."recognition_approvals" USING "btree" ("recognition_id");



CREATE INDEX "idx_recognition_approvals_status" ON "public"."recognition_approvals" USING "btree" ("status");



CREATE INDEX "idx_recognition_comments_created" ON "public"."recognition_comments" USING "btree" ("created_at" DESC);



CREATE INDEX "idx_recognition_comments_tenant" ON "public"."recognition_comments" USING "btree" ("tenant_id");



CREATE INDEX "idx_recognition_comments_transaction" ON "public"."recognition_comments" USING "btree" ("transaction_id");



CREATE INDEX "idx_recognition_comments_user" ON "public"."recognition_comments" USING "btree" ("user_id");



CREATE INDEX "idx_recognition_comments_user_id" ON "public"."recognition_comments" USING "btree" ("user_id");



CREATE INDEX "idx_recognition_reactions_tenant" ON "public"."recognition_reactions" USING "btree" ("tenant_id");



CREATE INDEX "idx_recognition_reactions_transaction" ON "public"."recognition_reactions" USING "btree" ("transaction_id");



CREATE INDEX "idx_recognition_reactions_user" ON "public"."recognition_reactions" USING "btree" ("user_id");



CREATE INDEX "idx_recognition_recipients_recipient" ON "public"."recognition_recipients" USING "btree" ("recipient_id");



CREATE INDEX "idx_recognition_recipients_recipient_id" ON "public"."recognition_recipients" USING "btree" ("recipient_id");



CREATE INDEX "idx_recognition_recipients_transaction" ON "public"."recognition_recipients" USING "btree" ("transaction_id");



CREATE INDEX "idx_recognition_snapshots_recognition" ON "public"."recognition_snapshots" USING "btree" ("recognition_id");



CREATE INDEX "idx_recognition_transactions_giver" ON "public"."recognition_transactions" USING "btree" ("giver_id");



CREATE INDEX "idx_recognition_transactions_giver_id" ON "public"."recognition_transactions" USING "btree" ("giver_id");



CREATE INDEX "idx_recognition_transactions_status" ON "public"."recognition_transactions" USING "btree" ("status");



CREATE INDEX "idx_recognition_transactions_tenant" ON "public"."recognition_transactions" USING "btree" ("tenant_id");



CREATE INDEX "idx_recognition_transactions_visibility" ON "public"."recognition_transactions" USING "btree" ("visibility");



CREATE INDEX "idx_recognition_types_is_flash_mode" ON "public"."recognition_types" USING "btree" ("tenant_id", "is_flash_mode") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_recognition_types_tenant_archived" ON "public"."recognition_types" USING "btree" ("tenant_id", "archived_at");



CREATE INDEX "idx_recognition_types_tenant_name" ON "public"."recognition_types" USING "btree" ("tenant_id", "lower"("name")) WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_recognition_types_tenant_status" ON "public"."recognition_types" USING "btree" ("tenant_id", "status") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_recognitions_created_at" ON "public"."recognitions" USING "btree" ("created_at" DESC);



CREATE INDEX "idx_recognitions_giver" ON "public"."recognitions" USING "btree" ("giver_id");



CREATE INDEX "idx_recognitions_receiver" ON "public"."recognitions" USING "btree" ("receiver_id");



CREATE INDEX "idx_recognitions_source" ON "public"."recognitions" USING "btree" ("source_type", "source_id");



CREATE INDEX "idx_recognitions_status" ON "public"."recognitions" USING "btree" ("status");



CREATE INDEX "idx_recognitions_tenant" ON "public"."recognitions" USING "btree" ("tenant_id");



CREATE INDEX "idx_redemption_orders_batch" ON "public"."redemption_orders" USING "btree" ("batch_id");



CREATE INDEX "idx_redemption_orders_external_order" ON "public"."redemption_orders" USING "btree" ("external_order_id");



CREATE INDEX "idx_redemption_orders_idempotency" ON "public"."redemption_orders" USING "btree" ("idempotency_key");



CREATE INDEX "idx_redemption_orders_status" ON "public"."redemption_orders" USING "btree" ("status");



CREATE INDEX "idx_redemption_orders_tenant" ON "public"."redemption_orders" USING "btree" ("tenant_id");



CREATE INDEX "idx_redemption_orders_user" ON "public"."redemption_orders" USING "btree" ("user_id");



CREATE INDEX "idx_reward_catalog_items_country_currency" ON "public"."reward_catalog_items" USING "btree" ("country", "currency");



CREATE INDEX "idx_reward_catalog_items_provider" ON "public"."reward_catalog_items" USING "btree" ("provider_id");



CREATE INDEX "idx_reward_catalog_items_visible_available" ON "public"."reward_catalog_items" USING "btree" ("visible", "available");



CREATE INDEX "idx_reward_categories_featured" ON "public"."reward_categories" USING "btree" ("tenant_id") WHERE ("is_featured" = true);



CREATE INDEX "idx_reward_categories_tenant_visible" ON "public"."reward_categories" USING "btree" ("tenant_id", "visible");



CREATE INDEX "idx_reward_featured_tenant" ON "public"."reward_featured_items" USING "btree" ("tenant_id", "featured_from", "featured_until");



CREATE INDEX "idx_reward_item_categories_category" ON "public"."reward_item_categories" USING "btree" ("category_id");



CREATE INDEX "idx_reward_item_categories_created_at" ON "public"."reward_item_categories" USING "btree" ("created_at" DESC);



CREATE INDEX "idx_reward_item_categories_item" ON "public"."reward_item_categories" USING "btree" ("reward_item_id");



CREATE INDEX "idx_reward_item_categories_tenant" ON "public"."reward_item_categories" USING "btree" ("tenant_id");



CREATE INDEX "idx_reward_items_available" ON "public"."reward_items" USING "btree" ("available");



CREATE INDEX "idx_reward_items_provider_country_currency" ON "public"."reward_items" USING "btree" ("provider_id", "country", "currency");



CREATE INDEX "idx_reward_items_tremendous_product_id" ON "public"."reward_items" USING "btree" ("tremendous_product_id");



CREATE INDEX "idx_reward_redemptions_status" ON "public"."reward_redemptions" USING "btree" ("status");



CREATE INDEX "idx_reward_redemptions_tenant" ON "public"."reward_redemptions" USING "btree" ("tenant_id", "created_at" DESC);



CREATE INDEX "idx_reward_redemptions_user" ON "public"."reward_redemptions" USING "btree" ("user_id", "tenant_id");



CREATE INDEX "idx_rs_tenant_type" ON "public"."recognition_scopes" USING "btree" ("tenant_id", "scope_type");



CREATE UNIQUE INDEX "idx_rs_unique_company" ON "public"."recognition_scopes" USING "btree" ("tenant_id", "scope_type") WHERE ("scope_type" = 'company'::"text");



CREATE UNIQUE INDEX "idx_rs_unique_department" ON "public"."recognition_scopes" USING "btree" ("tenant_id", "scope_type", "department_id") WHERE (("scope_type" = 'department'::"text") AND ("department_id" IS NOT NULL));



CREATE UNIQUE INDEX "idx_rs_unique_manager" ON "public"."recognition_scopes" USING "btree" ("tenant_id", "scope_type", "manager_user_id") WHERE (("scope_type" = 'manager'::"text") AND ("manager_user_id" IS NOT NULL));



CREATE UNIQUE INDEX "idx_rs_unique_team" ON "public"."recognition_scopes" USING "btree" ("tenant_id", "scope_type", "team_id") WHERE (("scope_type" = 'team'::"text") AND ("team_id" IS NOT NULL));



CREATE UNIQUE INDEX "idx_rs_unique_user" ON "public"."recognition_scopes" USING "btree" ("tenant_id", "scope_type", "user_id") WHERE (("scope_type" = 'user'::"text") AND ("user_id" IS NOT NULL));



CREATE INDEX "idx_section_comp_enrollment" ON "public"."training_section_completions" USING "btree" ("enrollment_id");



CREATE INDEX "idx_section_comp_tenant" ON "public"."training_section_completions" USING "btree" ("tenant_id");



CREATE INDEX "idx_section_comp_user_training" ON "public"."training_section_completions" USING "btree" ("user_id", "training_id");



CREATE INDEX "idx_sso_tokens_expires_at" ON "public"."sso_tokens" USING "btree" ("expires_at");



CREATE INDEX "idx_sso_tokens_token" ON "public"."sso_tokens" USING "btree" ("token");



CREATE INDEX "idx_sync_status_metadata" ON "public"."catalog_sync_status" USING "gin" ("metadata");



CREATE INDEX "idx_sync_status_tenant" ON "public"."catalog_sync_status" USING "btree" ("tenant_id", "provider_id", "started_at" DESC);



CREATE INDEX "idx_teams_department" ON "public"."teams" USING "btree" ("department_id") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_teams_manager" ON "public"."teams" USING "btree" ("manager_id") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_teams_parent" ON "public"."teams" USING "btree" ("parent_team_id") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_teams_tenant" ON "public"."teams" USING "btree" ("tenant_id") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_tenant_integrations_tenant_id" ON "public"."tenant_integrations" USING "btree" ("tenant_id");



CREATE INDEX "idx_tenant_integrations_type" ON "public"."tenant_integrations" USING "btree" ("tenant_id", "integration_type");



CREATE INDEX "idx_tenant_invitations_email" ON "public"."tenant_invitations" USING "btree" ("email");



CREATE INDEX "idx_tenant_invitations_expires_at" ON "public"."tenant_invitations" USING "btree" ("expires_at");



CREATE INDEX "idx_tenant_invitations_tenant_id" ON "public"."tenant_invitations" USING "btree" ("tenant_id");



CREATE INDEX "idx_tenant_invitations_token" ON "public"."tenant_invitations" USING "btree" ("token");



CREATE INDEX "idx_tenant_provider_configs_is_default" ON "public"."tenant_provider_configs" USING "btree" ("tenant_id", "is_default") WHERE ("is_default" = true);



CREATE INDEX "idx_tenant_provider_configs_provider_id" ON "public"."tenant_provider_configs" USING "btree" ("provider_id");



CREATE INDEX "idx_tenant_provider_configs_status" ON "public"."tenant_provider_configs" USING "btree" ("status");



CREATE INDEX "idx_tenant_provider_configs_tenant_id" ON "public"."tenant_provider_configs" USING "btree" ("tenant_id");



CREATE INDEX "idx_tenants_brand_id" ON "public"."tenants" USING "btree" ("brand_id");



CREATE INDEX "idx_training_feed_events_created_at" ON "public"."training_feed_events" USING "btree" ("created_at" DESC);



CREATE INDEX "idx_training_feed_events_tenant" ON "public"."training_feed_events" USING "btree" ("tenant_id");



CREATE INDEX "idx_training_feed_events_training" ON "public"."training_feed_events" USING "btree" ("training_id");



CREATE INDEX "idx_training_feed_events_user" ON "public"."training_feed_events" USING "btree" ("user_id");



CREATE INDEX "idx_training_feed_tenant_created" ON "public"."training_feed_events" USING "btree" ("tenant_id", "created_at" DESC);



CREATE INDEX "idx_training_feed_user" ON "public"."training_feed_events" USING "btree" ("user_id");



CREATE INDEX "idx_training_micro_missions_tenant" ON "public"."training_micro_missions" USING "btree" ("tenant_id");



CREATE INDEX "idx_training_micro_missions_training" ON "public"."training_micro_missions" USING "btree" ("training_id") WHERE ("is_active" = true);



CREATE INDEX "idx_training_micro_missions_training_active" ON "public"."training_micro_missions" USING "btree" ("training_id", "is_active");



CREATE INDEX "idx_training_progress_user_training" ON "public"."training_progress" USING "btree" ("user_id", "training_id");



CREATE INDEX "idx_training_sections_tenant" ON "public"."training_sections" USING "btree" ("tenant_id");



CREATE INDEX "idx_training_sections_training" ON "public"."training_sections" USING "btree" ("training_id", "sort_order");



CREATE INDEX "idx_trainings_ai_tracking" ON "public"."trainings" USING "btree" ("ai_suggested_at", "published_at") WHERE ("ai_suggested_at" IS NOT NULL);



CREATE INDEX "idx_trainings_created_by" ON "public"."trainings" USING "btree" ("created_by");



CREATE INDEX "idx_trainings_published_at" ON "public"."trainings" USING "btree" ("published_at") WHERE ("published_at" IS NOT NULL);



CREATE INDEX "idx_trainings_status" ON "public"."trainings" USING "btree" ("status") WHERE ("archived_at" IS NULL);



CREATE INDEX "idx_trainings_tenant" ON "public"."trainings" USING "btree" ("tenant_id");



CREATE INDEX "idx_trv_visible" ON "public"."tenant_reward_visibility" USING "btree" ("tenant_id", "visible");



CREATE INDEX "idx_user_mission_completions_active" ON "public"."user_mission_completions" USING "btree" ("user_id", "training_id") WHERE ("completed" = false);



CREATE INDEX "idx_user_mission_completions_mission" ON "public"."user_mission_completions" USING "btree" ("mission_id");



CREATE INDEX "idx_user_mission_completions_training" ON "public"."user_mission_completions" USING "btree" ("training_id");



CREATE INDEX "idx_user_mission_completions_training_user" ON "public"."user_mission_completions" USING "btree" ("training_id", "user_id", "completed");



CREATE INDEX "idx_user_mission_completions_user" ON "public"."user_mission_completions" USING "btree" ("user_id");



CREATE INDEX "idx_user_point_balances_current_balance" ON "public"."user_point_balances" USING "btree" ("current_balance" DESC);



CREATE INDEX "idx_user_point_balances_tenant" ON "public"."user_point_balances" USING "btree" ("tenant_id");



CREATE INDEX "idx_user_roles_tenant_user" ON "public"."user_roles" USING "btree" ("tenant_id", "user_id");



CREATE INDEX "idx_votes_award_id" ON "public"."votes" USING "btree" ("award_id");



CREATE INDEX "idx_votes_nomination_id" ON "public"."votes" USING "btree" ("nomination_id");



CREATE INDEX "idx_votes_tenant_id" ON "public"."votes" USING "btree" ("tenant_id");



CREATE INDEX "idx_votes_voter_id" ON "public"."votes" USING "btree" ("voter_id");



CREATE INDEX "idx_votes_voter_type" ON "public"."votes" USING "btree" ("voter_type");



CREATE UNIQUE INDEX "idx_wallet_ledger_idempotency" ON "public"."wallet_ledger" USING "btree" ("tenant_id", "idempotency_key") WHERE ("idempotency_key" IS NOT NULL);



CREATE INDEX "idx_wallet_ledger_redemption" ON "public"."wallet_ledger" USING "btree" ("reference_id") WHERE ("reference_type" = 'reward_redemption'::"text");



CREATE INDEX "idx_wallet_ledger_tenant" ON "public"."wallet_ledger" USING "btree" ("tenant_id");



CREATE UNIQUE INDEX "tenants_brand_subdomain_key" ON "public"."tenants" USING "btree" ("brand_id", "subdomain");



CREATE OR REPLACE TRIGGER "on_auth_user_created" AFTER INSERT ON "auth"."users" FOR EACH ROW EXECUTE FUNCTION "public"."handle_new_user"();



CREATE OR REPLACE TRIGGER "audit_automatic_events_trigger" AFTER INSERT OR DELETE OR UPDATE ON "public"."automatic_events" FOR EACH ROW EXECUTE FUNCTION "public"."audit_automatic_events"();



CREATE OR REPLACE TRIGGER "audit_awards_trigger" AFTER INSERT OR DELETE OR UPDATE ON "public"."awards" FOR EACH ROW EXECUTE FUNCTION "public"."audit_awards"();



CREATE OR REPLACE TRIGGER "audit_badges_trigger" AFTER INSERT OR DELETE OR UPDATE ON "public"."badges" FOR EACH ROW EXECUTE FUNCTION "public"."audit_badges"();



CREATE OR REPLACE TRIGGER "audit_occasions_trigger" AFTER INSERT OR DELETE OR UPDATE ON "public"."occasions" FOR EACH ROW EXECUTE FUNCTION "public"."audit_occasions"();



CREATE OR REPLACE TRIGGER "audit_organizational_values_trigger" AFTER INSERT OR DELETE OR UPDATE ON "public"."organizational_values" FOR EACH ROW EXECUTE FUNCTION "public"."audit_organizational_values"();



CREATE OR REPLACE TRIGGER "audit_provider_config_changes_trigger" AFTER INSERT OR DELETE OR UPDATE ON "public"."tenant_provider_configs" FOR EACH ROW EXECUTE FUNCTION "public"."audit_provider_config_changes"();



CREATE OR REPLACE TRIGGER "audit_recognition_transactions" AFTER INSERT OR DELETE OR UPDATE ON "public"."recognition_transactions" FOR EACH ROW EXECUTE FUNCTION "public"."audit_recognitions"();



CREATE OR REPLACE TRIGGER "audit_recognitions_trigger" AFTER INSERT OR DELETE OR UPDATE ON "public"."recognitions" FOR EACH ROW EXECUTE FUNCTION "public"."audit_recognitions"();



CREATE OR REPLACE TRIGGER "audit_tenant_tremendous_mapping_changes" AFTER INSERT OR UPDATE ON "public"."tenant_tremendous_mapping" FOR EACH ROW EXECUTE FUNCTION "public"."audit_tenant_tremendous_mapping"();



CREATE OR REPLACE TRIGGER "ensure_single_default_provider_trigger" BEFORE INSERT OR UPDATE ON "public"."tenant_provider_configs" FOR EACH ROW WHEN (("new"."is_default" = true)) EXECUTE FUNCTION "public"."ensure_single_default_provider"();



CREATE OR REPLACE TRIGGER "on_nomination_status_update_candidates" AFTER UPDATE OF "status" ON "public"."nominations" FOR EACH ROW WHEN (("old"."status" IS DISTINCT FROM "new"."status")) EXECUTE FUNCTION "public"."trigger_update_candidates_count"();



CREATE OR REPLACE TRIGGER "on_vote_delete_decrement_votes" AFTER DELETE ON "public"."votes" FOR EACH ROW EXECUTE FUNCTION "public"."trigger_decrement_nomination_votes"();



CREATE OR REPLACE TRIGGER "on_vote_insert_increment_votes" AFTER INSERT ON "public"."votes" FOR EACH ROW EXECUTE FUNCTION "public"."trigger_increment_nomination_votes"();



CREATE OR REPLACE TRIGGER "recognition_types_audit_trigger" AFTER INSERT OR DELETE OR UPDATE ON "public"."recognition_types" FOR EACH ROW EXECUTE FUNCTION "public"."audit_recognition_types"();



CREATE OR REPLACE TRIGGER "send_gift_card_email_trigger" AFTER UPDATE ON "public"."redemption_orders" FOR EACH ROW WHEN ((("old"."status" IS DISTINCT FROM 'fulfilled'::"text") AND ("new"."status" = 'fulfilled'::"text") AND (("new"."redemption_url" IS NOT NULL) OR ("new"."redemption_code" IS NOT NULL)))) EXECUTE FUNCTION "public"."trigger_gift_card_email"();



CREATE OR REPLACE TRIGGER "training_updated_at" BEFORE UPDATE ON "public"."trainings" FOR EACH ROW EXECUTE FUNCTION "public"."update_training_updated_at"();



CREATE OR REPLACE TRIGGER "update_balance_on_transaction" AFTER INSERT ON "public"."point_transactions" FOR EACH ROW EXECUTE FUNCTION "public"."update_user_balance"();



CREATE OR REPLACE TRIGGER "update_brands_timestamp" BEFORE UPDATE ON "public"."brands" FOR EACH ROW EXECUTE FUNCTION "public"."update_brands_updated_at"();



CREATE OR REPLACE TRIGGER "update_budget_scope_limits_updated_at" BEFORE UPDATE ON "public"."budget_scope_limits" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_budget_templates_updated_at" BEFORE UPDATE ON "public"."budget_templates" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_enr_updated_at" BEFORE UPDATE ON "public"."training_enrollments" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_funding_orders_updated_at" BEFORE UPDATE ON "public"."funding_orders" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_gift_card_batches_updated_at" BEFORE UPDATE ON "public"."gift_card_batches" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_global_provider_configs_updated_at" BEFORE UPDATE ON "public"."global_provider_configs" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_global_configs"();



CREATE OR REPLACE TRIGGER "update_prog_updated_at" BEFORE UPDATE ON "public"."training_progress" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_recognition_budgets_updated_at" BEFORE UPDATE ON "public"."recognition_budgets" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_recognition_comments_updated_at" BEFORE UPDATE ON "public"."recognition_comments" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_recognition_scopes_updated_at" BEFORE UPDATE ON "public"."recognition_scopes" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_redemption_orders_updated_at" BEFORE UPDATE ON "public"."redemption_orders" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_reward_catalog_items_updated_at" BEFORE UPDATE ON "public"."reward_catalog_items" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_tenant_wallets_updated_at" BEFORE UPDATE ON "public"."tenant_wallets" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_training_micro_missions_updated_at" BEFORE UPDATE ON "public"."training_micro_missions" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_training_sections_updated_at" BEFORE UPDATE ON "public"."training_sections" FOR EACH ROW EXECUTE FUNCTION "public"."update_training_updated_at"();



CREATE OR REPLACE TRIGGER "update_user_mission_completions_updated_at" BEFORE UPDATE ON "public"."user_mission_completions" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "validate_profile_dates_trigger" BEFORE INSERT OR UPDATE OF "date_of_birth", "hire_date" ON "public"."profiles" FOR EACH ROW EXECUTE FUNCTION "public"."validate_profile_dates"();



ALTER TABLE ONLY "auth"."identities"
    ADD CONSTRAINT "identities_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."mfa_amr_claims"
    ADD CONSTRAINT "mfa_amr_claims_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "auth"."sessions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."mfa_challenges"
    ADD CONSTRAINT "mfa_challenges_auth_factor_id_fkey" FOREIGN KEY ("factor_id") REFERENCES "auth"."mfa_factors"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."mfa_factors"
    ADD CONSTRAINT "mfa_factors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."oauth_authorizations"
    ADD CONSTRAINT "oauth_authorizations_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "auth"."oauth_clients"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."oauth_authorizations"
    ADD CONSTRAINT "oauth_authorizations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."oauth_consents"
    ADD CONSTRAINT "oauth_consents_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "auth"."oauth_clients"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."oauth_consents"
    ADD CONSTRAINT "oauth_consents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."one_time_tokens"
    ADD CONSTRAINT "one_time_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."refresh_tokens"
    ADD CONSTRAINT "refresh_tokens_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "auth"."sessions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."saml_providers"
    ADD CONSTRAINT "saml_providers_sso_provider_id_fkey" FOREIGN KEY ("sso_provider_id") REFERENCES "auth"."sso_providers"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."saml_relay_states"
    ADD CONSTRAINT "saml_relay_states_flow_state_id_fkey" FOREIGN KEY ("flow_state_id") REFERENCES "auth"."flow_state"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."saml_relay_states"
    ADD CONSTRAINT "saml_relay_states_sso_provider_id_fkey" FOREIGN KEY ("sso_provider_id") REFERENCES "auth"."sso_providers"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."sessions"
    ADD CONSTRAINT "sessions_oauth_client_id_fkey" FOREIGN KEY ("oauth_client_id") REFERENCES "auth"."oauth_clients"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."sessions"
    ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "auth"."sso_domains"
    ADD CONSTRAINT "sso_domains_sso_provider_id_fkey" FOREIGN KEY ("sso_provider_id") REFERENCES "auth"."sso_providers"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."admin_disbursements"
    ADD CONSTRAINT "admin_disbursements_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."ai_suggestions"
    ADD CONSTRAINT "ai_suggestions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."ai_suggestions"
    ADD CONSTRAINT "ai_suggestions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."api_keys"
    ADD CONSTRAINT "api_keys_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "auth"."users"("id");



ALTER TABLE ONLY "public"."api_keys"
    ADD CONSTRAINT "api_keys_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."api_keys"
    ADD CONSTRAINT "api_keys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."audit_logs"
    ADD CONSTRAINT "audit_logs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."audit_logs"
    ADD CONSTRAINT "audit_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."award_audit"
    ADD CONSTRAINT "award_audit_award_id_fkey" FOREIGN KEY ("award_id") REFERENCES "public"."awards"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."award_audit"
    ADD CONSTRAINT "award_audit_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."award_jury"
    ADD CONSTRAINT "award_jury_award_id_fkey" FOREIGN KEY ("award_id") REFERENCES "public"."awards"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."award_jury"
    ADD CONSTRAINT "award_jury_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."award_payouts"
    ADD CONSTRAINT "award_payouts_award_id_fkey" FOREIGN KEY ("award_id") REFERENCES "public"."awards"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."award_payouts"
    ADD CONSTRAINT "award_payouts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."batch_processing_queue"
    ADD CONSTRAINT "batch_processing_queue_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "public"."gift_card_batches"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."batch_recipients"
    ADD CONSTRAINT "batch_recipients_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "public"."gift_card_batches"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."budget_overrides"
    ADD CONSTRAINT "budget_overrides_scope_id_fkey" FOREIGN KEY ("scope_id") REFERENCES "public"."recognition_scopes"("id");



ALTER TABLE ONLY "public"."budget_scope_limits"
    ADD CONSTRAINT "budget_scope_limits_parent_scope_id_fkey" FOREIGN KEY ("parent_scope_id") REFERENCES "public"."recognition_scopes"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."challenge_actions"
    ADD CONSTRAINT "challenge_actions_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."challenge_actions"
    ADD CONSTRAINT "challenge_actions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id");



ALTER TABLE ONLY "public"."challenge_nudge_logs"
    ADD CONSTRAINT "challenge_nudge_logs_nudge_id_fkey" FOREIGN KEY ("nudge_id") REFERENCES "public"."challenge_nudges"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."challenge_nudges"
    ADD CONSTRAINT "challenge_nudges_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."challenge_nudges"
    ADD CONSTRAINT "challenge_nudges_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id");



ALTER TABLE ONLY "public"."challenge_participants"
    ADD CONSTRAINT "challenge_participants_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."challenge_participants"
    ADD CONSTRAINT "challenge_participants_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id");



ALTER TABLE ONLY "public"."challenges"
    ADD CONSTRAINT "challenges_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "public"."badges"("id");



ALTER TABLE ONLY "public"."challenges"
    ADD CONSTRAINT "challenges_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id");



ALTER TABLE ONLY "public"."departments"
    ADD CONSTRAINT "departments_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "public"."profiles"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."departments"
    ADD CONSTRAINT "departments_parent_department_id_fkey" FOREIGN KEY ("parent_department_id") REFERENCES "public"."departments"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."departments"
    ADD CONSTRAINT "departments_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."gift_card_batches"
    ADD CONSTRAINT "fk_catalog_item_id" FOREIGN KEY ("catalog_item_id") REFERENCES "public"."reward_items"("id");



ALTER TABLE ONLY "public"."recognition_budget_ledger"
    ADD CONSTRAINT "fk_point_transaction" FOREIGN KEY ("point_transaction_id") REFERENCES "public"."point_transactions"("id");



ALTER TABLE ONLY "public"."redemption_orders"
    ADD CONSTRAINT "fk_redemption_orders_catalog_item" FOREIGN KEY ("catalog_item_id") REFERENCES "public"."reward_items"("id");



ALTER TABLE ONLY "public"."ai_categorization_log"
    ADD CONSTRAINT "fk_tenant" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_feed_events"
    ADD CONSTRAINT "fk_training_feed_training" FOREIGN KEY ("training_id") REFERENCES "public"."trainings"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_feed_events"
    ADD CONSTRAINT "fk_training_feed_user" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_sections"
    ADD CONSTRAINT "fk_training_sections_tenant" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_sections"
    ADD CONSTRAINT "fk_training_sections_training" FOREIGN KEY ("training_id") REFERENCES "public"."trainings"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."funding_orders"
    ADD CONSTRAINT "funding_orders_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."gift_card_batches"
    ADD CONSTRAINT "gift_card_batches_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id");



ALTER TABLE ONLY "public"."gift_card_batches"
    ADD CONSTRAINT "gift_card_batches_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id");



ALTER TABLE ONLY "public"."gift_card_batches"
    ADD CONSTRAINT "gift_card_batches_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."nominations"
    ADD CONSTRAINT "nominations_award_id_fkey" FOREIGN KEY ("award_id") REFERENCES "public"."awards"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."organizational_values"
    ADD CONSTRAINT "organizational_values_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."point_transactions"
    ADD CONSTRAINT "point_transactions_recognition_id_fkey" FOREIGN KEY ("recognition_id") REFERENCES "public"."recognitions"("id");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "public"."profiles"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."provider_audit_logs"
    ADD CONSTRAINT "provider_audit_logs_config_id_fkey" FOREIGN KEY ("config_id") REFERENCES "public"."tenant_provider_configs"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_approvals"
    ADD CONSTRAINT "recognition_approvals_recognition_id_fkey" FOREIGN KEY ("recognition_id") REFERENCES "public"."recognitions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_approvals"
    ADD CONSTRAINT "recognition_approvals_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."recognition_transactions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_budget_ledger"
    ADD CONSTRAINT "recognition_budget_ledger_budget_id_fkey" FOREIGN KEY ("budget_id") REFERENCES "public"."recognition_budgets"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_budgets"
    ADD CONSTRAINT "recognition_budgets_scope_id_fkey" FOREIGN KEY ("scope_id") REFERENCES "public"."recognition_scopes"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_comments"
    ADD CONSTRAINT "recognition_comments_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id");



ALTER TABLE ONLY "public"."recognition_comments"
    ADD CONSTRAINT "recognition_comments_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."recognition_transactions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_comments"
    ADD CONSTRAINT "recognition_comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."recognition_reactions"
    ADD CONSTRAINT "recognition_reactions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id");



ALTER TABLE ONLY "public"."recognition_reactions"
    ADD CONSTRAINT "recognition_reactions_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."recognition_transactions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_recipients"
    ADD CONSTRAINT "recognition_recipients_receiver_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_recipients"
    ADD CONSTRAINT "recognition_recipients_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."recognition_transactions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_scopes"
    ADD CONSTRAINT "recognition_scopes_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_scopes"
    ADD CONSTRAINT "recognition_scopes_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_snapshots"
    ADD CONSTRAINT "recognition_snapshots_recognition_id_fkey" FOREIGN KEY ("recognition_id") REFERENCES "public"."recognitions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognition_transactions"
    ADD CONSTRAINT "recognition_transactions_giver_id_fkey" FOREIGN KEY ("giver_id") REFERENCES "public"."profiles"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."recognition_transactions"
    ADD CONSTRAINT "recognition_transactions_recognition_type_id_fkey" FOREIGN KEY ("recognition_type_id") REFERENCES "public"."recognition_types"("id");



ALTER TABLE ONLY "public"."recognition_transactions"
    ADD CONSTRAINT "recognition_transactions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id");



ALTER TABLE ONLY "public"."recognition_types"
    ADD CONSTRAINT "recognition_types_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."recognitions"
    ADD CONSTRAINT "recognitions_recognition_type_id_fkey" FOREIGN KEY ("recognition_type_id") REFERENCES "public"."recognition_types"("id");



ALTER TABLE ONLY "public"."redemption_orders"
    ADD CONSTRAINT "redemption_orders_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "public"."gift_card_batches"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."redemption_orders"
    ADD CONSTRAINT "redemption_orders_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id");



ALTER TABLE ONLY "public"."redemption_orders"
    ADD CONSTRAINT "redemption_orders_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."reward_catalog_items"
    ADD CONSTRAINT "reward_catalog_items_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."reward_categories"
    ADD CONSTRAINT "reward_categories_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."reward_featured_items"
    ADD CONSTRAINT "reward_featured_items_reward_item_id_fkey" FOREIGN KEY ("reward_item_id") REFERENCES "public"."reward_items"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."reward_featured_items"
    ADD CONSTRAINT "reward_featured_items_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."reward_item_categories"
    ADD CONSTRAINT "reward_item_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."reward_categories"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."reward_item_categories"
    ADD CONSTRAINT "reward_item_categories_reward_item_id_fkey" FOREIGN KEY ("reward_item_id") REFERENCES "public"."reward_items"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."reward_item_categories"
    ADD CONSTRAINT "reward_item_categories_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."reward_redemptions"
    ADD CONSTRAINT "reward_redemptions_point_tx_id_fkey" FOREIGN KEY ("point_tx_id") REFERENCES "public"."point_transactions"("id");



ALTER TABLE ONLY "public"."reward_redemptions"
    ADD CONSTRAINT "reward_redemptions_wallet_ledger_id_fkey" FOREIGN KEY ("wallet_ledger_id") REFERENCES "public"."wallet_ledger"("id");



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "public"."profiles"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_parent_team_id_fkey" FOREIGN KEY ("parent_team_id") REFERENCES "public"."teams"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_feature_flags"
    ADD CONSTRAINT "tenant_feature_flags_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_integrations"
    ADD CONSTRAINT "tenant_integrations_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "auth"."users"("id");



ALTER TABLE ONLY "public"."tenant_integrations"
    ADD CONSTRAINT "tenant_integrations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_invitations"
    ADD CONSTRAINT "tenant_invitations_invited_by_fkey" FOREIGN KEY ("invited_by") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_invitations"
    ADD CONSTRAINT "tenant_invitations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_provider_configs"
    ADD CONSTRAINT "tenant_provider_configs_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "public"."providers"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_provider_configs"
    ADD CONSTRAINT "tenant_provider_configs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_reward_visibility"
    ADD CONSTRAINT "tenant_reward_visibility_reward_item_id_fkey" FOREIGN KEY ("reward_item_id") REFERENCES "public"."reward_items"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_tremendous_mapping"
    ADD CONSTRAINT "tenant_tremendous_mapping_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_wallets"
    ADD CONSTRAINT "tenant_wallets_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenants"
    ADD CONSTRAINT "tenants_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_micro_missions"
    ADD CONSTRAINT "training_micro_missions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_micro_missions"
    ADD CONSTRAINT "training_micro_missions_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "public"."trainings"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_progress"
    ADD CONSTRAINT "training_progress_enrollment_id_fkey" FOREIGN KEY ("enrollment_id") REFERENCES "public"."training_enrollments"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_quiz_attempts"
    ADD CONSTRAINT "training_quiz_attempts_enrollment_id_fkey" FOREIGN KEY ("enrollment_id") REFERENCES "public"."training_enrollments"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_quiz_attempts"
    ADD CONSTRAINT "training_quiz_attempts_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "public"."training_sections"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_quiz_attempts"
    ADD CONSTRAINT "training_quiz_attempts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_quiz_attempts"
    ADD CONSTRAINT "training_quiz_attempts_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "public"."trainings"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_section_completions"
    ADD CONSTRAINT "training_section_completions_enrollment_id_fkey" FOREIGN KEY ("enrollment_id") REFERENCES "public"."training_enrollments"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_section_completions"
    ADD CONSTRAINT "training_section_completions_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "public"."training_sections"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_section_completions"
    ADD CONSTRAINT "training_section_completions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."training_section_completions"
    ADD CONSTRAINT "training_section_completions_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "public"."trainings"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."trainings"
    ADD CONSTRAINT "trainings_recognition_type_id_fkey" FOREIGN KEY ("recognition_type_id") REFERENCES "public"."recognition_types"("id");



ALTER TABLE ONLY "public"."trainings"
    ADD CONSTRAINT "trainings_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_mission_completions"
    ADD CONSTRAINT "user_mission_completions_mission_id_fkey" FOREIGN KEY ("mission_id") REFERENCES "public"."training_micro_missions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_mission_completions"
    ADD CONSTRAINT "user_mission_completions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_mission_completions"
    ADD CONSTRAINT "user_mission_completions_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "public"."trainings"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_organizational_assignments"
    ADD CONSTRAINT "user_organizational_assignments_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."user_organizational_assignments"
    ADD CONSTRAINT "user_organizational_assignments_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."user_organizational_assignments"
    ADD CONSTRAINT "user_organizational_assignments_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_organizational_assignments"
    ADD CONSTRAINT "user_organizational_assignments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_roles"
    ADD CONSTRAINT "user_roles_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_roles"
    ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."votes"
    ADD CONSTRAINT "votes_award_id_fkey" FOREIGN KEY ("award_id") REFERENCES "public"."awards"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."votes"
    ADD CONSTRAINT "votes_nomination_id_fkey" FOREIGN KEY ("nomination_id") REFERENCES "public"."nominations"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."votes"
    ADD CONSTRAINT "votes_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."wallet_ledger"
    ADD CONSTRAINT "wallet_ledger_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE "auth"."audit_log_entries" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."flow_state" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."identities" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."instances" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."mfa_amr_claims" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."mfa_challenges" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."mfa_factors" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."one_time_tokens" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."refresh_tokens" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."saml_providers" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."saml_relay_states" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."schema_migrations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."sessions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."sso_domains" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."sso_providers" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "auth"."users" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "Admins and Managers can create batches" ON "public"."gift_card_batches" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("created_by" = "auth"."uid"()) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can create invitations" ON "public"."tenant_invitations" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("invited_by" = "auth"."uid"()) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can delete assignments" ON "public"."user_organizational_assignments" FOR DELETE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can delete nominations" ON "public"."nominations" FOR DELETE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can delete training feed events" ON "public"."training_feed_events" FOR DELETE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert approvals" ON "public"."recognition_approvals" FOR INSERT WITH CHECK (((("recognition_id" IS NOT NULL) AND (EXISTS ( SELECT 1
   FROM "public"."recognitions" "r"
  WHERE (("r"."id" = "recognition_approvals"."recognition_id") AND ("r"."tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "r"."tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "r"."tenant_id", 'manager'::"public"."app_role")))))) OR (("transaction_id" IS NOT NULL) AND (EXISTS ( SELECT 1
   FROM "public"."recognition_transactions" "rt"
  WHERE (("rt"."id" = "recognition_approvals"."transaction_id") AND ("rt"."tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "rt"."tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "rt"."tenant_id", 'manager'::"public"."app_role"))))))));



CREATE POLICY "Admins and Managers can insert assignments" ON "public"."user_organizational_assignments" FOR INSERT TO "authenticated" WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert automatic events" ON "public"."automatic_events" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert awards" ON "public"."awards" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert badges" ON "public"."badges" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert configs" ON "public"."tenant_provider_configs" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert departments" ON "public"."departments" FOR INSERT TO "authenticated" WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert occasions" ON "public"."occasions" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert recognition types" ON "public"."recognition_types" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert teams" ON "public"."teams" FOR INSERT TO "authenticated" WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can insert values" ON "public"."organizational_values" FOR INSERT TO "authenticated" WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage categories" ON "public"."reward_categories" TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage challenges" ON "public"."challenges" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role")))) WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage featured items" ON "public"."reward_featured_items" TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage mappings" ON "public"."reward_item_categories" TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage missions" ON "public"."training_micro_missions" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage nudges" ON "public"."challenge_nudges" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage participants" ON "public"."challenge_participants" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage scopes" ON "public"."recognition_scopes" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage training sections" ON "public"."training_sections" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can manage trainings" ON "public"."trainings" TO "authenticated" USING ((("tenant_id" IN ( SELECT "user_roles"."tenant_id"
   FROM "public"."user_roles"
  WHERE ("user_roles"."user_id" = "auth"."uid"()))) AND (EXISTS ( SELECT 1
   FROM "public"."user_roles" "ur"
  WHERE (("ur"."user_id" = "auth"."uid"()) AND ("ur"."tenant_id" = "trainings"."tenant_id") AND ("ur"."role" = ANY (ARRAY['admin'::"public"."app_role", 'manager'::"public"."app_role"])))))));



CREATE POLICY "Admins and Managers can manage visibility" ON "public"."tenant_reward_visibility" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update assignments" ON "public"."user_organizational_assignments" FOR UPDATE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update automatic events" ON "public"."automatic_events" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update awards" ON "public"."awards" FOR UPDATE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role")))) WITH CHECK (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Admins and Managers can update badges" ON "public"."badges" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update batches in their tenant" ON "public"."gift_card_batches" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update configs" ON "public"."tenant_provider_configs" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update departments" ON "public"."departments" FOR UPDATE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update nominations" ON "public"."nominations" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update occasions" ON "public"."occasions" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update recognition types" ON "public"."recognition_types" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update recognitions" ON "public"."recognitions" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update teams" ON "public"."teams" FOR UPDATE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update transactions" ON "public"."recognition_transactions" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can update values" ON "public"."organizational_values" FOR UPDATE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can validate actions" ON "public"."challenge_actions" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view all catalog items" ON "public"."reward_catalog_items" FOR SELECT USING ((EXISTS ( SELECT 1
   FROM "public"."user_roles" "ur"
  WHERE (("ur"."user_id" = "auth"."uid"()) AND (("ur"."role" = 'admin'::"public"."app_role") OR ("ur"."role" = 'manager'::"public"."app_role"))))));



CREATE POLICY "Admins and Managers can view all non-archived challenges" ON "public"."challenges" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role")) AND ("archived_at" IS NULL)));



CREATE POLICY "Admins and Managers can view all redemptions in their tenant" ON "public"."reward_redemptions" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view all values" ON "public"."organizational_values" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view audit logs in their tenant" ON "public"."provider_audit_logs" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view batches in their tenant" ON "public"."gift_card_batches" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view categorization logs" ON "public"."ai_categorization_log" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view configs in their tenant" ON "public"."tenant_provider_configs" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view invitations in their tenant" ON "public"."tenant_invitations" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view ledger" ON "public"."recognition_budget_ledger" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view orders in their tenant" ON "public"."redemption_orders" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view profiles in their tenant" ON "public"."profiles" FOR SELECT TO "authenticated" USING (("public"."has_role"("auth"."uid"(), "public"."get_user_tenant"("auth"."uid"()), 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "public"."get_user_tenant"("auth"."uid"()), 'manager'::"public"."app_role")));



CREATE POLICY "Admins and Managers can view queue in their tenant" ON "public"."batch_processing_queue" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view snapshots" ON "public"."liability_snapshots" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and Managers can view teams cache" ON "public"."tremendous_teams_cache" FOR SELECT USING ((EXISTS ( SELECT 1
   FROM "public"."user_roles"
  WHERE (("user_roles"."user_id" = "auth"."uid"()) AND ("user_roles"."role" = ANY (ARRAY['admin'::"public"."app_role", 'manager'::"public"."app_role"]))))));



CREATE POLICY "Admins and finance can view ledger" ON "public"."wallet_ledger" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and managers can insert payouts" ON "public"."award_payouts" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and managers can manage jury" ON "public"."award_jury" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and managers can view audit logs" ON "public"."award_audit" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins and managers can view payouts" ON "public"."award_payouts" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins can create disbursements" ON "public"."admin_disbursements" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("admin_user_id" = "auth"."uid"()) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can delete configs" ON "public"."tenant_provider_configs" FOR DELETE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can delete tenant integrations" ON "public"."tenant_integrations" FOR DELETE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can insert tenant integrations" ON "public"."tenant_integrations" FOR INSERT TO "authenticated" WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") AND ("created_by" = "auth"."uid"())));



CREATE POLICY "Admins can manage API keys" ON "public"."api_keys" USING (("tenant_id" IN ( SELECT "user_roles"."tenant_id"
   FROM "public"."user_roles"
  WHERE (("user_roles"."user_id" = "auth"."uid"()) AND ("user_roles"."role" = ANY (ARRAY['admin'::"public"."app_role", 'manager'::"public"."app_role"]))))));



CREATE POLICY "Admins can manage budget overrides" ON "public"."budget_overrides" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can manage budget policies" ON "public"."budget_policies" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can manage budgets" ON "public"."recognition_budgets" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can manage feature flags" ON "public"."tenant_feature_flags" TO "authenticated" USING ((("tenant_id" IN ( SELECT "user_roles"."tenant_id"
   FROM "public"."user_roles"
  WHERE ("user_roles"."user_id" = "auth"."uid"()))) AND (EXISTS ( SELECT 1
   FROM "public"."user_roles" "ur"
  WHERE (("ur"."user_id" = "auth"."uid"()) AND ("ur"."tenant_id" = "tenant_feature_flags"."tenant_id") AND ("ur"."role" = 'admin'::"public"."app_role"))))));



CREATE POLICY "Admins can manage funding" ON "public"."funding_orders" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can manage global configs" ON "public"."global_provider_configs" USING ((EXISTS ( SELECT 1
   FROM "public"."user_roles"
  WHERE (("user_roles"."user_id" = "auth"."uid"()) AND ("user_roles"."role" = 'admin'::"public"."app_role")))));



CREATE POLICY "Admins can manage reward items" ON "public"."reward_items" USING ((EXISTS ( SELECT 1
   FROM "public"."user_roles"
  WHERE (("user_roles"."user_id" = "auth"."uid"()) AND ("user_roles"."role" = 'admin'::"public"."app_role")))));



CREATE POLICY "Admins can manage scope limits" ON "public"."budget_scope_limits" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role"))) WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can manage templates" ON "public"."budget_templates" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role"))) WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can manage tenant mappings" ON "public"."tenant_tremendous_mapping" USING ((EXISTS ( SELECT 1
   FROM "public"."user_roles"
  WHERE (("user_roles"."user_id" = "auth"."uid"()) AND ("user_roles"."role" = 'admin'::"public"."app_role")))));



CREATE POLICY "Admins can update tenant integrations" ON "public"."tenant_integrations" FOR UPDATE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can view all balances in tenant" ON "public"."user_point_balances" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can view all transactions in tenant" ON "public"."point_transactions" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can view disbursements" ON "public"."admin_disbursements" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "Admins can view tenant integrations" ON "public"."tenant_integrations" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Admins can view wallet" ON "public"."tenant_wallets" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")));



CREATE POLICY "Allow authenticated users to insert audit logs" ON "public"."audit_logs" FOR INSERT TO "authenticated" WITH CHECK (true);



CREATE POLICY "Approvers can update their approvals" ON "public"."recognition_approvals" FOR UPDATE USING (("approver_id" = "auth"."uid"()));



CREATE POLICY "Authenticated users can cast votes" ON "public"."votes" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("voter_id" = "auth"."uid"())));



CREATE POLICY "Brands are viewable by everyone authenticated" ON "public"."brands" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "Givers can update their own transactions" ON "public"."recognition_transactions" FOR UPDATE TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("giver_id" = "auth"."uid"())));



CREATE POLICY "Jury and admins can view votes in their tenant" ON "public"."votes" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role") OR (EXISTS ( SELECT 1
   FROM "public"."award_jury" "aj"
  WHERE (("aj"."award_id" = "votes"."award_id") AND ("aj"."user_id" = "auth"."uid"()) AND ("aj"."tenant_id" = "votes"."tenant_id")))))));



CREATE POLICY "Jury members can view their assignments" ON "public"."award_jury" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("user_id" = "auth"."uid"())));



CREATE POLICY "Managers can view budget overrides" ON "public"."budget_overrides" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role")));



CREATE POLICY "Managers can view budgets in their tenant" ON "public"."recognition_budgets" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role")));



CREATE POLICY "Managers can view their tenant mapping" ON "public"."tenant_tremendous_mapping" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role")));



CREATE POLICY "Nominators can delete their own nominations" ON "public"."nominations" FOR DELETE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("nominator_id" = "auth"."uid"()) AND ("status" = ANY (ARRAY['received'::"text", 'in-review'::"text"])) AND ("votes" = 0)));



CREATE POLICY "Nominees must belong to award tenant" ON "public"."nominations" FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM "public"."awards" "a"
  WHERE (("a"."id" = "nominations"."award_id") AND "public"."user_belongs_to_tenant"("nominations"."nominee_id", "a"."tenant_id")))));



CREATE POLICY "Only admins can manage brands" ON "public"."brands" TO "authenticated" USING ((EXISTS ( SELECT 1
   FROM "public"."user_roles"
  WHERE (("user_roles"."user_id" = "auth"."uid"()) AND ("user_roles"."role" = 'admin'::"public"."app_role")))));



CREATE POLICY "Service role can insert audit logs" ON "public"."audit_logs" FOR INSERT TO "service_role" WITH CHECK (true);



CREATE POLICY "Service role can insert feed events" ON "public"."training_feed_events" FOR INSERT WITH CHECK (true);



CREATE POLICY "Service role can insert payouts" ON "public"."award_payouts" FOR INSERT WITH CHECK (true);



CREATE POLICY "Service role can insert point transactions" ON "public"."point_transactions" FOR INSERT TO "service_role" WITH CHECK (true);



CREATE POLICY "Service role can insert suggestions" ON "public"."ai_suggestions" FOR INSERT TO "service_role" WITH CHECK (true);



CREATE POLICY "Service role can manage SSO tokens" ON "public"."sso_tokens" USING (true) WITH CHECK (true);



CREATE POLICY "Service role can manage rate limits" ON "public"."api_rate_limits" USING (true) WITH CHECK (true);



CREATE POLICY "Service role has full access to quiz attempts" ON "public"."training_quiz_attempts" USING ((("auth"."jwt"() ->> 'role'::"text") = 'service_role'::"text"));



CREATE POLICY "Service role has full access to section completions" ON "public"."training_section_completions" USING ((("auth"."jwt"() ->> 'role'::"text") = 'service_role'::"text"));



CREATE POLICY "System can insert audit logs" ON "public"."award_audit" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can insert audit logs" ON "public"."provider_audit_logs" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can insert categorization logs" ON "public"."ai_categorization_log" FOR INSERT TO "authenticated" WITH CHECK (true);



CREATE POLICY "System can insert funding" ON "public"."funding_orders" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can insert ledger" ON "public"."wallet_ledger" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can insert ledger entries" ON "public"."recognition_budget_ledger" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can insert nudge logs" ON "public"."challenge_nudge_logs" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can insert snapshots" ON "public"."liability_snapshots" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can insert training feed events" ON "public"."training_feed_events" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can insert training sections" ON "public"."training_sections" FOR INSERT WITH CHECK (true);



CREATE POLICY "System can manage batch recipients" ON "public"."batch_recipients" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage batches" ON "public"."gift_card_batches" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage budgets" ON "public"."recognition_budgets" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage catalog items" ON "public"."reward_catalog_items" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage completions" ON "public"."user_mission_completions" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage orders" ON "public"."redemption_orders" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage queue" ON "public"."batch_processing_queue" TO "authenticated" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage recipients" ON "public"."recognition_recipients" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage redemptions" ON "public"."reward_redemptions" USING (true) WITH CHECK (true);



CREATE POLICY "System can manage sync status" ON "public"."catalog_sync_status" TO "authenticated" USING (true) WITH CHECK (true);



CREATE POLICY "System can update funding" ON "public"."funding_orders" FOR UPDATE USING (true);



CREATE POLICY "System can update invitations" ON "public"."tenant_invitations" FOR UPDATE USING ((("expires_at" > "now"()) AND ("used_at" IS NULL)));



CREATE POLICY "Updated nominees must belong to award tenant" ON "public"."nominations" FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM "public"."awards" "a"
  WHERE (("a"."id" = "nominations"."award_id") AND "public"."user_belongs_to_tenant"("nominations"."nominee_id", "a"."tenant_id")))));



CREATE POLICY "Users can add comments" ON "public"."recognition_comments" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("user_id" = "auth"."uid"())));



CREATE POLICY "Users can add reactions" ON "public"."recognition_reactions" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("user_id" = "auth"."uid"())));



CREATE POLICY "Users can create nominations" ON "public"."nominations" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("nominator_id" = "auth"."uid"())));



CREATE POLICY "Users can create recognitions" ON "public"."recognitions" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("giver_id" = "auth"."uid"())));



CREATE POLICY "Users can create their own quiz attempts" ON "public"."training_quiz_attempts" FOR INSERT WITH CHECK (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can create their own section completions" ON "public"."training_section_completions" FOR INSERT WITH CHECK (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can create transactions" ON "public"."recognition_transactions" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("giver_id" = "auth"."uid"())));



CREATE POLICY "Users can delete their own comments" ON "public"."recognition_comments" FOR DELETE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("user_id" = "auth"."uid"())));



CREATE POLICY "Users can delete their own old suggestions" ON "public"."ai_suggestions" FOR DELETE TO "authenticated" USING ((("user_id" = "auth"."uid"()) AND ("created_at" < ("now"() - '7 days'::interval))));



CREATE POLICY "Users can delete their own reactions" ON "public"."recognition_reactions" FOR DELETE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("user_id" = "auth"."uid"())));



CREATE POLICY "Users can delete their own votes" ON "public"."votes" FOR DELETE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("voter_id" = "auth"."uid"())));



CREATE POLICY "Users can insert point transactions for same tenant users" ON "public"."point_transactions" FOR INSERT TO "authenticated" WITH CHECK ((("public"."has_role"("auth"."uid"(), "tenant_id", 'user'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role")) AND ("public"."has_role"("user_id", "tenant_id", 'user'::"public"."app_role") OR "public"."has_role"("user_id", "tenant_id", 'manager'::"public"."app_role") OR "public"."has_role"("user_id", "tenant_id", 'admin'::"public"."app_role"))));



CREATE POLICY "Users can insert their own profile" ON "public"."profiles" FOR INSERT WITH CHECK (("auth"."uid"() = "id"));



CREATE POLICY "Users can join challenges" ON "public"."challenge_participants" FOR INSERT WITH CHECK ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



CREATE POLICY "Users can register their own actions" ON "public"."challenge_actions" FOR INSERT WITH CHECK ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



CREATE POLICY "Users can update their own comments" ON "public"."recognition_comments" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("user_id" = "auth"."uid"()))) WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("user_id" = "auth"."uid"())));



CREATE POLICY "Users can update their own participation" ON "public"."challenge_participants" FOR UPDATE USING ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



CREATE POLICY "Users can update their own profile" ON "public"."profiles" FOR UPDATE USING (("auth"."uid"() = "id"));



CREATE POLICY "Users can view actions in their challenges" ON "public"."challenge_actions" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND (("user_id" = "auth"."uid"()) OR (EXISTS ( SELECT 1
   FROM "public"."challenge_participants" "cp"
  WHERE (("cp"."challenge_id" = "challenge_actions"."challenge_id") AND ("cp"."user_id" = "auth"."uid"())))))));



CREATE POLICY "Users can view active challenges in tenant" ON "public"."challenges" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("status" = ANY (ARRAY['active'::"public"."challenge_status", 'scheduled'::"public"."challenge_status", 'completed'::"public"."challenge_status"])) AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view active featured items" ON "public"."reward_featured_items" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND (("featured_until" IS NULL) OR ("featured_until" > "now"()))));



CREATE POLICY "Users can view active profiles in their tenant" ON "public"."profiles" FOR SELECT USING ((("is_active" = true) AND (EXISTS ( SELECT 1
   FROM ("public"."user_roles" "ur1"
     JOIN "public"."user_roles" "ur2" ON (("ur1"."tenant_id" = "ur2"."tenant_id")))
  WHERE (("ur1"."user_id" = "auth"."uid"()) AND ("ur2"."user_id" = "profiles"."id"))))));



CREATE POLICY "Users can view active trainings in their tenant" ON "public"."trainings" FOR SELECT TO "authenticated" USING ((("tenant_id" IN ( SELECT "user_roles"."tenant_id"
   FROM "public"."user_roles"
  WHERE ("user_roles"."user_id" = "auth"."uid"()))) AND ("status" = 'active'::"text") AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view active values in their tenant" ON "public"."organizational_values" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("status" = 'active'::"text")));



CREATE POLICY "Users can view approvals for their recognitions" ON "public"."recognition_approvals" FOR SELECT USING ((EXISTS ( SELECT 1
   FROM "public"."recognitions" "r"
  WHERE (("r"."id" = "recognition_approvals"."recognition_id") AND ("r"."tenant_id" = "public"."get_user_tenant"("auth"."uid"()))))));



CREATE POLICY "Users can view assignments in their tenant" ON "public"."user_organizational_assignments" FOR SELECT TO "authenticated" USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view audit logs in their tenant" ON "public"."audit_logs" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view automatic events in their tenant" ON "public"."automatic_events" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view available catalog items" ON "public"."reward_catalog_items" FOR SELECT USING ((("available" = true) AND ("visible" = true)));



CREATE POLICY "Users can view awards in their tenant" ON "public"."awards" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view badges in their tenant" ON "public"."badges" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view comments in their tenant" ON "public"."recognition_comments" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view departments in their tenant" ON "public"."departments" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view feed events in their tenant" ON "public"."training_feed_events" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view mappings" ON "public"."reward_item_categories" FOR SELECT TO "authenticated" USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view missions in their tenant" ON "public"."training_micro_missions" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view nominations in their tenant" ON "public"."nominations" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view occasions in their tenant" ON "public"."occasions" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view participants in tenant challenges" ON "public"."challenge_participants" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view providers" ON "public"."providers" FOR SELECT USING (true);



CREATE POLICY "Users can view reactions in their tenant" ON "public"."recognition_reactions" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view recipients if they can view the batch" ON "public"."batch_recipients" FOR SELECT USING ((EXISTS ( SELECT 1
   FROM "public"."gift_card_batches" "gcb"
  WHERE (("gcb"."id" = "batch_recipients"."batch_id") AND ("gcb"."tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "gcb"."tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "gcb"."tenant_id", 'manager'::"public"."app_role"))))));



CREATE POLICY "Users can view recipients in their tenant" ON "public"."recognition_recipients" FOR SELECT USING ((EXISTS ( SELECT 1
   FROM "public"."recognition_transactions" "rt"
  WHERE (("rt"."id" = "recognition_recipients"."transaction_id") AND ("rt"."tenant_id" = "public"."get_user_tenant"("auth"."uid"()))))));



CREATE POLICY "Users can view recognition types in their tenant" ON "public"."recognition_types" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view recognitions in their tenant" ON "public"."recognitions" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view reward items" ON "public"."reward_items" FOR SELECT USING (true);



CREATE POLICY "Users can view roles in their tenant" ON "public"."user_roles" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view scope limits in their tenant" ON "public"."budget_scope_limits" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view scopes in their tenant" ON "public"."recognition_scopes" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view snapshots for their recognitions" ON "public"."recognition_snapshots" FOR SELECT USING ((EXISTS ( SELECT 1
   FROM "public"."recognitions" "r"
  WHERE (("r"."id" = "recognition_snapshots"."recognition_id") AND ("r"."tenant_id" = "public"."get_user_tenant"("auth"."uid"()))))));



CREATE POLICY "Users can view sync status in their tenant" ON "public"."catalog_sync_status" FOR SELECT TO "authenticated" USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view teams in their tenant" ON "public"."teams" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("archived_at" IS NULL)));



CREATE POLICY "Users can view templates in their tenant" ON "public"."budget_templates" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view their own balance" ON "public"."user_point_balances" FOR SELECT USING ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



CREATE POLICY "Users can view their own completions" ON "public"."user_mission_completions" FOR SELECT USING ((("user_id" = "auth"."uid"()) OR (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role")))));



CREATE POLICY "Users can view their own nudge logs" ON "public"."challenge_nudge_logs" FOR SELECT USING (("user_id" = "auth"."uid"()));



CREATE POLICY "Users can view their own orders" ON "public"."redemption_orders" FOR SELECT USING ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



CREATE POLICY "Users can view their own payouts" ON "public"."award_payouts" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("user_id" = "auth"."uid"())));



CREATE POLICY "Users can view their own profile" ON "public"."profiles" FOR SELECT TO "authenticated" USING (("auth"."uid"() = "id"));



CREATE POLICY "Users can view their own quiz attempts" ON "public"."training_quiz_attempts" FOR SELECT USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can view their own redemptions" ON "public"."reward_redemptions" FOR SELECT USING ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



CREATE POLICY "Users can view their own section completions" ON "public"."training_section_completions" FOR SELECT USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Users can view their own suggestions" ON "public"."ai_suggestions" FOR SELECT TO "authenticated" USING ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



CREATE POLICY "Users can view their own transactions" ON "public"."point_transactions" FOR SELECT USING ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



CREATE POLICY "Users can view their own votes" ON "public"."votes" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("voter_id" = "auth"."uid"())));



CREATE POLICY "Users can view their tenant" ON "public"."tenants" FOR SELECT USING (("id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view their tenant flags" ON "public"."tenant_feature_flags" FOR SELECT TO "authenticated" USING (("tenant_id" IN ( SELECT "user_roles"."tenant_id"
   FROM "public"."user_roles"
  WHERE ("user_roles"."user_id" = "auth"."uid"()))));



CREATE POLICY "Users can view training feed events in their tenant" ON "public"."training_feed_events" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view training sections in their tenant" ON "public"."training_sections" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view transactions in their tenant" ON "public"."recognition_transactions" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view visibility in their tenant" ON "public"."tenant_reward_visibility" FOR SELECT USING (("tenant_id" = "public"."get_user_tenant"("auth"."uid"())));



CREATE POLICY "Users can view visible categories" ON "public"."reward_categories" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("visible" = true)));



ALTER TABLE "public"."admin_disbursements" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."ai_categorization_log" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."ai_suggestions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."api_keys" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."api_rate_limits" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."audit_logs" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."automatic_events" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."award_audit" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."award_jury" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."award_payouts" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."awards" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."badges" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."batch_processing_queue" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."batch_recipients" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."brands" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."budget_overrides" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."budget_policies" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."budget_scope_limits" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."budget_templates" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."catalog_sync_status" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."challenge_actions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."challenge_nudge_logs" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."challenge_nudges" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."challenge_participants" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."challenges" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."departments" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "enr_admins_all" ON "public"."training_enrollments" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "enr_admins_create" ON "public"."training_enrollments" FOR INSERT WITH CHECK ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "enr_admins_update" ON "public"."training_enrollments" FOR UPDATE USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "enr_self_enroll" ON "public"."training_enrollments" FOR INSERT WITH CHECK ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("enrollment_type" = 'self'::"text")));



CREATE POLICY "enr_service" ON "public"."training_enrollments" USING (true) WITH CHECK (true);



CREATE POLICY "enr_users_own" ON "public"."training_enrollments" FOR SELECT USING ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



ALTER TABLE "public"."funding_orders" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."gift_card_batches" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."global_provider_configs" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."liability_snapshots" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."nominations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."occasions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."organizational_values" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."point_transactions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "prog_admins_all" ON "public"."training_progress" FOR SELECT USING ((("tenant_id" = "public"."get_user_tenant"("auth"."uid"())) AND ("public"."has_role"("auth"."uid"(), "tenant_id", 'admin'::"public"."app_role") OR "public"."has_role"("auth"."uid"(), "tenant_id", 'manager'::"public"."app_role"))));



CREATE POLICY "prog_service" ON "public"."training_progress" USING (true) WITH CHECK (true);



CREATE POLICY "prog_users_own" ON "public"."training_progress" FOR SELECT USING ((("user_id" = "auth"."uid"()) AND ("tenant_id" = "public"."get_user_tenant"("auth"."uid"()))));



ALTER TABLE "public"."provider_audit_logs" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."providers" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_approvals" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_budget_ledger" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_budgets" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_comments" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_reactions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_recipients" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_scopes" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_snapshots" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_transactions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognition_types" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."recognitions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."redemption_orders" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."reward_catalog_items" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."reward_categories" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."reward_featured_items" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."reward_item_categories" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."reward_items" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."reward_redemptions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."sso_tokens" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."teams" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenant_feature_flags" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenant_integrations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenant_invitations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenant_provider_configs" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenant_reward_visibility" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenant_tremendous_mapping" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenant_wallets" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenants" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."training_enrollments" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."training_feed_events" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."training_micro_missions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."training_progress" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."training_quiz_attempts" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."training_section_completions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."training_sections" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."trainings" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tremendous_teams_cache" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."user_mission_completions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."user_organizational_assignments" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."user_point_balances" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."user_roles" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."votes" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."wallet_ledger" ENABLE ROW LEVEL SECURITY;


GRANT USAGE ON SCHEMA "auth" TO "anon";
GRANT USAGE ON SCHEMA "auth" TO "authenticated";
GRANT USAGE ON SCHEMA "auth" TO "service_role";
GRANT ALL ON SCHEMA "auth" TO "supabase_auth_admin";
GRANT ALL ON SCHEMA "auth" TO "dashboard_user";
GRANT USAGE ON SCHEMA "auth" TO "postgres";



GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";



GRANT ALL ON FUNCTION "auth"."email"() TO "dashboard_user";



GRANT ALL ON FUNCTION "auth"."jwt"() TO "postgres";
GRANT ALL ON FUNCTION "auth"."jwt"() TO "dashboard_user";



GRANT ALL ON FUNCTION "auth"."role"() TO "dashboard_user";



GRANT ALL ON FUNCTION "auth"."uid"() TO "dashboard_user";



GRANT ALL ON FUNCTION "public"."admin_disburse"("_disb_id" "uuid", "_actor" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."admin_disburse"("_disb_id" "uuid", "_actor" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."admin_disburse"("_disb_id" "uuid", "_actor" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."apply_budget_policy"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date", "_envelope_points" integer, "_policy_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."apply_budget_policy"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date", "_envelope_points" integer, "_policy_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."apply_budget_policy"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date", "_envelope_points" integer, "_policy_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."archive_award"("_award_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."archive_award"("_award_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."archive_award"("_award_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_automatic_events"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_automatic_events"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_automatic_events"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_awards"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_awards"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_awards"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_badges"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_badges"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_badges"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_global_provider_configs"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_global_provider_configs"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_global_provider_configs"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_occasions"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_occasions"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_occasions"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_organizational_values"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_organizational_values"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_organizational_values"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_provider_config_changes"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_provider_config_changes"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_provider_config_changes"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_recognition_types"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_recognition_types"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_recognition_types"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_recognitions"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_recognitions"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_recognitions"() TO "service_role";



GRANT ALL ON FUNCTION "public"."audit_tenant_tremendous_mapping"() TO "anon";
GRANT ALL ON FUNCTION "public"."audit_tenant_tremendous_mapping"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."audit_tenant_tremendous_mapping"() TO "service_role";



GRANT ALL ON FUNCTION "public"."auto_categorize_reward_items"("p_tenant_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."auto_categorize_reward_items"("p_tenant_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."auto_categorize_reward_items"("p_tenant_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."calculate_avg_time_to_publish"("_tenant_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."calculate_avg_time_to_publish"("_tenant_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."calculate_avg_time_to_publish"("_tenant_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."calculate_tenant_apply_rate"("_tenant_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."calculate_tenant_apply_rate"("_tenant_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."calculate_tenant_apply_rate"("_tenant_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."cleanup_expired_sso_tokens"() TO "anon";
GRANT ALL ON FUNCTION "public"."cleanup_expired_sso_tokens"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."cleanup_expired_sso_tokens"() TO "service_role";



GRANT ALL ON FUNCTION "public"."cleanup_old_rate_limits"() TO "anon";
GRANT ALL ON FUNCTION "public"."cleanup_old_rate_limits"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."cleanup_old_rate_limits"() TO "service_role";



GRANT ALL ON FUNCTION "public"."complete_training_section"("_user_id" "uuid", "_tenant_id" "uuid", "_training_id" "uuid", "_section_id" "uuid", "_enrollment_id" "uuid", "_completion_method" "text", "_metadata" "jsonb") TO "anon";
GRANT ALL ON FUNCTION "public"."complete_training_section"("_user_id" "uuid", "_tenant_id" "uuid", "_training_id" "uuid", "_section_id" "uuid", "_enrollment_id" "uuid", "_completion_method" "text", "_metadata" "jsonb") TO "authenticated";
GRANT ALL ON FUNCTION "public"."complete_training_section"("_user_id" "uuid", "_tenant_id" "uuid", "_training_id" "uuid", "_section_id" "uuid", "_enrollment_id" "uuid", "_completion_method" "text", "_metadata" "jsonb") TO "service_role";



GRANT ALL ON FUNCTION "public"."decrement_candidates_count"("_award_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."decrement_candidates_count"("_award_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."decrement_candidates_count"("_award_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."decrement_category_items_count"("p_category_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."decrement_category_items_count"("p_category_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."decrement_category_items_count"("p_category_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."decrement_nomination_votes"("_nomination_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."decrement_nomination_votes"("_nomination_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."decrement_nomination_votes"("_nomination_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."ensure_single_default_provider"() TO "anon";
GRANT ALL ON FUNCTION "public"."ensure_single_default_provider"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."ensure_single_default_provider"() TO "service_role";



GRANT ALL ON FUNCTION "public"."extract_subdomain_from_url"("url" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."extract_subdomain_from_url"("url" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."extract_subdomain_from_url"("url" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."generate_invitation_token"() TO "anon";
GRANT ALL ON FUNCTION "public"."generate_invitation_token"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."generate_invitation_token"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_jwt_email"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_jwt_email"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_jwt_email"() TO "service_role";



GRANT ALL ON FUNCTION "public"."get_organizational_value_usage"("_value_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_organizational_value_usage"("_value_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_organizational_value_usage"("_value_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_user_tenant"("_user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_user_tenant"("_user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_user_tenant"("_user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_user_tenant_with_brand"("_user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_user_tenant_with_brand"("_user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_user_tenant_with_brand"("_user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";



GRANT ALL ON FUNCTION "public"."has_role"("_user_id" "uuid", "_tenant_id" "uuid", "_role" "public"."app_role") TO "anon";
GRANT ALL ON FUNCTION "public"."has_role"("_user_id" "uuid", "_tenant_id" "uuid", "_role" "public"."app_role") TO "authenticated";
GRANT ALL ON FUNCTION "public"."has_role"("_user_id" "uuid", "_tenant_id" "uuid", "_role" "public"."app_role") TO "service_role";



GRANT ALL ON FUNCTION "public"."increment_budget_allocation"("_budget_id" "uuid", "_points" integer) TO "anon";
GRANT ALL ON FUNCTION "public"."increment_budget_allocation"("_budget_id" "uuid", "_points" integer) TO "authenticated";
GRANT ALL ON FUNCTION "public"."increment_budget_allocation"("_budget_id" "uuid", "_points" integer) TO "service_role";



GRANT ALL ON FUNCTION "public"."increment_candidates_count"("_award_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."increment_candidates_count"("_award_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."increment_candidates_count"("_award_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."increment_category_items_count"("p_category_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."increment_category_items_count"("p_category_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."increment_category_items_count"("p_category_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."increment_nomination_votes"("_nomination_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."increment_nomination_votes"("_nomination_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."increment_nomination_votes"("_nomination_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."initialize_user_missions"("_user_id" "uuid", "_training_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."initialize_user_missions"("_user_id" "uuid", "_training_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."initialize_user_missions"("_user_id" "uuid", "_training_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."is_feature_enabled"("_tenant_id" "uuid", "_flag_key" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."is_feature_enabled"("_tenant_id" "uuid", "_flag_key" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_feature_enabled"("_tenant_id" "uuid", "_flag_key" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."mark_funding_paid_and_credit"("_funding_id" "uuid", "_actor" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."mark_funding_paid_and_credit"("_funding_id" "uuid", "_actor" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."mark_funding_paid_and_credit"("_funding_id" "uuid", "_actor" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."populate_user_dates_for_tenant"("_tenant_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."populate_user_dates_for_tenant"("_tenant_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."populate_user_dates_for_tenant"("_tenant_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."publish_budgets"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date") TO "anon";
GRANT ALL ON FUNCTION "public"."publish_budgets"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date") TO "authenticated";
GRANT ALL ON FUNCTION "public"."publish_budgets"("_tenant_id" "uuid", "_period_start" "date", "_period_end" "date") TO "service_role";



GRANT ALL ON FUNCTION "public"."recalculate_all_tenant_budgets"("_tenant_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."recalculate_all_tenant_budgets"("_tenant_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."recalculate_all_tenant_budgets"("_tenant_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."recalculate_budget_consumed"("_budget_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."recalculate_budget_consumed"("_budget_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."recalculate_budget_consumed"("_budget_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."reconcile_reward_visibility"("p_tenant_id" "uuid", "p_user_id" "uuid", "p_provider_id" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."reconcile_reward_visibility"("p_tenant_id" "uuid", "p_user_id" "uuid", "p_provider_id" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."reconcile_reward_visibility"("p_tenant_id" "uuid", "p_user_id" "uuid", "p_provider_id" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."seed_reward_categories"("p_tenant_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."seed_reward_categories"("p_tenant_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."seed_reward_categories"("p_tenant_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."suggest_challenge_icon"("challenge_name" "text", "challenge_description" "text", "challenge_family" "text", "challenge_type" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."suggest_challenge_icon"("challenge_name" "text", "challenge_description" "text", "challenge_family" "text", "challenge_type" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."suggest_challenge_icon"("challenge_name" "text", "challenge_description" "text", "challenge_family" "text", "challenge_type" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."trigger_decrement_nomination_votes"() TO "anon";
GRANT ALL ON FUNCTION "public"."trigger_decrement_nomination_votes"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."trigger_decrement_nomination_votes"() TO "service_role";



GRANT ALL ON FUNCTION "public"."trigger_gift_card_email"() TO "anon";
GRANT ALL ON FUNCTION "public"."trigger_gift_card_email"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."trigger_gift_card_email"() TO "service_role";



GRANT ALL ON FUNCTION "public"."trigger_increment_nomination_votes"() TO "anon";
GRANT ALL ON FUNCTION "public"."trigger_increment_nomination_votes"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."trigger_increment_nomination_votes"() TO "service_role";



GRANT ALL ON FUNCTION "public"."trigger_update_candidates_count"() TO "anon";
GRANT ALL ON FUNCTION "public"."trigger_update_candidates_count"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."trigger_update_candidates_count"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_award_votes_count"("_award_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."update_award_votes_count"("_award_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_award_votes_count"("_award_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."update_brands_updated_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_brands_updated_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_brands_updated_at"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_organizational_value_usage_counts"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_organizational_value_usage_counts"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_organizational_value_usage_counts"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_training_updated_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_training_updated_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_training_updated_at"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_updated_at_global_configs"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_updated_at_global_configs"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_updated_at_global_configs"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_user_balance"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_user_balance"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_user_balance"() TO "service_role";



GRANT ALL ON FUNCTION "public"."use_invitation"("_token" "text", "_user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."use_invitation"("_token" "text", "_user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."use_invitation"("_token" "text", "_user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."user_belongs_to_tenant"("p_user_id" "uuid", "p_tenant_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."user_belongs_to_tenant"("p_user_id" "uuid", "p_tenant_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."user_belongs_to_tenant"("p_user_id" "uuid", "p_tenant_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."validate_api_key"("_key" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."validate_api_key"("_key" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."validate_api_key"("_key" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."validate_profile_dates"() TO "anon";
GRANT ALL ON FUNCTION "public"."validate_profile_dates"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."validate_profile_dates"() TO "service_role";



GRANT ALL ON TABLE "auth"."audit_log_entries" TO "dashboard_user";
GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."audit_log_entries" TO "postgres";
GRANT SELECT ON TABLE "auth"."audit_log_entries" TO "postgres" WITH GRANT OPTION;



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."flow_state" TO "postgres";
GRANT SELECT ON TABLE "auth"."flow_state" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."flow_state" TO "dashboard_user";



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."identities" TO "postgres";
GRANT SELECT ON TABLE "auth"."identities" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."identities" TO "dashboard_user";



GRANT ALL ON TABLE "auth"."instances" TO "dashboard_user";
GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."instances" TO "postgres";
GRANT SELECT ON TABLE "auth"."instances" TO "postgres" WITH GRANT OPTION;



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."mfa_amr_claims" TO "postgres";
GRANT SELECT ON TABLE "auth"."mfa_amr_claims" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."mfa_amr_claims" TO "dashboard_user";



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."mfa_challenges" TO "postgres";
GRANT SELECT ON TABLE "auth"."mfa_challenges" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."mfa_challenges" TO "dashboard_user";



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."mfa_factors" TO "postgres";
GRANT SELECT ON TABLE "auth"."mfa_factors" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."mfa_factors" TO "dashboard_user";



GRANT ALL ON TABLE "auth"."oauth_authorizations" TO "postgres";
GRANT ALL ON TABLE "auth"."oauth_authorizations" TO "dashboard_user";



GRANT ALL ON TABLE "auth"."oauth_clients" TO "postgres";
GRANT ALL ON TABLE "auth"."oauth_clients" TO "dashboard_user";



GRANT ALL ON TABLE "auth"."oauth_consents" TO "postgres";
GRANT ALL ON TABLE "auth"."oauth_consents" TO "dashboard_user";



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."one_time_tokens" TO "postgres";
GRANT SELECT ON TABLE "auth"."one_time_tokens" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."one_time_tokens" TO "dashboard_user";



GRANT ALL ON TABLE "auth"."refresh_tokens" TO "dashboard_user";
GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."refresh_tokens" TO "postgres";
GRANT SELECT ON TABLE "auth"."refresh_tokens" TO "postgres" WITH GRANT OPTION;



GRANT ALL ON SEQUENCE "auth"."refresh_tokens_id_seq" TO "dashboard_user";
GRANT ALL ON SEQUENCE "auth"."refresh_tokens_id_seq" TO "postgres";



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."saml_providers" TO "postgres";
GRANT SELECT ON TABLE "auth"."saml_providers" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."saml_providers" TO "dashboard_user";



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."saml_relay_states" TO "postgres";
GRANT SELECT ON TABLE "auth"."saml_relay_states" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."saml_relay_states" TO "dashboard_user";



GRANT SELECT ON TABLE "auth"."schema_migrations" TO "postgres" WITH GRANT OPTION;



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."sessions" TO "postgres";
GRANT SELECT ON TABLE "auth"."sessions" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."sessions" TO "dashboard_user";



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."sso_domains" TO "postgres";
GRANT SELECT ON TABLE "auth"."sso_domains" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."sso_domains" TO "dashboard_user";



GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."sso_providers" TO "postgres";
GRANT SELECT ON TABLE "auth"."sso_providers" TO "postgres" WITH GRANT OPTION;
GRANT ALL ON TABLE "auth"."sso_providers" TO "dashboard_user";



GRANT ALL ON TABLE "auth"."users" TO "dashboard_user";
GRANT INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "auth"."users" TO "postgres";
GRANT SELECT ON TABLE "auth"."users" TO "postgres" WITH GRANT OPTION;



GRANT ALL ON TABLE "public"."admin_disbursements" TO "anon";
GRANT ALL ON TABLE "public"."admin_disbursements" TO "authenticated";
GRANT ALL ON TABLE "public"."admin_disbursements" TO "service_role";



GRANT ALL ON TABLE "public"."ai_categorization_log" TO "anon";
GRANT ALL ON TABLE "public"."ai_categorization_log" TO "authenticated";
GRANT ALL ON TABLE "public"."ai_categorization_log" TO "service_role";



GRANT ALL ON TABLE "public"."ai_suggestions" TO "anon";
GRANT ALL ON TABLE "public"."ai_suggestions" TO "authenticated";
GRANT ALL ON TABLE "public"."ai_suggestions" TO "service_role";



GRANT ALL ON TABLE "public"."api_keys" TO "anon";
GRANT ALL ON TABLE "public"."api_keys" TO "authenticated";
GRANT ALL ON TABLE "public"."api_keys" TO "service_role";



GRANT ALL ON TABLE "public"."api_rate_limits" TO "anon";
GRANT ALL ON TABLE "public"."api_rate_limits" TO "authenticated";
GRANT ALL ON TABLE "public"."api_rate_limits" TO "service_role";



GRANT ALL ON TABLE "public"."audit_logs" TO "anon";
GRANT ALL ON TABLE "public"."audit_logs" TO "authenticated";
GRANT ALL ON TABLE "public"."audit_logs" TO "service_role";



GRANT ALL ON TABLE "public"."automatic_events" TO "anon";
GRANT ALL ON TABLE "public"."automatic_events" TO "authenticated";
GRANT ALL ON TABLE "public"."automatic_events" TO "service_role";



GRANT ALL ON TABLE "public"."award_audit" TO "anon";
GRANT ALL ON TABLE "public"."award_audit" TO "authenticated";
GRANT ALL ON TABLE "public"."award_audit" TO "service_role";



GRANT ALL ON TABLE "public"."award_jury" TO "anon";
GRANT ALL ON TABLE "public"."award_jury" TO "authenticated";
GRANT ALL ON TABLE "public"."award_jury" TO "service_role";



GRANT ALL ON TABLE "public"."award_payouts" TO "anon";
GRANT ALL ON TABLE "public"."award_payouts" TO "authenticated";
GRANT ALL ON TABLE "public"."award_payouts" TO "service_role";



GRANT ALL ON TABLE "public"."awards" TO "anon";
GRANT ALL ON TABLE "public"."awards" TO "authenticated";
GRANT ALL ON TABLE "public"."awards" TO "service_role";



GRANT ALL ON TABLE "public"."badges" TO "anon";
GRANT ALL ON TABLE "public"."badges" TO "authenticated";
GRANT ALL ON TABLE "public"."badges" TO "service_role";



GRANT ALL ON TABLE "public"."batch_processing_queue" TO "anon";
GRANT ALL ON TABLE "public"."batch_processing_queue" TO "authenticated";
GRANT ALL ON TABLE "public"."batch_processing_queue" TO "service_role";



GRANT ALL ON TABLE "public"."batch_recipients" TO "anon";
GRANT ALL ON TABLE "public"."batch_recipients" TO "authenticated";
GRANT ALL ON TABLE "public"."batch_recipients" TO "service_role";



GRANT ALL ON TABLE "public"."brands" TO "anon";
GRANT ALL ON TABLE "public"."brands" TO "authenticated";
GRANT ALL ON TABLE "public"."brands" TO "service_role";



GRANT ALL ON TABLE "public"."budget_overrides" TO "anon";
GRANT ALL ON TABLE "public"."budget_overrides" TO "authenticated";
GRANT ALL ON TABLE "public"."budget_overrides" TO "service_role";



GRANT ALL ON TABLE "public"."budget_policies" TO "anon";
GRANT ALL ON TABLE "public"."budget_policies" TO "authenticated";
GRANT ALL ON TABLE "public"."budget_policies" TO "service_role";



GRANT ALL ON TABLE "public"."budget_scope_limits" TO "anon";
GRANT ALL ON TABLE "public"."budget_scope_limits" TO "authenticated";
GRANT ALL ON TABLE "public"."budget_scope_limits" TO "service_role";



GRANT ALL ON TABLE "public"."budget_templates" TO "anon";
GRANT ALL ON TABLE "public"."budget_templates" TO "authenticated";
GRANT ALL ON TABLE "public"."budget_templates" TO "service_role";



GRANT ALL ON TABLE "public"."catalog_sync_status" TO "anon";
GRANT ALL ON TABLE "public"."catalog_sync_status" TO "authenticated";
GRANT ALL ON TABLE "public"."catalog_sync_status" TO "service_role";



GRANT ALL ON TABLE "public"."challenge_actions" TO "anon";
GRANT ALL ON TABLE "public"."challenge_actions" TO "authenticated";
GRANT ALL ON TABLE "public"."challenge_actions" TO "service_role";



GRANT ALL ON TABLE "public"."challenge_nudge_logs" TO "anon";
GRANT ALL ON TABLE "public"."challenge_nudge_logs" TO "authenticated";
GRANT ALL ON TABLE "public"."challenge_nudge_logs" TO "service_role";



GRANT ALL ON TABLE "public"."challenge_nudges" TO "anon";
GRANT ALL ON TABLE "public"."challenge_nudges" TO "authenticated";
GRANT ALL ON TABLE "public"."challenge_nudges" TO "service_role";



GRANT ALL ON TABLE "public"."challenge_participants" TO "anon";
GRANT ALL ON TABLE "public"."challenge_participants" TO "authenticated";
GRANT ALL ON TABLE "public"."challenge_participants" TO "service_role";



GRANT ALL ON TABLE "public"."challenges" TO "anon";
GRANT ALL ON TABLE "public"."challenges" TO "authenticated";
GRANT ALL ON TABLE "public"."challenges" TO "service_role";



GRANT ALL ON TABLE "public"."departments" TO "anon";
GRANT ALL ON TABLE "public"."departments" TO "authenticated";
GRANT ALL ON TABLE "public"."departments" TO "service_role";



GRANT ALL ON TABLE "public"."funding_orders" TO "anon";
GRANT ALL ON TABLE "public"."funding_orders" TO "authenticated";
GRANT ALL ON TABLE "public"."funding_orders" TO "service_role";



GRANT ALL ON TABLE "public"."gift_card_batches" TO "anon";
GRANT ALL ON TABLE "public"."gift_card_batches" TO "authenticated";
GRANT ALL ON TABLE "public"."gift_card_batches" TO "service_role";



GRANT ALL ON TABLE "public"."global_provider_configs" TO "anon";
GRANT ALL ON TABLE "public"."global_provider_configs" TO "authenticated";
GRANT ALL ON TABLE "public"."global_provider_configs" TO "service_role";



GRANT ALL ON TABLE "public"."liability_snapshots" TO "anon";
GRANT ALL ON TABLE "public"."liability_snapshots" TO "authenticated";
GRANT ALL ON TABLE "public"."liability_snapshots" TO "service_role";



GRANT ALL ON TABLE "public"."nominations" TO "anon";
GRANT ALL ON TABLE "public"."nominations" TO "authenticated";
GRANT ALL ON TABLE "public"."nominations" TO "service_role";



GRANT ALL ON TABLE "public"."occasions" TO "anon";
GRANT ALL ON TABLE "public"."occasions" TO "authenticated";
GRANT ALL ON TABLE "public"."occasions" TO "service_role";



GRANT ALL ON TABLE "public"."organizational_values" TO "anon";
GRANT ALL ON TABLE "public"."organizational_values" TO "authenticated";
GRANT ALL ON TABLE "public"."organizational_values" TO "service_role";



GRANT ALL ON TABLE "public"."point_transactions" TO "anon";
GRANT ALL ON TABLE "public"."point_transactions" TO "authenticated";
GRANT ALL ON TABLE "public"."point_transactions" TO "service_role";



GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";



GRANT ALL ON TABLE "public"."provider_audit_logs" TO "anon";
GRANT ALL ON TABLE "public"."provider_audit_logs" TO "authenticated";
GRANT ALL ON TABLE "public"."provider_audit_logs" TO "service_role";



GRANT ALL ON TABLE "public"."providers" TO "anon";
GRANT ALL ON TABLE "public"."providers" TO "authenticated";
GRANT ALL ON TABLE "public"."providers" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_approvals" TO "anon";
GRANT ALL ON TABLE "public"."recognition_approvals" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_approvals" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_budget_ledger" TO "anon";
GRANT ALL ON TABLE "public"."recognition_budget_ledger" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_budget_ledger" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_budgets" TO "anon";
GRANT ALL ON TABLE "public"."recognition_budgets" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_budgets" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_comments" TO "anon";
GRANT ALL ON TABLE "public"."recognition_comments" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_comments" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_reactions" TO "anon";
GRANT ALL ON TABLE "public"."recognition_reactions" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_reactions" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_recipients" TO "anon";
GRANT ALL ON TABLE "public"."recognition_recipients" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_recipients" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_scopes" TO "anon";
GRANT ALL ON TABLE "public"."recognition_scopes" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_scopes" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_snapshots" TO "anon";
GRANT ALL ON TABLE "public"."recognition_snapshots" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_snapshots" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_transactions" TO "anon";
GRANT ALL ON TABLE "public"."recognition_transactions" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_transactions" TO "service_role";



GRANT ALL ON TABLE "public"."recognition_types" TO "anon";
GRANT ALL ON TABLE "public"."recognition_types" TO "authenticated";
GRANT ALL ON TABLE "public"."recognition_types" TO "service_role";



GRANT ALL ON TABLE "public"."recognitions" TO "anon";
GRANT ALL ON TABLE "public"."recognitions" TO "authenticated";
GRANT ALL ON TABLE "public"."recognitions" TO "service_role";



GRANT ALL ON TABLE "public"."redemption_orders" TO "anon";
GRANT ALL ON TABLE "public"."redemption_orders" TO "authenticated";
GRANT ALL ON TABLE "public"."redemption_orders" TO "service_role";



GRANT ALL ON TABLE "public"."reward_catalog_items" TO "anon";
GRANT ALL ON TABLE "public"."reward_catalog_items" TO "authenticated";
GRANT ALL ON TABLE "public"."reward_catalog_items" TO "service_role";



GRANT ALL ON TABLE "public"."reward_categories" TO "anon";
GRANT ALL ON TABLE "public"."reward_categories" TO "authenticated";
GRANT ALL ON TABLE "public"."reward_categories" TO "service_role";



GRANT ALL ON TABLE "public"."reward_featured_items" TO "anon";
GRANT ALL ON TABLE "public"."reward_featured_items" TO "authenticated";
GRANT ALL ON TABLE "public"."reward_featured_items" TO "service_role";



GRANT ALL ON TABLE "public"."reward_item_categories" TO "anon";
GRANT ALL ON TABLE "public"."reward_item_categories" TO "authenticated";
GRANT ALL ON TABLE "public"."reward_item_categories" TO "service_role";



GRANT ALL ON TABLE "public"."reward_items" TO "anon";
GRANT ALL ON TABLE "public"."reward_items" TO "authenticated";
GRANT ALL ON TABLE "public"."reward_items" TO "service_role";



GRANT ALL ON TABLE "public"."reward_redemptions" TO "anon";
GRANT ALL ON TABLE "public"."reward_redemptions" TO "authenticated";
GRANT ALL ON TABLE "public"."reward_redemptions" TO "service_role";



GRANT ALL ON TABLE "public"."sso_tokens" TO "anon";
GRANT ALL ON TABLE "public"."sso_tokens" TO "authenticated";
GRANT ALL ON TABLE "public"."sso_tokens" TO "service_role";



GRANT ALL ON TABLE "public"."teams" TO "anon";
GRANT ALL ON TABLE "public"."teams" TO "authenticated";
GRANT ALL ON TABLE "public"."teams" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_feature_flags" TO "anon";
GRANT ALL ON TABLE "public"."tenant_feature_flags" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_feature_flags" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_integrations" TO "anon";
GRANT ALL ON TABLE "public"."tenant_integrations" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_integrations" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_invitations" TO "anon";
GRANT ALL ON TABLE "public"."tenant_invitations" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_invitations" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_provider_configs" TO "anon";
GRANT ALL ON TABLE "public"."tenant_provider_configs" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_provider_configs" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_reward_visibility" TO "anon";
GRANT ALL ON TABLE "public"."tenant_reward_visibility" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_reward_visibility" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_tremendous_mapping" TO "anon";
GRANT ALL ON TABLE "public"."tenant_tremendous_mapping" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_tremendous_mapping" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_wallets" TO "anon";
GRANT ALL ON TABLE "public"."tenant_wallets" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_wallets" TO "service_role";



GRANT ALL ON TABLE "public"."wallet_ledger" TO "anon";
GRANT ALL ON TABLE "public"."wallet_ledger" TO "authenticated";
GRANT ALL ON TABLE "public"."wallet_ledger" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_wallet_balances" TO "anon";
GRANT ALL ON TABLE "public"."tenant_wallet_balances" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_wallet_balances" TO "service_role";



GRANT ALL ON TABLE "public"."tenants" TO "anon";
GRANT ALL ON TABLE "public"."tenants" TO "authenticated";
GRANT ALL ON TABLE "public"."tenants" TO "service_role";



GRANT ALL ON TABLE "public"."training_enrollments" TO "anon";
GRANT ALL ON TABLE "public"."training_enrollments" TO "authenticated";
GRANT ALL ON TABLE "public"."training_enrollments" TO "service_role";



GRANT ALL ON TABLE "public"."trainings" TO "anon";
GRANT ALL ON TABLE "public"."trainings" TO "authenticated";
GRANT ALL ON TABLE "public"."trainings" TO "service_role";



GRANT ALL ON TABLE "public"."top_mentors_view" TO "anon";
GRANT ALL ON TABLE "public"."top_mentors_view" TO "authenticated";
GRANT ALL ON TABLE "public"."top_mentors_view" TO "service_role";



GRANT ALL ON TABLE "public"."training_feed_events" TO "anon";
GRANT ALL ON TABLE "public"."training_feed_events" TO "authenticated";
GRANT ALL ON TABLE "public"."training_feed_events" TO "service_role";



GRANT ALL ON TABLE "public"."training_micro_missions" TO "anon";
GRANT ALL ON TABLE "public"."training_micro_missions" TO "authenticated";
GRANT ALL ON TABLE "public"."training_micro_missions" TO "service_role";



GRANT ALL ON TABLE "public"."training_progress" TO "anon";
GRANT ALL ON TABLE "public"."training_progress" TO "authenticated";
GRANT ALL ON TABLE "public"."training_progress" TO "service_role";



GRANT ALL ON TABLE "public"."training_quiz_attempts" TO "anon";
GRANT ALL ON TABLE "public"."training_quiz_attempts" TO "authenticated";
GRANT ALL ON TABLE "public"."training_quiz_attempts" TO "service_role";



GRANT ALL ON TABLE "public"."training_section_completions" TO "anon";
GRANT ALL ON TABLE "public"."training_section_completions" TO "authenticated";
GRANT ALL ON TABLE "public"."training_section_completions" TO "service_role";



GRANT ALL ON TABLE "public"."training_sections" TO "anon";
GRANT ALL ON TABLE "public"."training_sections" TO "authenticated";
GRANT ALL ON TABLE "public"."training_sections" TO "service_role";



GRANT ALL ON TABLE "public"."tremendous_teams_cache" TO "anon";
GRANT ALL ON TABLE "public"."tremendous_teams_cache" TO "authenticated";
GRANT ALL ON TABLE "public"."tremendous_teams_cache" TO "service_role";



GRANT ALL ON TABLE "public"."user_mission_completions" TO "anon";
GRANT ALL ON TABLE "public"."user_mission_completions" TO "authenticated";
GRANT ALL ON TABLE "public"."user_mission_completions" TO "service_role";



GRANT ALL ON TABLE "public"."user_organizational_assignments" TO "anon";
GRANT ALL ON TABLE "public"."user_organizational_assignments" TO "authenticated";
GRANT ALL ON TABLE "public"."user_organizational_assignments" TO "service_role";



GRANT ALL ON TABLE "public"."user_point_balances" TO "anon";
GRANT ALL ON TABLE "public"."user_point_balances" TO "authenticated";
GRANT ALL ON TABLE "public"."user_point_balances" TO "service_role";



GRANT ALL ON TABLE "public"."user_roles" TO "anon";
GRANT ALL ON TABLE "public"."user_roles" TO "authenticated";
GRANT ALL ON TABLE "public"."user_roles" TO "service_role";



GRANT ALL ON TABLE "public"."v_budget_planner" TO "anon";
GRANT ALL ON TABLE "public"."v_budget_planner" TO "authenticated";
GRANT ALL ON TABLE "public"."v_budget_planner" TO "service_role";



GRANT ALL ON TABLE "public"."v_liability_snapshots" TO "anon";
GRANT ALL ON TABLE "public"."v_liability_snapshots" TO "authenticated";
GRANT ALL ON TABLE "public"."v_liability_snapshots" TO "service_role";



GRANT ALL ON TABLE "public"."votes" TO "anon";
GRANT ALL ON TABLE "public"."votes" TO "authenticated";
GRANT ALL ON TABLE "public"."votes" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "supabase_auth_admin" IN SCHEMA "auth" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "supabase_auth_admin" IN SCHEMA "auth" GRANT ALL ON SEQUENCES TO "dashboard_user";



ALTER DEFAULT PRIVILEGES FOR ROLE "supabase_auth_admin" IN SCHEMA "auth" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "supabase_auth_admin" IN SCHEMA "auth" GRANT ALL ON FUNCTIONS TO "dashboard_user";



ALTER DEFAULT PRIVILEGES FOR ROLE "supabase_auth_admin" IN SCHEMA "auth" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "supabase_auth_admin" IN SCHEMA "auth" GRANT ALL ON TABLES TO "dashboard_user";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";







RESET ALL;
