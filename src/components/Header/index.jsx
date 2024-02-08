import "./style.css";
import React from 'react';

const Header = ({ setActiveSection }) => {
  return (
    <div className="headerContainer">
      <h1>Spencer Tyber</h1>
      <nav className="mainNav">
        <button onClick={() => setActiveSection('about')}>About</button>
        <button onClick={() => setActiveSection('portfolio')}>Portfolio</button>
        <button onClick={() => setActiveSection('resume')}>Resume</button>
        <button onClick={() => setActiveSection('contact')}>Contact</button>
      </nav>
    </div>
  );
};

export default Header;
