import React from "react";
import "../ContactUs/ContactUs.scss";
import PartnerDark1 from "../../../../assets/partner_dark1.svg";
import PartnerDark2 from "../../../../assets/partner_dark2.svg";
import PartnerDark3 from "../../../../assets/partner_dark3.svg";
import PartnerDark4 from "../../../../assets/partner_dark4.svg";
import PartnerDark5 from "../../../../assets/partner_dark5.svg";
import PartnerOlive1 from "../../../../assets/partner_olive1.svg";
import PartnerOlive2 from "../../../../assets/partner_olive2.svg";
import PartnerOlive3 from "../../../../assets/partner_olive3.svg";
import PartnerOlive4 from "../../../../assets/partner_olive4.svg";
import PartnerOlive5 from "../../../../assets/partner_olive5.svg";

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
            <img src={PartnerDark1} alt="" />
            <img src={PartnerOlive1} alt="" />
          </div>
          <div className="partner_logo">
            <img src={PartnerDark2} alt="" />
            <img src={PartnerOlive2} alt="" />
          </div>
          <div className="partner_logo">
            <img src={PartnerDark3} alt="" />
            <img src={PartnerOlive3} alt="" />
          </div>
          <div className="partner_logo">
            <img src={PartnerDark4} alt="" />
            <img src={PartnerOlive4} alt="" />
          </div>
          <div className="partner_logo">
            <img src={PartnerDark5} alt="" />
            <img src={PartnerOlive5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
