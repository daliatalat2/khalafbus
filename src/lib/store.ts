import { create } from 'zustand';
import { User } from '@supabase/supabase-js';
import type { UserProfile, Role } from './types';

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  roles: Role[];
  setUser: (user: User | null) => void;
  setProfile: (profile: UserProfile | null) => void;
  setRoles: (roles: Role[]) => void;
  hasRole: (roleName: string) => boolean;
  hasPermission: (permission: string) => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  roles: [],
  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  setRoles: (roles) => set({ roles }),
  hasRole: (roleName) => get().roles.some(role => role.name === roleName),
  hasPermission: (permission) => get().roles.some(role => role.permissions[permission])
}));

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));