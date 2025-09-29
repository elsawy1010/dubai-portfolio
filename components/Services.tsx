
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053.053a.5.5 0 010 .707l-3.5 3.5a.5.5 0 01-.707 0l-.053-.053a.5.5 0 010-.707l3.5-3.5a.5.5 0 01.707 0zM16.293 4.5l-.053.053a.5.5 0 000 .707l3.5 3.5a.5.5 0 00.707 0l.053-.053a.5.5 0 000-.707l-3.5-3.5a.5.5 0 00-.707 0zM12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);

const PlaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const PackageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7v10l8 4m0-14V3" />
    </svg>
);

const Services: React.FC = () => {
    const { t } = useContext(LanguageContext);

    const serviceItems = [
        {
            icon: <GlobeIcon />,
            title: t('services.sourcing.title'),
            description: t('services.sourcing.description'),
        },
        {
            icon: <PlaneIcon />,
            title: t('services.export.title'),
            description: t('services.export.description'),
        },
        {
            icon: <PackageIcon />,
            title: t('services.packaging.title'),
            description: t('services.packaging.description'),
        },
    ];

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-yellow-400">{t('services.title')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceItems.map((item, index) => (
                        <div key={index} className="bg-black p-8 rounded-lg shadow-lg border border-orange-500/20 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
