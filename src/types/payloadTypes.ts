export interface IRootState {
  auth: IAuthState;
  forum: IForumState;
}

export interface IAuthState {
  user: IUserInfo;
}

export interface IForumState {
  forumList: IForumData[];
  total: number;
}

export interface IUserInfo {
  id: number;
  username: string;
  password: string;
  email: string;
}

export interface IForumData {
  id: number;
  title: string;
  content: string;
  isLiked: boolean;
  tag: ITag;
}

export interface ITag {
  name: string;
  color: string;
}
