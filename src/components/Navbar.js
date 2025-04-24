import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar({ toggleTheme, currentTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = () => {
    toggleTheme();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${currentTheme}`}>
      <div className="logo">
        <NavLink to="/" className="navbar-logo">
          <h1>MadeByAngel</h1>
        </NavLink>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}>Contact</NavLink>
        </li>

        {/* Theme Switch in the Sidebar */}
        <li className="theme-switch-wrapper">
          <label className="theme-switch">
            <input type="checkbox" checked={currentTheme === 'dark'} onChange={handleChange} />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
