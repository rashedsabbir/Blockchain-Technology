import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Shared/Navbar/Navbar";
import SubHeader from "./components/SubHeader/SubHeader";
// import Test2 from "./components/Test/Test2";
import Test from "./components/Test/Test";
import Services from "./components/Services/Services";
import Footer from "./components/Shared/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import NotFound from "./components/Shared/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactUsDeailed from "./components/ContactUs/ContactUsDeailed";
import AboutUsDetailed from "./components/AboutUs/AboutUsDetailed";
import ServiceDetails from "./components/Services/ServiceDetails";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="bg-white">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/contact" element={<ContactUsDeailed />} />
        <Route path="/about-us" element={<AboutUsDetailed />} />
        <Route path="/services" element={<ServiceDetails />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
      {/* <Test /> */}
      {/* <Test2 /> */}

      {/* <SubHeader /> */}
    </div>
  );
}

export default App;
