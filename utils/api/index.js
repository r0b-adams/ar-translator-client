import axios from 'axios';

import { setAuth, setHost, handleError } from './interceptors';

axios.interceptors.request.use(setAuth, handleError);
axios.interceptors.request.use(setHost, handleError);

const api = {
  user: async () => {
    return axios.get('/auth/users');
  },

  register: async (username, email, password) => {
    return axios.post('/auth/register', { username, email, password });
  },

  login: async (username, password) => {
    return axios.post('/auth/login', { username, password });
  },

  logout: async () => {
    return axios.delete('/auth/logout');
  },

  languages: async () => {
    return axios.get('/translateAPI/languages');
  },

  translate: async (text, from, to) => {
    return axios.post('/translateAPI/translate', { text, from, to });
  },

  analyze: async (img, to) => {
    return axios.post('/visionAPI/objects', { img, to });
  },
};

export default api;
