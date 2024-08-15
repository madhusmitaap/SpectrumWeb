import React from "react";
import "./Project.css";
import Project_1 from "../../assets/Project_1.jpg";
import icon from "../../assets/icon.webp";
const project = () => {
  return (
    <div className="project">
      <div className="project-title">
        <h1>Project</h1>
        </div>
          <div className="project-container">
            <div className="project1">
              <img src={Project_1} alt="" />
              
              <p className="project-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quaerat.</p>
              <a className="a-link" href="https://github.com/dashboard">
              <button className="btn">Visit</button>
              </a>
            </div>

            <div className="project1">
              <img src={Project_1} alt="" />
              <p className="project-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quaerat.</p>
              <a className="a-link" href="https://github.com/dashboard">
              <button className="btn">Visit</button>
              </a>
            </div>

            <div className="project1">
              <img src={Project_1} alt="" />
              <p className="project-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quaerat.</p>
              <a className="a-link" href="https://github.com/dashboard">
              <button className="btn">Visit</button>
              </a>
            </div>

            {/* <div className="project1">
              <img src={Project_1} alt="" />
              <p className="project-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quaerat.</p>
              <a className="a-link" href="https://github.com/dashboard">
              <button className="btn">Visit</button>
              </a>
            </div>

            <div className="project1">
              <img src={Project_1} alt="" />
              <p className="project-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quaerat.</p>
              <a className="a-link" href="https://github.com/dashboard">
              <button className="btn">Visit</button>
              </a>
            </div>

            <div className="project1">
              <img src={Project_1} alt="" />
              <p className="project-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quaerat.</p>
              <a className="a-link" href="https://github.com/dashboard">
              <button className="btn">Visit</button>
              </a>
            </div> */}
          </div>
          <div className="show">
          <div className="project-showmore">
            <p>Show More</p>
            <img src={icon} alt="" />
            </div>
          </div>
        </div>
      
    
  );
};

export default project;
