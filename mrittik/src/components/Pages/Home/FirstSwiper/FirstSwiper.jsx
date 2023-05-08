import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../FirstSwiper/FirstSwiper.scss";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
import FirstSwiperImg from "../../../../assets/14.jpg";
import SecondSwiperImg from "../../../../assets/5.jpg";
import ThirdSwiperImg from "../../../../assets/8.jpg";
// import { Icon } from "@iconify/react";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
const FirstSwiper = () => {
  const options = {
    speed: 2000,
    max: 20,
  };
  return (
    <section className="first_section">
      <div className="section_under">
        <div className="container h-100 px-4">
          <div className="row h-100 px-4">
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation brdr_left"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_on">
        <div className="container px_5">
          <div className="row px_5">
            <div className="col-xl-12 px-0">
              <Swiper
                loop={true}
                spaceBetween={250}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                speed={1500}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper_element"
              >
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img src={FirstSwiperImg} alt="" />
                      <Tilt className="image_card" options={options}>
                        <h6>CONDOMINIUM</h6>
                        <h4>
                          <Link to="/project-details">
                            Montana young menz club in the city center
                          </Link>
                        </h4>
                        <Link to="/project-details" className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                          <span className="link_animation">
                            <span className="line"></span>
                            <span className="circle"></span>
                            <span className="dot"></span>
                          </span>
                        </Link>
                      </Tilt>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img src={SecondSwiperImg} alt="" />
                      <Tilt className="image_card" options={options}>
                        <h6>CONDOMINIUM</h6>
                        <h4>
                          <Link to="/project-details">
                            California winter condominium
                          </Link>
                        </h4>
                        <Link to="/project-details" className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                          <span className="link_animation">
                            <span className="line"></span>
                            <span className="circle"></span>
                            <span className="dot"></span>
                          </span>
                        </Link>
                      </Tilt>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img src={ThirdSwiperImg} alt="" />
                      <Tilt className="image_card" options={options}>
                        <h6>CONDOMINIUM</h6>
                        <h4>
                          <Link to="/project-details">
                            Find your own invintage lake house
                          </Link>
                        </h4>
                        <Link to="/project-details" className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                          <span className="link_animation">
                            <span className="line"></span>
                            <span className="circle"></span>
                            <span className="dot"></span>
                          </span>
                        </Link>
                      </Tilt>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="white_separator"></div>
    </section>
  );
};

export default FirstSwiper;
