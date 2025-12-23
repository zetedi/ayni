import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { VALUES_LIST } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
// @ts-ignore
import UnicornScene from "unicornstudio-react";

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [isValuesOpen, setIsValuesOpen] = useState(false);
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
    <div className="min-h-screen relative flex items-start pt-40 pb-20">
      {/* Background Unicorn Scene */}
      <div className="fixed inset-0 z-0 bg-shadow">
        <UnicornScene 
          projectId="cOlmT8cZsSlzzymziBBA" 
          width={dimensions.width} 
          height={dimensions.height} 
        />
        {/* Subtle overlay for text readability assurance */}
        <div className="absolute inset-0 bg-shadow/20 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Transparent, Left Aligned Card */}
        <div className="w-full text-left">
          
          <div className="max-w-4xl mr-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight drop-shadow-md">
              {t('hero', 'title')}
            </h1>
            
            <div className="space-y-6 text-lg text-white/90 leading-relaxed font-serif text-left drop-shadow-sm">
              <p>{t('hero', 'p1')}</p>
              <p>{t('hero', 'p2')}</p>
              <p>{t('hero', 'p3')}</p>
              <p>{t('hero', 'p4')}</p>
            </div>

            <div className="mt-10 mb-8 flex justify-start">
                <button className="bg-oxblood text-white px-10 py-3 rounded-full font-serif font-medium text-lg hover:bg-opacity-90 transition-all shadow-md border border-white/20">
                    {t('hero', 'cta')}
                </button>
            </div>

            {/* Minimal Dropdown - Left Aligned */}
            <div className="border-t border-white/20 pt-6 mt-6">
                <button 
                    onClick={() => setIsValuesOpen(!isValuesOpen)}
                    className="w-full flex items-center justify-between py-2 text-white hover:text-honey transition-colors focus:outline-none max-w-md mr-auto"
                >
                    <span className="font-serif font-bold text-xl">{t('values', 'title')}</span>
                    {isValuesOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isValuesOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mr-auto">
                    {VALUES_LIST.map((value) => (
                        <div key={value.key} className="flex items-center text-white/90 py-2 justify-start">
                            <span className="mr-2 text-xl">{value.icon}</span>
                            <span className="text-base font-serif">
                            {t('values', value.key)}
                            </span>
                        </div>
                    ))}
                </div>
                </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;