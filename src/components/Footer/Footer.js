import React from "react";
import "./Footer.css";


const Footer = props => (

  <div id="footer">
    <div className="container">
    <div className="row">
      <div id="contact-info2" className="col-md-12">
        <ul>
          <li>
            <a href={props.github.url}><img src={props.github.image} alt={props.name}/></a>
            <a href={props.stackoverflow.url}><img src={props.stackoverflow.image} alt={props.name}/></a>
            <a href={props.linkedin.url}><img src={props.linkedin.image} alt={props.name}/></a></li>

          <li>{props.phone}</li>
          <li>{props.email}</li>
        </ul>
      </div>
    </div>
    </div>
  </div>
);

export default Footer;
