import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Shared/Navbar/Navbar";
import SubHeader from "./components/SubHeader/SubHeader";
import Test2 from "./components/Test/Test2";
import Test from "./components/Test/Test";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="bg-white">
      <Navbar />

      <Header />
      <AboutUs />
      <Services />
      {/* <Test2 /> */}
      {/* <Test /> */}
      {/* <SubHeader /> */}
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
    </div>
  );
}

export default App;
