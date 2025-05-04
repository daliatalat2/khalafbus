/*
  # Update admin user password

  1. Changes
    - Updates the password for the admin user
    
  2. Security
    - Uses secure password hashing with bcrypt
    - Maintains existing security policies
*/

DO $$
BEGIN
  -- Update admin password
  UPDATE auth.users
  SET encrypted_password = crypt('NewSecurePassword123!@#', gen_salt('bf'))
  WHERE email = 'admin@minibus.com';
  
  -- Verify the update
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Admin user not found';
  END IF;
END $$;