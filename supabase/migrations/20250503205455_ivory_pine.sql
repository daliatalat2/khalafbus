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
  admin_role_id UUID;
BEGIN
  -- Get the administrator role ID
  SELECT id INTO admin_role_id
  FROM roles
  WHERE name = 'administrator';

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
      recovery_token,
      raw_app_meta_data,
      raw_user_meta_data
    )
    VALUES (
      '00000000-0000-0000-0000-000000000000',
      uuid_generate_v4(),
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
      '',
      '{"provider":"email","providers":["email"]}',
      '{}'
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
    VALUES (
      user_id,
      admin_role_id
    );
  END IF;
END;
$$;