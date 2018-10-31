import React, { Component, Fragment } from "react";


class Contact extends Component {

  render() {
    return (
      <Fragment>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Message:</label>
            <input type="text" className="form-control" id="text" placeholder="Message"/>
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </Fragment>
    )
  }
};
export default Contact;
