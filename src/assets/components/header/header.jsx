import logo from "../../image/logo.png";
import { BsCoin } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between w-11/12 mx-auto">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="space-x-12 text-[#13131384] font-bold">
        <a href="">Home</a>
        <a href="">Fixture</a>
        <a href="">Players</a>
        <a href="">Schedules</a>
      </div>
      <div>
        <span className="flex border-1 border-stone-100">
          0 Coin <BsCoin className="mt-1 ml-1 text-yellow-400"></BsCoin>
        </span>
      </div>
    </div>
  );
};

export default Header;
