import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";
import ErrorContent from "./ErrorContent/ErrorContent";
import "../Error/Error.scss";
const Error = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          className="error_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <ErrorContent />
          <div className="background_pageimg"></div>
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

export default Error;
