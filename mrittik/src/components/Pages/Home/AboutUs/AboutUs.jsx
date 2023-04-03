import React, { useEffect } from "react";
import "../AboutUs/AboutUs.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="third_section">
      <div className="big_back_word">
        <h2
          className="aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          ABOUT
        </h2>
      </div>
      <div className="container position-relative px_5">
        <div className="row px_5 align-items-center">
          <div className="col-xl-5 col-lg-5 col-md-5 pr_12">
            <div className="picture">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/about/a1.jpg"
                alt=""
                className="main_img"
              />
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/about/e1.svg"
                alt=""
                className="lines"
                data-aos="fade-down"
                data-aos-duration="1000"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="col_adaptor">
              <div className="about_texts">
                <h2>ABOUT MRITTIK ARCHITECTS</h2>
                <p>
                  Mrittik Architects is a full-service design firm providing
                  architecture, master planning, urban design, interior
                  architecture, space planning and programming. Our portfolio of
                  completed work includes highly acclaimed and award-winning
                  projects for clients.
                </p>
              </div>
              <div className="icon_box">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box_flex">
                      <div className="icon_image">
                        <img
                          src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/about/i2.svg"
                          alt=""
                        />
                      </div>
                      <h6>3D Space Designing</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box_flex">
                      <div className="icon_image">
                        <img
                          src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/about/i3.svg"
                          alt=""
                        />
                      </div>
                      <h6>Architectural Drawing</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box_flex">
                      <div className="icon_image">
                        <img
                          src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/about/i1.svg"
                          alt=""
                        />
                      </div>
                      <h6>3D Model building</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box_flex">
                      <div className="icon_image">
                        <img
                          src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/about/i4.svg"
                          alt=""
                        />
                      </div>
                      <h6>Building The Space</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="btn_box"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <Link to="/about">READ MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
