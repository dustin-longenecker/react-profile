import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.name}</strong>
        </li>
        <li>
          <strong><a href={props.links.github}>Github</a></strong>
        </li>
        <li>
          <strong><a href={props.links.heroku}>Website</a></strong>
        </li>
        <li>
          <strong>technologyUsed: {props.links.technologyUsed}</strong>
        </li>
      </ul>
    </div>
  </div>
);

export default ProjectCard;
