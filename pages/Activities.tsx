import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Handshake, Heart, Sprout, Users, Mountain, Droplets, Layers, Footprints, Star, MapPin } from 'lucide-react';

const Activities: React.FC = () => {
  const { t } = useLanguage();

  const collaborationTypes = [
    {
      icon: <Users className="w-8 h-8 text-turf" />,
      title: t('activities', 'types.outreach.title'),
      description: t('activities', 'types.outreach.desc')
    },
    {
      icon: <Sprout className="w-8 h-8 text-chartreuse" />,
      title: t('activities', 'types.sustainable.title'),
      description: t('activities', 'types.sustainable.desc')
    },
    {
      icon: <Handshake className="w-8 h-8 text-honey" />,
      title: t('activities', 'types.partnerships.title'),
      description: t('activities', 'types.partnerships.desc')
    },
    {
      icon: <Heart className="w-8 h-8 text-oxblood" />,
      title: t('activities', 'types.volunteer.title'),
      description: t('activities', 'types.volunteer.desc')
    }
  ];

  const excursions = [
    {
      icon: <Mountain className="w-8 h-8 text-honey" />,
      title: t('activities', 'items.pitusiray.title'),
      description: t('activities', 'items.pitusiray.desc')
    },
    {
      icon: <Droplets className="w-8 h-8 text-chartreuse" />,
      title: t('activities', 'items.urco.title'),
      description: t('activities', 'items.urco.desc')
    },
    {
      icon: <Layers className="w-8 h-8 text-oxblood" />,
      title: t('activities', 'items.chinchero.title'),
      description: t('activities', 'items.chinchero.desc')
    },
    {
      icon: <Footprints className="w-8 h-8 text-turf" />,
      title: t('activities', 'items.huchuy.title'),
      description: t('activities', 'items.huchuy.desc')
    },
    {
      icon: <Star className="w-8 h-8 text-honey" />,
      title: t('activities', 'items.pisac.title'),
      description: t('activities', 'items.pisac.desc')
    },
    {
      icon: <MapPin className="w-8 h-8 text-shadow" />,
      title: t('activities', 'items.ollantaytambo.title'),
      description: t('activities', 'items.ollantaytambo.desc')
    }
  ];

  const buttonStyle = "px-6 py-3 bg-[#263238] border border-honey rounded-full text-white font-medium shadow-lg backdrop-blur-sm hover:bg-[#263238]/90 transition-all";

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/harmony.jpg')" }}
    >
       {/* Background Opacity Overlay */}
       <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        
         {/* Single Main Card Container */}
         <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Header Section */}
            <div className="p-12 text-center bg-white/50">
                <h1 className="text-4xl font-serif font-bold text-shadow mb-6">{t('activities', 'title')}</h1>
                <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                {t('activities', 'subtitle')}
                </p>
            </div>

            <hr className="border-gray-200" />

            {/* Featured Activity */}
            <div className="p-8 lg:p-12">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-turf/90 text-white grid md:grid-cols-2">
                    <div className="p-10 flex flex-col justify-center">
                        <div className="mb-4 self-start">
                          <div className="inline-block px-4 py-2 rounded-full bg-[#263238] border border-honey backdrop-blur-sm shadow-md">
                            <span className="uppercase tracking-widest text-honey text-xs font-bold">
                              {t('activities', 'featured.tag')}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4 text-white">{t('activities', 'featured.title')}</h2>
                        <p className="text-white/90 mb-8 leading-relaxed">
                            {t('activities', 'featured.desc')}
                        </p>
                        <button className={buttonStyle + " self-start"}>
                            {t('activities', 'featured.btn')}
                        </button>
                    </div>
                    <div className="h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: "url('/rainbow.jpg')" }}></div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Collaboration Grid */}
            <div className="p-8 lg:p-12 bg-gray-50/50">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif font-bold text-shadow mb-4">{t('activities', 'collabTitle')}</h2>
                    <p className="text-gray-600 font-medium max-w-2xl mx-auto">{t('activities', 'collabText')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {collaborationTypes.map((collab, index) => (
                        <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-turf/50 hover:shadow-lg transition-all duration-300 bg-white group shadow-sm">
                            <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-turf/10 transition-colors">
                                {collab.icon}
                            </div>
                            <h3 className="text-xl font-bold text-shadow mb-2">{collab.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {collab.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Sacred Sites & Excursions Grid */}
            <div className="p-8 lg:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif font-bold text-shadow mb-4">{t('activities', 'excursionsTitle')}</h2>
                    <p className="text-gray-600 font-medium max-w-2xl mx-auto">{t('activities', 'excursionsSubtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {excursions.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white group shadow-sm">
                             <div className="mb-4 bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-shadow mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
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

export default Activities;