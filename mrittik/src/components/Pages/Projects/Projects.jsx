import React from "react";
import "../Projects/Projects.scss";
import ProjectsHeading from "./ProjectsHeading/ProjectsHeading";
const Projects = () => {
  return (
    <div className="projects_main">
      <ProjectsHeading />
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

export default Projects;
