import axios, { AxiosResponse, Method } from 'axios';
import { Dispatch } from 'redux';
import { constantActions } from '../interfaces/constant.interface';
import { NOTIFY } from './constants/contant';

const baseURL = 'http://localhost:4000/api';

export default async (
  dispatch: Dispatch<constantActions>,
  method: Method,
  url: string,
  data: object,
  headers?: object
): Promise<AxiosResponse | { data: null }> => {
  try {
    return await axios({ url, baseURL, method, data, headers });
  } catch (error) {
    dispatch({
      type: NOTIFY,
      payload: {
        error:
          error.response && error.response.data.error ? error.response.data.error : error.message,
      },
    });
    return { data: null };
  }
};
