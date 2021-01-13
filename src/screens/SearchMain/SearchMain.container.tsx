import React from 'react';
import {useDispatch} from 'react-redux';

import {showModalize, hideModalize} from '@actions';
import {SCREENS} from '@navigation';

import SearchMainView from './SearchMain.view';

interface SearchMainContainerProps {
  navigation: any;
}

const SearchMainContainer: React.FC<SearchMainContainerProps> = ({navigation}) => {
  const dispatch = useDispatch();

  function handleShowAddPetModal(content: JSX.Element) {
    dispatch(showModalize({title: 'Add pet detail', content}));
  }

  function handleHideAddPetModal() {
    dispatch(hideModalize());
  }

  function handleAddPetDetail() {
    dispatch(hideModalize());
    navigation.navigate(SCREENS.ADD_PET_DETAIL, {initial: true});
  }

  return (
    <SearchMainView
      onShowAddPetModal={handleShowAddPetModal}
      onHideAddPetModal={handleHideAddPetModal}
      onAddPetDetail={handleAddPetDetail}
    />
  );
};

export default SearchMainContainer;
