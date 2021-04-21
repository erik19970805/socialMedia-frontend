import { Dispatch } from 'redux';
import { ConstantActions } from '../../interfaces/constant.interface';
import api from '../api';
import { IAuthSignup, IAuthSignin } from '../../interfaces/auth.interface';
import { valid } from '../../utils/valid';

export const signup = (userData: IAuthSignup) => async (
  dispatch: Dispatch<ConstantActions>
): Promise<{ type: 'VALID'; payload: IAuthSignup } | undefined> => {
  const { errorMessage, errorLength } = valid(userData);
  if (errorLength > 0) return dispatch({ type: 'VALID', payload: errorMessage });

  dispatch({ type: 'ALERT', payload: { loading: true } });
  const { data } = await api(dispatch, 'POST', '/auth/signup', userData);
  if (data !== null) {
    dispatch({ type: 'AUTH', payload: { token: data.accessToken, user: data.user } });
    localStorage.setItem('firstLogin', 'true');
    dispatch({ type: 'ALERT', payload: { success: data.message } });
  }
  return undefined;
};

export const signin = (userData: IAuthSignin) => async (
  dispatch: Dispatch<ConstantActions>
): Promise<void> => {
  dispatch({ type: 'ALERT', payload: { loading: true } });
  const { data } = await api(dispatch, 'POST', '/auth/signin', userData);
  if (data !== null) {
    dispatch({ type: 'AUTH', payload: { token: data.accessToken, user: data.user } });
    localStorage.setItem('firstLogin', 'true');
    dispatch({ type: 'ALERT', payload: { success: data.message } });
  }
};

export const signout = () => async (dispatch: Dispatch<ConstantActions>): Promise<void> => {
  localStorage.removeItem('firstLogin');
  await api(dispatch, 'POST', '/auth/signout');
  window.location.href = '/';
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
