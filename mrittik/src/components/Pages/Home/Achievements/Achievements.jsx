import React from "react";
import "./Achievements.scss";
const Achievements = () => {
  return (
    <section
      className="fourth_section"
      style={{
        backgroundImage: `url("https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/bg/bg-1.jpg")`,
      }}
    >
      <div className="container px_5">
        <div className="row px_5">
          <div className="col px-0">
            <div className="achivements_inner">
              <div className="achievement1">
                <div className="achive_img">
                  <img
                    src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/fact-1.png"
                    alt=""
                  />
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
                  <img
                    src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/fact-2.png"
                    alt=""
                  />
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
                  <img
                    src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/fact-3.png"
                    alt=""
                  />
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
                  <img
                    src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/fact-4.png"
                    alt=""
                  />
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
