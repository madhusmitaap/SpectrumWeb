import React from "react";
import "./Project.css";
import Project_1 from "../../assets/Project_1.jpg";
import SID from "../../assets/SID.jpg";

const Project = () => {
  const projects = [
    { image: SID, link: "https://github.com/Sarans13/SPECTRUM-SID-2023.git" },
    { image: Project_1, link: "https://github.com/dashboard" },
    { image: Project_1, link: "https://github.com/dashboard" },
    { image: Project_1, link: "https://github.com/dashboard" },
  ];

  return (
    <div className="project-section">
      <div className="project-title">
        <h1>PROJECTS</h1>
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project1" key={index}>
            <img src={project.image} alt={`Project ${index + 1}`} className="project-image" />
            <p className="project-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quaerat.
            </p>
            <a className="a-link" href={project.link}>
              <button className="project-btn">Visit</button>
            </a>
          </div>
        ))}
      </div>

      <div className="btn-container">
        <button className="show-more-btn"><b>Show More</b></button>
      </div>
    </div>
  );
};

export default Project;
