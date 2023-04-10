import React, { useEffect } from "react";
import "./Services.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="second_section">
      <div className="container px_5">
        <div className="row px_5">
          <div
            className="col-xl-4 col-lg-4 pr_10"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="col_box">
              <h6>01</h6>
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/d1-light.svg"
                alt=""
                className="light_logo"
              />
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/d1.svg"
                alt=""
                className="dark_logo"
              />
              <h4>
                <Link to="/service">URBAN DESIGN</Link>
              </h4>
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture.
              </p>
              <div className="arrow_details">
                <Link to="/service">
                  <span className="arrow1"></span>
                  <span className="arrow2"></span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 pl_10"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="col_box">
              <h6>02</h6>
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/d1-light.svg"
                alt=""
                className="light_logo"
              />
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/d1.svg"
                alt=""
                className="dark_logo"
              />
              <h4>
                <Link to="/service">INTERIOR DESIGN</Link>
              </h4>
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture.
              </p>
              <div className="arrow_details">
                <Link to="/service">
                  <span className="arrow1"></span>
                  <span className="arrow2"></span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 pl_10"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div className="col_box">
              <h6>03</h6>
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/d1-light.svg"
                alt=""
                className="light_logo"
              />
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/d1.svg"
                alt=""
                className="dark_logo"
              />
              <h4>
                <Link to="/service">LANDSCAPE DESIGN</Link>
              </h4>
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture.
              </p>
              <div className="arrow_details">
                <Link to="/service">
                  <span className="arrow1"></span>
                  <span className="arrow2"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
