import React from "react";
import "../Preloader/Preloader.scss";
import RingLoader from "react-spinners/RingLoader";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 0.5 }}
    >
      <div className="spinner_container">
        <RingLoader
          color={"#d2d2d2"}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div className="text-container">
        <span className="characters">M</span>
        <span className="characters">R</span>
        <span className="characters">I</span>
        <span className="characters">T</span>
        <span className="characters">T</span>
        <span className="characters">I</span>
        <span className="characters">K</span>
      </div>
    </motion.div>
  );
};

export default Preloader;
