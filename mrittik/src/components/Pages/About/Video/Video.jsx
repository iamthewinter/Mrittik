import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Video/Video.scss";
import { Icon } from "@iconify/react";
const Video = () => {
  const [press, setPress] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="video_container" data-aos="zoom-in" data-aos-duration="500">
      <div className="container px_5">
        <div className="video_post px_5">
          <div className="ytube_video">
            <iframe
              className={press ? "showvideo" : null}
              src="https://www.youtube.com/embed/uxM_Q3lO2nk?start=27"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="cover_content">
              <div
                className={press ? "play_button btn_none" : "play_button"}
                onClick={() => setPress(!press)}
              >
                <Icon icon="ph:play-fill" />
              </div>
              <img
                src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/bg/video_bg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
