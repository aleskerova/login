import { BASE_URL } from '../constants/commons';

let jwtToken = null;

export const setJwtToken = token => {
  jwtToken = token;
};

const callApi = (url, options) => {
  const preparedOptions = { ...options };
  if (preparedOptions.body) {
    preparedOptions.body = JSON.stringify(options.body);
  }
  preparedOptions.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwtToken}`,
    ...(options.headers || {}),
  };
  return fetch(`${BASE_URL}/${url}`, preparedOptions)
    .then(r => r.json())
    .then(r => {
      if (r.statusCode >= 400) {
        throw r;
      }
      return r;
    });
};

const makeHttpMethod = method => (url, options) =>
  callApi(url, { ...options, method });

export const api = {
  get: makeHttpMethod('GET'),
  post: makeHttpMethod('POST'),
  put: makeHttpMethod('PUT'),
  path: makeHttpMethod('PATCH'),
  delete: makeHttpMethod('DELETE'),
};
