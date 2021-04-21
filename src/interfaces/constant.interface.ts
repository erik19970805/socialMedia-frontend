import { AUTH, ALERT, VALID, THEME } from '../redux/constants/contant';
import { IAuthSignup } from './auth.interface';
import { alert, auth, theme } from './state.interface';

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

export type ConstantActions = IConstantAuth | IAlert | IValid | ITheme;
