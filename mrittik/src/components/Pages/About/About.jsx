import React from "react";
import OurMission from "./OurMission/OurMission";
import "../About/About.scss";
const About = () => {
  return (
    <div className="about_main">
      <OurMission />

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

export default About;
