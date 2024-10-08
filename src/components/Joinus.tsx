import { useTranslation } from "react-i18next";
import AppleStore from "../assets/AppleStore.svg";
import GooglePlay from "../assets/GooglePlay.svg";
export default function Joinus() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3 items-center mt-20">
      <h3 className="text-[#292929] text-[20px] font-semibold">
        {t("Join us")}
      </h3>
      <p className="text-[#464646] text-[16px]">
        {t("stay up to date to your order")}
      </p>
      <div className="flex gap-3">
        <a href="https://apps.apple.com/us/app/kleen-%D9%83%D9%84%D9%8A%D9%86/id1561177561">
          <img src={AppleStore} alt="" className="cursor-pointer" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.kleen.customer">
          <img src={GooglePlay} alt="" className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
