import React from "react";
import "../ContactHeading/ContactHeading.scss";
import { Link } from "react-router-dom";
import HeaderBG from "../../../../assets/header_bg.jpg";

const ContactHeading = () => {
  return (
    <section className="contactpage_heading">
      <div
        className="head_back_image"
        style={{
          backgroundImage: `url(${HeaderBG})`,
        }}
      >
        <div className="container px_5">
          <div className="row justify-content-between align-items-center px_5">
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col_xs_6 px-0">
              <div className="left_head">
                <h2>Contact</h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col_xs_6 px-0">
              <ul className="page_location">
                <li>
                  <Link to="/">Home</Link>
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

export default ContactHeading;
