import Logo from "../assets/Logo.svg";
export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="logo" />
      <span className="text-[#292929] text-[18px] font-semibold">Offer</span>
    </div>
  );
}
