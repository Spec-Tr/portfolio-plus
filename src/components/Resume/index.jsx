import React from 'react';
import './style.css'

const Resume = () => {
  return (
    <div className='resumeBox'>
      <div className='resumeContent'>
        <h1>Resume & Skills</h1>
          <h2>Languages, Libraries & Packages</h2>
          <h3>Front-end:</h3>
           <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap, Bulma, Tailwind, etc.</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Express.Handlebars</li>
            <li>Vite & React</li>
          </ul>
        <h3>Back-end:</h3>
          <ul>
          <li>RESTful APIs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB & Mongoose</li>
          </ul>
        <a href="https://docs.google.com/document/d/1HnAMHFvdwgGYNCT2ZK3W-h7Y6qjtv6OcoHNqAIT1mb4/edit?usp=sharing" target="_blank" rel='noopener noreferrer'>
          Click here to see a copy of my resume</a>
      </div>  
    </div>
  );
};

export default Resume;
