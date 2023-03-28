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
    window.location.pathname === "/about" ? (
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
