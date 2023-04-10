import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import "./Scss/Style.scss";
import App from "./App";
import Layout from "./components/Layout/Layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  window.location.pathname === "/" ||
    window.location.pathname === "/login" ||
    window.location.pathname === "/about" ||
    window.location.pathname === "/team" ||
    window.location.pathname === "/blog" ||
    window.location.pathname === "/contacts" ||
    window.location.pathname === "/projects" ||
    window.location.pathname === "/service" ||
    window.location.pathname === "/project-details" ||
    window.location.pathname === "/team-details" ? (
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);
