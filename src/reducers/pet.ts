import {IAction} from '@utils/redux';
import {ADD_PET, LOGOUT} from '@actions';

const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case ADD_PET: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case LOGOUT: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
