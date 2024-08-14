//import React from 'react'
import "./Works.css";
import projects from "../../assets/projects";

const Works = () => {
  return (
    <div>
      <div className="heading" id="works">
        <h2>My works</h2>
        <p>These are the React Apps that I created, Click to open them.</p>
      </div>
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project">
              <a href={project.url} target="_blank">
                <img src={project.img} alt={project.name} className="image" />
              </a>
              <p>{project.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
