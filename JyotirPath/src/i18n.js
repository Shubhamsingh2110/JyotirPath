import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "HOME",
      services: "SERVICES",
      remedies: "REMEDIES",
      astrological: "ASTROLOGICAL",
      aboutUs: "ABOUT US",
      contact: "CONTACT",
      astrology: "Astrology",
      palmistry: "Palmistry",
      numerology: "Numerology",
      marriage: "Marriage",
      progency: "Progency",
      education: "Education",
      career: "Career",
      muhurat: "Muhurat",
      gemstones: "Gemstones",
      gharShanti: "Ghar Shanti Pooja",
      hindi: "हिंदी",
      english: "English",
    },
  },
  hi: {
    translation: {
      home: "होम",
      services: "सेवाएं",
      remedies: "उपाय",
      astrological: "ज्योतिषीय",
      aboutUs: "हमारे बारे में",
      contact: "संपर्क करें",
      astrology: "ज्योतिष",
      palmistry: "हस्तरेखा",
      numerology: "अंकशास्त्र",
      marriage: "विवाह",
      progency: "संतान",
      education: "शिक्षा",
      career: "करियर",
      muhurat: "मुहूर्त",
      gemstones: "रत्न",
      gharShanti: "घर शांति पूजा",
      hindi: "हिंदी",
      english: "अंग्रेज़ी",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
