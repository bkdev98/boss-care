import React from 'react';
import {useSelector} from 'react-redux';

import MyPetsView from './MyPets.view';
import {SCREENS} from '@navigation';
import {RootState} from '@reducers';

interface MyPetsContainerProps {
  navigation: any;
  route: any;
}

const MyPetsContainer: React.FC<MyPetsContainerProps> = ({navigation}) => {
  const list = useSelector((state: RootState) => state.pet.list);

  function handleAddPet() {
    navigation.navigate(SCREENS.ADD_PET_DETAIL);
  }

  return <MyPetsView list={list} onAddPet={handleAddPet} />;
};

export default MyPetsContainer;
