import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.scss";
import Home from "./components/Pages/Home/Home";
// import { Icon } from "@iconify/react";
import DarkMode from "./components/DarkMode/DarkMode";
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 7,
      y: mousePosition.y - 7,
    },
  };
  return (
    <div className="App">
      <Home />
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      ></motion.div>
      <DarkMode />
    </div>
  );
}

export default App;
