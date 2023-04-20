import React from "react";
import TeamDetailHead from "./TeamDetailHead/TeamDetailHead";
import "../TeamDetails/TeamDetails.scss";
import MemberBio from "./MemberBio/MemberBio";
const TeamDetails = () => {
  return (
    <div className="teamdetails_main">
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
    </div>
  );
};

export default TeamDetails;
