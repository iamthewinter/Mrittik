import React from "react";
import "../../App.scss";
import "../DarkMode/DarkMode.scss";
import "../../components/Pages/Home/FirstSwiper/FirstSwiper.scss";
import { Icon } from "@iconify/react";
const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };
  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkmode"
      onClick={(e) => switchTheme(e)}
    >
      <div className="mode_switch">
        {theme === darkTheme ? (
          <span>
            <Icon icon="ooui:moon" />
          </span>
        ) : theme === lightTheme ? (
          <span>
            <Icon icon="ph:sun-fill" />
          </span>
        ) : (
          ""
        )}
      </div>
    </button>
  );
};

export default DarkMode;
