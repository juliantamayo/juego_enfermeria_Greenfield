import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-react-native-language-detector';

import enCommon from './translations/en/common.json';
import enSettings from './translations/en/settings.json';
import enCasesShared from './translations/en/cases/shared.json';
import enCase1 from './translations/en/cases/case1.json';
import esCommon from './translations/es/common.json';
import esSettings from './translations/es/settings.json';
import esCasesShared from './translations/es/cases/shared.json';
import esCase1 from './translations/es/cases/case1.json';

const en = {
  ...enCommon,
  ...enSettings,
  ...enCase1,
  cases: {
    ...enCasesShared.cases,
  },
};

const es = {
  ...esCommon,
  ...esSettings,
  ...esCase1,
  cases: {
    ...esCasesShared.cases,
  },
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
