import { fork, all } from 'redux-saga/effects';
import { authSaga } from './authSaga';

export default function* root() {
  yield all([fork(authSaga)]);
}
