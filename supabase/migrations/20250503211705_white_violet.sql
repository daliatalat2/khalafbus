/*
  # Create users table for Supabase Auth

  1. New Tables
    - `users` table for Supabase Auth
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `encrypted_password` (text)
      - `email_confirmed_at` (timestamp with time zone)
      - `invited_at` (timestamp with time zone)
      - `confirmation_token` (text)
      - `confirmation_sent_at` (timestamp with time zone)
      - `recovery_token` (text)
      - `recovery_sent_at` (timestamp with time zone)
      - `email_change_token_new` (text)
      - `email_change` (text)
      - `email_change_sent_at` (timestamp with time zone)
      - `last_sign_in_at` (timestamp with time zone)
      - `raw_app_meta_data` (jsonb)
      - `raw_user_meta_data` (jsonb)
      - `is_super_admin` (boolean)
      - `created_at` (timestamp with time zone)
      - `updated_at` (timestamp with time zone)
      - `phone` (text)
      - `phone_confirmed_at` (timestamp with time zone)
      - `phone_change` (text)
      - `phone_change_token` (text)
      - `phone_change_sent_at` (timestamp with time zone)
      - `confirmed_at` (timestamp with time zone)
      - `email_change_token_current` (text)
      - `email_change_confirm_status` (smallint)
      - `banned_until` (timestamp with time zone)
      - `reauthentication_token` (text)
      - `reauthentication_sent_at` (timestamp with time zone)
      - `is_sso_user` (boolean)
      - `deleted_at` (timestamp with time zone)

  2. Security
    - Enable RLS on users table
    - Add policies for user access
*/

CREATE TABLE IF NOT EXISTS auth.users (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE,
  encrypted_password text,
  email_confirmed_at timestamp with time zone,
  invited_at timestamp with time zone,
  confirmation_token text,
  confirmation_sent_at timestamp with time zone,
  recovery_token text,
  recovery_sent_at timestamp with time zone,
  email_change_token_new text,
  email_change text,
  email_change_sent_at timestamp with time zone,
  last_sign_in_at timestamp with time zone,
  raw_app_meta_data jsonb DEFAULT '{}'::jsonb,
  raw_user_meta_data jsonb DEFAULT '{}'::jsonb,
  is_super_admin boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  phone text,
  phone_confirmed_at timestamp with time zone,
  phone_change text,
  phone_change_token text,
  phone_change_sent_at timestamp with time zone,
  confirmed_at timestamp with time zone,
  email_change_token_current text,
  email_change_confirm_status smallint,
  banned_until timestamp with time zone,
  reauthentication_token text,
  reauthentication_sent_at timestamp with time zone,
  is_sso_user boolean DEFAULT false,
  deleted_at timestamp with time zone
);

ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own record"
  ON auth.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own record"
  ON auth.users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);