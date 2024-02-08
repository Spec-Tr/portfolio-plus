import React from 'react';
import './style.css';
const Project = ({ project }) => {
  return (
    <div className="projectBox">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt={project.name} style={{width: "375px", height: "125px", borderRadius: "10px"}}></img>
      {/* Render other project details */}
    </div>
  );
};

export default Project;