import axios, { AxiosPromise, Method } from 'axios';

const baseURL = 'http://localhost:4000/api';

export default (method: Method, url: string, data: object, headers?: object): AxiosPromise =>
  axios({ url, baseURL, method, data, headers });
