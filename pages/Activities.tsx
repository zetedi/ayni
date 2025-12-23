import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Handshake, Heart, Sprout, Users } from 'lucide-react';

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

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/harmony.jpg')" }}
    >
       {/* Background Opacity Overlay */}
       <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="relative pt-32 pb-16 px-4">
          <div className="relative max-w-4xl mx-auto text-center z-10 bg-black/40 p-8 rounded-3xl backdrop-blur-sm">
            <h1 className="text-4xl font-serif font-bold text-white mb-6 drop-shadow-lg">{t('activities', 'title')}</h1>
            <p className="text-xl text-white font-medium drop-shadow-md">
              {t('activities', 'subtitle')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
          
          {/* Featured Activity */}
          <div className="mb-20 rounded-2xl overflow-hidden shadow-2xl bg-turf/90 backdrop-blur-sm text-white grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                  <div className="uppercase tracking-widest text-chartreuse text-sm font-bold mb-2">{t('activities', 'featured.tag')}</div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-white">{t('activities', 'featured.title')}</h2>
                  <p className="text-white/90 mb-8 leading-relaxed">
                      {t('activities', 'featured.desc')}
                  </p>
                  <button className="self-start px-6 py-3 border border-white rounded-full hover:bg-white hover:text-turf transition-colors">
                      {t('activities', 'featured.btn')}
                  </button>
              </div>
              <div className="h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: "url('/rainbow.jpg')" }}></div>
          </div>

          {/* Collaboration Grid */}
          <div className="text-center mb-12 bg-black/40 py-8 rounded-2xl backdrop-blur-sm">
              <h2 className="text-3xl font-serif font-bold text-white mb-4 drop-shadow-lg">{t('activities', 'collabTitle')}</h2>
              <p className="text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">{t('activities', 'collabText')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collaborationTypes.map((collab, index) => (
                  <div key={index} className="p-6 rounded-xl border border-white/20 hover:border-turf/50 hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm group shadow-xl">
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
      </div>
    </div>
  );
};

export default Activities;