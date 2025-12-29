import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

const ProjectCard = ({ 
  name, 
  logo, 
  description, 
  features = [], 
  techStack = [], 
  links = {} 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    // Prevent expansion if a link is clicked
    if (e.target.closest('a')) return;
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`project-card-container ${isExpanded ? 'expanded' : ''}`}>
      <div 
        className={`project-expandable-card ${isExpanded ? 'expanded' : ''}`} 
        onClick={toggleExpand}
      >
        <div className="project-header">
          {logo && <img src={logo} alt={`${name} logo`} className="project-logo" />}
          <h3 className="project-name">{name}</h3>
        </div>

        {isExpanded && (
          <div className="expanded-content">
            <div className="project-details">
              <p className="project-description">{description}</p>
              <ul className="project-features">
                {features.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCircle} className="feature-bullet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="project-links">
                {links.live && (
                  <a href={links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: '8px' }} />
                    Live Demo
                  </a>
                )}
                {links.github && (
                  <a href={links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="project-tech">
              <h4 className="tech-title">Tech Stack</h4>
              <div className="tech-grid">
                {techStack.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <FontAwesomeIcon icon={tech.icon} className="tech-icon" />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
