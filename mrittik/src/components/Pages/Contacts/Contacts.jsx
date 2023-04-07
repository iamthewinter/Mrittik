import React from "react";
import ContactHeading from "./ContactHeading/ContactHeading";
import "./Contacts.scss";
import GMap from "./GMap/GMap";
const Contacts = () => {
  return (
    <div className="contacts_main">
      <ContactHeading />
      <GMap />
      <ul className="net_lines justify-content-between">
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
      </ul>
    </div>
  );
};

export default Contacts;
