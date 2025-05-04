import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/store';
import { userProfilesApi, userRolesApi } from '@/lib/api';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setProfile, setRoles } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadUserData = async (userId: string) => {
      try {
        // Load user profile
        const profile = await userProfilesApi.get(userId);
        setProfile(profile);

        // Load user roles
        const userRoles = await userRolesApi.getUserRoles(userId);
        setRoles(userRoles.map(ur => ur.role));
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadUserData(session.user.id);
        // Only redirect to admin dashboard if not already on an admin route
        if (!location.pathname.startsWith('/admin') && location.pathname !== '/admin/login') {
          navigate('/admin');
        }
      } else {
        setProfile(null);
        setRoles([]);
        // Only redirect to login if trying to access admin routes
        if (location.pathname.startsWith('/admin') && location.pathname !== '/admin/login') {
          navigate('/admin/login');
        }
      }
    });

    // Listen for changes on auth state (sign in, sign out, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await loadUserData(session.user.id);
        // Only redirect to admin dashboard if not already on an admin route
        if (!location.pathname.startsWith('/admin') && location.pathname !== '/admin/login') {
          navigate('/admin');
        }
      } else {
        setProfile(null);
        setRoles([]);
        // Only redirect to login if trying to access admin routes
        if (location.pathname.startsWith('/admin') && location.pathname !== '/admin/login') {
          navigate('/admin/login');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser, setProfile, setRoles, navigate, location]);

  return <>{children}</>;
}