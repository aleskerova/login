import React from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { requestMagicLink } from '../../actions/auth.actions';
import { REGISTER } from '../../constants/commons';
import FormHeader from '../FormHeader';
import FormTitle from '../FormTitle';
import Button from '../Button';
import Input from '../Input';
import Notifier from './Notifier';
import { validate } from '../../validation';
import '../Button/Button.css';
import './styles.css';

class SignInPage extends React.PureComponent {
  static propTypes = {
    requestMagicLink: func.isRequired,
    handleSubmit: func.isRequired,
    submitFailed: bool.isRequired,
    submitSucceeded: bool.isRequired,
  };

  submit = values => {
    const { requestMagicLink } = this.props;
    const { email } = values;
    requestMagicLink(email);
  };

  render() {
    const { submitSucceeded, submitFailed, handleSubmit } = this.props;
    return (
      <div className="wrapper">
        <div className="image" />
        <div className="formWrapper">
          <div className="formContainer">
            <FormHeader text="Welcome back!" />
            <FormHeader text="Glad to see you again." />
            <FormTitle text="Sign In" />
            <form onSubmit={handleSubmit(this.submit)} className="form">
              <Field
                name="email"
                type="email"
                component={Input}
                placeholder="Email"
                className="mainInput"
              />
              <Button className="signInUp">Sign in</Button>
              {(submitSucceeded && (
                <Notifier text="Check your email" className="success" />
              )) ||
                (submitFailed && (
                  <Notifier text="User not found!" className="fail" />
                ))}
            </form>
            <Link className="link" to="/registration">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  requestMagicLink,
};

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: REGISTER,
    validate,
  })(SignInPage),
);
