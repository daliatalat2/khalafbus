import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Download, Phone, ChevronRight, Calculator } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(0);

  const products = {
    'city-minibus': {
      name: t('products.cityBus.title'),
      description: t('products.cityBus.description'),
      images: [
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
      ],
      specs: {
        length: t('products.cityBus.specs.length'),
        width: t('products.cityBus.specs.width'),
        height: t('products.cityBus.specs.height'),
        seats: t('products.cityBus.specs.seats'),
        engine: t('products.cityBus.specs.engine'),
        transmission: t('products.cityBus.specs.transmission')
      },
      features: t('products.cityBus.features', { returnObjects: true }),
      accessories: t('products.cityBus.accessories', { returnObjects: true })
    },
    'school-bus': {
      name: t('products.schoolBus.title'),
      description: t('products.schoolBus.description'),
      images: [
        "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
      ],
      specs: {
        length: t('products.schoolBus.specs.length'),
        width: t('products.schoolBus.specs.width'),
        height: t('products.schoolBus.specs.height'),
        seats: t('products.schoolBus.specs.seats'),
        engine: t('products.schoolBus.specs.engine'),
        transmission: t('products.schoolBus.specs.transmission')
      },
      features: t('products.schoolBus.features', { returnObjects: true }),
      accessories: t('products.schoolBus.accessories', { returnObjects: true })
    },
    'tourist-minibus': {
      name: t('products.touristBus.title'),
      description: t('products.touristBus.description'),
      images: [
        "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
      ],
      specs: {
        length: t('products.touristBus.specs.length'),
        width: t('products.touristBus.specs.width'),
        height: t('products.touristBus.specs.height'),
        seats: t('products.touristBus.specs.seats'),
        engine: t('products.touristBus.specs.engine'),
        transmission: t('products.touristBus.specs.transmission')
      },
      features: t('products.touristBus.features', { returnObjects: true }),
      accessories: t('products.touristBus.accessories', { returnObjects: true })
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  const features = Array.isArray(product.features) ? product.features : [];
  const accessories = Array.isArray(product.accessories) ? product.accessories : [];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Images Gallery */}
        <div className="mb-12">
          <div className="relative h-[600px] rounded-lg overflow-hidden mb-4">
            <img
              src={product.images[selectedImage]}
              alt={`${product.name} main view`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-32 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black ${
                  selectedImage === index ? 'bg-opacity-0' : 'bg-opacity-40'
                } transition-opacity duration-200`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-navy mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">{t('products.specifications')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-2">
                    <span className="text-gray-600">{t(`products.specs.${key}`)}: </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-navy mb-6">{t('products.features.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Accessories */}
            {accessories.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-navy mb-6">{t('products.features.optional')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {accessories.map((accessory: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-primary mr-2" />
                      <span>{accessory}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <button
                onClick={() => window.open('/brochure.pdf')}
                className="w-full bg-primary text-white rounded-lg py-3 px-6 flex items-center justify-center mb-4 hover:bg-opacity-90 transition-colors"
              >
                <Download className={`w-5 h-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t('products.downloadBrochure')}
              </button>
              
              <button
                onClick={() => navigate('/quote')}
                className="w-full bg-navy text-white rounded-lg py-3 px-6 flex items-center justify-center mb-4 hover:bg-opacity-90 transition-colors"
              >
                <Calculator className={`w-5 h-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t('products.requestQuote')}
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="w-full border-2 border-navy text-navy rounded-lg py-3 px-6 flex items-center justify-center hover:bg-navy hover:text-white transition-colors"
              >
                <Phone className={`w-5 h-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t('products.contactSales')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}