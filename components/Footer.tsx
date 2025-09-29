
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer: React.FC = () => {
    const { t } = useContext(LanguageContext);
    
    return (
        <footer className="bg-gray-900 border-t border-yellow-500/20">
            <div className="container mx-auto py-6 px-4 text-center text-gray-400">
                <p>{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
