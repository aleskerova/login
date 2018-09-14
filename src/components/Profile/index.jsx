import React from 'react';
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

const Profile = ({ user }) => (
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

Profile.propTypes = {
  user: shape(),
};

Profile.defaultProps = {
  user: {},
};

export default Profile;
