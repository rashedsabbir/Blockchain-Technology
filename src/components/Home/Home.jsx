import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  );
};

export default Home;
