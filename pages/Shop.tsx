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

  return (
    <div className="min-h-screen relative pt-32 pb-12 bg-shadow">
      
      {/* Header matching Activities page */}
      <div className="relative px-4 mb-12">
        <div className="relative max-w-4xl mx-auto text-center z-10 bg-black/40 p-8 rounded-3xl backdrop-blur-sm">
          <h1 className="text-4xl font-serif font-bold text-white mb-6 drop-shadow-lg">{t('shop', 'title')}</h1>
          <p className="text-xl text-white font-medium drop-shadow-md">
            {t('shop', 'subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {products.map((product) => (
            <div key={product.id} className="bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:col-start-1 lg:col-start-2">
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm text-honey">
                    <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-xl font-serif font-semibold text-shadow">{product.name}</h3>
                   <span className="text-oxblood font-bold">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 flex-1">
                  {t('shop', 'productDesc')}
                </p>
                <button className="w-full bg-shadow text-white py-3 px-4 rounded-md hover:bg-turf flex items-center justify-center gap-2 transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                  {t('shop', 'addToCart')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;