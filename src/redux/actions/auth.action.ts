import { Dispatch } from 'redux';
import { constantActions } from '../../interfaces/constant.interface';
import { AUTH, NOTIFY } from '../constants/contant';
import api from '../api';

// eslint-disable-next-line import/prefer-default-export
export const signin = (userData: object) => async (
  dispatch: Dispatch<constantActions>
): Promise<void> => {
  dispatch({ type: NOTIFY, payload: { loading: true } });
  const { data } = await api(dispatch, 'POST', '/auth/signin', userData);
  if (data !== null) {
    dispatch({ type: AUTH, payload: { token: data.accessToken, user: data.user } });
    localStorage.setItem('firstLogin', 'true');
    dispatch({ type: NOTIFY, payload: { success: data.message } });
  }
};
