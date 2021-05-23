import { AUTH, ALERT, VALID, THEME, USER } from '../redux/constants/contant';
import { IAuthSignup } from './auth.interface';
import { alert, auth, theme, user } from './state.interface';

export interface IConstantAuth {
  type: typeof AUTH;
  payload: auth;
}
export interface IAlert {
  type: typeof ALERT;
  payload: alert;
}

export interface IValid {
  type: typeof VALID;
  payload: IAuthSignup;
}

export interface ITheme {
  type: typeof THEME;
  payload: theme;
}

export interface ITypeUser {
  type: typeof USER;
  payload: user;
}

export type ConstantActions = IConstantAuth | IAlert | IValid | ITheme | ITypeUser;
