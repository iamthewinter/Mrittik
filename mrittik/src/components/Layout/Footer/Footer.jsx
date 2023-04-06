import React, { useEffect } from "react";
import "../Footer/Footer.scss";
import { Icon } from "@iconify/react";
import LightLogo from "../../../assets/logo-light.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer>
      <ul className="lines_footer_back justify-content-between">
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
      </ul>
      <div className="footer_black" data-aos="zoom-in" data-aos-duration="1000">
        <div className="container" id="footer_container">
          <div className="row align-items-end justify-content-between">
            <div
              className="col-xl-4 col-lg-4 col-md-2 col-sm-1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="col_adaptor">
                <h2>CONTACT</h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5">
              <div className="col_communnication">
                <div
                  className="info_field"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <h6>Studio Website</h6>
                  <h5>www.mrittikarchitects.com</h5>
                </div>
                <div
                  className="info_field"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <h6>Email Address</h6>
                  <h5>mrittikarchitects@gmail.com</h5>
                </div>
                <div
                  className="info_field"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <h6>Phone No</h6>
                  <h5>+123 (456789)</h5>
                </div>
                <div
                  className="info_field"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <h6>Office Address</h6>
                  <h5>3 Madison Street NY, USA</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5">
              <div className="footer_elements">
                <div className="footer_el_inner">
                  <div
                    className="footer_logo"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <Link to="/">
                      <img src={LightLogo} alt="" />
                    </Link>
                  </div>
                  <div className="footer_social">
                    <ul className="social_list">
                      <li
                        className="social_net"
                        data-aos="fade-up"
                        data-aos-duration="500"
                      >
                        <Icon icon="mdi:facebook" />
                      </li>
                      <li
                        className="social_net"
                        data-aos="fade-up"
                        data-aos-duration="700"
                      >
                        <Icon icon="mdi:twitter" />
                      </li>
                      <li
                        className="social_net"
                        data-aos="fade-up"
                        data-aos-duration="900"
                      >
                        <Icon icon="mdi:instagram" />
                      </li>
                      <li
                        className="social_net"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                      >
                        <Icon icon="mdi:youtube" />
                      </li>
                    </ul>
                  </div>
                  <div className="conditions">
                    <ul>
                      <li data-aos="fade-up" data-aos-duration="1300">
                        TERMS
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        CONDITION
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1700">
                        POLICY
                      </li>
                    </ul>
                  </div>
                  <div
                    className="copyright"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <p>Mrittik 2023. All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </footer>
  );
};

export default Footer;
