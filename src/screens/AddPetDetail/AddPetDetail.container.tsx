import React from 'react';
import {useDispatch} from 'react-redux';

import {addPet} from '@actions';
import AddPetDetailView from './AddPetDetail.view';
import {SCREENS} from '@navigation';

interface AddPetDetailContainerProps {
  navigation: any;
  route: any;
}

const AddPetDetailContainer: React.FC<AddPetDetailContainerProps> = ({route, navigation}) => {
  const {initial} = route.params;
  const dispatch = useDispatch();

  function handleAddPet(payload: any) {
    dispatch(addPet(payload));
    initial ? navigation.navigate(SCREENS.PROFILE) : navigation.goBack();
  }

  return <AddPetDetailView initial={initial} onAddPet={handleAddPet} />;
};

export default AddPetDetailContainer;
