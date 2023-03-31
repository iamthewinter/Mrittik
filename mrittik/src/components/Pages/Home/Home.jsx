import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Achievements from "./Achievements/Achievements";
import FirstSwiper from "./FirstSwiper/FirstSwiper";
import Running from "./Running/Running";
import Services from "./Services/Services";
import GalleryIsotope from "./GalleryIsotope/GalleryIsotope";

const Home = () => {
  return (
    <>
      <FirstSwiper />
      <Services />
      <AboutUs />
      <Achievements />
      <Running />
      <GalleryIsotope />
    </>
  );
};

export default Home;
