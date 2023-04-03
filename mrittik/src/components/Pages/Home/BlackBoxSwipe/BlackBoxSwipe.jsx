import React from "react";
import "../BlackBoxSwipe/BlackBoxSwipe.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import "../FirstSwiper/FirstSwiper.scss";
const BlackBoxSwipe = () => {
  return (
    <section className="seventh_section">
      <ul className="net_lines justify-content-between">
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
      </ul>
      <div className="short_line"></div>
      <div className="black_box">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <Swiper
              loop={true}
              spaceBetween={250}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              speed={2000}
              modules={[Pagination]}
              className="swiper_element"
            >
              <SwiperSlide>
                <div className="swipe_item">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ulla"
                  </p>
                  <h6>MAX construction agency, LA</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe_item">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ulla"
                  </p>
                  <h6>MAX construction agency, LA</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe_item">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ulla"
                  </p>
                  <h6>MAX construction agency, LA</h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackBoxSwipe;
