import i18n, { Resource } from "i18next";

import translationEN from "../locales/en";
import translationFR from "../locales/fr";

import { initReactI18next } from "react-i18next";

const resources: Resource = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
