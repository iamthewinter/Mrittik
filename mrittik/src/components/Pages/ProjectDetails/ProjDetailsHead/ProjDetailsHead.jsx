import React from "react";
import "../ProjDetailsHead/ProjDetailsHead.scss";
import { Link } from "react-router-dom";

const ProjDetailsHead = () => {
  return (
    <section className="projdetails_heading">
      <ul className="net_lines justify-content-between">
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
      </ul>
      <div
        className="head_back_image"
        style={{
          backgroundImage: `url("https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/header_bg.jpg")`,
        }}
      >
        <div className="container px_5">
          <div className="row justify-content-between align-items-center px_5">
            <div className="col-xl-4 col-lg-6 px-0">
              <div className="left_head">
                <h2>Project Details</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 px-0">
              <ul className="page_location">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>California Mansion Residence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjDetailsHead;
