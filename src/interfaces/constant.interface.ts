import { AUTH, ALERT, VALID } from '../redux/constants/contant';
import { IAuthSignup } from './auth.interface';
import { alert, auth } from './state.interface';

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

export type ConstantActions = IConstantAuth | IAlert | IValid;
