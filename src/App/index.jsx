import React, { useState } from 'react'
import Header from '../components/Header/index';
import About from '../components/About/index';
import Portfolio from '../components/Portfolio/index';
import Contact from '../components/Contact/index';
import Resume from '../components/Resume/index';
import Footer from '../components/Footer/index';
import './style.css'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
    <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === 'about' && <About />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
      <Footer/>
    </>
  );
}

export default App;
