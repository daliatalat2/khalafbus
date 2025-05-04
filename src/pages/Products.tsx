import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const { t } = useTranslation();

  const products = [
    {
      id: 'city-minibus',
      name: t('products.cityBus.title'),
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
      description: t('products.cityBus.description'),
      specs: {
        length: t('products.cityBus.specs.length'),
        width: t('products.cityBus.specs.width'),
        height: t('products.cityBus.specs.height'),
        seats: t('products.cityBus.specs.seats'),
        engine: t('products.cityBus.specs.engine'),
        transmission: t('products.cityBus.specs.transmission'),
      },
      variants: [
        t('products.variants.standard'),
        t('products.variants.extended'),
        t('products.variants.electric')
      ]
    },
    {
      id: 'school-bus',
      name: t('products.schoolBus.title'),
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1200&q=80',
      description: t('products.schoolBus.description'),
      specs: {
        length: t('products.schoolBus.specs.length'),
        width: t('products.schoolBus.specs.width'),
        height: t('products.schoolBus.specs.height'),
        seats: t('products.schoolBus.specs.seats'),
        engine: t('products.schoolBus.specs.engine'),
        transmission: t('products.schoolBus.specs.transmission'),
      },
      variants: [
        t('products.variants.standard'),
        t('products.variants.extended')
      ]
    },
    {
      id: 'tourist-minibus',
      name: t('products.touristBus.title'),
      image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80',
      description: t('products.touristBus.description'),
      specs: {
        length: t('products.touristBus.specs.length'),
        width: t('products.touristBus.specs.width'),
        height: t('products.touristBus.specs.height'),
        seats: t('products.touristBus.specs.seats'),
        engine: t('products.touristBus.specs.engine'),
        transmission: t('products.touristBus.specs.transmission'),
      },
      variants: [
        t('products.variants.standard'),
        t('products.variants.vip'),
        t('products.variants.ultraLuxury')
      ]
    },
    {
      id: 'electric-minibus',
      name: t('products.electricBus.title'),
      image: 'https://www.sis.gov.eg/Content/Upload/slider/11202424104336239.jpg',
      description: t('products.electricBus.description'),
      specs: {
        length: t('products.electricBus.specs.length'),
        width: t('products.electricBus.specs.width'),
        height: t('products.electricBus.specs.height'),
        seats: t('products.electricBus.specs.seats'),
        range: t('products.electricBus.specs.range'),
        charging: t('products.electricBus.specs.charging'),
      },
      variants: [
        t('products.variants.standard'),
        t('products.variants.extended'),
        t('products.variants.premium')
      ]
    },
    {
      id: 'vip-minibus',
      name: t('products.vipBus.title'),
      image: 'https://stratioautomotive.com/wp-content/uploads/2022/08/EV-bus-alerts-city--scaled.jpg',
      description: t('products.vipBus.description'),
      specs: {
        length: t('products.vipBus.specs.length'),
        width: t('products.vipBus.specs.width'),
        height: t('products.vipBus.specs.height'),
        seats: t('products.vipBus.specs.seats'),
        engine: t('products.vipBus.specs.engine'),
        transmission: t('products.vipBus.specs.transmission'),
      },
      variants: [
        t('products.variants.vip'),
        t('products.variants.ultraLuxury'),
        t('products.variants.executive')
      ]
    },
    {
      id: 'multi-purpose-minibus',
      name: t('products.multiPurposeBus.title'),
      image: 'https://images.unsplash.com/photo-1590922144791-347af7dd9dd1?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: t('products.multiPurposeBus.description'),
      specs: {
        length: t('products.multiPurposeBus.specs.length'),
        width: t('products.multiPurposeBus.specs.width'),
        height: t('products.multiPurposeBus.specs.height'),
        seats: t('products.multiPurposeBus.specs.seats'),
        engine: t('products.multiPurposeBus.specs.engine'),
        transmission: t('products.multiPurposeBus.specs.transmission'),
      },
      variants: [
        t('products.variants.standard'),
        t('products.variants.cargo'),
        t('products.variants.flexible')
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">{t('products.title')}</h1>
          <p className="text-xl text-gray-600">{t('products.subtitle')}</p>
        </div>

        <div className="space-y-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-[400px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-navy mb-4">{product.name}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-navy mb-4">{t('products.specifications')}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="border-b border-gray-200 pb-2">
                          <span className="text-gray-600">{t(`products.specs.${key}`)}: </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-navy mb-4">{t('products.variants.title')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant) => (
                        <span
                          key={variant}
                          className="px-4 py-2 bg-gray-100 text-navy rounded-full text-sm"
                        >
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      {t('products.viewDetails')}
                    </Link>
                    <button className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-opacity-90 transition-colors">
                      <Download className="w-5 h-5 mr-2" />
                      {t('products.downloadBrochure')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}