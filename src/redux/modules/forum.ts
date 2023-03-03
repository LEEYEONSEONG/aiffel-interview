import { IForumState, IForumData } from 'types/payloadTypes';

export const GET_FORUM_LIST = 'forum/GET_FORUM_LIST';
export const GET_FORUM_DETAIL = 'forum/GET_FORUM_DETAIL';

export const getForumList = (payload: IForumData[]) => {
  return {
    type: GET_FORUM_LIST,
    payload,
  };
};

export const getForumDetail = (payload: IForumData) => ({
  type: GET_FORUM_DETAIL,
  payload,
});

const initialState: IForumState = {
  forumList: [],
  total: 0,
  forum: {
    id: 0,
    title: '',
    content: '',
    isLiked: false,
    tag: {
      name: '',
      color: '',
    },
  },
};

type ForumAction = ReturnType<typeof getForumList>;

export default function reducer(state = initialState, action: ForumAction) {
  switch (action.type) {
    case GET_FORUM_LIST:
      const forumList = action.payload;
      return {
        ...state,
        forumList,
        total: forumList.length,
      };

    case GET_FORUM_DETAIL:
      const detail = action.payload;
      return {
        ...state,
        forum: detail,
      };
    default:
      return state;
  }
}
