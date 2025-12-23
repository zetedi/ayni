import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Wisdom Journal',
    price: 25.00,
    image: 'https://picsum.photos/400/400?random=1',
  }
];

const Shop: React.FC = () => {
  const { t } = useLanguage();

  const buttonStyle = "w-full py-2 md:py-3 px-3 md:px-4 bg-[#263238] border border-honey rounded-full text-white font-medium shadow-lg backdrop-blur-sm hover:bg-[#263238]/90 transition-all flex items-center justify-center gap-2 text-xs md:text-base";

  return (
    <div className="min-h-screen relative pt-28 md:pt-32 pb-12 md:pb-24 bg-shadow px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Single Card Container */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="p-6 md:p-12 text-center bg-white/50">
                <h1 className="text-xl md:text-4xl font-serif font-bold text-shadow mb-3 md:mb-6">{t('shop', 'title')}</h1>
                <p className="text-sm md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                    {t('shop', 'subtitle')}
                </p>
            </div>

            <hr className="border-gray-200" />

            {/* Product Grid */}
            <div className="p-5 md:p-8 lg:p-12 bg-gray-50/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-center">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:col-start-1 lg:col-start-2 border border-gray-100">
                    <div className="relative h-48 md:h-64 overflow-hidden group">
                        <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm text-honey">
                            <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                        </div>
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base md:text-xl font-serif font-semibold text-shadow">{product.name}</h3>
                        <span className="text-oxblood font-bold text-sm md:text-base">${product.price.toFixed(2)}</span>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6 flex-1">
                        {t('shop', 'productDesc')}
                        </p>
                        <button className={buttonStyle}>
                        <ShoppingBag className="w-3 h-3 md:w-4 md:h-4" />
                        {t('shop', 'addToCart')}
                        </button>
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

export default Shop;