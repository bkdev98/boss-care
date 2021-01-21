import {IAction} from '@utils/redux';
import {ADD_PET} from '@actions';

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
    default:
      return state;
  }
};
