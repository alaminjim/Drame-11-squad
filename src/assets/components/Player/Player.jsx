import { MdPeopleAlt } from "react-icons/md";
import { FaFlag } from "react-icons/fa";

const Player = ({ cricketer }) => {
  const { image, name, country, type, batting_hand, bowling_style, price } =
    cricketer;
  return (
    <div>
      <div className="pt-6 p-5 shadow-xl rounded-md">
        <div>
          <img className="w-[500px] p-6 rounded-lg" src={image} alt="" />
        </div>
        <div>
          <h1 className="flex text-2xl font-bold">
            <MdPeopleAlt className="m-1"></MdPeopleAlt>
            {name}
          </h1>
        </div>
        <div className="flex pt-3">
          <p className="flex text-[#131313b1]">
            <FaFlag className="m-1"></FaFlag>
            {country}
          </p>
        </div>
        <div className="pt-2">
          <p className="text-base">{type}</p>
        </div>
        <div className="flex pt-2">
          <p>{batting_hand}</p>
          <p className="ml-48">{bowling_style}</p>
        </div>
        <div className="flex">
          <h1 className="pt-2">{price}</h1>
          <button className="btn btn-warning mt-2 ml-52">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
