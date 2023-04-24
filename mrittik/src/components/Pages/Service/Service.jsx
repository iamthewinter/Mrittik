import React, { useState, useEffect } from "react";
import "../Service/Service.scss";
import ServiceHeading from "./ServiceHeading/ServiceHeading";
import ServiceCards from "./ServiceCards/ServiceCards";
import BlackSwipeBox from "./BlackSwipeBox/BlackSwipeBox";
import Ourpartners from "./Ourpartners/Ourpartners";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const Service = () => {
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
          className="service_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <ServiceHeading />
          <ServiceCards />
          <BlackSwipeBox />
          <Ourpartners />
          <div className="servicepage_backimage"></div>
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

export default Service;
