import {
  AUTH_REQUEST_FAILED,
  SET_USER_TO_STORE,
} from '../constants/auth-action-types';
import { createReducer } from './createreducer';

const sentMagicLinkError = (state, action) => {
  const { error } = action.payload;
  return {
    ...state,
    error,
  };
};

const setUserObject = (state, action) => {
  const { user } = action.payload;
  return {
    ...state,
    user,
  };
};

export const auth = createReducer(
  {
    [AUTH_REQUEST_FAILED]: sentMagicLinkError,
    [SET_USER_TO_STORE]: setUserObject,
  },
  {},
);
