import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function TopBar() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="bg-navy text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+201000001307" className="flex items-center hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
              <span dir="ltr">+20 100 000 1307</span>
            </a>
            <a href="mailto:info@minibus.com" className="flex items-center hover:text-primary transition-colors">
              <Mail className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
              <span>info@minibus.com</span>
            </a>
            <a 
              href="https://maps.google.com/?q=El+Obour+City,Egypt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:flex items-center hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
              <span>{isRTL ? 'العبور- اسكان الشباب - المنطقة الصناعيه التانيه' : 'El Obour City - Youth Housing - 2nd Industrial Zone'}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}