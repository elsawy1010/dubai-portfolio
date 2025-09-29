
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const AboutUs: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-start">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.paragraph2')}
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Fresh produce market" 
              className="rounded-lg shadow-2xl shadow-orange-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
