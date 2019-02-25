import React, { Component, Fragment } from "react";
import Skills from "../../components/Skills";
import skills from "../../skills.json";
import About from "../../components/About";
import about from "../../about.json";
import "./Home.css"


class Home extends Component {
  state = {
    skills,
    about
  };

  render() {
    return (
      <Fragment>
        <div id="maindiv" className="container">
          <div className="row info">
            <div className="col-md-12">
              <h2>about</h2>
                <div className="row">
                  <div className="col-md-12">
                      {this.state.about.map(about => (

                      <About
                        name={about.name}
                        profession={about.profession}
                        mission={about.mission}
                        />
                    ))}
                    </div>
                </div>
              </div>
            </div>
          <div className="row info">
            <div className="col-md-12">
              <h2>skills</h2>
              <div className="row">
                  {this.state.skills.map(skill => (
                    <Skills
                      name={skill.id}
                      skills={skill.skills}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
};


export default Home;
