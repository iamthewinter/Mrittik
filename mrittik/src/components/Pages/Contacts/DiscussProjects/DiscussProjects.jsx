import React, { useEffect } from "react";
import "../DiscussProjects/DiscussProjects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const DiscussProjects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="discussproj_section">
      <div className="container position-relative px_5 z_index2">
        <div className="row justify-content-between px_5">
          <div
            className="col-xl-5 col-lg-5 px-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="section_heading">
              <h2>LET’S DISCUSS NEXT PROJECTS</h2>
              <p>
                The talent at Mrittik runs wide and deep. Across many markets,
                geographies and typologies, our team members are some of the
                finest professionals in the industry.. We’ve grouped our work
                into five categories: places, venues, spaces, experiences and
                events.
              </p>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 px-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="col_adaptor">
              <form>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="YOUR NAME"
                />
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="YOUR PHONE NO"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="YOUR EMAIL"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="YOUR MESSAGE"
                ></textarea>
                <div className="btn_area">
                  <button>SEND MAIL</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussProjects;
