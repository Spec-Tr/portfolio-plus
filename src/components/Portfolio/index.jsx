import React from 'react';
import Project from '../Project/index';
import project1img from '../../assets/images/weatherAppCap.png';
import project2img from '../../assets/images/eCommConManCap.png';
import project3img from '../../assets/images/potentNotablesCap.png';
import project4img from '../../assets/images/teamManifestoCap.png';
import project5img from '../../assets/images/diaryCap.png';
import project6img from '../../assets/images/devbookCap.png';
import './style.css';

const projects = [
  {
    name: 'Weather App',
    description: 'This is an awesome project.',
    image: project1img,
    repoLink:"https://github.com/Spec-Tr/Weather-App",
    deployedLink:"https://spec-tr.github.io/Weather-App/"
  },
  {
    name: 'eCommerce Content Management System',
    description: 'Second project',
    image: project2img,
    repoLink:"https://github.com/Spec-Tr/eComm-ConMan",
    deployedLink:"https://drive.google.com/file/d/1GXfq_am0-WVdOEPs85ZX-FYZNaKP_TSw/view"
  },
  {
    name: 'Note-Taker',
    description: 'Third project',
    image: project3img,
    repoLink:"https://github.com/Spec-Tr/potent-notables",
    deployedLink:"https://potent-notables-70e4a607105d.herokuapp.com/"
  },
  {
    name: 'Team Management System',
    description: 'Fourth project',
    image: project4img,
    repoLink:"https://github.com/Spec-Tr/team-manifesto",
    deployedLink:"https://drive.google.com/file/d/1so5xyZF3UXALOl-sVeW8b1XYzrD6gEXj/view"
  },
  {
    name: 'Social Network API',
    description: 'Fifth project',
    image: project5img,
    repoLink:"https://github.com/Spec-Tr/diary-uh",
    deployedLink:"https://drive.google.com/file/d/1wINzPhB70Im7X-5DUgG6wXeUfd0hjXv9/view"
  },
  {
    name: 'Tech Blog',
    description: 'Sixth project',
    image: project6img,
    repoLink:"https://github.com/Spec-Tr/devbook",
    deployedLink:"https://devbook-spectr-5dd143f88b0c.herokuapp.com"
  }
];

const Portfolio = () => {
  return (
    <div className='projectsDiv'>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;