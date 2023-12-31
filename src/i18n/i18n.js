import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationVI from './locales/vi.json';

// Hàm để lấy ngôn ngữ hiện tại từ localStorage
const getCurrentLanguage = () => {
  return localStorage.getItem('language') || 'vi'; // 'vi' là ngôn ngữ mặc định
};

const defaultLanguage = getCurrentLanguage()
// the translations
const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: defaultLanguage,
    lng: defaultLanguage,
    debug: true,
    react: {
      wait: true,
    },
  });

export default i18n;