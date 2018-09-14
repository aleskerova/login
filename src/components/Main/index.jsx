import React, { Fragment } from 'react';
import { func, shape } from 'prop-types';
import Header from '../Header';
import SideBar from '../SideBar';
import Content from '../Content';

import './Main.css';

export default class Main extends React.Component {
  static propTypes = {
    getUserData: func.isRequired,
    user: shape(),
  };

  static defaultProps = {
    user: {},
  };

  componentDidMount() {
    const { getUserData } = this.props;
    getUserData();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="layoutCont">
        <SideBar />
        <div className="allPage">
          {user ? (
            <Fragment>
              <Header user={user} />
              <Content />
            </Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}
