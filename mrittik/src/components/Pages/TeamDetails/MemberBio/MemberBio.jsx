import React from "react";
import "../MemberBio/MemberBio.scss";
import MemberBioImg from "../../../../assets/team6.jpg";
import Work1 from "../../../../assets/work1.jpg";
import Work2 from "../../../../assets/work2.jpg";
import Work3 from "../../../../assets/work3.jpg";
import Work4 from "../../../../assets/work4.jpg";
import Work5 from "../../../../assets/work5.jpg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const MemberBio = () => {
  return (
    <section className="memberbio_section">
      <div className="container px_5">
        <div className="row px_5">
          <div className="col-xl-7 col-lg-7 col-md-7 pe-lg-5 pxs_0">
            <div className="bio_image">
              <img src={MemberBioImg} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 ps-lg-0 pxs_0">
            <div className="bio_information">
              <h3>Ellen Johansen</h3>
              <h5>ARCHITECT</h5>
              <div className="about_me">
                At vero eos et accusamus et iusto odio digni is simos ducimus
                qui blanditiis praesentium volu ptatum dele niti atque corryi
                upti quos. dolores et quas molestias. At vero eos et accusamus
                et iusto.
              </div>
              <div className="member_socialmedia">
                <ul>
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
              <div className="edu_qualify">
                <h6>
                  EDUCATION & QUALIFICATION<span className="anim_line"></span>
                </h6>
                <ul className="achieve_points">
                  <li>
                    <Icon icon="mdi:check-all" />
                    Graduation In Architecture From <span>YALE University</span>
                  </li>
                  <li>
                    <Icon icon="mdi:check-all" />
                    Post Graduation In Architecture from{" "}
                    <span>YALE University</span>
                  </li>
                  <li>
                    <Icon icon="mdi:check-all" />
                    Diploma In Landscape Design From <span>JNU</span>
                  </li>
                </ul>
              </div>
              <div className="edu_qualify">
                <h6>
                  AWARDS<span className="anim_line"></span>
                </h6>
                <ul className="achieve_points">
                  <li>
                    <Icon icon="mdi:check-all" />
                    Best Design Award 2022 Best
                  </li>
                  <li>
                    <Icon icon="mdi:check-all" />
                    Design Award 2021
                  </li>
                  <li>
                    <Icon icon="mdi:check-all" />
                    Best Design Award 2020
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="their_projects">
          <div className="row px_5">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 prxs_12">
              <div className="col_adapt">
                <h6>
                  LATEST PROJECTS<span className="anim_line"></span>
                </h6>
                <div className="projects_paragraph">
                  At vero eos et accusamus et iusto odio digni is simos ducimus
                  qui blanditiis praesentium volu ptatum dele niti atque corryi
                  upti quos. dolores et quas molestias. At vero eos et accusamus
                  et iusto.
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 plxs_12">
              <div className="project_img">
                <Link to="/project-details">
                  <img src={Work1} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 prxs_12">
              <div className="project_img">
                <Link to="/project-details">
                  <img src={Work2} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 plxs_12">
              <div className="project_img">
                <Link to="/project-details">
                  <img src={Work3} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 prxs_12">
              <div className="project_img">
                <Link to="/project-details">
                  <img src={Work4} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 plxs_12">
              <div className="project_img">
                <Link to="/project-details">
                  <img src={Work5} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_topspace">
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
    </section>
  );
};

export default MemberBio;
