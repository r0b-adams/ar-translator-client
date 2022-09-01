import { getItemAsync } from 'expo-secure-store';

import { TOKEN_KEY } from '../constants';

// request interceptors

const setAuth = (config) => {
  const token = getItemAsync(TOKEN_KEY);
  if (token) config.headers = { authorization: `Bearer ${token}` };
  return config;
};

const setHost = (config) => {
  // DEVELOPMENT
  config.baseURL = 'http://10.0.0.98:3000';
  return config;
};

const handleError = (error) => {
  console.error(error.message);
};

export { setAuth, setHost, handleError };
