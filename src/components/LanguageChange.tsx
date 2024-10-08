import { useTranslation } from "react-i18next";
import flag from "./../assets/flag.png";
import englishFlag from "./../assets/flag-united-states.png";
const LanguageChange = () => {
  const { i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    localStorage.setItem("lang", newLanguage);
    i18n.changeLanguage(newLanguage);
    document.documentElement.lang = newLanguage;
  };

  return (
    <div
      onClick={handleLanguageToggle}
      className="flex items-center gap-1 cursor-pointer mt-5"
    >
      <span className="text-[#292929] font-bold">
        {i18n.language === "en" ? "عربي" : "English"}
      </span>
      <img src={i18n.language === "en" ? flag : englishFlag} alt="globalIcon" />
    </div>
  );
};

export default LanguageChange;
