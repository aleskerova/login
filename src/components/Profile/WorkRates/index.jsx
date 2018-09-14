import React, { PureComponent } from 'react';

import './WorkRates.css';

export default class WorkRates extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="titleCont">
          <p>Cost of Work Rates</p>
        </div>
        <div className="ratesCont">
          <p>Effective from Oct 23, 2017:</p>
          <div className="rateForm">
            <div>Regular Rate ($/mh)</div>
            <input type="text" placeholder="00.00" />
          </div>
          <div className="rateForm">
            <div>Overtime Rate ($/mh)</div>
            <input type="text" placeholder="00.00" />
          </div>
          <div className="rateForm">
            <div>Leave Rate ($/mh)</div>
            <input type="text" placeholder="00.00" />
          </div>
        </div>
      </div>
    );
  }
}
