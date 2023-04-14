import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "../ProjDetailsContent/ProjDetailsContent.scss";
import Fancybox from "../../../FancyBox/FancyBox";
const ProjDetailsContent = () => {
  return (
    <section className="projdetailsinner_section">
      <div className="container px_5">
        <div className="row px_5 position-relative">
          <div className="col-xl-8 col-lg-8 col-md-8 px_0">
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
            <div className="project_features">
              <h6>
                PROJECT FEATURES <span className="anim_line"></span>
              </h6>
              <p>
                We design with people in mind and use every expertise at our
                disposal. Our practice connects communities and is committed to
                the stewardship of place, people, and the environment.
              </p>
            </div>
            <ul className="points_list">
              <li>
                <Icon icon="mdi:check-all" />
                The talent at Mrittik runs wide and deep. Across many markets,
                geographies & typologies.
              </li>
              <li>
                <Icon icon="mdi:check-all" />
                Our team members are some of the finest professionals in the
                industry.
              </li>
              <li>
                <Icon icon="mdi:check-all" />
                Organized to deliver the most specialized service possible and
                enriched by the depth.
              </li>
            </ul>
            <figure className="img_gallery">
              <Fancybox
                className="mygallery fancybox-is-open fancybox-is-zoomable fancybox-can-zoomIn"
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                <ul className="gallery_grid">
                  <li className="grid_el">
                    <figure>
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/3.jpg"
                        alt=""
                      />
                      <div className="hover_btn">
                        <Link
                          data-fancybox="gallery"
                          to="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/3.jpg"
                        >
                          +
                        </Link>
                      </div>
                    </figure>
                  </li>
                  <li className="grid_el">
                    <figure>
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/4.jpg"
                        alt=""
                      />
                      <div className="hover_btn">
                        <Link
                          data-fancybox="gallery"
                          to="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/4.jpg"
                        >
                          +
                        </Link>
                      </div>
                    </figure>
                  </li>
                  <li className="grid_el">
                    <figure>
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/5.jpg"
                        alt=""
                      />
                      <div className="hover_btn">
                        <Link
                          data-fancybox="gallery"
                          to="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/5.jpg"
                        >
                          +
                        </Link>
                      </div>
                    </figure>
                  </li>
                  <li className="grid_el">
                    <figure>
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/6.jpg"
                        alt=""
                      />
                      <div className="hover_btn">
                        <Link
                          data-fancybox="gallery"
                          to="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/details/6.jpg"
                        >
                          +
                        </Link>
                      </div>
                    </figure>
                  </li>
                </ul>
              </Fancybox>
            </figure>
            <div className="last_texts">
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p>
                You don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events. Click on the images below to
                learn more below about the impact our projects have on
                communities.
              </p>
            </div>
            <div className="post_end">
              <div className="scroll_field">
                <div className="details_link prev_arrow">
                  <Link to="#">
                    <span className="link_animation">
                      <span className="line"></span>
                      <span className="circle"></span>
                      <span className="dot"></span>
                    </span>
                  </Link>
                </div>
                <div className="all_pages">
                  <Link to="#">
                    <Icon icon="bi:grid" />
                  </Link>
                </div>
                <div className="details_link next_arrow">
                  <Link to="#">
                    <span className="link_animation">
                      <span className="line"></span>
                      <span className="circle"></span>
                      <span className="dot"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="related_projects">
              <h6>
                MORE PROJECTS <span className="anim_line"></span>
              </h6>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="simple_card">
                    <div className="card_pic">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="card_texts">
                      <h5>
                        <Link to="/project-details">
                          California young menz club
                        </Link>
                      </h5>
                      <h6>
                        <Link to="#">CLUB HOUSE</Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="simple_card">
                    <div className="card_pic">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="card_texts">
                      <h5>
                        <Link to="/project-details">
                          Montana young rest club
                        </Link>
                      </h5>
                      <h6>
                        <Link to="#">CLUB HOUSE,</Link>{" "}
                        <Link to="#">INTERIOR</Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="simple_card">
                    <div className="card_pic">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/portfolio/3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="card_texts">
                      <h5>
                        <Link to="/project-details">
                          Seattle main business center
                        </Link>
                      </h5>
                      <h6>
                        <Link to="#">CLUB HOUSE,</Link>{" "}
                        <Link to="#">INTERIOR</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 px_0">
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
