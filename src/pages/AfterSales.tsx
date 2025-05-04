import { useTranslation } from 'react-i18next';
import { Wrench, Clock, Shield, Phone, PenTool as Tool, Package } from 'lucide-react';

export default function AfterSales() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    {
      icon: Clock,
      title: t('afterSales.services.0.title'),
      description: t('afterSales.services.0.description')
    },
    {
      icon: Wrench,
      title: t('afterSales.services.1.title'),
      description: t('afterSales.services.1.description')
    },
    {
      icon: Tool,
      title: t('afterSales.services.2.title'),
      description: t('afterSales.services.2.description')
    },
    {
      icon: Shield,
      title: t('afterSales.services.3.title'),
      description: t('afterSales.services.3.description')
    },
    {
      icon: Phone,
      title: t('afterSales.services.4.title'),
      description: t('afterSales.services.4.description')
    },
    {
      icon: Package,
      title: t('afterSales.services.5.title'),
      description: t('afterSales.services.5.description')
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-12">
        <img
          src="https://images.unsplash.com/photo-1613746203812-717e7c10a7b2?auto=format&fit=crop&w=2000&q=80"
          alt={t('afterSales.title')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy bg-opacity-75 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('afterSales.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              {t('afterSales.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} mb-4`}>
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold text-navy ${isRTL ? 'mr-4' : 'ml-4'}`}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                {t('afterSales.assistance.title')}
              </h2>
              <p className="text-gray-600">
                {t('afterSales.assistance.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {t('afterSales.assistance.schedule.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('afterSales.assistance.schedule.description')}
                </p>
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                  {t('afterSales.assistance.schedule.button')}
                </button>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {t('afterSales.assistance.hotline.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('afterSales.assistance.hotline.description')}
                </p>
                <a 
                  href="tel:+201234567890" 
                  className="inline-flex items-center text-primary hover:text-opacity-80"
                  dir="ltr"
                >
                  <Phone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span className="text-lg font-semibold">+20 123 456 7890</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}