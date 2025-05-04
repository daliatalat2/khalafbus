/*
  # Fix Authentication Schema

  1. Schema Changes
    - Create auth schema if it doesn't exist
    - Ensure users table exists with proper structure
    - Add necessary indexes and constraints
  
  2. Security
    - Enable RLS on users table
    - Add policies for user access control
*/

-- Create auth schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS auth;

-- Ensure the auth.users table exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.tables 
    WHERE table_schema = 'auth' 
    AND table_name = 'users'
  ) THEN
    CREATE TABLE auth.users (
      id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
      email text UNIQUE,
      encrypted_password text,
      email_confirmed_at timestamp with time zone,
      invited_at timestamp with time zone,
      confirmation_token text,
      confirmation_sent_at timestamp with time zone,
      recovery_token text,
      recovery_sent_at timestamp with time zone,
      email_change_token text,
      email_change text,
      email_change_sent_at timestamp with time zone,
      last_sign_in_at timestamp with time zone,
      raw_app_meta_data jsonb,
      raw_user_meta_data jsonb,
      is_super_admin boolean,
      created_at timestamp with time zone,
      updated_at timestamp with time zone,
      phone text UNIQUE,
      phone_confirmed_at timestamp with time zone,
      phone_change text,
      phone_change_token text,
      phone_change_sent_at timestamp with time zone,
      confirmed_at timestamp with time zone,
      email_change_confirm_status smallint,
      banned_until timestamp with time zone,
      reauthentication_token text,
      reauthentication_sent_at timestamp with time zone,
      is_sso_user boolean DEFAULT false,
      deleted_at timestamp with time zone
    );

    -- Add necessary indexes
    CREATE INDEX IF NOT EXISTS users_instance_id_email_idx ON auth.users (email);
    CREATE INDEX IF NOT EXISTS users_instance_id_phone_idx ON auth.users (phone);
  END IF;
END $$;

-- Enable RLS on the users table
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Add RLS policies
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' 
    AND schemaname = 'auth'
    AND policyname = 'Users can view own user data'
  ) THEN
    CREATE POLICY "Users can view own user data" 
    ON auth.users 
    FOR SELECT 
    TO authenticated 
    USING (auth.uid() = id);
  END IF;
END $$;