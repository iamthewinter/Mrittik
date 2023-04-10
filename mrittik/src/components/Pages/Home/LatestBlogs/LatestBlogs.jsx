import React from "react";
import "../LatestBlogs/LatestBlogs.scss";
import { Link } from "react-router-dom";
const LatestBlogs = () => {
  return (
    <section className="eighth_section">
      <div className="big_back_word">
        <h2
          className="aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          LATEST
        </h2>
      </div>
      <div className="container position-relative px_4">
        <div className="row margins">
          <div className="col-xl-12">
            <div className="central_texts">
              <h2>LATEST BLOGS</h2>
            </div>
          </div>
        </div>
        <div className="row px_5">
          <div className="col-xl-4 col-lg-6 col-md-6 px_12">
            <div className="blog_post">
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/blog/1.jpg"
                alt=""
              />
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
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/blog/2.jpg"
                alt=""
              />
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
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/blog/3.jpg"
                alt=""
              />
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
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
