import Joinus from "../components/Joinus";
import Img from "../assets/characters-2-and-3.png";
export default function Confirmation() {
  return (
    <>
      <div className="my-32">
        <img src={Img} alt="" />
        <p className="text-[#464646] text-[24px] font-semibold">
          we are on the way to you
        </p>
      </div>
      <Joinus />
    </>
  );
}
