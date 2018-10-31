import React, { Component, Fragment } from "react";


class Home extends Component {

  render() {
    return (
      <Fragment>
      <div className="container">
        <div className="row info">
          <div className="col-md-12">
            <h2>about</h2>
              <div className="row">
                <div className="col-md-12">
                  <p>Name: Dustin Longenecker</p>
                </div>
              </div>
          </div>
        </div>
        <div className="row info">
          <div className="col-md-12">
            <h2>skills</h2>
            <div className="row">
              <div className="col-md-4">
                <h5>front-end</h5>
              </div>
              <div className="col-md-4">
                <h5>back-end</h5>
              </div>
              <div className="col-md-4">
                <h5>other tech</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
};
export default Home;
