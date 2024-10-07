import { useState } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

export default function Dropoff() {
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

  const handleSubmit = () => {
    if (!form.phone) {
      setError({ ...error, phone: true });
      return;
    }
    navigate("/confirmation");
  };
  return (
    <>
      <div className="my-10">
        <h3 className="text-[#292929] text-[20px] font-semibold">
          Drop off Request{" "}
        </h3>
        <div className="flex flex-col gap-3 mt-5">
          <InputField
            label="Name"
            value={form.name}
            invalid={error.name}
            onChange={(e) => setForm({ ...form, name: e })}
          />
          <InputField
            label="Phone Number"
            required
            invalid={error.phone}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e })}
          />
          <InputField
            label="Car plate number"
            value={form.carPlate}
            invalid={error.carPlate}
            onChange={(e) => setForm({ ...form, carPlate: e })}
          />
          <InputField
            label="Car Brand"
            value={form.carBrand}
            invalid={error.carBrand}
            onChange={(e) => setForm({ ...form, carBrand: e })}
          />
          <InputField
            label="Car Color"
            value={form.carColor}
            invalid={error.carColor}
            onChange={(e) => setForm({ ...form, carColor: e })}
          />
          <div className="flex flex-col gap-3 items-center">
            <button
              className="text-[#FDFDFD] bg-[#0097CE] text-[18px]  border hover:border-[#0097CE] rounded-[8px] w-full py-3 hover:bg-white hover:text-[#0097CE]"
              onClick={handleSubmit}
            >
              Submit request
            </button>
            <button className="border-b border-[#464646] text-[14px] ">
              Back to services
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
