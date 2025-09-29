
import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../App';

const slides = [
  {
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Assortment of fresh berries"
  },
  {
    image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Fresh vegetables on a wooden table"
  },
  {
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Colorful citrus fruits"
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      ))}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-4xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg mb-4 animate-fade-in-down">
          {t('hero.title')}
        </h2>
        <p className="text-lg md:text-2xl max-w-3xl mb-8 animate-fade-in-up">
          {t('hero.subtitle')}
        </p>
        <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 shadow-lg animate-fade-in-up">
          {t('hero.button')}
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
