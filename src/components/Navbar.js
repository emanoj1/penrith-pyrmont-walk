import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/p-logo-1AE6C1-ppwalk.png" alt="Logo" className="logo navbar-logo" />
        </Link>
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
