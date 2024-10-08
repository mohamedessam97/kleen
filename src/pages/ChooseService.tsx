import { useNavigate } from "react-router-dom";
import Joinus from "../components/Joinus";
import { useTranslation } from "react-i18next";

export default function ChooseService() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="my-32">
        <h3 className="text-[#292929] text-[20px] font-semibold">
          {t("Choose your service")}
        </h3>
        <div className="flex flex-col gap-3 mt-5">
          <button
            className="text-[#0097CE] text-[20px] font-semibold border border-[#F0F0F0] rounded-[8px] w-full py-3 hover:bg-[#0097CE] hover:text-white"
            onClick={() => navigate("/pickup")}
          >
            {t("Pick up")}
          </button>
          <button
            className="text-[#0097CE] text-[20px] font-semibold border border-[#F0F0F0] rounded-[8px] w-full py-3 hover:bg-[#0097CE] hover:text-white"
            onClick={() => navigate("/dropoff")}
          >
            {t("Drop off")}
          </button>
        </div>
      </div>
      <Joinus />
    </>
  );
}
