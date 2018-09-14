import 'regenerator-runtime/runtime';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import Favicon from 'react-favicon';
import createStore from './createStore';
import { checkAuth } from './utility';
import { AppRouter } from './routes';

const history = createHistory();
const store = createStore(history);
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Favicon url="/src/components/assets/favicon.ico" />
        <AppRouter checkAuth={checkAuth} />
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  root,
);
