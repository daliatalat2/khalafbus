import { useTranslation } from 'react-i18next';
import { Target, Heart, Award, Users, CheckCircle, TrendingUp } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { number: "25+", label: t('about.stats.experience') },
    { number: "1000+", label: t('about.stats.vehicles') },
    { number: "50+", label: t('about.stats.countries') },
    { number: "24/7", label: t('about.stats.support') }
  ];

  const values = [
    {
      icon: Heart,
      title: t('about.values.quality'),
      description: t('about.values.qualityDesc')
    },
    {
      icon: Target,
      title: t('about.values.innovation'),
      description: t('about.values.innovationDesc')
    },
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellenceDesc')
    }
  ];

  const milestones = [
    {
      year: "1998",
      title: t('about.journey.founded'),
      description: t('about.journey.foundedDesc')
    },
    {
      year: "2005",
      title: t('about.journey.expansion'),
      description: t('about.journey.expansionDesc')
    },
    {
      year: "2012",
      title: t('about.journey.innovation'),
      description: t('about.journey.innovationDesc')
    },
    {
      year: "2018",
      title: t('about.journey.sustainability'),
      description: t('about.journey.sustainabilityDesc')
    },
    {
      year: "2023",
      title: t('about.journey.digital'),
      description: t('about.journey.digitalDesc')
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1416339698674-4f118dd3388b?auto=format&fit=crop&w=2000&q=80"
          alt={t('about.title')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy bg-opacity-75 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">{t('about.mission.title')}</h2>
              <p className="text-gray-600">
                {t('about.mission.description')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">{t('about.vision.title')}</h2>
              <p className="text-gray-600">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">{t('about.values.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">{t('about.journey.title')}</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 pt-1">
                  <div className="text-xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-gray-200">
                  <div className="relative">
                    <div className="absolute -left-[35px] top-2 w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-bold text-navy mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">{t('about.team.title', 'Leadership Team')}</h2>
            <p className="text-xl text-gray-600">{t('about.team.subtitle', 'Meet the people driving our success')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={`https://i.pravatar.cc/256?img=${index + 10}`}
                    alt={t('about.team.member', 'Team member')}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy">{t('about.team.name', 'John Smith')}</h3>
                <p className="text-gray-600">{t('about.team.position', 'Chief Executive Officer')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}