import React, { PureComponent } from 'react';
import './WorkSchedule.css';

export default class WorkSchedule extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="titleCont">
          <p>Work Schedule</p>
        </div>
        <div className="scheduleCont">
          <p>Schedule:</p>
          <div className="scheduleForm">
            <div className="dayForm">
              <div>M</div>
              <input type="text" placeholder="8" />
            </div>
            <div className="dayForm">
              <div>T</div>
              <input type="text" placeholder="8" />
            </div>
            <div className="dayForm">
              <div>W</div>
              <input type="text" placeholder="8" />
            </div>
            <div className="dayForm">
              <div>T</div>
              <input type="text" placeholder="8" />
            </div>
            <div className="dayForm">
              <div>F</div>
              <input type="text" placeholder="8" />
            </div>
            <div className="dayForm">
              <div>S</div>
              <input type="text" placeholder="0" />
            </div>
            <div className="dayForm">
              <div>S</div>
              <input type="text" placeholder="0" />
            </div>
            <div className="checkboxCont">
              <input type="checkbox" />
              <span> use corporative setting</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
