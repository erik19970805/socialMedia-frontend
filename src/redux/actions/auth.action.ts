import { Dispatch } from 'redux';
import { constantActions } from '../../interfaces/constant.interface';
import { AUTH, NOTIFY } from '../constants/contant';
import api from '../api';

export const signin = (userData: object) => async (
  dispatch: Dispatch<constantActions>
): Promise<void> => {
  try {
    dispatch({ type: NOTIFY, payload: { loading: true } });
    const { data } = await api('POST', '/auth/signin', userData);
    dispatch({ type: AUTH, payload: { token: data.accessToken, user: data.user } });
    localStorage.setItem('firstLogin', 'true');
    dispatch({ type: NOTIFY, payload: { success: data.message } });
  } catch (error) {
    dispatch({
      type: NOTIFY,
      payload: {
        error:
          error.response && error.response.data.error ? error.response.data.error : error.message,
      },
    });
  }
};

export const nuevo = '';
