import { IAuthSignup } from './auth.interface';
import { IUser } from './user.interface';

export interface IState {
  alert: alert;
  valid: IAuthSignup;
  auth: auth;
  theme: boolean;
  user: user;
}

export interface alert {
  loading?: boolean;
  success?: string;
  error?: string;
}

export interface auth {
  token: string;
  user: IAuthSignup;
}

export interface user {
  searchUser: IUser[];
}

export type theme = boolean;
export type IDefaultState = alert | auth | IAuthSignup | theme | user;
