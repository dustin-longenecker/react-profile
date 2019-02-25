import React, { Component} from "react";
import ProjectCard from "../../components/ProjectCard";
import Wrapper from "../../components/Wrapper";

import projects from "../../projects.json";


class Portfolio extends Component {
  state = {
    projects
  };
  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
};
export default Portfolio;
