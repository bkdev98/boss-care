import {IAction} from '@utils/redux';
import {BOOK_APPOINTMENT, CANCEL_APPOINTMENT, LOGOUT} from '@actions';
import {IAppointment} from '@entities/appointment';

const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case BOOK_APPOINTMENT: {
      return {
        ...state,
        list: [...state.list, action.payload.appointment],
      };
    }
    case CANCEL_APPOINTMENT: {
      return {
        ...state,
        list: state.list.filter((item: IAppointment) => item.id !== action.payload.id),
      };
    }
    case LOGOUT: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
