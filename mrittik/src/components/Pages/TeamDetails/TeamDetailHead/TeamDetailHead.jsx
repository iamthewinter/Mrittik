import React from "react";
import "../TeamDetailHead/TeamDetailHead.scss";
import { Link } from "react-router-dom";
import HeaderBG from "../../../../assets/header_bg.jpg";
const TeamDetailHead = () => {
  return (
    <section className="teamdetail_heading">
      <div
        className="head_back_image"
        style={{
          backgroundImage: `url(${HeaderBG})`,
        }}
      >
        <div className="container px_5">
          <div className="row justify-content-between align-items-center px_5">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-0">
              <div className="left_head">
                <h2>Ellen Johansen</h2>
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
