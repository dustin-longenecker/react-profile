import React, { Fragment} from "react";
import "./Skills.css";


const Skills = props =>  (

      <Fragment>
          <div className="col-md-4">
            <h5>{props.name}</h5>

            <ul>
              {props.skills.map(skill => (
              <li>{skill}</li>
              ))}
            </ul>
          </div>
      </Fragment>
    );
export default Skills;
