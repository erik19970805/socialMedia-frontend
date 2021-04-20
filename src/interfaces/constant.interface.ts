import { AUTH, ALERT } from '../redux/constants/contant';
import { alert, auth } from './state.interface';

export interface IConstantAuth {
  type: typeof AUTH;
  payload: auth;
}
export interface INotifyLoading {
  type: typeof ALERT;
  payload: alert;
}
export interface INotifySuccess {
  type: typeof ALERT;
  payload: alert;
}
export interface INotifyFail {
  type: typeof ALERT;
  payload: alert;
}

export type ConstantActions = IConstantAuth | INotifySuccess | INotifyLoading | INotifyFail;
