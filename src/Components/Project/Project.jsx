import React, { useEffect, useState } from "react";
import "./Project.css";
import Project_1 from "../../assets/Project_1.jpg";
import SID from "../../assets/SID.jpg";

const Project = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".project-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    { image: SID, link: "https://github.com/Sarans13/SPECTRUM-SID-2023.git" },
    { image: Project_1, link: "https://github.com/dashboard" },
    { image: Project_1, link: "https://github.com/dashboard" },
    { image: Project_1, link: "https://github.com/dashboard" },
  ];

  return (
    <div className={`project-section ${show ? "show" : ""} dark:bg-black dark:text-white`}>
      <div className="project-title">
        <h1>PROJECTS</h1>
      </div>

      <div className={`project-container ${show ? "show" : ""}`}>
        {projects.map((project, index) => (
          <div 
            className={`project1 ${index % 2 === 0 ? "slide-left" : "slide-right"}`} 
            key={index}
          >
            <div className="project-content">
              <img src={project.image} alt={`Project ${index + 1}`} className="project-image" />
              <div className="overlay"></div>
              <p className="project-detail">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quaerat.
              </p>
              <a className="a-link" href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-btn">Visit</button>
              </a>
            </div>
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
