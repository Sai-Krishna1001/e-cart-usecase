import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Optional: Import your CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__link">
          E-commerce Store
        </Link>
      </div>
      <ul className="navbar__links">
        <Link to="/cart" className="navbar__link navbar__link--button">
          Cart
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
