import { BASE_URL, TIME_OUT } from './config';
import HRequest from './request';

const Request = new HRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    }
  }
});

export default Request;
