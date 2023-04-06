import React from "react";
import OurMission from "./OurMission/OurMission";
import "../About/About.scss";
import Video from "./Video/Video";
import Facts from "./Facts/Facts";
import Service from "./Service/Service";
import Underlined from "./Underlined/Underlined";
import TeamSwipe from "./TeamSwipe/TeamSwipe";
import BlckBoxSwipe from "./BlckBoxSwipe/BlckBoxSwipe";
const About = () => {
  return (
    <div className="about_main">
      <OurMission />
      <Video />
      <Facts />
      <Service />
      <Underlined />
      <TeamSwipe />
      <BlckBoxSwipe />
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
