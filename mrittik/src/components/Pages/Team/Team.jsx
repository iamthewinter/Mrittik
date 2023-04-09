import React from "react";
import TeamHeading from "./TeamHeading/TeamHeading";
import "../Team/Team.scss";
import OurTeam from "./OurTeam/OurTeam";

const Team = () => {
  return (
    <div className="team_main">
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
    </div>
  );
};

export default Team;
