import React from "react";
import "../ErrorContent/ErrorContent.scss";
// import {Link} from "react-router-dom"

const ErrorContent = () => {
  return (
    <section className="errorcontent_section">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="error_inner">
              <h2>404</h2>
              <h3>PAGE NOT FOUND</h3>
              <p>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              {/* <div className="btn_group">
                                <Link to="/">BACK TO HOME PAGE</Link>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorContent;
