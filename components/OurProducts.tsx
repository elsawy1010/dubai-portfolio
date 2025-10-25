
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const products = [
  { name: 'Tomatoes', name_ar: 'طماطم', img: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Apples', name_ar: 'تفاح', img: 'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Oranges', name_ar: 'برتقال', img: 'https://images.pexels.com/photos/161559/tomatoes-vegetables-fruit-fresh-161559.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Grapes', name_ar: 'عنب', img: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Broccoli', name_ar: 'بروكلي', img: 'https://images.pexels.com/photos/47344/carrots-vegetable-food-bio-47344.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Bell Peppers', name_ar: 'فلفل حلو', img: 'https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=600' }
];

const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img src={product.img} alt={product.name} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <h3 className="absolute bottom-4 start-4 text-2xl font-bold text-white">
        {language === 'ar' ? product.name_ar : product.name}
      </h3>
    </div>
  );
};

const OurProducts: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500 dark:text-yellow-400">
            {t('products.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
