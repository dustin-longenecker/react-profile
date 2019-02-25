import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div id="navbar">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
    <nav id="links" className="nav">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="/Home">home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Portfolio">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">contact</a>
        </li>
      </ul>
    </nav>
    </div>

    </div>
  </div>
  </div>
);

export default Navbar;
