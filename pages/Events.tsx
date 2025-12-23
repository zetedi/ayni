import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Music, Mountain, Coffee, CloudMoon } from 'lucide-react';

const Events: React.FC = () => {
  const { t } = useLanguage();

  const zones = [
    {
      icon: <Music className="w-8 h-8 text-chartreuse" />,
      title: t('events', 'zones.condor.title'),
      description: t('events', 'zones.condor.desc')
    },
    {
      icon: <Mountain className="w-8 h-8 text-oxblood" />,
      title: t('events', 'zones.puma.title'),
      description: t('events', 'zones.puma.desc')
    },
    {
      icon: <Coffee className="w-8 h-8 text-honey" />,
      title: t('events', 'zones.ukhu.title'),
      description: t('events', 'zones.ukhu.desc')
    },
    {
      icon: <CloudMoon className="w-8 h-8 text-turf" />,
      title: t('events', 'zones.garden.title'),
      description: t('events', 'zones.garden.desc')
    }
  ];

  const buttonStyle = "px-6 py-3 bg-[#263238] border border-honey rounded-full text-white font-medium shadow-lg backdrop-blur-sm hover:bg-[#263238]/90 transition-all";

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/fire.jpg')" }} 
    >
       {/* Background Opacity Overlay */}
       <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        
         {/* Single Main Card Container */}
         <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Header Section */}
            <div className="p-12 text-center bg-white/50">
                <h1 className="text-4xl font-serif font-bold text-shadow mb-6">{t('events', 'title')}</h1>
                <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                {t('events', 'subtitle')}
                </p>
            </div>

            <hr className="border-gray-200" />

            {/* Featured Event: New Year's */}
            <div className="p-8 lg:p-12">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-shadow text-white grid md:grid-cols-2">
                    <div className="p-10 flex flex-col justify-center">
                        <div className="mb-4 self-start">
                          <div className="inline-block px-4 py-2 rounded-full bg-[#263238] border border-honey backdrop-blur-sm shadow-md">
                            <span className="uppercase tracking-widest text-honey text-xs font-bold">
                              {t('events', 'featured.tag')}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-2 text-white">{t('events', 'featured.title')}</h2>
                        <h3 className="text-lg text-honey mb-6 font-medium">{t('events', 'featured.subtitle')}</h3>
                        
                        <div className="space-y-4 text-white/90 mb-8 leading-relaxed text-sm">
                            <p>{t('events', 'featured.p1')}</p>
                            <p>{t('events', 'featured.p2')}</p>
                            <p className="font-bold italic text-honey/90">{t('events', 'featured.cta')}</p>
                        </div>
                        
                        <button className={buttonStyle + " self-start"}>
                            {t('events', 'featured.btn')}
                        </button>
                    </div>
                    {/* Placeholder for event image */}
                    <div className="h-full min-h-[300px] md:min-h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/dance/800/800')" }}>
                         <div className="w-full h-full bg-gradient-to-t from-shadow/80 to-transparent flex items-end p-8">
                         </div>
                    </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Zones Grid */}
            <div className="p-8 lg:p-12 bg-gray-50/50">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif font-bold text-shadow mb-4">{t('events', 'zonesTitle')}</h2>
                    <p className="text-gray-600 font-medium max-w-2xl mx-auto">{t('events', 'zonesText')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {zones.map((zone, index) => (
                        <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-turf/50 hover:shadow-lg transition-all duration-300 bg-white group shadow-sm">
                            <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-turf/10 transition-colors">
                                {zone.icon}
                            </div>
                            <h3 className="text-xl font-bold text-shadow mb-2">{zone.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {zone.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Events;