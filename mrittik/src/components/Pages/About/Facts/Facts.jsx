import React from "react";
import "../Facts/Facts.scss";
import SectionBg from "../../../../assets/section-bg-1.jpg";
import FactIcon1 from "../../../../assets/fact1.png";
import FactIcon2 from "../../../../assets/fact2.png";
import FactIcon3 from "../../../../assets/fact3.png";
import FactIcon4 from "../../../../assets/fact4.png";

const Facts = () => {
  return (
    <section
      className="facts_section"
      style={{
        backgroundImage: `url(${SectionBg})`,
      }}
    >
      <div className="container px_5">
        <div className="row px_5">
          <div className="col px-0">
            <div className="achivements_inner">
              <div className="achievement1">
                <div className="achive_img">
                  <img src={FactIcon1} alt="" />
                </div>
                <div className="achive_texts">
                  <p>DESIGN DRAWING</p>
                  <div className="d-flex align-items-center">
                    <h2>120</h2>
                  </div>
                </div>
              </div>
              <div className="achievement1">
                <div className="achive_img">
                  <img src={FactIcon2} alt="" />
                </div>
                <div className="achive_texts">
                  <p>PROJECT COMPLETED</p>
                  <div className="d-flex align-items-center">
                    <h2>210+</h2>
                  </div>
                </div>
              </div>
              <div className="achievement1">
                <div className="achive_img">
                  <img src={FactIcon3} alt="" />
                </div>
                <div className="achive_texts">
                  <p>DESIGN AWARD</p>
                  <div className="d-flex align-items-center">
                    <h2>15</h2>
                  </div>
                </div>
              </div>
              <div className="achievement1">
                <div className="achive_img">
                  <img src={FactIcon4} alt="" />
                </div>
                <div className="achive_texts">
                  <p>PROJECT RUNNING</p>
                  <div className="d-flex align-items-center">
                    <h2>62</h2>
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

export default Facts;
