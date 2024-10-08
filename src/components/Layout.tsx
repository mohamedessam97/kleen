import Header from "./Header";
import { Outlet } from "react-router-dom";
import LanguageChange from "./LanguageChange";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Layout() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = localStorage.getItem("lang");
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, []);
  return (
    <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
      <Header />
      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
      <LanguageChange />
    </div>
  );
}
