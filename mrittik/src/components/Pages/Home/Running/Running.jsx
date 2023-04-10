import React, { useEffect } from "react";
import "./Running.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Running = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="fifth_section">
      <ul className="net_lines justify-content-between">
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
      </ul>
      <div className="big_back_word">
        <h2
          className="aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          RUNNING
        </h2>
      </div>
      <div className="container position-relative px_5">
        <div className="row justify-content-between px_5">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 px-0">
            <div className="left_part">
              <div
                className="grid_el"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="thumb">
                  <img
                    src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/image_box/3.jpg"
                    alt=""
                  />
                  <div className="works_info">
                    <div className="works_texts">
                      <h6>
                        <Link to="#">CLUB HOUSE</Link>
                      </h6>
                      <h5>
                        <Link to="/project-details">
                          Washington young menz club
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 px-0">
            <div className="right_part">
              <div
                className="grid_el"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="thumb">
                  <img
                    src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/image_box/2.jpg"
                    alt=""
                  />
                  <div className="works_info">
                    <div className="works_texts">
                      <h6>
                        <Link to="#">CLUB HOUSE</Link>
                      </h6>
                      <h5>
                        <Link to="/project-details">
                          California young menz club
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="grid_el"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="thumb">
                  <img
                    src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/image_box/1.jpg"
                    alt=""
                  />
                  <div className="works_info">
                    <div className="works_texts">
                      <h6>
                        <Link to="#">CLUB HOUSE</Link>
                      </h6>
                      <h5>
                        <Link to="/project-details">
                          California young menz club
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Running;
