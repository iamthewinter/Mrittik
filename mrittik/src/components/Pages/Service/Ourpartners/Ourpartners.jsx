import React from "react";
import "../Ourpartners/Ourpartners.scss";
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
const Ourpartners = () => {
  return (
    <section className="ourpartners_section">
      <ul className="net_lines justify-content-between">
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
      </ul>
      <div className="container">
        <div className="our_partners px_5">
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

export default Ourpartners;
