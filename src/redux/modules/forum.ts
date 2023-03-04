import { IForumState, IForumData } from 'types/payloadTypes';

export const GET_FORUM_LIST = 'forum/GET_FORUM_LIST' as const;
export const GET_SEARCH_LIST = 'forum/GET_SEARCH_LIST' as const;
export const GET_PAGE_LIST = 'forum/GET_PAGE_LIST' as const;

export const getForumList = (payload: IForumData[]) => {
  return {
    type: GET_FORUM_LIST,
    payload,
  };
};

export const getSearchList = (payload: string) => ({
  type: GET_SEARCH_LIST,
  payload,
});

export const getPageList = (payload: IForumData[]) => ({
  type: GET_PAGE_LIST,
  payload,
});

const initialState: IForumState = {
  forumList: [],
  filteredList: [],
  total: 0,
};

type ForumAction =
  | ReturnType<typeof getForumList>
  | ReturnType<typeof getPageList>
  | ReturnType<typeof getSearchList>;

export default function reducer(state = initialState, action: ForumAction) {
  switch (action.type) {
    case GET_FORUM_LIST:
      const forumList = action.payload;
      return {
        ...state,
        forumList,
        filteredList: forumList.slice(0, 5),
        total: forumList.length,
      };
    case GET_SEARCH_LIST:
      const value = action.payload;
      const filteredList = state.forumList.filter((el) =>
        el.title.includes(value),
      );
      return {
        ...state,
        filteredList: filteredList.slice(0, 5),
        total: filteredList.length,
      };
    case GET_PAGE_LIST:
      const pageList = action.payload;
      return {
        ...state,
        filteredList: pageList,
      };

    default:
      return state;
  }
}
