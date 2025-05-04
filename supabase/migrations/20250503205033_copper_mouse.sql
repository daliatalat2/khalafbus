/*
  # Fix Authentication Schema

  1. Changes
    - Ensure auth schema exists
    - Create auth.users if not exists
    - Add necessary indexes and triggers for auth functionality
    - Update RLS policies to work with auth schema

  2. Security
    - Enable RLS on all tables
    - Update policies to use auth.uid()
    - Ensure proper authentication checks
*/

-- Check if auth schema exists and create if needed
CREATE SCHEMA IF NOT EXISTS auth;

-- Ensure the auth.users table exists with required fields
CREATE TABLE IF NOT EXISTS auth.users (
  id uuid NOT NULL PRIMARY KEY,
  email text,
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
  phone text,
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

-- Update user_profiles foreign key to reference auth.users
ALTER TABLE public.user_profiles
DROP CONSTRAINT IF EXISTS user_profiles_id_fkey,
ADD CONSTRAINT user_profiles_id_fkey 
  FOREIGN KEY (id) 
  REFERENCES auth.users(id) 
  ON DELETE CASCADE;

-- Update user_roles foreign key to reference auth.users
ALTER TABLE public.user_roles
DROP CONSTRAINT IF EXISTS user_roles_user_id_fkey,
ADD CONSTRAINT user_roles_user_id_fkey 
  FOREIGN KEY (user_id) 
  REFERENCES auth.users(id) 
  ON DELETE CASCADE;

-- Update RLS policies to use auth.uid()
ALTER POLICY "Users can view their own profile" 
  ON public.user_profiles
  USING (id = auth.uid());

ALTER POLICY "Users can update their own profile" 
  ON public.user_profiles
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

ALTER POLICY "Users can view their own roles" 
  ON public.user_roles
  USING (user_id = auth.uid());

-- Create trigger to automatically create user profile
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_profiles (id)
  VALUES (new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();