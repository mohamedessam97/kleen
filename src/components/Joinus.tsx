import AppleStore from "../assets/AppleStore.svg";
import GooglePlay from "../assets/GooglePlay.svg";
export default function Joinus() {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h3 className="text-[#292929] text-[20px] font-semibold">Join us</h3>
      <p className="text-[#464646] text-[16px]">
        stay up to date to your order
      </p>
      <div className="flex gap-3">
        <img src={AppleStore} alt="" className="cursor-pointer" />
        <img src={GooglePlay} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}
