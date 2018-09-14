import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import IconNotifications from '../Icons/IconNotifications';
import IconSettings from '../Icons/IconSettings';
import IconTips from '../Icons/IconTips';
import '../Button/Button.css';
import './Header.css';

export default class Header extends PureComponent {
  static propTypes = {
    user: shape(),
  };

  static defaultProps = {
    user: {},
  };

  render() {
    const { user } = this.props;
    const { firstName, lastName } = user;
    if (!user) {
      return null;
    }
    return (
      <div className="header">
        <div>
          <ul className="headerMenu">
            <li className="headerItem">
              <button type="button" className="btnBell">
                <IconNotifications width="24" height="24" fill="#d5d7e4" />
              </button>
            </li>
            <li className="headerItem">
              <button type="button" className="btnBorderless">
                <IconSettings width="18" height="18" fill="#d5d7e4" />
              </button>
            </li>
            <li className="headerItem">
              <figure className="userProfile">
                <span className="userProfileImg" />
                <figcaption className="userProfileInfo">
                  <span className="userProfileName">
                    {firstName} {lastName}
                  </span>
                  <br />
                  <span className="userProfilePosition">Designer</span>
                </figcaption>
              </figure>
            </li>
            <li className="headerItem">
              <button type="button" className="btnMark">
                <IconTips width="24" height="24" fill="#d5d7e4" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
