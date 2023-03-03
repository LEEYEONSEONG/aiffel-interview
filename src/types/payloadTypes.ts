export interface IRootState {
  auth: IAuth;
}

export interface IAuth {
  user: IUserInfo;
}

export interface IUserInfo {
  id: number;
  username: string;
  password: string;
  email: string;
}
