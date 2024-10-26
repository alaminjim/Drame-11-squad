import logo from "../../image/logo.png";
import { BsCoin } from "react-icons/bs";
import Banner from "../banner/banner";

const Header = ({ handelCoin, coin }) => {
  return (
    <div>
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
            Coin {coin} <BsCoin className="mt-1 ml-1 text-yellow-400"></BsCoin>
          </span>
        </div>
      </div>
      <div className="w-11/12 pl-6  mx-auto">
        <Banner handelCoin={handelCoin}></Banner>
      </div>
    </div>
  );
};

export default Header;
