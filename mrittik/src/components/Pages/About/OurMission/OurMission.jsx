import React from "react";
import OurMissionStyle from "../OurMission/OurMission.module.scss";
import AboutBigImage from "../../../../assets/about_bg.jpg";
const OurMission = () => {
  return (
    <section className={`mission_section ${OurMissionStyle.mission_section}`}>
      <div className={`container ${OurMissionStyle.px_5}`}>
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className={`page_heading ${OurMissionStyle.page_heading}`}>
              <h6>OUR MISSION</h6>
              <p>
                Our organizational sprit believes that where design meets
                passion & love with space, good architecture happens here
              </p>
            </div>
          </div>
        </div>
        <div className={`row ${OurMissionStyle.px_5}`}>
          <div className="col-xl-12 px-0">
            <div className={OurMissionStyle.hidden_line}>
              <img src={AboutBigImage} alt="" />
            </div>
          </div>
        </div>
        <div className={`row justify-content-center ${OurMissionStyle.px_5}`}>
          <div className="col-xl-4 col-lg-4 pe-lg-4">
            <div className={`col4_adapter ${OurMissionStyle.col4_adapter}`}>
              <h3>ARCHITECTURE IS WHERE WE BELONG</h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-lg-4">
            <div className={OurMissionStyle.col6_adapter}>
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients.
              </p>
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients.
              </p>
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
