import React from "react";
import "../Footer/Footer.scss";
import { Icon } from "@iconify/react";
import LightLogo from "../../../assets/logo-light.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer_black">
        <div className="container" id="footer_container">
          <div className="row align-items-end justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-2 col-sm-1">
              <div className="col_adaptor">
                <h2>CONTACT</h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5">
              <div className="col_communnication">
                <div className="info_field">
                  <h6>Studio Website</h6>
                  <h5>www.mrittikarchitects.com</h5>
                </div>
                <div className="info_field">
                  <h6>Email Address</h6>
                  <h5>mrittikarchitects@gmail.com</h5>
                </div>
                <div className="info_field">
                  <h6>Phone No</h6>
                  <h5>+123 (456789)</h5>
                </div>
                <div className="info_field">
                  <h6>Office Address</h6>
                  <h5>3 Madison Street NY, USA</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5">
              <div className="footer_elements">
                <div className="footer_el_inner">
                  <div className="footer_logo">
                    <img src={LightLogo} alt="" />
                  </div>
                  <div className="footer_social">
                    <ul className="social_list">
                      <li className="social_net">
                        <Icon icon="mdi:facebook" />
                      </li>
                      <li className="social_net">
                        <Icon icon="mdi:twitter" />
                      </li>
                      <li className="social_net">
                        <Icon icon="mdi:instagram" />
                      </li>
                      <li className="social_net">
                        <Icon icon="mdi:youtube" />
                      </li>
                    </ul>
                  </div>
                  <div className="conditions">
                    <ul>
                      <li>TERMS</li>
                      <li>CONDITION</li>
                      <li>POLICY</li>
                    </ul>
                  </div>
                  <div className="copyright">
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
