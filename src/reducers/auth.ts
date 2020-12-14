import {IAction} from '@utils/redux';

import {GENERATE_REQUEST_TOKEN, LOGIN, AUTH_SOCIAL, LOGOUT} from '@actions';

interface AuthState {
  isAuth: boolean;
  userInfo: any;
  requestToken: string | null;
  beingAuth: boolean;
}

const INITIAL_STATE: AuthState = {
  isAuth: false,
  userInfo: null,
  requestToken: null,
  beingAuth: false,
};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case AUTH_SOCIAL:
      return {
        ...state,
        isAuth: true,
      };
    case GENERATE_REQUEST_TOKEN.SUCCESS:
      return {
        ...state,
        requestToken: action.payload.request_token,
      };
    case LOGIN.REQUEST:
      return {
        ...state,
        beingAuth: true,
      };
    case LOGIN.SUCCESS:
      return {
        ...state,
        isAuth: true,
        userInfo: {
          username: action.payload.inputPayload.username,
          requestToken: action.payload.request_token,
        },
        beingAuth: false,
      };
    case LOGIN.FAILURE:
      return {
        ...state,
        beingAuth: false,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
