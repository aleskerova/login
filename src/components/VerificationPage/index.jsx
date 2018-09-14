import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { sendUrl } from '../../actions/auth.actions';
import Spinner from '../Spinner';
import '../Spinner/Spinner.css';
import './VerificationPage.css';

class VerificationPage extends Component {
  static propTypes = {
    sendUrl: func.isRequired,
  };

  componentDidMount() {
    const { sendUrl } = this.props;
    sendUrl();
  }

  render() {
    return (
      <div className="contForSpin">
        <Spinner className="circleMiddle" />
      </div>
    );
  }
}

const mapDispatchToProps = {
  sendUrl,
};

export default connect(
  null,
  mapDispatchToProps,
)(VerificationPage);
