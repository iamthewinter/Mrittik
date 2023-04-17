import React from "react";
import "../Service/Service.scss";
import ServiceHeading from "./ServiceHeading/ServiceHeading";
import ServiceCards from "./ServiceCards/ServiceCards";
const Service = () => {
  return (
    <div className="service_main">
      <ServiceHeading />
      <ServiceCards />
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
