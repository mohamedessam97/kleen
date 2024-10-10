import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    carPlate: "",
    carBrand: "",
    carColor: "",
  });
  const [error, setError] = useState({
    name: false,
    phone: false,
    carPlate: false,
    carBrand: false,
    carColor: false,
  });

  const [errorStatus, setErrorStatus] = useState("");
  const handleSubmit = () => {
    const regex = /^(?:(?:\+|00)966|0)?5[0-9]{8}$/;
    if (!form.phone) {
      setError({ ...error, phone: true });
      setErrorStatus(t("Required"));
      return;
    }

    if (!regex.test(form.phone)) {
      setError({ ...error, phone: true });
      setErrorStatus(t("Invalid phone number"));
      return;
    }

    navigate("/confirmation");
  };
  return (
    <div className="flex flex-col gap-3 mt-5">
      <InputField
        label={t("Name")}
        value={form.name}
        invalid={error.name}
        onChange={(e) => setForm({ ...form, name: e })}
      />
      <InputField
        label={t("Phone Number")}
        required
        invalid={error.phone}
        error={errorStatus}
        value={form.phone}
        onChange={(e) => {
          const number = e.replace(/[^\d]/g, "");
          setForm({ ...form, phone: number });
        }}
      />
      <InputField
        label={t("Car plate number")}
        value={form.carPlate}
        invalid={error.carPlate}
        onChange={(e) => setForm({ ...form, carPlate: e })}
      />
      <InputField
        label={t("Car Brand")}
        value={form.carBrand}
        invalid={error.carBrand}
        onChange={(e) => setForm({ ...form, carBrand: e })}
      />
      <InputField
        label={t("Car Color")}
        value={form.carColor}
        invalid={error.carColor}
        onChange={(e) => setForm({ ...form, carColor: e })}
      />
      <div className="flex flex-col gap-3 items-center">
        <button
          className="text-[#FDFDFD] bg-[#0097CE] text-[18px]  border hover:border-[#0097CE] rounded-[8px] w-full py-3 hover:bg-white hover:text-[#0097CE]"
          onClick={handleSubmit}
        >
          {t("Submit request")}
        </button>
        <button
          className="border-b border-[#464646] text-[14px] "
          onClick={() => navigate("/choose-service")}
        >
          {t("Back to services")}
        </button>
      </div>
    </div>
  );
}
