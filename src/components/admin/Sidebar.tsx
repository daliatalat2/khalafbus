import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/lib/store';
import {
  LayoutDashboard,
  Package,
  Settings,
  Users,
  FileText,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'admin.dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'admin.products', href: '/admin/products', icon: Package },
  { name: 'admin.users', href: '/admin/users', icon: Users },
  { name: 'admin.pages', href: '/admin/pages', icon: FileText },
  { name: 'admin.settings', href: '/admin/settings', icon: Settings },
];

export function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { isOpen, toggle } = useSidebarStore();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={toggle}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-16 flex items-center justify-center border-b">
          <Link to="/admin" className="flex items-center space-x-2">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Admin</span>
          </Link>
        </div>

        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    location.pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <IconComponent
                    className={cn(
                      'mr-4 flex-shrink-0 h-6 w-6',
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-gray-400 group-hover:text-gray-500'
                    )}
                  />
                  {t(item.name)}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}