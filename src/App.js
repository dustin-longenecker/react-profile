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
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import Contact from "./components/Contact";

import "./App.css";

class App extends Component {
  render() {
    return (

      <Router>
        <Fragment>
          <Title></Title>
          <Navbar></Navbar>
          <Wrapper>

            <Route exact path={"/"} component={Home} />
            <Route exact path={"/Home"} component={Home} />
            <Route exact path={"/Portfolio"} component={Portfolio} />
            <Route exact path={"/Contact"} component={Contact} />
          </Wrapper>
        </Fragment>
      </Router>
    );
  }
}

export default App;
