import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Flower, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const Profile: React.FC = () => {
  const { t } = useLanguage();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundImage: "url('/seeds.jpg')" }}
    >
      <div className="absolute inset-0 bg-shadow/30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Combined Single Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
            
            {/* Top Section: Cover & Header */}
            <div className="relative">
                <div className="h-32 bg-honey w-full"></div>
                
                <div className="px-8 pb-8">
                    {/* Name above Avatar */}
                    <div className="relative -mt-20 mb-4 flex flex-col items-center sm:items-start">
                         <div className="mb-4 px-6 py-2 rounded-full bg-[#263238] backdrop-blur-sm shadow-lg border border-honey z-10">
                            <h2 className="text-3xl font-bold text-white text-center">Who Am I</h2>
                         </div>

                        <div className="w-32 h-32 bg-white p-1 rounded-full shadow-lg z-10 relative">
                            <img 
                                src="/seeds.jpg" 
                                alt="Profile" 
                                className="w-full h-full rounded-full object-cover" 
                            />
                        </div>
                        
                         <div className="mt-2 ml-2 flex flex-col items-center sm:items-start">
                             <p className="text-sm text-gray-600 font-medium">{t('profile', 'since')} 2023</p>
                             
                             {/* Mobile Edit Button - Visible only on mobile to prevent overlap */}
                             <button className="mt-4 sm:hidden bg-[#263238] text-white px-6 py-2 rounded-full border border-honey shadow-lg backdrop-blur-sm text-sm font-medium hover:bg-[#263238]/90 transition-colors">
                                {t('profile', 'edit')}
                            </button>
                         </div>
                    </div>
                    
                    {/* Desktop Edit Button - Hidden on mobile */}
                    <div className="absolute top-4 right-4 hidden sm:block">
                        <button className="bg-[#263238] text-white px-6 py-2 rounded-full border border-honey shadow-lg backdrop-blur-sm text-sm font-medium hover:bg-[#263238]/90 transition-colors">
                            {t('profile', 'edit')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-200" />

            {/* Stats Section */}
            <div className="px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
                        <Shield className="w-8 h-8 text-honey" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{t('profile', 'membership')}</p>
                            <p className="font-semibold text-shadow">{t('profile', 'active')}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
                        <Flower className="w-8 h-8 text-oxblood" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{t('profile', 'favoritePlant')}</p>
                            <p className="font-semibold text-shadow">Wachuma</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100">
                        <Clock className="w-8 h-8 text-turf" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{t('profile', 'hours')}</p>
                            <p className="font-semibold text-shadow">42</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-200" />

            {/* History Section */}
            <div className="px-8 py-8">
                <button 
                    onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                    className="w-full flex items-center justify-between focus:outline-none group"
                >
                    <h3 className="text-xl font-bold text-shadow group-hover:text-oxblood transition-colors">{t('profile', 'history')}</h3>
                    {isHistoryOpen ? <ChevronUp className="w-6 h-6 text-gray-600" /> : <ChevronDown className="w-6 h-6 text-gray-600" />}
                </button>
                
                {isHistoryOpen && (
                    <div className="space-y-4 mt-6 animate-fade-in">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-turf/10 text-turf flex items-center justify-center font-bold">
                                        $
                                    </div>
                                    <div>
                                        <p className="font-medium text-shadow">{t('profile', 'contribution')}</p>
                                        <p className="text-sm text-gray-500">Oct {10 + i}, 2023</p>
                                    </div>
                                </div>
                                <span className="font-bold text-shadow">$50.00</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;