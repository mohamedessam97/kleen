import Header from "../components/Header";
import Joinus from "../components/Joinus";

export default function ChooseService() {
  return (
    <>
      <Header />
      <div className="my-20">
        <h3 className="text-[#292929] text-[20px] font-semibold">
          Choose your service
        </h3>
        <div className="flex flex-col gap-3 mt-5">
          <button className="text-[#0097CE] text-[20px] font-semibold border border-[#F0F0F0] rounded-[8px] w-full py-3 hover:bg-[#0097CE] hover:text-white">
            Pick up
          </button>
          <button className="text-[#0097CE] text-[20px] font-semibold border border-[#F0F0F0] rounded-[8px] w-full py-3 hover:bg-[#0097CE] hover:text-white">
            Drop off
          </button>
        </div>
      </div>
      <Joinus />
    </>
  );
}
