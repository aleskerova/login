import React from 'react';
import { func } from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import Main from '../containers/Main';
import SignInPage from '../components/LoginPages/SignInPage';
import SignUpPage from '../components/LoginPages/SignUpPage';
import VerificationPage from '../components/VerificationPage';

const GuestRouter = () => (
  <Switch>
    <Route exact path="/login" component={SignInPage} />
    <Route exact path="/registration" component={SignUpPage} />
    <Route exact path="/verification" component={VerificationPage} />
    <Redirect exact from="/" to="/login" />
    <Redirect from="/profile" to="/login" />
    <Route render={() => <h1>Not Found</h1>} />
  </Switch>
);

const PrivateRouter = () => (
  <Switch>
    <Route exact path="/profile" component={Main} />
    <Redirect exact from="/" to="/profile" />
    <Redirect from="/login" to="/profile" />
    <Route render={() => <h1>Not Found</h1>} />
  </Switch>
);

export const AppRouter = ({ checkAuth }) => (
  <React.Fragment>
    {checkAuth() ? <PrivateRouter /> : <GuestRouter />}
  </React.Fragment>
);

AppRouter.propTypes = {
  checkAuth: func.isRequired,
};
