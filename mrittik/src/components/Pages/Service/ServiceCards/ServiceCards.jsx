import React, { useEffect } from "react";
import "../ServiceCards/ServiceCards.scss";
import { Link } from "react-router-dom";
import Blog1 from "../../../../assets/blog1.jpg";
import Blog2 from "../../../../assets/blog2.jpg";
import Blog3 from "../../../../assets/blog3.jpg";
import Blog4 from "../../../../assets/blog4.jpg";
import Blog5 from "../../../../assets/blog5.jpg";
import Blog6 from "../../../../assets/blog6.jpg";
import Service1 from "../../../../assets/service1.png";
import Service2 from "../../../../assets/service2.png";
import Service3 from "../../../../assets/service3.png";
import Service4 from "../../../../assets/service4.png";
import Service5 from "../../../../assets/service5.png";
import Service6 from "../../../../assets/service6.png";
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
              <img src={Blog1} alt="" className="card_backimg" />
              <div className="service_content">
                <img src={Service1} alt="" className="service_icon" />
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
              <img src={Blog2} alt="" className="card_backimg" />
              <div className="service_content">
                <img src={Service2} alt="" className="service_icon" />
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
              <img src={Blog3} alt="" className="card_backimg" />
              <div className="service_content">
                <img src={Service3} alt="" className="service_icon" />
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
              <img src={Blog4} alt="" className="card_backimg" />
              <div className="service_content">
                <img src={Service4} alt="" className="service_icon" />
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
              <img src={Blog5} alt="" className="card_backimg" />
              <div className="service_content">
                <img src={Service5} alt="" className="service_icon" />
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
              <img src={Blog6} alt="" className="card_backimg" />
              <div className="service_content">
                <img src={Service6} alt="" className="service_icon" />
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
