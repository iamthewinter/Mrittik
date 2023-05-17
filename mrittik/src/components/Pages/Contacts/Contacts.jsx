import React, { useState, useEffect } from "react";
import ContactHeading from "./ContactHeading/ContactHeading";
import "./Contacts.scss";
import GMap from "./GMap/GMap";
import DiscussProjects from "./DiscussProjects/DiscussProjects";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const Contacts = () => {
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
          className="contacts_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <ContactHeading />
          <GMap />
          <DiscussProjects />
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

export default Contacts;
