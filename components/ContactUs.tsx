
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

const ContactUs: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setStatus('loading');
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus(t('contact.success'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(t('contact.error'));
      }
       setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500 dark:text-yellow-400">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-yellow-500/20 transition-colors duration-300">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 dark:text-white font-bold mb-2">{t('contact.name')}</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 dark:text-white font-bold mb-2">{t('contact.email')}</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-white font-bold mb-2">{t('contact.message')}</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 shadow-lg"
              >
                {t('contact.send')}
              </button>
            </div>
            {status && (
              <p className="mt-4 text-center text-yellow-600 dark:text-yellow-400">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
