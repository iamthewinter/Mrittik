import React from "react";
import Logo from "../../../assets/logo-dark.svg";
import "../Navbar/Nav.scss";
import { Icon } from "@iconify/react";
const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="row px-5 justify-content-between text-align-center">
          <div className="col-xl-2">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="col_adapter">
              <ul>
                <li>
                  <span>HOME</span>
                  <Icon icon="mdi-light:chevron-down" />
                </li>
                <li>
                  <span>GALLERY</span>
                  <Icon icon="mdi-light:chevron-down" />
                </li>
                <li>
                  <span>PAGES</span>
                  <Icon icon="mdi-light:chevron-down" />
                </li>
                <li>
                  <span>CONTACTS</span>
                </li>
                <li>
                  <span>BLOG</span>
                  <Icon icon="mdi-light:chevron-down" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="right_nav">
              <button className="info_popup">
                <Icon icon="ri:menu-3-fill" />
              </button>
              <div className="nav_search">
                <Icon icon="bi:search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
