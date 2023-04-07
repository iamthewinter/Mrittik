import React from "react";
import LoginHeading from "./LoginHeading/LoginHeading";
import "../Login/Login.scss";
import LoginForm from "./LoginForm/LoginForm";
const Login = () => {
  return (
    <div className="login_main">
      <LoginHeading />
      <LoginForm />
      <div className="loginpage_backimage"></div>
      <ul className="net_lines justify-content-between">
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
        <li className="animated_line"></li>
      </ul>
    </div>
  );
};

export default Login;
