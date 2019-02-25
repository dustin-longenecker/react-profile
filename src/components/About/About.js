import React, { Fragment} from "react";
import "./About.css";


const About = props =>  (

      <Fragment>
        <div className="row">
          <div className="col-md-12">
              <p><span>name: </span>{props.name}</p>
              <p><span>profession: </span>{props.profession}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>mission</h3>
            <p>{props.mission}</p>
          </div>
        </div>
      </Fragment>
    );
export default About;
