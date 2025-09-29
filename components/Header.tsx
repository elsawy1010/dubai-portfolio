
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import type { Language } from '../constants/translations';

interface HeaderProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const { language, setLanguage, t } = useContext(LanguageContext);

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
    <header className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-lg shadow-lg shadow-yellow-500/10">
      <div className="container mx-auto flex items-center justify-between p-4 text-white">
        <h1 className="text-xl md:text-2xl font-bold tracking-wider text-yellow-400">
          {language === 'ar' ? 'دبي للتوريدات والتصدير' : 'Dubai Supplies'}
        </h1>
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleScroll(link.ref)}
              className="font-semibold text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button
          onClick={toggleLanguage}
          className="font-bold border-2 border-orange-500 hover:bg-orange-500 text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          {t('header.language')}
        </button>
      </div>
    </header>
  );
};

export default Header;
