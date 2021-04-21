import { IAuthSignup } from './auth.interface';

export interface alert {
  loading?: boolean;
  success?: string;
  error?: string;
}

export interface auth {
  token: string;
  user: IAuthSignup;
}

export interface IState {
  alert: alert;
  valid: IAuthSignup;
  auth: auth;
  theme: boolean;
}

export type theme = boolean;
export type IDefaultState = alert | auth | IAuthSignup | theme;
