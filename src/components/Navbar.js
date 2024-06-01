import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/penrith-pyrmont-logo-1.png" alt="Logo" /> 
      </div>
      <ul className="nav-links">
        {/* Example navigation links */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
