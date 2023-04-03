import React, { useEffect, useState } from "react";
import "../GalleryIsotope/GalleryIsotope.scss";
import Data from "../../../../Mock/MockData";
import FilterBtns from "../../../FilterBtns/FilterBtns";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const GalleryIsotope = () => {
  const [project, setProject] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [showmore, setShowmore] = useState(true);

  useEffect(() => {
    Filter();
  }, []);

  const Filter = () => {
    setProject(Data);
    setFiltered(Data);
  };
  return (
    <section className="sixth_section">
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
          GALLERY
        </h2>
      </div>
      <div className="container position-relative px_5">
        <div className="row margins">
          <div className="col-xl-12">
            <div className="central_texts">
              <h2>PROJECT GALLERY</h2>
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 text_end">
                  <p>
                    We will continue to grow and evolve Mrittik for the
                    betterment of our clients and our people. Vision includes
                    the continual expansion.
                  </p>
                </div>
                <div className="col-xl-6 text_start">
                  <p>
                    We will continue to grow and evolve Mrittik for the
                    betterment of our clients and our people. Vision includes
                    the continual expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FilterBtns
          project={project}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <div className="container">
          <div className="row px_3">
            <AnimatePresence>
              {showmore
                ? filtered.slice(0, 8).map((element, index) => (
                    <React.Fragment key={`data_id ${element.id}`}>
                      <motion.div
                        layout
                        animate={{ opacity: 1, scale: 1, translateY: 0 }}
                        initial={{ opacity: 0, scale: 0, translateY: -100 }}
                        exit={{ opacity: 0, scale: 0, translateY: -100 }}
                        transition={{ duration: 0.5 }}
                        className={`g-5 ${element.class}`}
                      >
                        <div className="filter_image">
                          <img src={element.image} alt="" />
                          <div className="works_info">
                            <div className="banner_texts">
                              <h6>
                                <Link to="#">{element.division}</Link>
                              </h6>
                              <h5>
                                <Link to="#">{element.name}</Link>
                              </h5>
                              <div className="details_link">
                                <Link to="#">
                                  <span className="details_text">
                                    VIEW DETAILS
                                  </span>
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
                      </motion.div>
                    </React.Fragment>
                  ))
                : filtered.map((element, index) => (
                    <React.Fragment key={`data_id ${element.id}`}>
                      <motion.div
                        layout
                        animate={{ opacity: 1, scale: 1, translateY: 0 }}
                        initial={{ opacity: 0, scale: 0, translateY: -100 }}
                        exit={{ opacity: 0, scale: 0, translateY: -100 }}
                        transition={{ duration: 0.5 }}
                        className={`g-5 ${element.class}`}
                      >
                        <div className="filter_image">
                          <img src={element.image} alt="" />
                          <div className="works_info">
                            <div className="banner_texts">
                              <h6>
                                <Link to="#">{element.division}</Link>
                              </h6>
                              <h5>
                                <Link to="#">{element.name}</Link>
                              </h5>
                              <div className="details_link">
                                <Link to="#">
                                  <span className="details_text">
                                    VIEW DETAILS
                                  </span>
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
                      </motion.div>
                    </React.Fragment>
                  ))}
              {activeGenre === 0 && showmore ? (
                <div className="col-xl-12 px_4 mt-5">
                  <div
                    className="load_more_btn"
                    onClick={() => setShowmore(!showmore)}
                  >
                    {showmore ? "SHOW MORE PROJECTS" : "SHOW LESS PROJECTS"}
                  </div>
                </div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryIsotope;
