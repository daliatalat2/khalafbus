import { useTranslation } from 'react-i18next';
import { Settings, PenTool as Tool, Clock, Users, Shield, Wrench } from 'lucide-react';

export default function Services() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    {
      icon: Settings,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      features: t('services.maintenance.features', { returnObjects: true })
    },
    {
      icon: Tool,
      title: t('services.modifications.title'),
      description: t('services.modifications.description'),
      features: t('services.modifications.features', { returnObjects: true })
    },
    {
      icon: Clock,
      title: t('services.warranty.title'),
      description: t('services.warranty.description'),
      features: t('services.warranty.features', { returnObjects: true })
    },
    {
      icon: Users,
      title: t('services.training.title'),
      description: t('services.training.description'),
      features: t('services.training.features', { returnObjects: true })
    },
    {
      icon: Shield,
      title: t('services.fleet.title'),
      description: t('services.fleet.description'),
      features: t('services.fleet.features', { returnObjects: true })
    },
    {
      icon: Wrench,
      title: t('services.parts.title'),
      description: t('services.parts.description'),
      features: t('services.parts.features', { returnObjects: true })
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">{t('services.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-1.5 h-1.5 bg-primary rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
                    {t('services.learnMore')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-navy rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{t('services.emergency.title')}</h2>
          <p className="text-lg mb-6">{t('services.emergency.subtitle')}</p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <button className="bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('services.emergency.contact')}
            </button>
            <button className="bg-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              {t('services.emergency.schedule')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}