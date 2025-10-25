
import React, { useState, useRef, useEffect, useCallback, createContext } from 'react';
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

export type Theme = 'light' | 'dark';
export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: 'dark',
  toggleTheme: () => {},
});

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('dark');

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
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        <div className="bg-white text-gray-800 dark:bg-black dark:text-white selection:bg-yellow-500 selection:text-black transition-colors duration-300">
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
    </ThemeContext.Provider>
  );
};

export default App;
