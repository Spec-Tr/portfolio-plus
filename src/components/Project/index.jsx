import React from 'react';
import './style.css';

const Project = ({ project }) => {
  return (
    <div className="projectBox">
      <h2>{project.name}</h2>
      <a href={project.repoLink}>{project.description}</a>
      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">{/* This is security stuff I don't know a ton about, but it works */}
        <img src={project.image} alt={project.name} style={{width: "375px", height: "125px", borderRadius: "10px"}}/>
      </a>
    </div>
  );
};

export default Project;