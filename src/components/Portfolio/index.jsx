import React from 'react';
import Project from '../Project/index';

const projects = [
  // Example project
  {
    name: 'Project 1',
    description: 'This is an awesome project.',
    // Add other project details
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;