import {IAction} from '@utils/redux';
import {FINISH_ONBOARDING} from '@actions';

const INITIAL_STATE = {
  onboardingFinished: false,
};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case FINISH_ONBOARDING: {
      return {
        ...state,
        onboardingFinished: true,
      };
    }
    default:
      return state;
  }
};
