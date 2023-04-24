import React, { useState, useEffect } from "react";
import "../Projects/Projects.scss";
import ProjectsHeading from "./ProjectsHeading/ProjectsHeading";
import ProjectsFilter from "./ProjectsFilter/ProjectsFilter";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const Projects = () => {
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
          className="projects_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <ProjectsHeading />
          <ProjectsFilter />
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

export default Projects;
