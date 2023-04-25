import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";
import ErrorContent from "./ErrorContent/ErrorContent";

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
        </motion.div>
      )}
    </>
  );
};

export default Error;
