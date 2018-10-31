import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div className="container">
    <nav className="nav">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
