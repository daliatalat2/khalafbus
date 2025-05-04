import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Bus, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const footerLinks = [
    {
      title: t('footer.company'),
      links: [
        { to: "/about", label: t('nav.about') },
        { to: "/media", label: t('nav.media') },
        { to: "/contact", label: t('nav.contact') }
      ]
    },
    {
      title: t('footer.products'),
      links: [
        { to: "/products", label: t('nav.products') },
        { to: "/services", label: t('nav.services') },
        { to: "/after-sales", label: t('nav.afterSales') }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className={`bg-[#2a2966] shadow-md mt-auto ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center group transform hover:scale-105 transition-all duration-300">
              <Bus className="h-7 w-7 text-white group-hover:text-primary transition-colors duration-300" />
              <div className={`${isRTL ? 'mr-2' : 'ml-2'}`}>
                <span className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 block">
                  MiniBus
                </span>
                <span className="text-xs text-gray-300 group-hover:text-primary transition-colors duration-300 block">
                  {isRTL ? 'شركة' : 'Company'}
                </span>
              </div>
            </Link>
            <div className="space-y-3">
              <div className={`flex items-center text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className={`h-5 w-5 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span dir="ltr">{isRTL ? '٠١٠٠٠٠٠١٣٠٧' : '01000001307'}</span>
              </div>
              <div className={`flex items-center text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className={`h-5 w-5 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span>contact@minibus.com</span>
              </div>
              <div className={`flex items-center text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className={`h-5 w-5 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-base font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.to}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 block text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">{t('footer.followUs')}</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-xs">
            © {new Date().getFullYear()} MiniBus. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}