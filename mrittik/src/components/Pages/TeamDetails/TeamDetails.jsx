import React, { useState, useEffect } from "react";
import TeamDetailHead from "./TeamDetailHead/TeamDetailHead";
import "../TeamDetails/TeamDetails.scss";
import MemberBio from "./MemberBio/MemberBio";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const TeamDetails = () => {
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
          className="teamdetails_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <TeamDetailHead />
          <MemberBio />
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

export default TeamDetails;
