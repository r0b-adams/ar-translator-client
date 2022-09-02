import axios from 'axios';

process.env.NODE_ENV === 'development'
  ? (axios.defaults.baseURL = 'http://10.0.0.98:3000')
  : (axios.defaults.baseURL = ''); // production

// suppress errs thrown by axios due to res codes
// so we can use the server respose messages
axios.defaults.validateStatus = (status) => status <= 500;

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

  analyze: async (img, to) => {
    return axios.post('/visionAPI/objects', { img, to });
  },
};

export default api;
