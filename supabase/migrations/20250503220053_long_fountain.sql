/*
  # Fix Auth Schema Migration

  1. Changes
    - Create users table if not exists
    - Add policies only if they don't exist
    - Add trigger for updated_at
*/

-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE,
  raw_user_meta_data jsonb DEFAULT '{}'::jsonb,
  raw_app_meta_data jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz,
  last_sign_in_at timestamptz,
  confirmed_at timestamptz,
  email_confirmed_at timestamptz,
  phone_confirmed_at timestamptz,
  banned_until timestamptz,
  reauthentication_token text,
  refresh_token text,
  is_super_admin boolean DEFAULT false,
  encrypted_password text,
  confirmation_token text,
  recovery_token text,
  email_change_token text,
  email_change text,
  phone text,
  phone_change text,
  phone_change_token text,
  confirmation_sent_at timestamptz,
  recovery_sent_at timestamptz,
  email_change_sent_at timestamptz,
  phone_change_sent_at timestamptz,
  last_sign_in_ip text,
  confirmation_ip text,
  recovery_ip text,
  email_change_ip text,
  phone_change_ip text,
  instance_id uuid
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Add policies if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' 
    AND policyname = 'Users can view own record'
  ) THEN
    CREATE POLICY "Users can view own record" 
      ON users 
      FOR SELECT 
      TO authenticated 
      USING (auth.uid() = id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' 
    AND policyname = 'Users can update own record'
  ) THEN
    CREATE POLICY "Users can update own record" 
      ON users 
      FOR UPDATE 
      TO authenticated 
      USING (auth.uid() = id) 
      WITH CHECK (auth.uid() = id);
  END IF;
END $$;

-- Add trigger if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_users_updated_at'
  ) THEN
    CREATE TRIGGER update_users_updated_at
      BEFORE UPDATE ON users
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at();
  END IF;
END $$;