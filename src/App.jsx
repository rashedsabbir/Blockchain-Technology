import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Shared/Navbar/Navbar";
import SubHeader from "./components/SubHeader/SubHeader";
import Test from "./components/Test/Test2";

function App() {
  return (
    <div className="bg-white">
      <Navbar />

      <Header />
      <AboutUs />
      <Test />
      {/* <SubHeader /> */}
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
    </div>
  );
}

export default App;
