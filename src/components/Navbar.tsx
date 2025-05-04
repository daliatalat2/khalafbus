import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Bus, 
  Menu, 
  X, 
  Calculator,
  Home,
  Package,
  Wrench,
  Settings,
  Image,
  Info,
  Phone
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { to: "/", label: t('nav.home'), icon: Home },
    { to: "/products", label: t('nav.products'), icon: Package },
    { to: "/services", label: t('nav.services'), icon: Wrench },
    { to: "/after-sales", label: t('nav.afterSales'), icon: Settings },
    { to: "/media", label: t('nav.media'), icon: Image },
    { to: "/quote", label: t('nav.requestQuote'), icon: Calculator },
    { to: "/about", label: t('nav.about'), icon: Info },
    { to: "/contact", label: t('nav.contact'), icon: Phone }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center group transform hover:scale-105 transition-all duration-300"
            >
              <Bus className="h-8 w-8 text-primary group-hover:text-navy transition-colors duration-300" />
              <div className="ml-2 rtl:mr-2 rtl:ml-0">
                <span className="text-xl font-bold text-navy group-hover:text-primary transition-colors duration-300 block">
                  MiniBus
                </span>
                <span className="text-xs text-gray-600 group-hover:text-primary transition-colors duration-300 block">
                  {i18n.language === 'ar' ? 'شركة' : 'Company'}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-1 rtl:space-x-reverse">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-navy hover:text-primary px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-50 flex items-center group whitespace-nowrap text-sm"
                  >
                    <IconComponent className="w-4 h-4 mr-1.5 rtl:ml-1.5 rtl:mr-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium text-white bg-navy rounded-md hover:bg-primary transition-all duration-300 transform hover:scale-105 ml-3 rtl:mr-3 rtl:ml-0 hover:shadow-lg"
            >
              {i18n.language === 'en' ? 'عربي' : 'English'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-primary transition-colors duration-300 p-2 rounded-md hover:bg-gray-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transform rotate-0 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transform hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center px-3 py-2 text-navy hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-300 group text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <IconComponent className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform duration-300">
                  {link.label}
                </span>
              </Link>
            );
          })}
          <button
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
            className="w-full text-left rtl:text-right px-3 py-2 text-navy hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-300 text-sm font-medium"
          >
            {i18n.language === 'en' ? 'عربي' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
}