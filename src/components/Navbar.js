import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleTheme, currentTheme }) {
  const handleChange = () => {
    toggleTheme();
  };

  return (
    <nav className={`navbar ${currentTheme}`}>
      <div className="logo">
        <NavLink to="/" className="navbar-logo">
          <h1>MadeByAngel</h1>
        </NavLink>
      </div>

      <ul>
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
        <li>
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
