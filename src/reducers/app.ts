import {IAction} from '@utils/redux';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
