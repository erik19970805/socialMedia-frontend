import { AUTH, NOTIFY } from '../redux/constants/contant';
import { notify, user } from './state.interface';

export interface IConstantAuth {
  type: typeof AUTH;
  payload: user;
}
export interface INotifyLoading {
  type: typeof NOTIFY;
  payload: notify;
}
export interface INotifySuccess {
  type: typeof NOTIFY;
  payload: notify;
}
export interface INotifyFail {
  type: typeof NOTIFY;
  payload: notify;
}

export type constantActions = IConstantAuth | INotifySuccess | INotifyLoading | INotifyFail;
