import React, { useEffect } from "react";
import "../LetsDiscuss/LetsDiscuss.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const LetsDiscuss = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="letsdiscuss_section">
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
        <div className="our_partners">
          <div
            className="partner_logo"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/5.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/55.svg"
              alt=""
            />
          </div>
          <div
            className="partner_logo"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/2.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/22.svg"
              alt=""
            />
          </div>
          <div
            className="partner_logo"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/4.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/44.svg"
              alt=""
            />
          </div>
          <div
            className="partner_logo"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/1.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/11.svg"
              alt=""
            />
          </div>
          <div
            className="partner_logo"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/3.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/33.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsDiscuss;
