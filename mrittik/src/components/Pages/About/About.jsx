import React from "react";
import OurMission from "./OurMission/OurMission";
import "../About/About.scss";
import Video from "./Video/Video";
import Facts from "./Facts/Facts";
import Service from "./Service/Service";
const About = () => {
  return (
    <div className="about_main">
      <OurMission />
      <Video />
      <Facts />
      <Service />
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
