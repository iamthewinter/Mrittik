import React from "react";
import "../OurTeam/OurTeam.scss";
import { Link } from "react-router-dom";

export const team = [
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/1.jpg",
    name: "Michel Robertson",
  },
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/2.jpg",
    name: "Mellisa Johansen",
  },
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/3.jpg",
    name: "Dave Crossby",
  },
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/4.jpg",
    name: "Hazel R. Grace",
  },
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/5.jpg",
    name: "Benjamin Brook",
  },
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/6.jpg",
    name: "Ellen Johansen",
  },
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/7.jpg",
    name: "Garrison Gardner",
  },
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/8.jpg",
    name: "Ashly Graham Zen",
  },
  {
    id: Math.floor(Math.random() * 1000),
    image:
      "https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/team/9.jpg",
    name: "Austin Gilbert",
  },
];

const OurTeam = () => {
  return (
    <section className="ourteam_section">
      <div className="container max_width970">
        <div className="section_heading">
          <h2>Meet Our Team</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-5">
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning & programming.
              </p>
            </div>
            <div className="col-xl-7 col-lg-7">
              <p>
                Mrittik Architects is a full-service design firm providing
                architecture, master planning, urban design interior
                architecture space planning & programming. Our portfolio of
                completed work includes highly acclaim
              </p>
            </div>
          </div>
        </div>
        <div className="team_members">
          <div className="row">
            {team.map((el) => (
              <React.Fragment key={`data_id ${el.id}`}>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="member_box">
                    <div className="member_image">
                      <img src={el.image} alt="" />
                    </div>
                    <h5>
                      <Link to="#">{el.name}</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
