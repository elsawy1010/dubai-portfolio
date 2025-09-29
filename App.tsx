
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { translations, Language, TranslationKey } from './constants/translations';

export const LanguageContext = React.createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}>({
  language: 'ar',
  setLanguage: () => {},
  t: () => '',
});

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    products: productsRef,
    services: servicesRef,
    contact: contactRef,
  };

  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
       document.body.style.fontFamily = "'Montserrat', sans-serif";
    }
  }, [language]);

  const t = useCallback((key: TranslationKey): string => {
      const keys = key.split('.');
      let result: any = translations[language];
      for (const k of keys) {
          result = result?.[k];
          if (result === undefined) {
              // Fallback to English if translation is missing
              let fallbackResult: any = translations.en;
              for (const fk of keys) {
                fallbackResult = fallbackResult?.[fk];
              }
              return fallbackResult || key;
          }
      }
      return result || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="bg-black text-white selection:bg-yellow-500 selection:text-black">
        <Header sectionRefs={sectionRefs} />
        <main>
          <div ref={homeRef}>
            <HeroSlider />
          </div>
          <div ref={aboutRef}>
            <AboutUs />
          </div>
          <div ref={productsRef}>
            <OurProducts />
          </div>
           <div ref={servicesRef}>
            <Services />
          </div>
          <div ref={contactRef}>
            <ContactUs />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
