import React, { PureComponent } from 'react';
import IconLogo from '../Icons/IconLogo';
import IconTimeTracker from '../Icons/IconTimeTracker';
import IconTasks from '../Icons/IconTasks';
import IconReports from '../Icons/IconReports';
import IconUser from '../Icons/IconUser';
import IconDoubleArrow from '../Icons/IconDoubleArrow';
import MenuItem from './MenuItem';
import './SideBar.css';

export default class SideBar extends PureComponent {
  state = {};

  render() {
    return (
      <div className="contForMenu">
        <div className="menuGlobal">
          <h1 className="menuTitle">
            <IconLogo width="21.5" height="21.5" fill="#0d2456" />
            <span className="menuTitleText" />
            Time machine
          </h1>
          <nav className="menuNav">
            <ul className="menuUl">
              <MenuItem title="time-track" to="/timetrack">
                <IconTimeTracker width="22.5" height="22.5" fill="#626b79" />
              </MenuItem>
              <MenuItem title="tasks" to="/tasks">
                <IconTasks width="22.5" height="22.5" fill="#626b79" />
              </MenuItem>
              <MenuItem title="reports" to="/reports">
                <IconReports width="22.5" height="22.5" fill="#626b79" />
              </MenuItem>
              <MenuItem title="users" to="/users">
                <IconUser width="22.5" height="22.5" fill="#626b79" />
              </MenuItem>
            </ul>
          </nav>
          <button type="button" className="calBut">
            <IconDoubleArrow width="20px" height="20px" fill="#626b79" />
          </button>
        </div>
      </div>
    );
  }
}
