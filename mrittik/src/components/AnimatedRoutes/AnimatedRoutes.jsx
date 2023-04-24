import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Router from "../../router";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {Router &&
          Router.map((el) => (
            <Route key={el.path} path={el.path} element={el.component} />
          ))}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
