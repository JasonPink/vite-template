import axios from 'axios';
import { ElMessage } from 'element-plus';

const CODE_OK = 200;
const request = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API,
  baseURL: '',
  timeout: 10 * 1000
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    const { code, message: msg, data } = response.data;
    console.log('response', response);
    if (code !== CODE_OK) {
      ElMessage.error(msg || '网络故障');
      return Promise.reject(msg);
    }
    return Promise.resolve(data);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default request;
