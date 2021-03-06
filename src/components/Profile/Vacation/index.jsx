import React, { PureComponent } from 'react';
import IconNavigation from '../../Icons/IconNavigation';

import './Vacation.css';

export default class Vacation extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="titleCont">
          <p>Vacation</p>
        </div>
        <div className="textCont">
          <p className="block1">Used</p>
          <p className="block2">Left</p>
          <p className="block3">PTO Accrual Rules</p>
          <p className="block4">History</p>
        </div>
        <div className="vacationCont">
          <div className="block1">
            <input type="text" placeholder="0d" />
          </div>
          <div className="block2">
            <input type="text" placeholder="14d" />
          </div>
          <div className="block3">
            <select>
              <option hidden>Default PTO Rules</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>..</option>
            </select>
          </div>
          <div className="block4">
            <IconNavigation width="26px" height="30px" fill="#626b79" />
          </div>
        </div>
      </div>
    );
  }
}
