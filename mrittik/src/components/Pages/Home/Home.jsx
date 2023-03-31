import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Achievements from "./Achievements/Achievements";
import FirstSwiper from "./FirstSwiper/FirstSwiper";
import Running from "./Running/Running";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <FirstSwiper />
      <Services />
      <AboutUs />
      <Achievements />
      <Running />
    </>
  );
};

export default Home;
