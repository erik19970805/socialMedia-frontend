import { Dispatch } from 'redux';
import { ConstantActions } from '../../interfaces/constant.interface';
import { AUTH, ALERT } from '../constants/contant';
import api from '../api';

export const signin = (userData: object) => async (
  dispatch: Dispatch<ConstantActions>
): Promise<void> => {
  dispatch({ type: ALERT, payload: { loading: true } });
  const { data } = await api(dispatch, 'POST', '/auth/signin', userData);
  if (data !== null) {
    dispatch({ type: AUTH, payload: { token: data.accessToken, user: data.user } });
    localStorage.setItem('firstLogin', 'true');
    dispatch({ type: ALERT, payload: { success: data.message } });
  }
};

export const refreshToken = () => async (dispatch: Dispatch<ConstantActions>): Promise<void> => {
  const firstLogin = localStorage.getItem('firstLogin');
  if (firstLogin) {
    dispatch({ type: 'ALERT', payload: { loading: true } });
    const { data } = await api(dispatch, 'POST', '/auth/refresh_token');
    if (data !== null) {
      dispatch({ type: 'AUTH', payload: { token: data.accessToken, user: data.user } });
    }
    dispatch({ type: 'ALERT', payload: {} });
  }
};
