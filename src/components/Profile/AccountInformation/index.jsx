import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { USER_DATA } from '../../../constants/commons';
import IconEdit from '../../Icons/IconEdit';
import IconBirthday from '../../Icons/IconBirthday';
import IconCalendarDates from '../../Icons/IconCalendarDates';
import IconArrow from '../../Icons/IconArrow';
import Input from '../../Input';
import Button from '../../Button';
import './AccountInformation.css';

class AccountInformation extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="titleAccount">
          <p>Account Information</p>
          <Button className="calendar">
            <IconEdit width="25px" height="25px" fill="#aab3c2" />
          </Button>
        </div>
        <div className="accountCont">
          <div className="photo" />
          <div className="InputForm">
            <div className="fieldCont">
              <Field
                name="name"
                type="text"
                component={Input}
                placeholder="Name"
                className="profileInput"
              />
            </div>

            <div className="fieldCont">
              <Field
                name="second name"
                type="text"
                component={Input}
                placeholder="Second Name"
                className="profileInput"
              />
            </div>

            <div className="fieldCont">
              <IconBirthday
                width="16px"
                height="16px"
                fill="rgba(98, 107, 121, 0.5)"
              />
              <Field
                name="date of Birth"
                type="text"
                component={Input}
                placeholder="Date of Birth"
                className="profileInput"
              />
              <Button className="calendar">
                <IconCalendarDates
                  width="25"
                  height="25"
                  fill="rgba(98, 107, 121, 0.5)"
                />
              </Button>
            </div>
            <div className="inputCont2">
              <div className="fieldCont">
                <Field
                  name="hire date"
                  type="text"
                  component={Input}
                  placeholder="Hire Date"
                  className="profileInput"
                />
                <Button className="calendar">
                  <IconCalendarDates
                    width="25"
                    height="25"
                    fill="rgba(98, 107, 121, 0.5)"
                  />
                </Button>
              </div>
              <div className="fieldCont">
                <Field
                  name="release date"
                  type="text"
                  component={Input}
                  placeholder="Release Date"
                  className="profileInput"
                />
                <Button className="calendar">
                  <IconCalendarDates
                    width="25"
                    height="25"
                    fill="rgba(98, 107, 121, 0.5)"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="selectForm">
            <div className="selectCont">
              <select>
                <option hidden>Department</option>
                <option>HR</option>
                <option>Developers</option>
                <option>Designers</option>
              </select>
              <IconArrow
                width="25"
                height="25"
                fill="rgba(98, 107, 121, 0.5)"
              />
            </div>
            <div className="selectCont">
              <select>
                <option hidden>Profession</option>
                <option disabled>Office-manager</option>
                <option disabled>Front-End Developer</option>
                <option disabled>Back-End Developer</option>
                <option disabled>Designer</option>
              </select>
              <IconArrow
                width="25"
                height="25"
                fill="rgba(98, 107, 121, 0.5)"
              />
            </div>
            <div className="selectCont">
              <select>
                <option hidden>Professional Level</option>
                <option disabled>Trainee/Intern</option>
                <option disabled>Junior</option>
                <option disabled>Middle</option>
                <option disabled>Senior</option>
              </select>
              <IconArrow
                width="25"
                height="25"
                fill="rgba(98, 107, 121, 0.5)"
              />
            </div>
            <div className="selectCont">
              <select>
                <option hidden>Position in the company</option>
                <option disabled>?</option>
                <option disabled>?</option>
                <option disabled>?</option>
                <option disabled>?</option>
              </select>
              <IconArrow
                width="25"
                height="25"
                fill="rgba(98, 107, 121, 0.5)"
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
})(AccountInformation);
