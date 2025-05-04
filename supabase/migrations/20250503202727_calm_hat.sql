/*
  # Create Admin User

  1. Changes
    - Create admin user with specified email
    - Assign administrator role to the user
    - Set up user profile
*/

-- Create admin user if not exists
DO $$
DECLARE
  user_id UUID;
BEGIN
  -- Check if user already exists
  SELECT id INTO user_id
  FROM auth.users
  WHERE email = 'moa3tazmagdi@gmail.com';

  -- If user doesn't exist, create it
  IF user_id IS NULL THEN
    -- Insert into auth.users
    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      confirmation_token,
      email_change_token_current,
      email_change_token_new,
      recovery_token
    )
    VALUES (
      '00000000-0000-0000-0000-000000000000',
      gen_random_uuid(),
      'authenticated',
      'authenticated',
      'moa3tazmagdi@gmail.com',
      crypt('Admin123#', gen_salt('bf')),
      NOW(),
      NOW(),
      NOW(),
      '',
      '',
      '',
      ''
    )
    RETURNING id INTO user_id;

    -- Create user profile
    INSERT INTO user_profiles (
      id,
      first_name,
      last_name,
      is_active
    )
    VALUES (
      user_id,
      'Admin',
      'User',
      true
    );

    -- Assign administrator role
    INSERT INTO user_roles (
      user_id,
      role_id
    )
    SELECT 
      user_id,
      r.id
    FROM roles r
    WHERE r.name = 'administrator';
  END IF;
END;
$$;