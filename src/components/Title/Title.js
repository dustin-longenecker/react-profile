import React from "react";
import "./Title.css";

const Title = props => (
        <div id="header">
          <div className="container">
          <div className="row">
            <div id="name" className="col-md-4">
              <h1 id="first-name">dustin <span id="last-name">longenecker</span></h1>
              <h2 id="description" className="white">.<span className="blue">/</span>freelance<span className="blue">/</span>web<span className="blue">_</span>developer</h2>
            </div>
            <div id="contact-info" className="col-md-8">
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

export default Title;
