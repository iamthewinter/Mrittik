import React from "react";
import "../GMap/Gmap.scss";
const GMap = () => {
  return (
    <section className="map_section">
      <div className="map_box" data-aos="zoom-in" data-aos-duration="1000">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="This is a unique title"
              id="gmap_iframe"
              src="https://maps.google.com/maps?q=London&t=&z=15&ie=UTF8&iwloc=&output=embed"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GMap;
