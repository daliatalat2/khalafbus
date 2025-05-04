import { useTranslation } from 'react-i18next';
import { Play, Calendar, ArrowRight } from 'lucide-react';

export default function Media() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const formatDate = (dateStr: string) => {
    if (isRTL) {
      const date = new Date(dateStr);
      const arabicMonths = [
        'يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
      ];
      const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      const day = date.getDate().toString().split('').map(d => arabicNumerals[parseInt(d)]).join('');
      const month = arabicMonths[date.getMonth()];
      const year = date.getFullYear().toString().split('').map(d => arabicNumerals[parseInt(d)]).join('');
      return `${day} ${month} ${year}`;
    }
    return new Date(dateStr).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const galleries = [
    {
      category: t('media.galleries.manufacturing'),
      images: [
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565034021543-dcf3995aa937?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      category: t('media.galleries.products'),
      images: [
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const videos = [
    {
      title: t('media.videos.newElectric'),
      thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
      duration: "٣:٤٥",
      date: "2024-02-15"
    },
    {
      title: t('media.videos.manufacturing'),
      thumbnail: "https://images.unsplash.com/photo-1565034021543-dcf3995aa937?auto=format&fit=crop&w=800&q=80",
      duration: "٥:٢٠",
      date: "2024-01-28"
    },
    {
      title: t('media.videos.safety'),
      thumbnail: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&q=80",
      duration: "٤:١٥",
      date: "2024-01-10"
    }
  ];

  const news = [
    {
      title: t('news.items.serviceExpansion.title'),
      date: "2024-03-01",
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=800&q=80",
      excerpt: t('news.items.serviceExpansion.description')
    },
    {
      title: t('news.items.award.title'),
      date: "2024-02-15",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      excerpt: t('news.items.award.description')
    },
    {
      title: t('news.items.electricModel.title'),
      date: "2024-02-01",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
      excerpt: t('news.items.electricModel.description')
    }
  ];

  return (
    <div className={`bg-gray-50 py-12 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Photo Galleries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-8">{t('media.galleries.title')}</h2>
          {galleries.map((gallery, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-xl font-semibold text-navy mb-4">{gallery.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gallery.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image}
                      alt={`${gallery.category} ${imgIndex + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-2 bg-white text-navy rounded-full font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {t('media.galleries.viewLarger')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Videos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-8">{t('media.videos.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-navy" />
                    </button>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {isRTL ? video.duration : video.duration.replace(/[٠-٩]/g, d => String(d.charCodeAt(0) - 1632))}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-navy mb-2">{video.title}</h3>
                  <div className={`flex items-center text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Calendar className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    <span className="text-sm">{formatDate(video.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News */}
        <section>
          <h2 className="text-3xl font-bold text-navy mb-8">{t('news.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className={`flex items-center text-gray-600 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Calendar className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    <span className="text-sm">{formatDate(item.date)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <button className={`flex items-center text-primary font-medium hover:text-opacity-80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('news.readMore')}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}