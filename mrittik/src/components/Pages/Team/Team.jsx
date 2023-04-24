import React, { useState, useEffect } from "react";
import TeamHeading from "./TeamHeading/TeamHeading";
import "../Team/Team.scss";
import OurTeam from "./OurTeam/OurTeam";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const Team = () => {
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
          className="team_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <TeamHeading />
          <OurTeam />
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

export default Team;
