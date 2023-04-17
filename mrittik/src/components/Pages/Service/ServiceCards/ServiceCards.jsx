import React, { useEffect } from "react";
import "../ServiceCards/ServiceCards.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="servicecards_section">
      <div className="container position-relative px_4">
        <div className="row px_5">
          <div
            className="col-xl-4 col-lg-4 col-md-6 px_12"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="blog_post">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/blog/1.jpg"
                alt=""
                className="card_backimg"
              />
              <div className="service_content">
                <img
                  src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/1.png"
                  alt=""
                  className="service_icon"
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
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 px_12"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="blog_post">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/blog/2.jpg"
                alt=""
                className="card_backimg"
              />
              <div className="service_content">
                <img
                  src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/2.png"
                  alt=""
                  className="service_icon"
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
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 px_12"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="blog_post">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/blog/3.jpg"
                alt=""
                className="card_backimg"
              />
              <div className="service_content">
                <img
                  src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/3.png"
                  alt=""
                  className="service_icon"
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
          <div
            className="col-xl-4 col-lg-4 col-md-6 px_12"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="blog_post">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/bg-4.jpg"
                alt=""
                className="card_backimg"
              />
              <div className="service_content">
                <img
                  src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/4.png"
                  alt=""
                  className="service_icon"
                />
                <h4>
                  <Link to="/service">INDUSTRIAL DESIGN</Link>
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
          <div
            className="col-xl-4 col-lg-4 col-md-6 px_12"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="blog_post">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/bg-5.jpg"
                alt=""
                className="card_backimg"
              />
              <div className="service_content">
                <img
                  src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/5.png"
                  alt=""
                  className="service_icon"
                />
                <h4>
                  <Link to="/service">3D MODELING</Link>
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
          <div
            className="col-xl-4 col-lg-4 col-md-6 px_12"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="blog_post">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/bg-6.jpg"
                alt=""
                className="card_backimg"
              />
              <div className="service_content">
                <img
                  src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/icon_box/6.png"
                  alt=""
                  className="service_icon"
                />
                <h4>
                  <Link to="/service">BLUEPRINT DESIGN</Link>
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
      </div>
    </section>
  );
};

export default ServiceCards;
