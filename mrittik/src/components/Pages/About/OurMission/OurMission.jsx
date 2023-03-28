import React from "react";
import OurMissionStyle from "../OurMission/OurMission.module.scss";
const OurMission = () => {
  return (
    <section className={OurMissionStyle.first_section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className={OurMissionStyle.page_heading}>
              <h6>OUR MISSION</h6>
              <p>
                Our organizational sprit believes that where design meets
                passion & love with space, good architecture happens here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
