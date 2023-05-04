import React from "react";
import "../TeamSwipe/TeamSwipe.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Team1 from "../../../../assets/team1.jpg";
import Team2 from "../../../../assets/team2.jpg";
import Team3 from "../../../../assets/team3.jpg";
import Team4 from "../../../../assets/team4.jpg";
import Team5 from "../../../../assets/team5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
const TeamSwipe = () => {
  // const options = {
  //     speed: 2000,
  //     max: 20,
  // };
  return (
    <section className="teamswipe_section">
      <div className="container px_5">
        <div className="section_heading">
          <h1>Our Team</h1>
        </div>
        <div className="row px_5">
          <div className="col-xl-12">
            <div className="swipe_container">
              <Swiper
                slidesPerView={3.4}
                centeredSlides={true}
                loop={true}
                speed={1500}
                navigation={true}
                grabCursor={true}
                modules={[Navigation]}
                className="swiper_field"
                breakpoints={{
                  1200: {
                    slidesPerView: 3.4,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team2} alt="" />
                    <h5>
                      <Link to="#">Mellisa Johansen</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team3} alt="" />
                    <h5>
                      <Link to="#">Dave Crossby</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team4} alt="" />
                    <h5>
                      <Link to="#">Hazel R. Grace</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team5} alt="" />
                    <h5>
                      <Link to="#">Benjamin Brook</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team1} alt="" />
                    <h5>
                      <Link to="#">Michel Robertson</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team2} alt="" />
                    <h5>
                      <Link to="#">Mellisa Johansen</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team3} alt="" />
                    <h5>
                      <Link to="#">Dave Crossby</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team4} alt="" />
                    <h5>
                      <Link to="#">Hazel R. Grace</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team5} alt="" />
                    <h5>
                      <Link to="#">Benjamin Brook</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="member_card">
                    <img src={Team1} alt="" />
                    <h5>
                      <Link to="#">Michel Robertson</Link>
                    </h5>
                    <h6>ARCHITECT</h6>
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

export default TeamSwipe;
