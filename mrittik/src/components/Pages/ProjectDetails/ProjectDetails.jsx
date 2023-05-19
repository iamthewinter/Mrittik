import React, { useState, useEffect } from "react";
import ProjDetailsHead from "./ProjDetailsHead/ProjDetailsHead";
import ProjDetailsContent from "./ProjDetailsContent/ProjDetailsContent";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const ProjectDetails = () => {
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
          className="projdetails_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <ProjDetailsHead />
          <ProjDetailsContent />
        </motion.div>
      )}
    </>
  );
};

export default ProjectDetails;
