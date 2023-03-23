import React, { useState } from "react";
import Logo from "../../../assets/logo-dark.svg";
import "../Navbar/Nav.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="container px_5">
        <div className="row px_5 justify-content-between align-items-center">
          <div className="col-xl-2 col-lg-2 col-6 px-0 media576">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 px-0 midnav_none">
            <div className="col_adapter">
              <ul className="main_nav_list">
                <li className="main_nav_heading">
                  <div className="link_holder">
                    <span>HOME</span>
                    <Icon icon="mdi-light:chevron-down" />
                  </div>
                  <ul className="rest_menu">
                    <li className="rest_pages">
                      <span>HOME ONE</span>
                    </li>
                    <li className="rest_pages">
                      <span>HOME TWO</span>
                    </li>
                    <li className="rest_pages">
                      <span>HOME THREE</span>
                    </li>
                    <li className="rest_pages">
                      <span>HOME FOUR</span>
                    </li>
                    <li className="rest_pages">
                      <span>HOME FIVE</span>
                    </li>
                    <li className="rest_pages">
                      <span>HOME SIX</span>
                    </li>
                    <li className="rest_pages">
                      <span>HOME SEVEN</span>
                    </li>
                  </ul>
                </li>
                <li className="main_nav_heading">
                  <div className="link_holder">
                    <span>GALLERY</span>
                    <Icon icon="mdi-light:chevron-down" />
                  </div>
                  <ul className="rest_menu">
                    <li className="rest_pages">
                      <span>PROJECTS ONE</span>
                    </li>
                    <li className="rest_pages">
                      <span>PROJECTS TWO</span>
                    </li>
                    <li className="rest_pages">
                      <span>PROJECTS THREE</span>
                    </li>
                    <li className="rest_pages">
                      <span>PROJECTS DETAILS</span>
                    </li>
                    <li className="rest_pages">
                      <span>PROJECTS DETAILS TWO</span>
                    </li>
                  </ul>
                </li>
                <li className="main_nav_heading">
                  <div className="link_holder">
                    <span>PAGES</span>
                    <Icon icon="mdi-light:chevron-down" />
                  </div>
                  <ul className="rest_menu">
                    <li className="rest_pages">
                      <span>ABOUT US</span>
                    </li>
                    <li className="rest_pages">
                      <div className="third_level_head">
                        <span>TEAM</span>
                        <Icon icon="bi:chevron-right" />
                      </div>
                      <ul className="third_lvl_menu">
                        <li className="rest_pages1">
                          <span>OUR TEAM</span>
                        </li>
                        <li className="rest_pages1">
                          <span>TEAM DETAILS</span>
                        </li>
                      </ul>
                    </li>
                    <li className="rest_pages">
                      <div className="third_level_head">
                        <span>SERVICES</span>
                        <Icon icon="bi:chevron-right" />
                      </div>
                      <ul className="third_lvl_menu">
                        <li className="rest_pages1">
                          <span>SERVICE ONE</span>
                        </li>
                        <li className="rest_pages1">
                          <span>SERVICE TWO</span>
                        </li>
                        <li className="rest_pages1">
                          <span>SERVICE DETAILS</span>
                        </li>
                      </ul>
                    </li>
                    <li className="rest_pages">
                      <div className="third_level_head">
                        <span>SHOP</span>
                        <Icon icon="bi:chevron-right" />
                      </div>
                      <ul className="third_lvl_menu">
                        <li className="rest_pages1">
                          <span>SHOP ONE</span>
                        </li>
                        <li className="rest_pages1">
                          <span>SHOP TWO</span>
                        </li>
                        <li className="rest_pages1">
                          <span>SHOP THREE</span>
                        </li>
                        <li className="rest_pages1">
                          <span>PRODUCT DETAILS</span>
                        </li>
                        <li className="rest_pages1">
                          <span>SHOP CART</span>
                        </li>
                        <li className="rest_pages1">
                          <span>CHECKOUT</span>
                        </li>
                        <li className="rest_pages1">
                          <span>LOGIN</span>
                        </li>
                      </ul>
                    </li>
                    <li className="rest_pages">
                      <span>404 PAGE</span>
                    </li>
                    <li className="rest_pages">
                      <span>COMING SOON</span>
                    </li>
                  </ul>
                </li>
                <li className="main_nav_heading">
                  <div className="link_holder">
                    <span>CONTACTS</span>
                  </div>
                </li>
                <li className="main_nav_heading">
                  <div className="link_holder">
                    <span>BLOG</span>
                    <Icon icon="mdi-light:chevron-down" />
                  </div>
                  <ul className="rest_menu">
                    <li className="rest_pages">
                      <span>BLOG</span>
                    </li>
                    <li className="rest_pages">
                      <span>BLOG DETAILS</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-6 px-0 media576">
            <div className="right_nav">
              <button className="info_popup">
                <Icon icon="ri:menu-3-fill" />
              </button>
              <div className="nav_search" onClick={() => setShow(!show)}>
                <Icon icon="bi:search" />
              </div>
              <div className={show ? "search_popup active" : "search_popup"}>
                <form className="search_form">
                  <input type="text" name="search" placeholder="SEARCH..." />
                  <button className="search_btn">
                    <Icon icon="bi:search" />
                  </button>
                </form>
              </div>
              <div className="menu_bars">
                <Icon icon="ri:menu-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
