import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen relative flex items-start pt-32 md:pt-40 pb-12 md:pb-20 bg-black overflow-x-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 md:top-32 left-0 w-full h-full object-contain object-[center_73%] md:object-cover md:object-[center_60%]"
        >
          <source src="/puma.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Transparent, Left Aligned Card */}
        <div className="w-full text-left">
          
          <div className="max-w-4xl mr-auto">
            <h1 className="text-xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-md leading-tight">
              {t('hero', 'title')}
            </h1>

            {/* Dropdown Toggle */}
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-3 text-white/80 hover:text-honey transition-colors mb-6 group focus:outline-none"
            >
                <div className={`
                    p-2 rounded-full border border-honey bg-black/30 backdrop-blur-sm 
                    transition-all duration-500 transform 
                    ${isExpanded ? 'rotate-180 bg-honey/20' : 'rotate-0'}
                `}>
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-honey" />
                </div>
                <span className="font-serif italic text-base md:text-lg opacity-80 group-hover:opacity-100">
                    {t('hero', 'movement')}
                </span>
            </button>
            
            <div className={`
                overflow-hidden transition-all duration-700 ease-in-out
                ${isExpanded ? 'max-h-[1000px] opacity-100 mb-8' : 'max-h-0 opacity-0 mb-2'}
            `}>
                <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-white/90 leading-relaxed font-serif text-left drop-shadow-sm">
                  <p>{t('hero', 'p1')}</p>
                  <p>{t('hero', 'p2')}</p>
                  <p>{t('hero', 'p3')}</p>
                  <p>{t('hero', 'p4')}</p>
                </div>
            </div>

            <div className="flex justify-start">
                <button className="bg-honey text-shadow px-6 py-2 md:px-10 md:py-3 rounded-full font-serif font-black text-xs md:text-lg hover:bg-opacity-90 transition-all shadow-md border border-white/20 tracking-wide">
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