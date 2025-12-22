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

  const linkClass = (path: string) => `
    block px-4 py-2 rounded-md text-base font-medium transition-all duration-200 shadow-sm
    ${isActive(path) 
      ? 'text-white bg-shadow/80 font-bold backdrop-blur-md border border-white/10' 
      : 'text-white bg-black/20 hover:bg-shadow/60 hover:text-honey backdrop-blur-sm hover:shadow-md'}
  `;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Ayni Sanctuary" 
                className="w-20 h-20 object-contain drop-shadow-lg filter brightness-110"
              />
              <span className="font-serif text-2xl font-bold text-white tracking-tight hidden sm:block drop-shadow-lg group-hover:text-honey transition-colors">
                Ayni Sanctuary
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={linkClass('/')}>{t('nav', 'home')}</Link>
            <Link to="/activities" className={linkClass('/activities')}>{t('nav', 'activities')}</Link>
            <Link to="/shop" className={linkClass('/shop')}>{t('nav', 'shop')}</Link>
            <Link to="/profile" className={linkClass('/profile')}>{t('nav', 'profile')}</Link>
            
            <div className="relative group">
              <button className="flex items-center gap-2 text-white hover:text-honey font-medium px-4 py-2 rounded-md bg-black/20 hover:bg-shadow/60 backdrop-blur-sm transition-all shadow-sm">
                <Globe className="w-5 h-5" />
                <span className="uppercase">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white/95 backdrop-blur-md rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 ring-1 ring-black ring-opacity-5">
                {(Object.keys(Language) as Array<keyof typeof Language>).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(Language[lang])}
                    className="block w-full text-left px-4 py-2 text-sm text-shadow hover:bg-honey/10 text-gray-800 hover:text-oxblood first:rounded-t-md last:rounded-b-md"
                  >
                    {lang === 'EN' ? 'English' : lang === 'ES' ? 'Español' : 'Runasimi'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center md:hidden gap-4">
             <div className="relative group">
              <button className="flex items-center gap-1 text-white drop-shadow-md bg-black/20 px-3 py-1 rounded-md backdrop-blur-sm">
                <span className="uppercase font-bold text-sm">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                 {(Object.keys(Language) as Array<keyof typeof Language>).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(Language[lang])}
                    className="block w-full text-left px-4 py-2 text-sm text-shadow hover:bg-honey/10 text-gray-800"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-honey bg-black/20 hover:bg-shadow/60 backdrop-blur-sm focus:outline-none shadow-sm transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-shadow/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className={linkClass('/')}>{t('nav', 'home')}</Link>
            <Link to="/activities" onClick={() => setIsOpen(false)} className={linkClass('/activities')}>{t('nav', 'activities')}</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)} className={linkClass('/shop')}>{t('nav', 'shop')}</Link>
            <Link to="/profile" onClick={() => setIsOpen(false)} className={linkClass('/profile')}>{t('nav', 'profile')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;