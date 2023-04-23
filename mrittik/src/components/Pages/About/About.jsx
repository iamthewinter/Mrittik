import React, { useEffect, useState } from "react";
import OurMission from "./OurMission/OurMission";
import "../About/About.scss";
import Video from "./Video/Video";
import Facts from "./Facts/Facts";
import Service from "./Service/Service";
import Underlined from "./Underlined/Underlined";
import TeamSwipe from "./TeamSwipe/TeamSwipe";
import BlckBoxSwipe from "./BlckBoxSwipe/BlckBoxSwipe";
import LetsDiscuss from "./LetsDiscuss/LetsDiscuss";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";
const About = () => {
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
          className="about_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <OurMission />
          <Video />
          <Facts />
          <Service />
          <Underlined />
          <TeamSwipe />
          <BlckBoxSwipe />
          <LetsDiscuss />
          <ul className="net_lines justify-content-between">
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default About;
