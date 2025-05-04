/*
  # Update admin user password and fix authentication

  1. Changes
    - Updates admin user password
    - Ensures admin role is set correctly
    
  2. Security
    - Uses secure password hashing
    - Maintains existing security policies
*/

-- Update admin user password and ensure role is set
DO $$
BEGIN
  -- Update password in auth.users
  UPDATE auth.users
  SET 
    encrypted_password = crypt('NewAdmin123!@#', gen_salt('bf')),
    updated_at = NOW()
  WHERE id = 'a96ea058-54d3-4d6c-88c7-5cc3d156c00b';

  -- Ensure admin role is set in public.users
  UPDATE public.users
  SET 
    role = 'admin',
    updated_at = NOW()
  WHERE id = 'a96ea058-54d3-4d6c-88c7-5cc3d156c00b';

  -- Insert admin user if not exists
  INSERT INTO public.users (id, email, role)
  VALUES (
    'a96ea058-54d3-4d6c-88c7-5cc3d156c00b',
    'admin@minibus.com',
    'admin'
  )
  ON CONFLICT (id) DO UPDATE
  SET role = 'admin';
END $$;