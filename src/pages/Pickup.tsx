import { useTranslation } from "react-i18next";
import Form from "../components/Form";

export default function Pickup() {
  const { t } = useTranslation("");

  return (
    <>
      <div className="my-10">
        <h3 className="text-[#292929] text-[20px] font-semibold">
          {t("Pick up Request")}{" "}
        </h3>
        <Form />
      </div>
    </>
  );
}
