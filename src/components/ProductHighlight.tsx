import { useTranslation } from 'react-i18next';
import { Bus, Wrench, Settings, Shield } from 'lucide-react';

export default function ProductHighlight() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const highlights = [
    {
      icon: Bus,
      title: t('products.cityBus.title'),
      description: t('products.cityBus.description')
    },
    {
      icon: Wrench,
      title: t('products.schoolBus.title'),
      description: t('products.schoolBus.description')
    },
    {
      icon: Settings,
      title: t('products.touristBus.title'),
      description: t('products.touristBus.description')
    },
    {
      icon: Shield,
      title: t('products.specialPurpose.title'),
      description: t('products.specialPurpose.description')
    }
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2 sm:mb-4">{t('products.title')}</h2>
          <p className="text-sm sm:text-base text-gray-600">{t('products.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center p-4 sm:p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="inline-block p-3 sm:p-4 rounded-full bg-navy text-white mb-3 sm:mb-4">
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}