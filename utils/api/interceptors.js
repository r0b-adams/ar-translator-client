// DEVELOPMENT ONLY
import { BASE_URL, TOKEN } from '@env';

const setAuth = (config) => {
  if (TOKEN) config.headers = { authorization: `Bearer ${TOKEN}` };
  return config;
};

const setHost = (config) => {
  config.baseURL = BASE_URL;
  return config;
};

const handleError = (error) => {
  console.error(error.message);
};

export { setAuth, setHost, handleError };
