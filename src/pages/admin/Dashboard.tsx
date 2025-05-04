import { useTranslation } from 'react-i18next';
import { AdminLayout } from '@/components/admin/Layout';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">{t('admin.welcomeMessage')}</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Add stat cards here */}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">{t('admin.recentActivity')}</h3>
          {/* Add activity list here */}
        </div>
      </div>
    </AdminLayout>
  );
}