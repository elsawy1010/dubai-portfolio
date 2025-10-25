
import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import type { Language } from '../constants/translations';

interface HeaderProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  const navLinks = [
    { key: 'home', label: t('header.home'), ref: sectionRefs.home },
    { key: 'about', label: t('header.about'), ref: sectionRefs.about },
    { key: 'products', label: t('header.products'), ref: sectionRefs.products },
    { key: 'services', label: t('header.services'), ref: sectionRefs.services },
    { key: 'contact', label: t('header.contact'), ref: sectionRefs.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg dark:shadow-yellow-500/10 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl md:text-2xl font-bold tracking-wider text-yellow-500 dark:text-yellow-400">
          {language === 'ar' ? 'دبي للتوريدات والتصدير' : 'Dubai Supplies'}
        </h1>
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleScroll(link.ref)}
              className="font-semibold text-gray-700 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
           <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            onClick={toggleLanguage}
            className="font-bold border-2 border-orange-500 text-orange-500 dark:text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
          >
            {t('header.language')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
