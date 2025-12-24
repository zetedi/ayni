import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Wifi, Coffee, Bath, Wind, BedDouble } from 'lucide-react';

const Stay: React.FC = () => {
  const { t } = useLanguage();

  const rooms = [
    {
      title: t('stay', 'types.suite.title'),
      description: t('stay', 'types.suite.desc'),
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop",
      features: [
        { icon: <BedDouble className="w-4 h-4 text-honey" />, text: t('stay', 'features.beds') },
        { icon: <Bath className="w-4 h-4 text-honey" />, text: t('stay', 'features.bath') },
        { icon: <Coffee className="w-4 h-4 text-honey" />, text: t('stay', 'features.kitchen') },
        { icon: <Wind className="w-4 h-4 text-honey" />, text: t('stay', 'features.balcony') },
        { icon: <Wifi className="w-4 h-4 text-honey" />, text: t('stay', 'features.wifi') },
      ]
    },
    {
      title: t('stay', 'types.deluxe.title'),
      description: t('stay', 'types.deluxe.desc'),
      image: "https://images.unsplash.com/photo-1616594039964-40891a91395b?q=80&w=2670&auto=format&fit=crop",
      features: [
        { icon: <BedDouble className="w-4 h-4 text-honey" />, text: t('stay', 'features.beds') },
        { icon: <Bath className="w-4 h-4 text-honey" />, text: t('stay', 'features.bath') },
        { icon: <Coffee className="w-4 h-4 text-honey" />, text: t('stay', 'features.kitchen') },
        { icon: <Wifi className="w-4 h-4 text-honey" />, text: t('stay', 'features.wifi') },
      ]
    },
    {
      title: t('stay', 'types.bungalow.title'),
      description: t('stay', 'types.bungalow.desc'),
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop",
      features: [
        { icon: <BedDouble className="w-4 h-4 text-honey" />, text: t('stay', 'features.beds') },
        { icon: <Bath className="w-4 h-4 text-honey" />, text: t('stay', 'features.bath') },
        { icon: <Wifi className="w-4 h-4 text-honey" />, text: t('stay', 'features.wifi') },
      ]
    }
  ];

  return (
    <div 
      className="min-h-screen bg-shadow relative"
    >
       {/* Background Opacity Overlay - subtle texture to break up the solid color */}
       <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 pt-28 md:pt-32 pb-12 md:pb-24 px-4 sm:px-6 lg:px-8">
        
         {/* Single Main Card Container */}
         <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Header Section */}
            <div className="p-6 md:p-12 text-center bg-white/50">
                <h1 className="text-xl md:text-4xl font-serif font-bold text-shadow mb-3 md:mb-6">{t('stay', 'title')}</h1>
                <p className="text-sm md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                {t('stay', 'subtitle')}
                </p>
            </div>

            <hr className="border-gray-200" />

            {/* Featured Section: The Lounge */}
            <div className="p-5 md:p-8 lg:p-12">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-honey/90 text-[#263238] flex flex-col-reverse md:grid md:grid-cols-2">
                    <div className="p-6 md:p-10 flex flex-col justify-center">
                        <div className="mb-4 self-start">
                          <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-[#263238] border border-white/20 backdrop-blur-sm shadow-md">
                            <span className="uppercase tracking-widest text-white text-[10px] md:text-xs font-bold">
                              {t('stay', 'loungeTag')}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-lg md:text-3xl font-serif font-bold mb-3 md:mb-4 text-[#263238]">{t('stay', 'loungeTitle')}</h2>
                        <div className="space-y-3 md:space-y-4 text-[#263238]/90 mb-5 md:mb-8 leading-relaxed font-medium text-xs md:text-base">
                            <p>{t('stay', 'loungeText')}</p>
                        </div>
                    </div>
                    {/* Placeholder for lounge image */}
                    <div className="h-32 md:h-full min-h-[150px] md:min-h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop')" }}>
                    </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Rooms Grid */}
            <div className="p-5 md:p-8 lg:p-12 bg-gray-50/50">
                <div className="text-center mb-6 md:mb-10">
                    <h2 className="text-lg md:text-3xl font-serif font-bold text-shadow mb-2 md:mb-4">{t('stay', 'roomsTitle')}</h2>
                    <p className="text-gray-600 font-medium max-w-2xl mx-auto text-xs md:text-base">{t('stay', 'roomsSubtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {rooms.map((room, index) => (
                        <div key={index} className="flex flex-col rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group shadow-sm overflow-hidden">
                             <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }}></div>
                             
                             <div className="p-4 md:p-6 flex-1 flex flex-col">
                                <h3 className="text-base md:text-xl font-bold text-shadow mb-2 md:mb-3 font-serif">{room.title}</h3>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                                    {room.description}
                                </p>
                                <div className="mt-auto space-y-2">
                                    {room.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                                            {feature.icon}
                                            <span>{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Stay;