import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({
  handelIsActiveBtn,
  isActiveBtn,
  handelChoosePlayer,
  choosePlayer,
}) => {
  const [cricketers, setCricketers] = useState([]);
  useEffect(() => {
    fetch("cricketer.json")
      .then((res) => res.json())
      .then((data) => setCricketers(data));
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto pt-60 flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">Available players</h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handelIsActiveBtn("available")}
            className={`${isActiveBtn.available ? "btn btn-warning" : "btn"}`}
          >
            Available
          </button>
          <button
            onClick={() => handelIsActiveBtn("selected")}
            className={`${isActiveBtn.available ? "btn" : "btn btn-warning"}`}
          >
            selected: {choosePlayer.length}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16">
        {cricketers.map((cricketer) => (
          <Player
            key={cricketer.id}
            handelChoosePlayer={handelChoosePlayer}
            cricketer={cricketer}
            choosePlayer={choosePlayer}
          ></Player>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  handelIsActiveBtn: PropTypes.func.isRequired,
  isActiveBtn: PropTypes.func.isRequired,
};

export default Players;
