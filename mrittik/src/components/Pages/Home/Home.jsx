import React, { useState, useEffect } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Achievements from "./Achievements/Achievements";
import FirstSwiper from "./FirstSwiper/FirstSwiper";
import Running from "./Running/Running";
import Services from "./Services/Services";
import GalleryIsotope from "./GalleryIsotope/GalleryIsotope";
import BlackBoxSwipe from "./BlackBoxSwipe/BlackBoxSwipe";
import LatestBlogs from "./LatestBlogs/LatestBlogs";
import ContactUs from "./ContactUs/ContactUs";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          className="home_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <FirstSwiper />
          <Services />
          <AboutUs />
          <Achievements />
          <Running />
          <GalleryIsotope />
          <BlackBoxSwipe />
          <LatestBlogs />
          <ContactUs />
        </motion.div>
      )}
    </>
  );
};

export default Home;
