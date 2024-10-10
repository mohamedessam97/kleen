import Joinus from "../components/Joinus";
import Img from "../assets/404!.svg";
import { useTranslation } from "react-i18next";
export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-32">
        <img src={Img} alt="" className="w-[70%] mb-6 mx-auto" />

        <h3 className="text-[#292929] text-[28px] font-bold">
          {t("We Apologize")}
        </h3>
        <p className="text-[#464646] text-[20px] ">
          {t("something went wrong on our side")}
        </p>
      </div>
      <Joinus />
    </>
  );
}
