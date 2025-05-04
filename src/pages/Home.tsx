import { useTranslation } from 'react-i18next';
import HomeSlider from '../components/HomeSlider';
import ProductHighlight from '../components/ProductHighlight';
import { Building2, Users, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
      title: t('facilities.manufacturingPlant.title'),
      description: t('facilities.manufacturingPlant.description')
    },
    {
      image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&q=80",
      title: t('facilities.serviceCenter.title'),
      description: t('facilities.serviceCenter.description')
    },
    {
      image: "https://images.unsplash.com/photo-1565034021543-dcf3995aa937?auto=format&fit=crop&w=800&q=80",
      title: t('facilities.rdCenter.title'),
      description: t('facilities.rdCenter.description')
    }
  ];

  const news = [
    {
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=800&q=80",
      title: t('news.items.electricModel.title'),
      date: isRTL ? "١٥ مارس ٢٠٢٤" : "March 15, 2024",
      description: t('news.items.electricModel.description')
    },
    {
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      title: t('news.items.award.title'),
      date: isRTL ? "١٠ مارس ٢٠٢٤" : "March 10, 2024",
      description: t('news.items.award.description')
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      title: t('news.items.serviceExpansion.title'),
      date: isRTL ? "٥ مارس ٢٠٢٤" : "March 5, 2024",
      description: t('news.items.serviceExpansion.description')
    }
  ];

  const partners = [
    {
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
      name: t('partners.transportCorporation')
    },
    {
      image: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?auto=format&fit=crop&w=800&q=80",
      name: t('partners.educationalInstitute')
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      name: t('partners.tourismCompany')
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      name: t('partners.cityTransitAuthority')
    }
  ];

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <HomeSlider />
      <ProductHighlight />

      {/* Latest News */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2 sm:mb-4">{t('news.title')}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{t('news.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{item.description}</p>
                  <button className={`text-primary font-medium hover:text-opacity-80 flex items-center text-sm sm:text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('news.readMore')}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Service Facilities */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2 sm:mb-4">{t('facilities.title')}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{t('facilities.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="h-48 sm:h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 sm:p-6">
                  <div className={`text-white ${isRTL ? 'text-right w-full' : 'text-left'}`}>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{facility.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Partners */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2 sm:mb-4">{t('partners.title')}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{t('partners.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-16 sm:h-24 flex items-center justify-center mb-3 sm:mb-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-navy font-medium text-sm sm:text-base line-clamp-2">{partner.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}