import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faFacebook, faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the brand icons

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/4anglais" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} spin spinReverse/> {/* Facebook Icon */}
        </a>
        <a href="https://www.instagram.com/4anglais" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} spin spinReverse/> {/* Instagram Icon */}
        </a>
        <a href="https://github.com/4anglais" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} spin spinReverse/> {/* Github Icon */}
        </a>
        <a href="https://www.linkedin.com/in/4anglais" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} spin spinReverse/> {/* LinkedIn Icon */}
        </a>
        <a href="https://twitter.com/4anglais" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} spin spinReverse/> {/* Twitter Icon */}
        </a>
      </div>
      <div className="footer-links">
        <a href="/privacy">&#8226; Privacy</a>
        <a href="/terms">&#8226; Terms</a>
      </div>
      <p className='right'>&copy; {new Date().getFullYear()} MadeByAngel. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
