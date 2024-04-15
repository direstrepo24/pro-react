import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import transEN from './assets/i18n/en.json';
import transES from './assets/i18n/es.json';
const resources ={
  en:{
    translation: transEN
  },
  es:{
    translation: transES
  }
}
i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources: resources,
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    },
  });
export default i18n;