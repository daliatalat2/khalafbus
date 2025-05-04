import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/lib/store';
import { LogOut, User } from 'lucide-react';

export function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth/login');
  };

  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-gray-900">{t('admin.dashboard')}</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-700">{user?.email}</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          className="text-gray-700 hover:text-gray-900"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}