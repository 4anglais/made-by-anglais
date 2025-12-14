import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar({ toggleTheme, currentTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleChange = () => {
    toggleTheme();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleNavClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const targetId = e.target.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.querySelector('.navbar').addEventListener('click', handleNavClick);

    // Scroll effect for navbar and active section logic
    const handleScroll = () => {
      const sections = ['home', 'features', 'about', 'projects', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      // Add shadow or background to navbar on scroll
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.querySelector('.navbar').removeEventListener('click', handleNavClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (section) => activeSection === section ? 'navbar-item active' : 'navbar-item';

  return (
    <nav className={`navbar ${currentTheme}`}>
      <div className="logo">
        <a href="#home" className="navbar-logo">
          <h1>MadeByAngel</h1>
        </a>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>

      {/* Desktop Links */}
      <ul className="nav-links desktop-only">
        <li>
          <a href="#home" className={isActive('home')}>Home</a>
        </li>
        <li>
          <a href="#features" className={isActive('features')}>Services</a>
        </li>
        <li>
          <a href="#about" className={isActive('about')}>About</a>
        </li>
        <li>
          <a href="#projects" className={isActive('projects')}>Projects</a>
        </li>
        <li>
          <a href="#contact" className={isActive('contact')}>Contact</a>
        </li>
        <li className="theme-switch-wrapper">
          <label className="theme-switch">
            <input type="checkbox" checked={currentTheme === 'dark'} onChange={handleChange} />
            <span className="slider"></span>
          </label>
        </li>
      </ul>

      {/* Mobile Backdrop + Menu (glass modal) */}
      <div className={`mobile-backdrop ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} />

      <aside className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <ul className="mobile-links">
          <li style={{'--i': 1}}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className={isActive('home')}>Home</a>
          </li>
          <li style={{'--i': 2}}>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className={isActive('features')}>Services</a>
          </li>
          <li style={{'--i': 3}}>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={isActive('about')}>About</a>
          </li>
          <li style={{'--i': 4}}>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className={isActive('projects')}>Projects</a>
          </li>
          <li style={{'--i': 5}}>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={isActive('contact')}>Contact</a>
          </li>
          <li className="theme-switch-wrapper" style={{'--i': 6}}>
            <label className="theme-switch">
              <input type="checkbox" checked={currentTheme === 'dark'} onChange={handleChange} />
              <span className="slider"></span>
            </label>
          </li>
        </ul>
      </aside>
    </nav>
  );
}

export default Navbar;
