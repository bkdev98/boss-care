import {IAction} from '@utils/redux';

import {SHOW_MODALIZE, HIDE_MODALIZE, LOGOUT} from '@actions';

interface MODALIZE_STATE {
  open?: boolean;
  title?: string;
  content?: JSX.Element;
}

const INITIAL_STATE = {
  open: false,
  title: '',
  content: null,
};

export default function (state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case SHOW_MODALIZE:
      return {
        ...state,
        open: true,
        title: action.payload.title,
        content: action.payload.content,
      };
    case HIDE_MODALIZE:
      return INITIAL_STATE;
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
