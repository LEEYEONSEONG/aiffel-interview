import { IForumState, IForumData } from 'types/payloadTypes';

export const GET_FORUM_LIST = 'forum/GET_FORUM_LIST';

export const getForumList = (payload: IForumData[]) => {
  return {
    type: GET_FORUM_LIST,
    payload,
  };
};

const initialState: IForumState = {
  forumList: [],
  total: 0,
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

    default:
      return state;
  }
}
