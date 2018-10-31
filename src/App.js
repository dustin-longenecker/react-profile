import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ProjectCard from "./components/ProjectCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import projects from "./projects.json";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import profiles from "./profiles.json";


import "./App.css";

class App extends Component {
  state = {
    profiles
  };
  render() {
    return (

      <Router>
        <Fragment>
          {this.state.profiles.map(info => (
            <Title
              github={info.github}
              stackoverflow={info.stackoverflow}
              linkedin={info.linkedin}
              phone={info.phone}
              email={info.email}
            />
          ))}
          <Navbar></Navbar>
          <Wrapper>

            <Route exact path={"/"} component={Home} />
            <Route exact path={"/Home"} component={Home} />
            <Route exact path={"/Portfolio"} component={Portfolio} />
            <Route exact path={"/Contact"} component={Contact} />
          </Wrapper>
          {this.state.profiles.map(info => (
            <Footer
              github={info.github}
              stackoverflow={info.stackoverflow}
              linkedin={info.linkedin}
              phone={info.phone}
              email={info.email}

            />
          ))}
        </Fragment>
      </Router>
    );
  }
}

export default App;
