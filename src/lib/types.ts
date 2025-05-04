export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  images: string[];
  specifications: Record<string, any>;
  features: string[];
  accessories: string[];
  created_at: string;
  updated_at: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Setting {
  id: string;
  key: string;
  value: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Analytics {
  id: string;
  page_view: string;
  visitor_id: string;
  created_at: string;
}

export interface UserProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  company: string | null;
  position: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: string;
  name: string;
  description: string | null;
  permissions: Record<string, boolean>;
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role_id: string;
  created_at: string;
}