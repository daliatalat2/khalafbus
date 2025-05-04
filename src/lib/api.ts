import { supabase } from './supabase';
import type { Product, Page, Setting, Analytics, UserProfile, Role, UserRole } from './types';

// Products API
export const productsApi = {
  async list() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Product[];
  },

  async get(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as Product;
  },

  async create(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single();
    
    if (error) throw error;
    return data as Product;
  },

  async update(id: string, product: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .update(product)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Product;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Pages API
export const pagesApi = {
  async list() {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Page[];
  },

  async get(id: string) {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as Page;
  },

  async create(page: Omit<Page, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('pages')
      .insert(page)
      .select()
      .single();
    
    if (error) throw error;
    return data as Page;
  },

  async update(id: string, page: Partial<Page>) {
    const { data, error } = await supabase
      .from('pages')
      .update(page)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Page;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('pages')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Settings API
export const settingsApi = {
  async list() {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .order('key', { ascending: true });
    
    if (error) throw error;
    return data as Setting[];
  },

  async get(key: string) {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('key', key)
      .single();
    
    if (error) throw error;
    return data as Setting;
  },

  async upsert(key: string, value: Record<string, any>) {
    const { data, error } = await supabase
      .from('settings')
      .upsert({ key, value })
      .select()
      .single();
    
    if (error) throw error;
    return data as Setting;
  }
};

// Analytics API
export const analyticsApi = {
  async track(pageView: string, visitorId: string) {
    const { error } = await supabase
      .from('analytics')
      .insert({ page_view: pageView, visitor_id: visitorId });
    
    if (error) throw error;
  },

  async getPageViews() {
    const { data, error } = await supabase
      .from('analytics')
      .select('page_view, created_at')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Analytics[];
  }
};

// User Profiles API
export const userProfilesApi = {
  async getCurrentProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    
    if (error) throw error;
    return data as UserProfile;
  },

  async updateProfile(profile: Partial<UserProfile>) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('user_profiles')
      .update(profile)
      .eq('id', user.id)
      .select()
      .single();
    
    if (error) throw error;
    return data as UserProfile;
  },

  async list() {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as UserProfile[];
  },

  async get(id: string) {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as UserProfile;
  }
};

// Roles API
export const rolesApi = {
  async list() {
    const { data, error } = await supabase
      .from('roles')
      .select('*')
      .order('name', { ascending: true });
    
    if (error) throw error;
    return data as Role[];
  },

  async get(id: string) {
    const { data, error } = await supabase
      .from('roles')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as Role;
  },

  async create(role: Omit<Role, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('roles')
      .insert(role)
      .select()
      .single();
    
    if (error) throw error;
    return data as Role;
  },

  async update(id: string, role: Partial<Role>) {
    const { data, error } = await supabase
      .from('roles')
      .update(role)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Role;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('roles')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// User Roles API
export const userRolesApi = {
  async getUserRoles(userId: string) {
    const { data, error } = await supabase
      .from('user_roles')
      .select(`
        *,
        role:roles(*)
      `)
      .eq('user_id', userId);
    
    if (error) throw error;
    return data;
  },

  async assignRole(userId: string, roleId: string) {
    const { data, error } = await supabase
      .from('user_roles')
      .insert({ user_id: userId, role_id: roleId })
      .select()
      .single();
    
    if (error) throw error;
    return data as UserRole;
  },

  async removeRole(userId: string, roleId: string) {
    const { error } = await supabase
      .from('user_roles')
      .delete()
      .eq('user_id', userId)
      .eq('role_id', roleId);
    
    if (error) throw error;
  },

  async hasRole(userId: string, roleName: string) {
    const { data, error } = await supabase
      .from('user_roles')
      .select(`
        *,
        role:roles(name)
      `)
      .eq('user_id', userId)
      .eq('role.name', roleName)
      .maybeSingle();
    
    if (error) throw error;
    return !!data;
  }
};