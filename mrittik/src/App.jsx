import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.scss";
import DarkMode from "./components/DarkMode/DarkMode";
import "../src/components/DarkMode/DarkMode.scss";
import ToTopButton from "./components/ToTopButton/ToTopButton";
import "./components/ToTopButton/ToTopButton.scss";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
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
    <main className="App">
      <AnimatedRoutes />
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      ></motion.div>
      <DarkMode />
      <ToTopButton />
    </main>
  );
}

export default App;
