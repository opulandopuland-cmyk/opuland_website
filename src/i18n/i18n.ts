import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ckb from "./ckb.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ckb: { translation: ckb },
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "ckb"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
