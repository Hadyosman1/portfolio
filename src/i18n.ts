import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import en from './locales/en/common.json';
import ar from './locales/ar/common.json';

i18n.use(initReactI18next).init({
  resources: { en: { common: en }, ar: { common: ar } },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'ar'],
  interpolation: { escapeValue: false },
  ns: ['common'],
  defaultNS: 'common',
  debug: process.env.NODE_ENV === 'development',
  detection: {
    order: ['cookie', 'localStorage', 'navigator'],
    caches: ['cookie']
  }
});

export default i18n;
