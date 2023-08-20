import axios from 'axios';

import { API_BASE_URL } from 'src/utils/constants';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: '',
  },
});

export default axiosInstance;
