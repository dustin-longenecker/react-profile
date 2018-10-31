import React from "react";
import "./Title.css";

const Title = props => (
        <div id="header">
          <div className="container">
          <div className="row">
            <div id="name" className="col-md-4">
              <h1 id="first-name">dustin <span id="last-name">longenecker</span></h1>

            </div>
            <div id="contact-info" className="col-md-8">
              <ul>
                <li><a href=""><img src={props.github.image} alt="github"/></a></li>
                <li><a href=""><img src={props.stackoverflow.image} alt="stackoverflow"/></a></li>
                <li><a href=""><img src={props.linkedin.image} alt="linkedin"/></a></li>

              </ul>
              <ul>
                <li>{props.phone}</li>
                <li>{props.email}</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
);

export default Title;
