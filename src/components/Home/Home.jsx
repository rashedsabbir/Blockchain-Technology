import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Clients from "../Clients/Clients";
import MoreAboutUsSubheader from "../AboutUs/MoreAboutUsSubheader";

const Home = () => {
  return (
    <div>
      <Header />
      <Clients />
      <AboutUs />
      <Services />
      <MoreAboutUsSubheader />
      <ContactUs />
    </div>
  );
};

export default Home;
