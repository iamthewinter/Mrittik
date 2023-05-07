import React from "react";
import "../TeamHeading/TeamHeading.scss";
import HeaderBG from "../../../../assets/header_bg.jpg";
import { Link } from "react-router-dom";

const TeamHeading = () => {
  return (
    <section className="teamtpage_heading">
      <div
        className="head_back_image"
        style={{
          backgroundImage: `url(${HeaderBG})`,
        }}
      >
        <div className="container px_5">
          <div className="row justify-content-between align-items-center px_5">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 px-0">
              <div className="left_head">
                <h2>Our Team</h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8 px-0">
              <ul className="page_location">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">Pages</Link>
                </li>
                <li>Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHeading;
