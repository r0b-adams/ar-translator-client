import axios from 'axios';

import { setAuth, setHost, handleError } from './interceptors';

axios.interceptors.request.use(setAuth, handleError);
axios.interceptors.request.use(setHost, handleError);

const api = {
  analyze: async (img, to) => {
    return axios({
      method: 'post',
      url: '/visionAPI/objects',
      data: { img, to },
    });
  },
};

export default api;
