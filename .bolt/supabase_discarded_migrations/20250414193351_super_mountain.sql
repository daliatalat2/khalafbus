/*
  # Create initial schema

  1. New Tables
    - products
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - category (text)
      - specs (jsonb)
      - features (jsonb)
      - accessories (jsonb)
      - images (jsonb)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - quotes
      - id (uuid, primary key)
      - first_name (text)
      - last_name (text)
      - email (text)
      - phone (text)
      - company (text)
      - country (text)
      - product_id (uuid, foreign key)
      - quantity (integer)
      - requirements (text)
      - status (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - contacts
      - id (uuid, primary key)
      - name (text)
      - email (text)
      - subject (text)
      - message (text)
      - status (text)
      - created_at (timestamp)
      - updated_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
    - Add policies for public access where needed
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category text NOT NULL,
  specs jsonb DEFAULT '{}'::jsonb,
  features jsonb DEFAULT '[]'::jsonb,
  accessories jsonb DEFAULT '[]'::jsonb,
  images jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create quotes table
CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  country text NOT NULL,
  product_id uuid REFERENCES products(id),
  quantity integer NOT NULL DEFAULT 1,
  requirements text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'unread',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers to all tables
CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER quotes_updated_at
  BEFORE UPDATE ON quotes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Policies for products table
CREATE POLICY "Admin users can manage products"
  ON products
  FOR ALL
  TO authenticated
  USING ((auth.jwt() ->> 'role')::text = 'admin');

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policies for quotes table
CREATE POLICY "Admin users can manage quotes"
  ON quotes
  FOR ALL
  TO authenticated
  USING ((auth.jwt() ->> 'role')::text = 'admin');

CREATE POLICY "Anyone can create quotes"
  ON quotes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policies for contacts table
CREATE POLICY "Admin users can manage contacts"
  ON contacts
  FOR ALL
  TO authenticated
  USING ((auth.jwt() ->> 'role')::text = 'admin');

CREATE POLICY "Anyone can create contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);