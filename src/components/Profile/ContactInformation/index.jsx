import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { USER_DATA } from '../../../constants/commons';
import IconMessage from '../../Icons/IconMessage';
import IconPhone from '../../Icons/IconPhone';
import IconAdd from '../../Icons/IconAdd';
import IconTelegram from '../../Icons/IconTelegram';
import IconSkype from '../../Icons/IconSkype';
import IconSlack from '../../Icons/IconSlack';
import Input from '../../Input';
import Button from '../../Button';

import './ContactInformation.css';

class ContactInformation extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="titleContact">
          <p>Contact Information</p>
        </div>
        <div className="accountCont">
          <div className="contactForm">
            <div className="fieldCont">
              <IconMessage width="20" height="20" fill="#aab3c2" />
              <Field
                name="e-mail"
                type="text"
                component={Input}
                placeholder="E-mail"
                className="profileInput"
              />
            </div>
            <div className="fieldCont">
              <IconPhone width="20" height="20" fill="#aab3c2" />
              <Field
                name="phone"
                type="text"
                component={Input}
                placeholder="Phone number"
                className="profileInput"
              />
            </div>
            <div className="fieldCont">
              <IconPhone width="20" height="20" fill="#aab3c2" />
              <Field
                name="phone number"
                type="text"
                component={Input}
                placeholder="Phone number"
                className="profileInput"
              />
              <Button className="calendar">
                <IconAdd width="15" height="15" fill="#8b92a9" />
              </Button>
            </div>
          </div>
          <div className="contactForm">
            <div className="fieldCont">
              <IconTelegram width="18" height="19" />
              <Field
                name="telegram"
                type="text"
                component={Input}
                placeholder="Telegram"
                className="profileInput"
              />
            </div>
            <div className="fieldCont">
              <IconSkype width="18" height="18" />
              <Field
                name="skype"
                type="text"
                component={Input}
                placeholder="Skype"
                className="profileInput"
              />
            </div>
            <div className="fieldCont">
              <IconSlack width="20" height="20" />
              <Field
                name="slack"
                type="text"
                component={Input}
                placeholder="Slack"
                className="profileInput"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: USER_DATA,
})(ContactInformation);
