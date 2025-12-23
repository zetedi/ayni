import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
// @ts-ignore
import UnicornScene from "unicornstudio-react";

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen relative flex items-start pt-32 md:pt-40 pb-12 md:pb-20 bg-black">
      {/* Background Unicorn Scene */}
      <div className="fixed inset-0 z-0 bg-black" style={{ top: '10vh' }}>
        <UnicornScene 
          projectId="cOlmT8cZsSlzzymziBBA" 
          width={dimensions.width} 
          height={dimensions.height} 
        />
        {/* Subtle overlay for text readability assurance */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Transparent, Left Aligned Card */}
        <div className="w-full text-left">
          
          <div className="max-w-4xl mr-auto">
            <h1 className="text-2xl md:text-5xl font-serif font-bold text-white mb-6 md:mb-8 tracking-tight drop-shadow-md">
              {t('hero', 'title')}
            </h1>
            
            <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-white/90 leading-relaxed font-serif text-left drop-shadow-sm">
              <p>{t('hero', 'p1')}</p>
              <p>{t('hero', 'p2')}</p>
              <p>{t('hero', 'p3')}</p>
              <p>{t('hero', 'p4')}</p>
            </div>

            <div className="mt-8 md:mt-10 mb-8 flex justify-start">
                <button className="bg-honey text-shadow px-8 py-2 md:px-10 md:py-3 rounded-full font-serif font-extrabold text-sm md:text-lg hover:bg-opacity-90 transition-all shadow-md border border-white/20">
                    {t('hero', 'cta')}
                </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;