import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  // Updated link class to be more subtle since the container is the "card"
  const linkClass = (path: string) => `
    block px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
    ${isActive(path) 
      ? 'text-shadow bg-white font-bold shadow-md' 
      : 'text-white/80 hover:text-white hover:bg-white/10'}
  `;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Ayni Sanctuary" 
                className="h-12 w-auto object-contain drop-shadow-lg filter brightness-110"
              />
              <span className="font-serif text-2xl font-bold text-white tracking-tight hidden sm:block drop-shadow-lg group-hover:text-honey transition-colors">
                Ayni Sanctuary
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu - Combined Card */}
          <div className="hidden md:flex items-center">
            <div className="bg-[#263238] rounded-full px-2 py-2 flex items-center shadow-lg border border-honey backdrop-blur-sm gap-2">
                <Link to="/" className={linkClass('/')}>{t('nav', 'home')}</Link>
                <Link to="/activities" className={linkClass('/activities')}>{t('nav', 'activities')}</Link>
                <Link to="/temple" className={linkClass('/temple')}>{t('nav', 'temple')}</Link>
                <Link to="/shop" className={linkClass('/shop')}>{t('nav', 'shop')}</Link>
                <Link to="/profile" className={linkClass('/profile')}>{t('nav', 'profile')}</Link>
                
                <div className="h-6 w-px bg-white/20 mx-2"></div>

                <div className="relative group px-2">
                    <button className="flex items-center gap-2 text-white/80 hover:text-white font-medium rounded-md transition-colors">
                        <Globe className="w-4 h-4" />
                        <span className="uppercase text-xs">{language}</span>
                    </button>
                    <div className="absolute right-0 top-full mt-2 w-32 bg-[#263238] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/10 overflow-hidden py-1">
                        {(Object.keys(Language) as Array<keyof typeof Language>).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(Language[lang])}
                            className="block w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                        >
                            {lang === 'EN' ? 'English' : lang === 'ES' ? 'Español' : 'Runasimi'}
                        </button>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
             <div className="relative group">
              <button className="flex items-center gap-1 text-white drop-shadow-md bg-shadow px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                <span className="uppercase font-bold text-xs">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-[#263238] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/10">
                 {(Object.keys(Language) as Array<keyof typeof Language>).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(Language[lang])}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-full text-white hover:text-honey bg-shadow shadow-lg border border-white/10 transition-colors"
            >
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#263238]/95 backdrop-blur-md border-t border-white/10 animate-fade-in z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10">{t('nav', 'home')}</Link>
            <Link to="/activities" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10">{t('nav', 'activities')}</Link>
            <Link to="/temple" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10">{t('nav', 'temple')}</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10">{t('nav', 'shop')}</Link>
            <Link to="/profile" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10">{t('nav', 'profile')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;