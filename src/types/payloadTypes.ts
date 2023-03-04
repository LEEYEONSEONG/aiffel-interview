export interface IRootState {
  auth: IAuthState;
  forum: IForumState;
}

export interface IAuthState {
  user: IUserInfo;
  token: string;
}

export interface IForumState {
  forumList: IForumData[];
  filteredList: IForumData[];
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

export interface INewForumParams {
  title: string;
  content: string;
  selectedOption: string;
}

export interface ILikeForumParams {
  id: string;
  isLiked: boolean;
}
