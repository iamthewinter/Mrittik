import React from "react";
import "../LoginForm/LoginForm.scss";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <section className="loginform_section">
      <div className="container px_5">
        <div className="row px_5">
          <div className="col col-xl-8 col-lg-8 offset-lg-2 px-0">
            <div className="col_adapatation">
              <h2>
                LOGIN<span className="little_line"></span>
              </h2>
              <form>
                <div className="input_group">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="USERNAME OR EMAIL ADDRESS *"
                    required
                  />
                </div>
                <div className="input_group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="PASSWORD *"
                    required
                  />
                </div>
                <div className="input_group d-flex align-items-center mb-4">
                  <input type="checkbox" name="checkbox" id="checkbox1" />
                  <label htmlFor="checkbox">Remember Password</label>
                </div>
                <div className="btn_group">
                  <button>LOG IN</button>
                </div>
                <div className="input_group mt-4">
                  <label>
                    <Link to="#">Forgot Password</Link>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
