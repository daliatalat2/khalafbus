/*
  # Add users table for Supabase Auth

  1. New Tables
    - `users` table with required columns for Supabase Auth:
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `raw_user_meta_data` (jsonb)
      - `raw_app_meta_data` (jsonb)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `deleted_at` (timestamptz)
      - `last_sign_in_at` (timestamptz)
      - `confirmed_at` (timestamptz)
      - `email_confirmed_at` (timestamptz)
      - `phone_confirmed_at` (timestamptz)
      - `banned_until` (timestamptz)
      - `reauthentication_token` (text)
      - `refresh_token` (text)
      - `is_super_admin` (boolean)
      - `encrypted_password` (text)
      - `confirmation_token` (text)
      - `recovery_token` (text)
      - `email_change_token` (text)
      - `email_change` (text)
      - `phone` (text)
      - `phone_change` (text)
      - `phone_change_token` (text)
      - `confirmation_sent_at` (timestamptz)
      - `recovery_sent_at` (timestamptz)
      - `email_change_sent_at` (timestamptz)
      - `phone_change_sent_at` (timestamptz)
      - `last_sign_in_ip` (text)
      - `confirmation_ip` (text)
      - `recovery_ip` (text)
      - `email_change_ip` (text)
      - `phone_change_ip` (text)
      - `instance_id` (uuid)

  2. Security
    - Enable RLS on users table
    - Add policies for user access control
*/

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

-- Policies
CREATE POLICY "Users can view own record" 
  ON users 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own record" 
  ON users 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = id) 
  WITH CHECK (auth.uid() = id);

-- Add trigger for updating updated_at timestamp
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();