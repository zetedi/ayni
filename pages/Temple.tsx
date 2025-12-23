import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Temple: React.FC = () => {
  const { t } = useLanguage();

  // Using Picsum as placeholder for fractal images as per request for "fractal images"
  const offerings = [
    {
      image: "https://picsum.photos/seed/fractal1/100/100",
      title: t('temple', 'offerings.ceremonies.title'),
      description: t('temple', 'offerings.ceremonies.desc')
    },
    {
      image: "https://picsum.photos/seed/fractal2/100/100",
      title: t('temple', 'offerings.meditation.title'),
      description: t('temple', 'offerings.meditation.desc')
    },
    {
      image: "https://picsum.photos/seed/fractal3/100/100",
      title: t('temple', 'offerings.workshops.title'),
      description: t('temple', 'offerings.workshops.desc')
    },
    {
      image: "https://picsum.photos/seed/fractal4/100/100",
      title: t('temple', 'offerings.healing.title'),
      description: t('temple', 'offerings.healing.desc')
    }
  ];

  const buttonStyle = "px-6 py-3 bg-[#263238] border border-honey rounded-full text-white font-medium shadow-lg backdrop-blur-sm hover:bg-[#263238]/90 transition-all";

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/temple.jpg')" }}
    >
       {/* Background Opacity Overlay */}
       <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        
        {/* Single Main Card Container */}
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Header Section */}
            <div className="p-12 text-center bg-white/50">
                <h1 className="text-4xl font-serif font-bold text-shadow mb-4">{t('temple', 'title')}</h1>
                <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                    {t('temple', 'subtitle')}
                </p>
            </div>

            <hr className="border-gray-200" />

            {/* Featured Section */}
            <div className="p-8 lg:p-12">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-shadow text-white grid md:grid-cols-2">
                    <div className="p-10 flex flex-col justify-center">
                        <div className="mb-4 self-start">
                          <div className="inline-block px-4 py-2 rounded-full bg-[#263238] border border-honey backdrop-blur-sm shadow-md">
                            <span className="uppercase tracking-widest text-honey text-xs font-bold">
                                {t('temple', 'featured.tag')}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4 text-white">{t('temple', 'featured.title')}</h2>
                        <p className="text-white/90 mb-8 leading-relaxed">
                            {t('temple', 'featured.desc')}
                        </p>
                        <button className={buttonStyle + " self-start"}>
                            {t('temple', 'featured.btn')}
                        </button>
                    </div>
                    <div className="h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: "url('/temple.jpg')" }}>
                        <div className="w-full h-full bg-black/20"></div>
                    </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Offerings Grid */}
            <div className="p-8 lg:p-12 bg-gray-50/50">
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offerings.map((item, index) => (
                        <div key={index} className="p-6 rounded-xl border border-white/5 shadow-xl transition-all duration-300 bg-[#263238] hover:translate-y-[-4px] group">
                            <div className="mb-6 flex justify-center">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-honey/30 shadow-lg group-hover:border-honey transition-colors">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                {item.description}
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

export default Temple;