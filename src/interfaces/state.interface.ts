export interface notify {
  loading?: boolean;
  success?: string;
  error?: string;
}

export interface user {
  token: string;
  user: object;
}

export type IDefaultState = notify | user;
