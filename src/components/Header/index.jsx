// src/components/Header.js
import React from 'react';

const Header = ({ setActiveSection }) => {
  return (
    <nav>
      <button onClick={() => setActiveSection('about')}>About</button>
      <button onClick={() => setActiveSection('portfolio')}>Portfolio</button>
      <button onClick={() => setActiveSection('contact')}>Contact</button>
      <button onClick={() => setActiveSection('resume')}>Resume</button>
    </nav>
  );
};

export default Header;
