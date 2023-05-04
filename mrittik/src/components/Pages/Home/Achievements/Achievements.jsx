import React from "react";
import "./Achievements.scss";
import AchiveBackImg from "../../../../assets/section-bg-1.jpg";
import Fact1 from "../../../../assets/fact1.png";
import Fact2 from "../../../../assets/fact2.png";
import Fact3 from "../../../../assets/fact3.png";
import Fact4 from "../../../../assets/fact4.png";
const Achievements = () => {
  return (
    <section
      className="fourth_section"
      style={{
        backgroundImage: `url(${AchiveBackImg})`,
      }}
    >
      <div className="container px_5">
        <div className="row px_5">
          <div className="col px-0">
            <div className="achivements_inner">
              <div className="achievement1">
                <div className="achive_img">
                  <img src={Fact1} alt="" />
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
                  <img src={Fact2} alt="" />
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
                  <img src={Fact3} alt="" />
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
                  <img src={Fact4} alt="" />
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

export default Achievements;
