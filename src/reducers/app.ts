import {IAction} from '@utils/redux';
import {FINISH_ONBOARDING} from '@actions';

const INITIAL_STATE = {
  onboardingFinished: false,
  species: [
    {
      key: 'dog',
      label: 'Dog',
    },
    {
      key: 'cat',
      label: 'Cat',
    },
    {
      key: 'bird',
      label: 'Bird',
    },
  ],
  breeds: {
    dog: [
      {
        key: '1',
        label: 'Labrador Retrievers',
      },
      {
        key: '2',
        label: 'German Shepherds',
      },
      {
        key: '3',
        label: 'Golden Retrievers',
      },
      {
        key: '4',
        label: 'French Bulldogs',
      },
      {
        key: '5',
        label: 'Beagles',
      },
      {
        key: '6',
        label: 'Poodles',
      },
      {
        key: '7',
        label: 'Rottweilers',
      },
    ],
    cat: [
      {
        key: '8',
        label: 'Siamese',
      },
      {
        key: '9',
        label: 'Persian',
      },
      {
        key: '10',
        label: 'Maine Coon',
      },
      {
        key: '11',
        label: 'Ragdoll',
      },
      {
        key: '12',
        label: 'Bengal',
      },
      {
        key: '13',
        label: 'Sphynx',
      },
    ],
    bird: [
      {
        key: '14',
        label: 'Parakeet/Budgie',
      },
      {
        key: '15',
        label: 'Cockatiel',
      },
      {
        key: '16',
        label: 'Finch',
      },
      {
        key: '17',
        label: 'Lovebird',
      },
      {
        key: '18',
        label: 'Dove',
      },
      {
        key: '19',
        label: 'Parrotlet',
      },
    ],
  },
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
