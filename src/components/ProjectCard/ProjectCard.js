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

        {props.technologyUsed.map(tech => (

          <span>{tech}  </span>
      ))}
    </li>
    <li>
      <div class="card-body">
        <a href={props.links.github} class="card-link">Github</a>
      <a href={props.links.heroku} class="card-link">Website</a>
    </div>
    </li>
      </ul>
    </div>

  </div>
);

export default ProjectCard;
