import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../FirstSwiper/FirstSwiper.scss";
const FirstSwiper = () => {
  return (
    <section className="first_section">
      <div className="section_under">
        <div className="container h-100 px-4">
          <div className="row h-100 px-4">
            <div className="col-xl-2 px-0">
              <div className="col_adaptation brdr_left"></div>
            </div>
            <div className="col-xl-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 px-0">
              <div className="col_adaptation"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_on">
        <div className="container px-5">
          <div className="row px-5">
            <div className="col-xl-12 px-0">
              <Swiper
                loop={true}
                pagination={{
                  dynamicBullets: true,
                }}
                speed={3000}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/slider/14.jpg"
                        alt=""
                      />
                      <div className="image_card">
                        <h6>CONDOMINIUM</h6>
                        <h4>California young menz club in the city center</h4>
                        <div className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/slider/5.jpg"
                        alt=""
                      />
                      <div className="image_card">
                        <h6>CONDOMINIUM</h6>
                        <h4>California young menz club in the city center</h4>
                        <div className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/slider/8.jpg"
                        alt=""
                      />
                      <div className="image_card">
                        <h6>CONDOMINIUM</h6>
                        <h4>California young menz club in the city center</h4>
                        <div className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSwiper;
