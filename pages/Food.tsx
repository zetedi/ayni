import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Utensils, Leaf, Heart, Users } from 'lucide-react';

const Food: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-turf" />,
      title: t('food', 'features.local.title'),
      description: t('food', 'features.local.desc')
    },
    {
      icon: <Utensils className="w-8 h-8 text-honey" />,
      title: t('food', 'features.dietary.title'),
      description: t('food', 'features.dietary.desc')
    },
    {
      icon: <Heart className="w-8 h-8 text-oxblood" />,
      title: t('food', 'features.intention.title'),
      description: t('food', 'features.intention.desc')
    },
    {
      icon: <Users className="w-8 h-8 text-chartreuse" />,
      title: t('food', 'features.community.title'),
      description: t('food', 'features.community.desc')
    }
  ];

  const buttonStyle = "px-6 py-3 bg-[#263238] border border-honey rounded-full text-white font-medium shadow-lg backdrop-blur-sm hover:bg-[#263238]/90 transition-all";

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543362906-ac1b482635e3?q=80&w=2070&auto=format&fit=crop')" }}
    >
       {/* Background Opacity Overlay */}
       <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        
         {/* Single Main Card Container */}
         <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Header Section */}
            <div className="p-12 text-center bg-white/50">
                <h1 className="text-4xl font-serif font-bold text-shadow mb-6">{t('food', 'title')}</h1>
                <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                {t('food', 'subtitle')}
                </p>
            </div>

            <hr className="border-gray-200" />

            {/* Featured Food Section */}
            <div className="p-8 lg:p-12">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-honey/90 text-[#263238] grid md:grid-cols-2">
                    <div className="p-10 flex flex-col justify-center">
                        <div className="mb-4 self-start">
                          <div className="inline-block px-4 py-2 rounded-full bg-[#263238] border border-white/20 backdrop-blur-sm shadow-md">
                            <span className="uppercase tracking-widest text-white text-xs font-bold">
                              {t('food', 'featured.tag')}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4 text-[#263238]">{t('food', 'featured.title')}</h2>
                        <div className="space-y-4 text-[#263238]/90 mb-8 leading-relaxed font-medium">
                            <p>{t('food', 'featured.p1')}</p>
                            <p>{t('food', 'featured.p2')}</p>
                        </div>
                        <button className="px-6 py-3 bg-[#263238] text-white border border-white/20 rounded-full font-medium shadow-lg backdrop-blur-sm hover:bg-[#263238]/90 transition-all self-start">
                            {t('food', 'featured.btn')}
                        </button>
                    </div>
                    {/* Placeholder for food image */}
                    <div className="h-full min-h-[300px] md:min-h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2574&auto=format&fit=crop')" }}>
                    </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Features Grid */}
            <div className="p-8 lg:p-12 bg-gray-50/50">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-honey/50 hover:shadow-lg transition-all duration-300 bg-white group shadow-sm">
                            <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-honey/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-shadow mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
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

export default Food;