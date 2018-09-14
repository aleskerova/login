import React, { PureComponent } from 'react';
import IconNavigation from '../../Icons/IconNavigation';

import './Projects.css';

export default class Projects extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="titleCont">
          <p>Projects</p>
        </div>
        <div className="nameCont">
          <p className="first">Assign approvers</p>
          <p className="next">History</p>
        </div>
        <div className="projectCont">
          <div className="block1">
            <select>
              <option hidden>select project</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>..</option>
            </select>
          </div>
          <div className="block2">
            <input type="text" placeholder="-AUTO-" />
          </div>
          <div className="block3">
            <IconNavigation width="26px" height="30px" fill="#626b79" />
          </div>
        </div>
      </div>
    );
  }
}
