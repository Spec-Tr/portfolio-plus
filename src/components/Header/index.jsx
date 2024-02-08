// Header/index.jsx
import React from 'react';
import './style.css';

const Header = ({ activeSection, setActiveSection }) => {
  const isActive = (section) => activeSection === section ? 'active' : '';

  return (
    <header className="headerContainer">
      <div className="headerContent">
        <h1>Spencer Tyber</h1>
        <nav className="mainNav">
          <button className={isActive('about')} onClick={() => setActiveSection('about')}>About</button>
          <button className={isActive('portfolio')} onClick={() => setActiveSection('portfolio')}>Portfolio</button>
          <button className={isActive('resume')} onClick={() => setActiveSection('resume')}>Resume</button>
          <button className={isActive('contact')} onClick={() => setActiveSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
