import React from 'react';
import './About.css'

function About() {
  return (
    <div className='about'>
      <section className='about-intro'>
        <div className='about-content'>
          <h1>About Me</h1>
          <p className='about-subtitle'>Full Stack Developer & Tech Enthusiast</p>
          
          <div className='about-grid'>
            <div className='about-section'>
              <h2>Who I Am</h2>
              <p>I'm a passionate developer with expertise in creating modern, responsive web applications. Customize this section with your own story!</p>
            </div>
            
            <div className='about-section'>
              <h2>What I Do</h2>
              <p>I specialize in full-stack development, designing beautiful interfaces and building robust backends. Share your skills and experience here.</p>
            </div>
            
            <div className='about-section'>
              <h2>My Passion</h2>
              <p>I'm driven by creating elegant solutions to complex problems. Talk about what motivates you and your vision for technology.</p>
            </div>
            
            <div className='about-section'>
              <h2>Let's Connect</h2>
              <p>Whether you have a project in mind or just want to chat about tech, feel free to reach out. I'm always eager to collaborate!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
