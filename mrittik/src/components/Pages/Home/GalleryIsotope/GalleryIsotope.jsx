import React from "react";
import "../GalleryIsotope/GalleryIsotope.scss";
const GalleryIsotope = () => {
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
      <div className="container position-relative px-5">
        <div className="row margins">
          <div className="col-xl-12">
            <div className="central_texts">
              <h2>PROJECT GALLERY</h2>
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 text-end">
                  <p>
                    We will continue to grow and evolve Mrittik for the
                    betterment of our clients and our people. Vision includes
                    the continual expansion.
                  </p>
                </div>
                <div className="col-xl-6 text-start">
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
        <div className="row justify-content-center margin_btn">
          <div className="col-xl-6">
            <div className="isotope_btns">
              <button>
                ALL<sup>11</sup>
              </button>
              <button>
                EXTERIOR<sup>3</sup>
              </button>
              <button>
                RESIDENCES<sup>3</sup>
              </button>
              <button>
                INTERIORS<sup>4</sup>
              </button>
              <button>
                LANDSCAPE<sup>3</sup>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryIsotope;
