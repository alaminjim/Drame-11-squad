import "./App.css";
import Header from "./assets/components/header/header";
import Banner from "./assets/components/banner/banner";

function App() {
  return (
    <>
      <Header></Header>
      <div className="w-11/12 pl-10  mx-auto">
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
