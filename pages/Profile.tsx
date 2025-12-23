import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, Shield, Award, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const Profile: React.FC = () => {
  const { t } = useLanguage();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundImage: "url('/seeds.jpg')" }}
    >
      <div className="absolute inset-0 bg-shadow/30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl font-serif font-bold text-white mb-8">{t('profile', 'title')}</h1>
        
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="h-32 bg-chartreuse"></div>
            <div className="px-8 pb-8">
                <div className="relative flex justify-between items-end -mt-12 mb-6">
                    <div className="flex items-end">
                        <div className="w-24 h-24 bg-white p-1 rounded-full shadow-lg z-10">
                            <img 
                                src="/seeds.jpg" 
                                alt="Profile" 
                                className="w-full h-full rounded-full object-cover" 
                            />
                        </div>
                        <div className="ml-4 mb-1 px-4 py-2 rounded-md bg-black/20 backdrop-blur-sm border border-white/10 shadow-sm">
                            <h2 className="text-2xl font-bold text-white text-shadow-sm">John Doe</h2>
                            <p className="text-sm text-white/90">Member since 2023</p>
                        </div>
                    </div>
                    <button className="bg-shadow text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-turf transition-colors shadow-md">
                        Edit Profile
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-3">
                        <Shield className="w-8 h-8 text-honey" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{t('profile', 'membership')}</p>
                            <p className="font-semibold text-shadow">{t('profile', 'active')}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Award className="w-8 h-8 text-oxblood" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Impact Score</p>
                            <p className="font-semibold text-shadow">Top 10%</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3">
                        <Clock className="w-8 h-8 text-turf" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Volunteer Hours</p>
                            <p className="font-semibold text-shadow">42 Hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm p-8">
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
                        <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-gray-100/50 border border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-turf/10 text-turf flex items-center justify-center font-bold">
                                    $
                                </div>
                                <div>
                                    <p className="font-medium text-shadow">Community Contribution</p>
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
  );
};

export default Profile;