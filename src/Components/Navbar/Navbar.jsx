import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={assets.logo} alt="Learnify Logo" id="hero"/>
      <h1 className="logo-name">Learnify</h1>
      <ul>
        <li className="list-item">
          <Link to="hero" smooth={true} offset={-150} duration={500}>
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link to="programs" smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li className="list-item">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li className="list-item">
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Campus
          </Link>
        </li>
        <li className="list-item">
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button>
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
