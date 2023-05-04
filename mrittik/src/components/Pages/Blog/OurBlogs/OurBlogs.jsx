import React from "react";
import { Link } from "react-router-dom";
import "../OurBlogs/OurBlogs.scss";
import { Icon } from "@iconify/react";

import BgImg1 from "../../../../assets/blog1.jpg";
import BgImg2 from "../../../../assets/blog2.jpg";
import BgImg3 from "../../../../assets/blog3.jpg";
import BgImg4 from "../../../../assets/bg-4.jpg";
import BgImg5 from "../../../../assets/bg-5.jpg";
import BgImg6 from "../../../../assets/bg-6.jpg";
const OurBlogs = () => {
  return (
    <section className="ourblogs_section">
      <div className="container">
        <div className="row px_5">
          <div className="col-xl-4 col-lg-6 col-md-6 px_12">
            <div className="blog_post">
              <img src={BgImg1} alt="" />
              <div className="blog_content">
                <h2>01</h2>
                <div className="dates">
                  <span className="post_time">OCTOBER 20, 2022</span>
                </div>
                <h5>
                  <Link to="/blog">
                    Recent trends in designing space interiors 2019
                  </Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consecteur adipiscing elitsed do
                  eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad
                  minim veniam dolor sit amet consecteur.....
                </p>
                <div className="details_link">
                  <Link to="/blog">
                    <span className="details_text">VIEW DETAILS</span>
                    <span className="link_animation">
                      <span className="line"></span>
                      <span className="circle"></span>
                      <span className="dot"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 px_12">
            <div className="blog_post">
              <img src={BgImg2} alt="" />
              <div className="blog_content">
                <h2>02</h2>
                <div className="dates">
                  <span className="post_time">OCTOBER 20, 2022</span>
                </div>
                <h5>
                  <Link to="/blog">
                    Space optimization is now considered as art
                  </Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consecteur adipiscing elitsed do
                  eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad
                  minim veniam dolor sit amet consecteur.....
                </p>
                <div className="details_link">
                  <Link to="/blog">
                    <span className="details_text">VIEW DETAILS</span>
                    <span className="link_animation">
                      <span className="line"></span>
                      <span className="circle"></span>
                      <span className="dot"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 px_12">
            <div className="blog_post">
              <img src={BgImg3} alt="" />
              <div className="blog_content">
                <h2>03</h2>
                <div className="dates">
                  <span className="post_time">OCTOBER 20, 2022</span>
                </div>
                <h5>
                  <Link to="/blog">
                    Aga khan Award , 2019 see the best shots
                  </Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consecteur adipiscing elitsed do
                  eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad
                  minim veniam dolor sit amet consecteur.....
                </p>
                <div className="details_link">
                  <Link to="/blog">
                    <span className="details_text">VIEW DETAILS</span>
                    <span className="link_animation">
                      <span className="line"></span>
                      <span className="circle"></span>
                      <span className="dot"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 px_12">
            <div className="blog_post">
              <img src={BgImg4} alt="" />
              <div className="blog_content">
                <h2>04</h2>
                <div className="dates">
                  <span className="post_time">OCTOBER 20, 2022</span>
                </div>
                <h5>
                  <Link to="/blog">
                    Space optimization is now considered as art
                  </Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consecteur adipiscing elitsed do
                  eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad
                  minim veniam dolor sit amet consecteur.....
                </p>
                <div className="details_link">
                  <Link to="/blog">
                    <span className="details_text">VIEW DETAILS</span>
                    <span className="link_animation">
                      <span className="line"></span>
                      <span className="circle"></span>
                      <span className="dot"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 px_12">
            <div className="blog_post">
              <img src={BgImg5} alt="" />
              <div className="blog_content">
                <h2>05</h2>
                <div className="dates">
                  <span className="post_time">OCTOBER 20, 2022</span>
                </div>
                <h5>
                  <Link to="/blog">
                    Aga khan Award , 2019 see the best shots
                  </Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consecteur adipiscing elitsed do
                  eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad
                  minim veniam dolor sit amet consecteur.....
                </p>
                <div className="details_link">
                  <Link to="/blog">
                    <span className="details_text">VIEW DETAILS</span>
                    <span className="link_animation">
                      <span className="line"></span>
                      <span className="circle"></span>
                      <span className="dot"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 px_12">
            <div className="blog_post">
              <img src={BgImg6} alt="" />
              <div className="blog_content">
                <h2>06</h2>
                <div className="dates">
                  <span className="post_time">OCTOBER 20, 2022</span>
                </div>
                <h5>
                  <Link to="/blog">
                    Recent trends in designing space interiors 2019
                  </Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consecteur adipiscing elitsed do
                  eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad
                  minim veniam dolor sit amet consecteur.....
                </p>
                <div className="details_link">
                  <Link to="/blog">
                    <span className="details_text">VIEW DETAILS</span>
                    <span className="link_animation">
                      <span className="line"></span>
                      <span className="circle"></span>
                      <span className="dot"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="pagination_div">
              <ul>
                <li>
                  <Link to="#" className="current_page">
                    01
                  </Link>
                </li>
                <li>
                  <Link to="#">02</Link>
                </li>
                <li>...</li>
                <li>
                  <Link to="#">10</Link>
                </li>
                <li>
                  <Link to="#">
                    <Icon icon="bi:chevron-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="separating_footerspace">
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

export default OurBlogs;
