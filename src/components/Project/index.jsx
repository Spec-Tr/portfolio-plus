import React from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {/* Render other project details */}
    </div>
  );
};

export default Project;