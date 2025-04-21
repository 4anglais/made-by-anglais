import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav>
      {/* Name on the left */}
      <div className="logo">
        <h1>MadeByAngel</h1> {/* This is the name you wanted */}
      </div>

      {/* Navigation items */}
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
