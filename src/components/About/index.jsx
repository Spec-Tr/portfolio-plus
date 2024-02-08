import React from 'react';
import headShot from '../../assets/images/headShot.png';

import './style.css'
const About = () => {
  return (
    <div className="aboutMe">
      <div>
        <h1>About Me</h1>
        <img src={headShot} alt="Profile picture of man cuddling with snoozing Rottweiler" style={{width:'80%', height: 'auto', borderRadius: '30px'}}/>
      </div>
      <p>I was Born in Toronto and raised here on a steady diet of video games, bike rides, and anime, among other things. 
      I have BA in Sociology from Toronto Metropolitan University (formerly Ryerson University) and graduated with 
      honors in 2023, which was a big deal for no other reasons than I am a nerd, and it took me a very... ten 
      years. Now, I am just in the process of wrapping up a full-stack sofware development coding bootcamp hosted 
      by University of Toronto School of Continuing Studies, and looking to expand my skillset and build upon the 
      fundamentals I've learned before transitioning into a developer role. 
      Please, take a look at my projects and feel free to offer feedback of any kind! I've learned a ton, but in 
      the world of coding especially, there will always be new things to learn.</p>         
    </div>
  );
};

export default About;
