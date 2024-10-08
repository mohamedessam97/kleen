import Joinus from "../components/Joinus";
import img from "./../assets/Rectangle 13.png";
import img2 from "./../assets/Group 48095851.png";
import img3 from "./../assets/Group 48095853.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Offers() {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  return (
    <div className="my-10">
      <img src={img} className="w-full" alt="" />
      <div className="flex gap-3 mt-5">
        <div className="bg-[#0097CE] text-white p-4 rounded-[6px] flex flex-col items-end relative">
          <span className="text-[30px] font-bold">30% {t("Off")}</span>
          <span className="text-end">
            {t("On your first order through the app!")}
          </span>
          <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full">
            <input
              type="checkbox"
              className="hidden"
              onClick={() => {
                setChecked(!checked);
              }}
            />
          </div>
        </div>
        <div>
          <img
            src={img2}
            alt=""
            className="border border-[#0097CE] rounded-[6px] p-2 mb-1"
          />
          <img
            src={img3}
            alt=""
            className="border border-[#0097CE] rounded-[6px] p-2"
          />
        </div>
      </div>
      <Joinus />
    </div>
  );
}
