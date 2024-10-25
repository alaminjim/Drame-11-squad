import { useState } from "react";
import "./App.css";
import Header from "./assets/components/header/header";
import Players from "./assets/components/players/Players";
import Footer from "./assets/components/fotter/fotter";

function App() {
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
  return (
    <>
      <Header></Header>
      <Players
        isActiveBtn={isActiveBtn}
        handelIsActiveBtn={handelIsActiveBtn}
      ></Players>
      <Footer></Footer>
    </>
  );
}

export default App;
