import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors hidden sm:flex items-center justify-center group"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors hidden sm:flex items-center justify-center group"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </button>
  );
}

export default function HomeSlider() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ],
    appendDots: (dots: any) => (
      <div className="absolute bottom-4 sm:bottom-6 w-full">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white transition-colors"></button>
    ),
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=2000&q=80",
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
    },
    {
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=2000&q=80",
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80",
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}