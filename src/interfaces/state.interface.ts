export interface alert {
  loading?: boolean;
  success?: string;
  error?: string;
}

export interface auth {
  token: string;
  user: object;
}

export interface IState {
  alert: alert;
  auth: auth;
}

export type IDefaultState = alert | auth;
