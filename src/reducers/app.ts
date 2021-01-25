import {IAction} from '@utils/redux';
import {FINISH_ONBOARDING} from '@actions';

const INITIAL_STATE = {
  onboardingFinished: false,
  vetSpecialties: [
    {key: '1', label: 'Cat Specialist', isPopular: true},
    {key: '2', label: 'Dog Specialist', isPopular: true},
    {key: '3', label: 'Ornithologist', isPopular: true},
    {key: '4', label: 'Dentist', isPopular: true},
    {key: '5', label: 'Surgeon', isPopular: true},
    {key: '6', label: 'Veterinarian', isPopular: false},
    {key: '7', label: 'Therapist', isPopular: false},
    {key: '8', label: 'Anesthetist', isPopular: false},
    {key: '9', label: 'Gastroenterologist', isPopular: false},
    {key: '10', label: 'Infectious disease', isPopular: false},
    {key: '12', label: 'Cardiologist', isPopular: false},
    {key: '13', label: 'Neurologist', isPopular: false},
    {key: '14', label: 'Oncologist', isPopular: false},
    {key: '15', label: 'Ornithologist', isPopular: false},
    {key: '16', label: 'Orthopedist', isPopular: false},
    {key: '17', label: 'Ophthalmologist', isPopular: false},
    {key: '18', label: 'Radiologist', isPopular: false},
    {key: '19', label: 'Dentist', isPopular: false},
    {key: '20', label: 'Therapist', isPopular: false},
    {key: '21', label: 'Traumatologist', isPopular: false},
    {key: '22', label: 'Surgeon', isPopular: false},
    {key: '23', label: 'Endocrinologist', isPopular: false},
    {key: '24', label: 'Groomer', isPopular: false},
  ],
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
