import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faRocket, faWrench, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const aboutCards = [
  {
    icon: faPalette,
    title: 'Creative Design',
    description: 'Passionate about crafting visually stunning and user-friendly interfaces that leave a lasting impression.'
  },
  {
    icon: faCode,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code is at the heart of every project I build.'
  },
  {
    icon: faRocket,
    title: 'Startup Spirit',
    description: 'Driven by innovation and a love for tech startups, I thrive in fast-paced, dynamic environments.'
  },
  {
    icon: faWrench,
    title: 'Problem Solver',
    description: 'Enjoy tackling complex challenges and delivering robust solutions that make a difference.'
  },
  {
    icon: faEnvelope,
    title: 'Let’s Connect',
    description: 'Open to collaborations, freelance work, or just a friendly chat about technology and design.'
  }
];

function About() {
  return (
    <div className="about" id="about">
      <div className="about-intro">
        <h1>About Me</h1>
        <p className="about-subtitle">A quick look at what drives me and what I love to do.</p>
      </div>
      <div className="about-grid">
        {aboutCards.map((card, idx) => (
          <div className="about-card" key={idx}>
            <div className="about-card-icon">
              <FontAwesomeIcon icon={card.icon} size="2x" />
            </div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
