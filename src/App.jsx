import { useState } from "react";
import "./App.css";
import Header from "./assets/components/header/header";
import Players from "./assets/components/players/Players";
import Footer from "./assets/components/fotter/fotter";

function App() {
  const [coin, setCoin] = useState(0);

  const handelCoin = () => {
    if (coin === 0) {
      setCoin(1500000);
    } else {
      setCoin(coin * 2);
    }
  };

  const [isActiveBtn, SetIsActiveBtn] = useState({
    available: true,
    status: "available",
  });

  const handelIsActiveBtn = (status) => {
    if (status === "available") {
      SetIsActiveBtn({
        available: true,
        status: "available",
      });
    } else {
      SetIsActiveBtn({
        available: false,
        status: "selected",
      });
    }
  };
  // const [price, setPrice] = useState();
  // const handelIncreasePrice = (pr) => {
  //   setPrice(price + pr);
  // };
  const [choosePlayer, setChoosePlayer] = useState([]);
  const handelChoosePlayer = (cricketer) => {
    const remainingPlayer = choosePlayer.find((c) => c.id === cricketer.id);

    if (remainingPlayer) {
      alert("al ready added");
    } else {
      const newPlayer = [...choosePlayer, cricketer];
      setChoosePlayer(newPlayer);
    }
  };
  // console.log(choosePlayer);

  return (
    <>
      <Header handelCoin={handelCoin} coin={coin}></Header>
      <Players
        isActiveBtn={isActiveBtn}
        handelIsActiveBtn={handelIsActiveBtn}
        handelChoosePlayer={handelChoosePlayer}
        choosePlayer={choosePlayer}
        coin={coin}
      ></Players>
      <Footer></Footer>
    </>
  );
}

export default App;
