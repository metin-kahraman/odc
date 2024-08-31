/** @type {import('next-i18next').NextI18NextConfig} */
const nextI18NextConfig = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'tr', 'ru', 'fr'],
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  };
  
  module.exports = nextI18NextConfig;
  