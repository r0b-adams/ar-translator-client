import axios from 'axios';

process.env.NODE_ENV === 'development'
  ? (axios.defaults.baseURL = 'http://10.0.0.98:3000')
  : (axios.defaults.baseURL = ''); // deployment

axios.defaults.validateStatus = (status) => status < 500;

const api = {
  setAuthHeader: (token) => {
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
  },

  getUser: async () => {
    return axios.get('/auth/users');
  },

  register: async (credentials) => {
    return axios.post('/auth/register', credentials);
  },

  login: async (credentials) => {
    return axios.post('/auth/login', credentials);
  },

  logout: async () => {
    return axios.delete('/auth/logout');
  },
};

export default api;
