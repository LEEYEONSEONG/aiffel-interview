import { IAuthState, IUserInfo } from 'types/payloadTypes';

export const GET_AUTH_USER_INFO = 'auth/GET_AUTH_USER_INFO';

export const getUserInfo = (payload: IUserInfo) => {
  return {
    type: GET_AUTH_USER_INFO,
    payload,
  };
};

const initialState = {
  user: {
    id: 0,
    email: '',
    password: '',
    username: '',
  },
  token: '',
};

type IAuthAction = {
  type: string;
  payload: IAuthState;
};

export default function reducer(state = initialState, action: IAuthAction) {
  switch (action.type) {
    case GET_AUTH_USER_INFO:
      const user = action.payload;
      return {
        ...state,
        user,
        token: 'aiffel',
      };
    default:
      return state;
  }
}
