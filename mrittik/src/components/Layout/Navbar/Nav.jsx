import React, { useEffect, useState } from "react";
import Logo1 from "../../../assets/logo-dark.svg";
import LogoDarkLarge from "../../../assets/logo-dark-lg.svg";
import "../Navbar/Nav.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [scale, setScale] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [carousel1, setCarousel1] = useState(false);
  const [carousel2, setCarousel2] = useState(false);
  const [carousel3, setCarousel3] = useState(false);
  const [carousel4, setCarousel4] = useState(false);
  const [lastcarousel1, setLastcarousel1] = useState(false);
  const [lastcarousel2, setLastcarousel2] = useState(false);
  const [lastcarousel3, setLastcarousel3] = useState(false);

  const [color, setColor] = useState(false);
  // const [hideNav, setHideNav]=useState(false)
  // const [ShowNav, setShowNav]=useState(false)
  // const currentScroll = window.pageYOffset
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
      // if (window.scrollY >= 700) {
      //   setHideNav(true)
      // } else{
      //   setHideNav(false)
      //   if(currentScroll<window.scrollY){
      //     setShowNav(true)
      //   }else{
      //     setShowNav(false)
      //   }
      // }
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  // useEffect(()=>{
  //   const handler = (e)=>{
  //       if (e.target) {
  //         setTranslate(false)
  //       }
  //   }
  //   document.addEventListener("mousedown", handler)
  // })
  return (
    <nav
      className={color ? "transparent_nav nav_scroll" : "transparent_nav"}
      // id={hideNav ? "hide_nav" : ""}
    >
      <div className="container px_5">
        <div className="row px_5 justify-content-between align-items-center">
          <div className="col-xl-2 col-lg-2 col-6 px-0 media576">
            <div className="logo_black">
              <Link to="/">
                <img src={Logo1} alt="" />
              </Link>
            </div>
            {/* <div className="logo_light">
              <img src={Logo2} alt="" />
            </div> */}
          </div>
          <div className="col-xl-7 col-lg-7 px-0 midnav_none">
            <div className="col_adapter">
              <ul className="main_nav_list">
                <li className="main_nav_heading">
                  <div className="link_holder">
                    <span>
                      <Link to="/">HOME</Link>
                    </span>
                    <Icon icon="mdi-light:chevron-down" />
                  </div>
                  <ul className="rest_menu">
                    <li className="rest_pages">
                      <span>
                        <Link to="/">HOME ONE</Link>
                      </span>
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
                      <span>
                        <Link to="/projects">PROJECTS ONE</Link>
                      </span>
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
                      <span>
                        <Link to="/project-details">PROJECTS DETAILS TWO</Link>
                      </span>
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
                      <span>
                        <Link to="/about">ABOUT US</Link>
                      </span>
                    </li>
                    <li className="rest_pages">
                      <div className="third_level_head">
                        <span>TEAM</span>
                        <Icon icon="bi:chevron-right" />
                      </div>
                      <ul className="third_lvl_menu">
                        <li className="rest_pages1">
                          <span>
                            <Link to="/team">OUR TEAM</Link>
                          </span>
                        </li>
                        <li className="rest_pages1">
                          <span>
                            <Link to="/team-details">TEAM DETAILS</Link>
                          </span>
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
                          <span>
                            <Link to="/service">SERVICE TWO</Link>
                          </span>
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
                          <span>
                            <Link to="/login">LOGIN</Link>
                          </span>
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
                    <span>
                      <Link to="/contacts">CONTACTS</Link>
                    </span>
                  </div>
                </li>
                <li className="main_nav_heading">
                  <div className="link_holder">
                    <span>BLOG</span>
                    <Icon icon="mdi-light:chevron-down" />
                  </div>
                  <ul className="rest_menu">
                    <li className="rest_pages">
                      <span>
                        <Link to="/blog">BLOG</Link>
                      </span>
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
              <button className="info_btn" onClick={() => setScale(!scale)}>
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
              <div
                className="menu_bars"
                onClick={() => setTranslate(!translate)}
              >
                <Icon icon="ri:menu-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          scale ? "information_window active_info" : "information_window"
        }
      >
        <div className="close_field" onClick={() => setScale(!scale)}>
          <Icon icon="bytesize:close" />
        </div>
        <div className="logo_field">
          <div className="info_logo">
            <Link to="/">
              <img src={LogoDarkLarge} alt="" />
            </Link>
          </div>
        </div>
        <p>
          Mrittik Architects is a full-service design firm providing
          architecture architecture.
        </p>
        <div className="info_texts">
          <h5>Contact Info</h5>
          <p>+123 456 789 33</p>
          <p>
            3 Madison Street, NY
            <br />
            United States of America
          </p>
          <p>mrittikarch@gmail.com</p>
          <h5>Office Address</h5>
          <p>
            +Time Square, New York
            <br />
            USA, 3454
          </p>
          <ul className="social_media">
            <li className="socialsite">
              <Icon icon="mdi:facebook" />
            </li>
            <li className="socialsite">
              <Icon icon="mdi:twitter" />
            </li>
            <li className="socialsite">
              <Icon icon="mdi:instagram" />
            </li>
            <li className="socialsite">
              <Icon icon="mdi:youtube" />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={translate ? "mobile_nav_menu showing" : "mobile_nav_menu"}
      >
        <div className="menu_head">
          <div className="close_btn" onClick={() => setTranslate(!translate)}>
            <Icon icon="vaadin:close" />
          </div>
          <div className="big_logo">
            <Link to="/">
              {" "}
              <img src={LogoDarkLarge} alt="" />
            </Link>
          </div>
        </div>
        <div className="menu_pannel">
          <ul
            className={
              carousel1 || carousel2 || carousel3 || carousel4
                ? "mobile_list replace"
                : "mobile_list"
            }
          >
            <li className="mobile_li">
              <div className="link_place">
                <Link to="/">Home</Link>
              </div>
              <span
                className="link_span"
                onClick={() => setCarousel1(!carousel1)}
              >
                <Icon icon="bi:chevron-right" />
              </span>
            </li>
            <li className="mobile_li">
              <div className="link_place">Gallery</div>
              <span
                className="link_span"
                onClick={() => setCarousel2(!carousel2)}
              >
                <Icon icon="bi:chevron-right" />
              </span>
            </li>
            <li className="mobile_li">
              <div className="link_place">Pages</div>
              <span
                className="link_span"
                onClick={() => setCarousel3(!carousel3)}
              >
                <Icon icon="bi:chevron-right" />
              </span>
            </li>
            <li className="mobile_li">
              <div className="link_place">
                <Link to="/contacts">Contacts</Link>
              </div>
            </li>
            <li className="mobile_li">
              <div className="link_place">Blog</div>
              <span
                className="link_span"
                onClick={() => setCarousel4(!carousel4)}
              >
                <Icon icon="bi:chevron-right" />
              </span>
            </li>
          </ul>
          <ul className={carousel1 ? "mobile_lvl2 moving" : "mobile_lvl2"}>
            <li
              className="mobile_lvl2_head"
              onClick={() => setCarousel1(!carousel1)}
            >
              <div className="icon_return">
                <Icon icon="bi:chevron-left" />
              </div>
              <div className="lvl_name">HOME</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/">Home One</Link>
              </div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Home Two</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Home Three</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Home Four</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Home Five</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Home Six</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Home Seven</div>
            </li>
          </ul>
          <ul className={carousel2 ? "mobile_lvl2 moving" : "mobile_lvl2"}>
            <li
              className="mobile_lvl2_head"
              onClick={() => setCarousel2(!carousel2)}
            >
              <div className="icon_return">
                <Icon icon="bi:chevron-left" />
              </div>
              <div className="lvl_name">GALLERY</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/projects">Projects One</Link>
              </div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Projects Two</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Projects Three</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Project Details</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/project-details">Project Details Two</Link>
              </div>
            </li>
          </ul>
          <ul
            className={carousel3 ? "mobile_lvl2 moving" : "mobile_lvl2"}
            id={lastcarousel1 || lastcarousel2 || lastcarousel3 ? "lvl3" : ""}
          >
            <li
              className="mobile_lvl2_head"
              onClick={() => setCarousel3(!carousel3)}
            >
              <div className="icon_return">
                <Icon icon="bi:chevron-left" />
              </div>
              <div className="lvl_name">PAGES</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/about">About Us</Link>
              </div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Team</div>
              <span
                className="link_span"
                onClick={() => setLastcarousel1(!lastcarousel1)}
              >
                <Icon icon="bi:chevron-right" />
              </span>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Services</div>
              <span
                className="link_span"
                onClick={() => setLastcarousel2(!lastcarousel2)}
              >
                <Icon icon="bi:chevron-right" />
              </span>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Shop</div>
              <span
                className="link_span"
                onClick={() => setLastcarousel3(!lastcarousel3)}
              >
                <Icon icon="bi:chevron-right" />
              </span>
            </li>
            <li className="mobile_li2">
              <div className="link_place">404 Page</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Coming Soon</div>
            </li>
          </ul>
          <ul className={carousel4 ? "mobile_lvl2 moving" : "mobile_lvl2"}>
            <li
              className="mobile_lvl2_head"
              onClick={() => setCarousel4(!carousel4)}
            >
              <div className="icon_return">
                <Icon icon="bi:chevron-left" />
              </div>
              <div className="lvl_name">BLOG</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/blog">Blog</Link>
              </div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Blog Details</div>
            </li>
          </ul>
          <ul className={lastcarousel1 ? "mobile_lvl2 moving" : "mobile_lvl2"}>
            <li
              className="mobile_lvl2_head"
              onClick={() => setLastcarousel1(!lastcarousel1)}
            >
              <div className="icon_return">
                <Icon icon="bi:chevron-left" />
              </div>
              <div className="lvl_name">TEAM</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/team">Our Team</Link>
              </div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/team-details">Team Details</Link>
              </div>
            </li>
          </ul>
          <ul className={lastcarousel2 ? "mobile_lvl2 moving" : "mobile_lvl2"}>
            <li
              className="mobile_lvl2_head"
              onClick={() => setLastcarousel2(!lastcarousel2)}
            >
              <div className="icon_return">
                <Icon icon="bi:chevron-left" />
              </div>
              <div className="lvl_name">SERVICES</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Service One</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/service">Service Two</Link>
              </div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Service Details</div>
            </li>
          </ul>
          <ul className={lastcarousel3 ? "mobile_lvl2 moving" : "mobile_lvl2"}>
            <li
              className="mobile_lvl2_head"
              onClick={() => setLastcarousel3(!lastcarousel3)}
            >
              <div className="icon_return">
                <Icon icon="bi:chevron-left" />
              </div>
              <div className="lvl_name">SHOP</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Shop One</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Shop Two</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Shop Three</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Product Details</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Shop Cart</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">Checkout</div>
            </li>
            <li className="mobile_li2">
              <div className="link_place">
                <Link to="/login">Login</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
