import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Achievements from "./Achievements/Achievements";
import FirstSwiper from "./FirstSwiper/FirstSwiper";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <FirstSwiper />
      <Services />
      <AboutUs />
      <Achievements />
    </>
  );
};

export default Home;
