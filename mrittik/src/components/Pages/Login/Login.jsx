import React, { useState, useEffect } from "react";
import LoginHeading from "./LoginHeading/LoginHeading";
import "../Login/Login.scss";
import LoginForm from "./LoginForm/LoginForm";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          className="login_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
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
        </motion.div>
      )}
    </>
  );
};

export default Login;
