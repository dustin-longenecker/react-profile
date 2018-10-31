import React, { Component, Fragment } from "react";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../projects.json";


class Portfolio extends Component {
  state = {
    projects
  };
  render() {
    return (
      <Fragment>
        <div id="portfolio">
      {this.state.projects.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          links={project.links}
          technologyUsed={project.technologyUsed}
        />

      ))}
      </div>
      </Fragment>
    )
  }
};
export default Portfolio;
