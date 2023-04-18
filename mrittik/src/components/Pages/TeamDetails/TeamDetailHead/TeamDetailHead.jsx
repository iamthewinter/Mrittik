import React from "react";
import "../TeamDetailHead/TeamDetailHead.scss";
import { Link } from "react-router-dom";
const TeamDetailHead = () => {
  return (
    <section className="teamdetail_heading">
      <div
        className="head_back_image"
        style={{
          backgroundImage: `url("https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/header_bg.jpg")`,
        }}
      >
        <div className="container px_5">
          <div className="row justify-content-between align-items-center px_5">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-0">
              <div className="left_head">
                <h2>Mellisa Johansen</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-0">
              <ul className="page_location">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">Pages</Link>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailHead;
