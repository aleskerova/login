import {
  MAGIC_LINK_REQUEST,
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_VERIFY,
  REGISTRATION_REQUEST,
  SEND_VERIFY_URL,
  GET_USER_DATA,
  SET_USER_TO_STORE,
} from '../constants/auth-action-types';

export const requestMagicLink = email => ({
  type: MAGIC_LINK_REQUEST,
  payload: {
    body: {
      email,
    },
  },
});

export const signup = user => ({
  type: REGISTRATION_REQUEST,
  payload: {
    body: user,
  },
});

export const requestFailed = error => ({
  type: AUTH_REQUEST_FAILED,
  payload: {
    error,
  },
});

export const requestVerify = (token, email) => ({
  type: AUTH_REQUEST_VERIFY,
  payload: {
    body: {
      token,
      email,
    },
  },
});

export const sendUrl = () => ({
  type: SEND_VERIFY_URL,
  payload: {},
});

export const getUserData = () => ({
  type: GET_USER_DATA,
  payload: {},
});

export const setUserToStore = user => ({
  type: SET_USER_TO_STORE,
  payload: {
    user,
  },
});
