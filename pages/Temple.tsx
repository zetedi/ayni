import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Moon, Sun, Flower } from 'lucide-react';

const Temple: React.FC = () => {
  const { t } = useLanguage();

  const offerings = [
    {
      icon: <Sun className="w-8 h-8 text-honey" />,
      title: t('temple', 'offerings.ceremonies.title'),
      description: t('temple', 'offerings.ceremonies.desc')
    },
    {
      icon: <Moon className="w-8 h-8 text-chartreuse" />,
      title: t('temple', 'offerings.meditation.title'),
      description: t('temple', 'offerings.meditation.desc')
    },
    {
      icon: <Sparkles className="w-8 h-8 text-oxblood" />,
      title: t('temple', 'offerings.workshops.title'),
      description: t('temple', 'offerings.workshops.desc')
    },
    {
      icon: <Flower className="w-8 h-8 text-turf" />,
      title: t('temple', 'offerings.healing.title'),
      description: t('temple', 'offerings.healing.desc')
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/temple.jpg')" }}
    >
       {/* Background Opacity Overlay */}
       <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="relative pt-32 pb-16 px-4">
          <div className="relative max-w-4xl mx-auto text-center z-10 bg-black/40 p-8 rounded-3xl backdrop-blur-sm">
            <h1 className="text-4xl font-serif font-bold text-white mb-6 drop-shadow-lg">{t('temple', 'title')}</h1>
            <p className="text-xl text-white font-medium drop-shadow-md">
              {t('temple', 'subtitle')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
          
          {/* Featured Section */}
          <div className="mb-20 rounded-2xl overflow-hidden shadow-2xl bg-shadow/90 backdrop-blur-sm text-white grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                  <div className="uppercase tracking-widest text-honey text-sm font-bold mb-2">{t('temple', 'featured.tag')}</div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-white">{t('temple', 'featured.title')}</h2>
                  <p className="text-white/90 mb-8 leading-relaxed">
                      {t('temple', 'featured.desc')}
                  </p>
                  <button className="self-start px-6 py-3 border border-white rounded-full hover:bg-white hover:text-shadow transition-colors">
                      {t('temple', 'featured.btn')}
                  </button>
              </div>
              <div className="h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: "url('/temple-inner.jpg')" }}>
                  {/* Placeholder for inner temple image, fallback to color if not available */}
                  <div className="w-full h-full bg-black/20"></div>
              </div>
          </div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((item, index) => (
                  <div key={index} className="p-6 rounded-xl border border-white/20 hover:border-honey/50 hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm group shadow-xl">
                      <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-honey/10 transition-colors">
                          {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-shadow mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                      </p>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temple;