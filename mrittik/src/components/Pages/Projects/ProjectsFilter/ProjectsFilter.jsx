import React, { useEffect, useState } from "react";
import "../ProjectsFilter/ProjectsFilter.scss";
import Data from "../../../../Mock/MockData";
import FilterBtns from "../../../FilterBtns/FilterBtns";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const ProjectsFilter = () => {
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
    <section className="projectsfilter_section">
      <div className="container position-relative px_5">
        <FilterBtns
          project={project}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
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
                              <Link to="/project-details">{element.name}</Link>
                            </h5>
                            <div className="details_link">
                              <Link to="/project-details">
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
                              <Link to="/project-details">{element.name}</Link>
                            </h5>
                            <div className="details_link">
                              <Link to="/project-details">
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
              <div className="col-xl-12 px_4">
                <div className="load_more_field">
                  <button
                    className="load_more_btn"
                    onClick={() => setShowmore(!showmore)}
                  >
                    {showmore ? "LOAD MORE" : "LOAD LESS"}
                  </button>
                </div>
              </div>
            ) : null}
          </AnimatePresence>
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

export default ProjectsFilter;
