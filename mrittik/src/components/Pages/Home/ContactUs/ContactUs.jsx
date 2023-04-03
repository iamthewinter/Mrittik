import React from "react";
import "../ContactUs/ContactUs.scss";

const ContactUs = () => {
  return (
    <section className="nineth_section">
      <ul className="net_lines justify-content-between">
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
      </ul>
      <div className="container position-relative px_5">
        <div className="row justify-content-between px_5">
          <div className="col-xl-5 col-lg-5 px-0">
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
          <div className="col-xl-6 col-lg-6 px-0">
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
          <div className="partner_logo">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/5.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/55.svg"
              alt=""
            />
          </div>
          <div className="partner_logo">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/2.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/22.svg"
              alt=""
            />
          </div>
          <div className="partner_logo">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/4.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/44.svg"
              alt=""
            />
          </div>
          <div className="partner_logo">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/1.svg"
              alt=""
            />
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/partner/11.svg"
              alt=""
            />
          </div>
          <div className="partner_logo">
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

export default ContactUs;
