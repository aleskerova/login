import React, { Component } from 'react';
import { shape } from 'prop-types';
import AccountInformation from './AccountInformation';
import ContactInformation from './ContactInformation';
import WorkSchedule from './WorkSchedule';
import WorkRates from './WorkRates';
import Projects from './Projects';
import SickTime from './SickTime';
import PTO from './PTO';
import Vacation from './Vacation';

import './Profile.css';

export default class Profile extends Component {
  static propTypes = {
    user: shape().isRequired,
  };

  state = {};

  render() {
    // const user = JSON.parse(localStorage.getItem('user'));
    const { user } = this.props;
    return (
      <div className="profPage">
        <AccountInformation user={user} />
        <ContactInformation />
        <WorkSchedule />
        <WorkRates />
        <Projects />
        <SickTime />
        <PTO />
        <Vacation />
      </div>
    );
  }
}
