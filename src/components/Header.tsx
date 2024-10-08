import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [pathName, setPathName] = useState<unknown>();

  useEffect(() => {
    setPathName(location.pathname);
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="logo" />
      {pathName === "/offers" ? (
        <Link
          to="/choose-service"
          className="text-[#292929] text-[18px] font-semibold"
        >
          {t("Services")}
        </Link>
      ) : (
        <Link to="/offers" className="text-[#292929] text-[18px] font-semibold">
          {t("Offers")}
        </Link>
      )}
    </div>
  );
}
