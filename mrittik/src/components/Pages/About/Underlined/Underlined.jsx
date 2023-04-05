import React, { useEffect } from "react";
import "../Underlined/Underlined.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Underlined = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="underlined_section">
      <div className="container px_5">
        <div
          className="row justify-content-center px_5"
          data-aos="flip-up"
          data-aos-duration="500"
        >
          <div className="col-xl-11 p-lg-0">
            <p>
              we meet new people{" "}
              <span>
                <Link to="#">everyday</Link>
              </span>{" "}
              coming with{" "}
              <span>
                <Link to="#">
                  new dreams & hope our effort is to make them true
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Underlined;
