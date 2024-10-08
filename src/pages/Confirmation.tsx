import Joinus from "../components/Joinus";
import Img from "../assets/characters-2-and-3.png";
import Img2 from "../assets/characters-2-and-3 (1).png";
import { useTranslation } from "react-i18next";
export default function Confirmation() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="my-32">
        <img src={i18n.language === "en" ? Img : Img2} alt="" />
        <p className="text-[#464646] text-[24px] font-semibold">
          {t("we are on the way to you")}
        </p>
      </div>
      <Joinus />
    </>
  );
}
