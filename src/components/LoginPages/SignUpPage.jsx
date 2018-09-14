import React from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { signup } from '../../actions/auth.actions';
import { REGISTER } from '../../constants/commons';
import FormHeader from '../FormHeader';
import FormTitle from '../FormTitle';
import Button from '../Button';
import Input from '../Input';
import Notifier from './Notifier';
import { validate } from '../../validation';
import './styles.css';
import '../Button/Button.css';

class SignUpPage extends React.PureComponent {
  static propTypes = {
    signup: func.isRequired,
    handleSubmit: func.isRequired,
    submitFailed: bool.isRequired,
    submitSucceeded: bool.isRequired,
  };

  submit = user => {
    const { signup } = this.props;
    signup(user);
  };

  render() {
    const { submitSucceeded, submitFailed, handleSubmit } = this.props;

    return (
      <div className="wrapper">
        <div className="image" />
        <div className="formWrapper">
          <div className="formContainer">
            <FormHeader text="Start using Time-Machine!" />
            <FormHeader text="Track time with pleasure." />
            <FormTitle text="Sign Up" />
            <form onSubmit={handleSubmit(this.submit)} className="form">
              <Field
                name="firstName"
                type="text"
                component={Input}
                placeholder="First name"
                className="mainInput"
              />
              <Field
                name="lastName"
                type="text"
                component={Input}
                placeholder="Last name"
                className="mainInput"
              />
              <Field
                name="email"
                type="email"
                component={Input}
                placeholder="Email adress"
                className="mainInput"
              />
              <Button className="signInUp">Sign up</Button>
              {(submitSucceeded && (
                <Notifier
                  text="Registration completed successfully, check your email"
                  className="success"
                />
              )) ||
                (submitFailed && (
                  <Notifier
                    text="Something was wrong, try again"
                    className="fail"
                  />
                ))}
            </form>
            <Link className="link" to="/login">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signup,
};

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: REGISTER,
    validate,
  })(SignUpPage),
);
