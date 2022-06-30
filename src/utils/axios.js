import axios from 'axios';
import { getToken, hasToken } from '@/utils/token';
import { omit } from 'lodash';

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
});
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
export const getHeaders = () => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  };
  const token = getToken();

  if (hasToken()) {
    headers.Authorization = `${token}`;
  }

  return headers;
};

instance.interceptors.request.use(
  config => {
    config.headers = { ...config.headers, ...getHeaders() };

    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => {
    const res = response.data;
    return { ...omit(res, 'variable'), ...res.variables };
  },
  error => {
    const result = {
      error: -1,
      message: error.message,
      httpStatusCode: error.response ? error.response.status : null,
    };
    return Promise.reject(result);
  },
);

export default instance;
