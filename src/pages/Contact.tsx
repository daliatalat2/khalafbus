import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2 } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  const location = {
    type: 'headquarters',
    icon: Building2,
    title: t('contact.info.locations.headquarters.title'),
    address: 'Khalaf Group Factory, El Shabab St, العبور',
    city: t('contact.info.locations.headquarters.city'),
    country: t('contact.info.locations.headquarters.country'),
    phone: t('contact.info.locations.headquarters.phone'),
    email: t('contact.info.locations.headquarters.email'),
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27571.571592012385!2d31.46377698894957!3d30.264447699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145805a6985ac0a3%3A0xadfdd8329ec7f551!2sEl%20Shabab%20St%2C%20Al%20Obour%20City%2C%20Cairo%20Governorate%2011828!5e0!3m2!1sen!2seg!4v1711484542044!5m2!1sen!2seg"
  };

  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-2 sm:mb-4">{t('contact.title')}</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={location.mapUrl}
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.title} location`}
              ></iframe>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2" />
                <h2 className="text-xl sm:text-2xl font-bold text-navy">{location.title}</h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1 mr-2 sm:mr-3" />
                  <div>
                    <p className="text-sm sm:text-base text-gray-600">{location.address}</p>
                    <p className="text-sm sm:text-base text-gray-600">{location.city}, {location.country}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
                  <a href={`tel:${location.phone}`} className="text-sm sm:text-base text-gray-600 hover:text-primary">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
                  <a href={`mailto:${location.email}`} className="text-sm sm:text-base text-gray-600 hover:text-primary">
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                <p className="text-lg sm:text-xl text-gray-800">{t('contact.form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2" htmlFor="name">
                      {t('contact.form.name')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2" htmlFor="email">
                      {t('contact.form.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2" htmlFor="subject">
                    {t('contact.form.subject')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2" htmlFor="message">
                    {t('contact.form.message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}