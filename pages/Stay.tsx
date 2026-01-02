import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Wifi, Coffee, Bath, Wind, BedDouble, ChevronLeft, ChevronRight } from 'lucide-react';

interface Room {
    title: string;
    description: string;
    images: string[];
    features: { icon: React.ReactNode; text: string }[];
}

const RoomCard: React.FC<{ room: Room }> = ({ room }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (room.images.length <= 1) return;
        setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (room.images.length <= 1) return;
        setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
    };

    return (
        <div className="flex flex-col rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group shadow-sm overflow-hidden">
             <div className="h-48 relative group/image">
                 <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-500" 
                    style={{ backgroundImage: `url(${room.images[currentImageIndex]})` }}
                 ></div>
                 
                 {room.images.length > 1 && (
                     <>
                        <button 
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity backdrop-blur-sm"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity backdrop-blur-sm"
                             aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                     </>
                 )}
                 
                 {/* Pagination dots - Always visible to indicate carousel structure */}
                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {room.images.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`w-1.5 h-1.5 rounded-full shadow-sm transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                 </div>
             </div>
             
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
    );
};

const Stay: React.FC = () => {
  const { t } = useLanguage();

  const rooms: Room[] = [
    {
      title: t('stay', 'types.suite.title'),
      description: t('stay', 'types.suite.desc'),
      images: ["/miel.jpg", "/inside.jpg", "/towel.jpg", "/bathroom.jpg"],
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
      images: ["/deluxe.jpg"],
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
      images: ["/bungalow.jpg"],
      features: [
        { icon: <BedDouble className="w-4 h-4 text-honey" />, text: t('stay', 'features.beds') },
        { icon: <Bath className="w-4 h-4 text-honey" />, text: t('stay', 'features.bath') },
        { icon: <Wifi className="w-4 h-4 text-honey" />, text: t('stay', 'features.wifi') },
      ]
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/stay.jpg')" }}
    >
       {/* Background Opacity Overlay - subtle texture to break up the solid color */}
       <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

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
                    {/* Lounge image */}
                    <div className="h-32 md:h-full min-h-[150px] md:min-h-auto bg-cover bg-center" style={{ backgroundImage: "url('/lounge.jpg')" }}>
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
                        <RoomCard key={index} room={room} />
                    ))}
                </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Stay;