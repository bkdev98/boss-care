import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {showModalize, hideModalize} from '@actions';
import {SCREENS} from '@navigation';
import {RootState} from '@reducers';
import VetIcon from '@components/Icon/Vet';
import GroomingIcon from '@components/Icon/Grooming';
import BoardingIcon from '@components/Icon/Boarding';
import AdoptionIcon from '@components/Icon/Adoption';
import DogWalkingIcon from '@components/Icon/DogWalking';
import TrainingIcon from '@components/Icon/Training';
import TaxiIcon from '@components/Icon/Taxi';
import DateIcon from '@components/Icon/Date';
import OtherServiceIcon from '@components/Icon/OtherService';

import SearchMainView from './SearchMain.view';
import VetSpecialitiesList from './components/VetSpecialitiesList';

interface SearchMainContainerProps {
  navigation: any;
}

const SearchMainContainer: React.FC<SearchMainContainerProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const petCount = useSelector((state: RootState) => (state.pet as any).list.length);

  function handleShowAddPetModal(content: JSX.Element) {
    !petCount && dispatch(showModalize({title: 'Add pet detail', content}));
  }

  function handleHideAddPetModal() {
    dispatch(hideModalize());
  }

  function handleAddPetDetail() {
    dispatch(hideModalize());
    navigation.navigate(SCREENS.ADD_PET_DETAIL, {initial: true});
  }

  const SERVICES = [
    {
      id: 1,
      title: 'Veterinary',
      icon: <VetIcon />,
      action: () =>
        dispatch(showModalize({title: 'Select a speciality', content: <VetSpecialitiesList />})),
    },
    {
      id: 2,
      title: 'Grooming',
      icon: <GroomingIcon />,
    },
    {
      id: 3,
      title: 'Pet boarding',
      icon: <BoardingIcon />,
    },
    {
      id: 4,
      title: 'Adoption',
      icon: <AdoptionIcon />,
    },
    {
      id: 5,
      title: 'Dog walking',
      icon: <DogWalkingIcon />,
    },
    {
      id: 6,
      title: 'Training',
      icon: <TrainingIcon />,
    },
    {
      id: 7,
      title: 'Pet taxi',
      icon: <TaxiIcon />,
    },
    {
      id: 8,
      title: 'Pet date',
      icon: <DateIcon />,
    },
    {
      id: 9,
      title: 'Other',
      icon: <OtherServiceIcon />,
    },
  ];

  return (
    <SearchMainView
      onShowAddPetModal={handleShowAddPetModal}
      onHideAddPetModal={handleHideAddPetModal}
      onAddPetDetail={handleAddPetDetail}
      services={SERVICES}
    />
  );
};

export default SearchMainContainer;
