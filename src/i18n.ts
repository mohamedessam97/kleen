import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detect language from the browser
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Choose your service": "Choose your service",
          "Pick up": "Pick up",
          "Drop off": "Drop off",
          "we are on the way to you": "we are on the way to you",
          Name: "Name",
          "Phone Number": "Phone Number",
          "Car plate number": "Car Plate number",
          "Car Brand": "Car Brand",
          "Car Color": "Car Color",
          "Submit request": "Submit request",
          "Back to services": "Back to services",
          "Drop off Request": "Drop off Request",
          "Pick up Request": "Pick up Request",
          Offers: "Offers",
          Services: "Services",
          "On your first order through the app!":
            "On your first order through the app!",
          Off: "Off",
          "Join us": "Join us",
          "stay up to date to your order": "stay up to date to your order",
        },
      },
      ar: {
        translation: {
          "Choose your service": "اختر خدمتك",
          "Pick up": "استلام الطلب",
          "Drop off": "تسليم الطلب",
          "we are on the way to you": "احد موظفينا في الطريق اليك",
          Name: "الاسم",
          "Phone Number": "رقم الجوال",
          "Car plate number": "ارقام لوحة السيارة",
          "Car Brand": "نوع السيارة",
          "Car Color": "لون السيارة",
          "Submit request": "تقديم الطلب",
          "Back to services": "العودة الى الخدمات",
          "Drop off Request": "طلب تسليم",
          "Pick up Request": "طلب استلام",
          Offers: "العروض",
          Services: "الخدمات",
          "On your first order through the app!":
            "على طلبك الاول عن طريق التطبيق!",
          Off: "خصم",
          "Join us": "انضم الينا",
          "stay up to date to your order": "المتابعة للطلب الخاص بك",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
