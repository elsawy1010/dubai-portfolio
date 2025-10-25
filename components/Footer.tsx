
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer: React.FC = () => {
    const { t } = useContext(LanguageContext);
    
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-yellow-500/20 transition-colors duration-300">
            <div className="container mx-auto py-6 px-4 text-center">
                <p className="text-gray-600 dark:text-gray-400">{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
