import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "../ProjDetailsContent/ProjDetailsContent.scss";
const ProjDetailsContent = () => {
  return (
    <section className="projdetailsinner_section">
      <div className="container px_5">
        <div className="row px_5 position-relative">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="project_image">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/sl-1.jpg"
                alt=""
              />
            </div>
            <div className="proj_details_inner">
              <div className="head_text">
                <h3>California Mansion Residence</h3>
                <p>
                  Mrittik Architects is a full-service design firm providing
                  architecture, master planning, urban design, interior
                  architecture, space planning and programming. Our portfolio of
                  completed work includes highly acclaimed and award-winning
                  projects for clients around the country.
                </p>
              </div>
            </div>
            <div className="houseside_image">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/sl-4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="fixed_col">
              <div className="pojects_info">
                <h6>
                  PROJECT INFORMATION <span className="anim_line"></span>
                </h6>
                <ul>
                  <li>
                    <span className="data">Project Name:</span>
                    <span className="value">California Texa</span>
                  </li>
                  <li>
                    <span className="data">Architect:</span>
                    <span className="value">Jonathon Husten</span>
                  </li>
                  <li>
                    <span className="data">Concept:</span>
                    <span className="value">Retro with Modern</span>
                  </li>
                  <li>
                    <span className="data">Date:</span>
                    <span className="value">21/03/2019 To 15/12/2022</span>
                  </li>
                  <li>
                    <span className="data">Location:</span>
                    <span className="value">California, USA</span>
                  </li>
                </ul>
                <div className="project_share">
                  <ul>
                    <li>Share:</li>
                    <li>
                      <Link to="#">
                        <Icon icon="mdi:facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Icon icon="mdi:twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Icon icon="mdi:instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Icon icon="mdi:youtube" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Icon icon="mdi:pinterest" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjDetailsContent;
