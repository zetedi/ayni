import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-shadow text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Ayni Sanctuary" 
                  className="w-20 h-20 object-contain"
                />
                <span className="font-serif text-xl font-bold tracking-wide text-white">
                  Ayni Sanctuary
                </span>
              </div>
            <p className="text-white/70 text-sm max-w-xs mx-auto md:mx-0">
               {t('hero', 'subtitle')}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-honey font-serif font-bold mb-4">{t('footer', 'connect')}</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white/60 hover:text-honey transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-honey transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-honey transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-honey transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
             <div className="inline-flex items-center gap-2 text-white/60 hover:text-honey cursor-pointer transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@aynisanctuary.org</span>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Ayni Sanctuary. {t('footer', 'rights')}</p>
          <div className="mt-4 md:mt-0 space-x-4">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;