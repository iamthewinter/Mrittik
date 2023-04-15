import React from "react";
import "../Service/Service.scss";
import ServiceHeading from "./ServiceHeading/ServiceHeading";
const Service = () => {
  return (
    <div className="service_main">
      <ServiceHeading />
      <div className="servicepage_backimage"></div>
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

export default Service;
