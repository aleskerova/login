import { put, takeEvery, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setSubmitSucceeded, setSubmitFailed } from 'redux-form';
import queryString from 'query-string';
import {
  MAGIC_LINK_REQUEST,
  AUTH_REQUEST_VERIFY,
  REGISTRATION_REQUEST,
  SEND_VERIFY_URL,
  GET_USER_DATA,
} from '../constants/auth-action-types';
import {
  SEND_MAGIC_LINK,
  REGISTRATION,
  VERIFY_MAGIC_LINK,
  USER,
} from '../constants/urls';
import { REGISTER } from '../constants/commons';
import {
  requestFailed,
  requestVerify,
  setUserToStore,
} from '../actions/auth.actions';
import { api, setJwtToken } from './api';

function* sendMagicLink(action) {
  try {
    yield call(api.post, SEND_MAGIC_LINK, {
      body: action.payload.body,
    });
    yield put(setSubmitSucceeded(REGISTER));
  } catch (error) {
    yield put(setSubmitFailed(REGISTER));
    yield put(requestFailed(error));
  }
}

function* sendRegRequest(action) {
  try {
    yield call(api.post, REGISTRATION, {
      body: action.payload.body,
    });
    yield put(setSubmitSucceeded(REGISTER));
  } catch (error) {
    yield put(setSubmitFailed(REGISTER));
    yield put(requestFailed(error));
  }
}

function* sendParsedUrl() {
  const url = window.location.href;
  const parsed = yield call(queryString.parse, url);
  const { magicLinkToken, email } = parsed;
  yield put(requestVerify(magicLinkToken, email));
}

function* sendVerificationData(action) {
  try {
    const result = yield call(api.post, VERIFY_MAGIC_LINK, {
      body: action.payload.body,
    });
    yield call([localStorage, 'setItem'], 'token', result.data.token);
    yield put(push('/profile'));
  } catch (error) {
    yield put(requestFailed(error));
  }
}

function* getUserObject() {
  try {
    const token = yield call([localStorage, 'getItem'], 'token');
    yield call(setJwtToken, token);
    const { data } = yield call(api.get, USER);
    yield put(setUserToStore(data));
  } catch (error) {
    yield put(requestFailed(error));
  }
}

export function* authSaga() {
  yield takeEvery(MAGIC_LINK_REQUEST, sendMagicLink);
  yield takeEvery(REGISTRATION_REQUEST, sendRegRequest);
  yield takeEvery(SEND_VERIFY_URL, sendParsedUrl);
  yield takeEvery(AUTH_REQUEST_VERIFY, sendVerificationData);
  yield takeEvery(GET_USER_DATA, getUserObject);
}
