import React from "react";
import "./Footer.css";


const Footer = props => (

  <div id="footer">
    <div className="container">
    <div className="row">
      <div id="contact-info2" className="col-md-12">
        <ul>
          <li><a href=""><img src={props.github.image} alt="github"/></a></li>
          <li><a href=""><img src={props.stackoverflow.image} alt="stackoverflow"/></a></li>
          <li><a href=""><img src={props.linkedin.image} alt="linkedin"/></a></li>

          <li>{props.phone}</li>
          <li>{props.email}</li>
        </ul>
      </div>
    </div>
    </div>
  </div>
);

export default Footer;
