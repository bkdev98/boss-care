import React from 'react';
import {useDispatch} from 'react-redux';

import {showModalize, hideModalize} from '@actions';

import SearchMainView from './SearchMain.view';

const SearchMainContainer = () => {
  const dispatch = useDispatch();

  function handleShowAddPetModal(content: JSX.Element) {
    dispatch(showModalize({title: 'Add pet detail', content}));
  }

  function handleHideAddPetModal() {
    dispatch(hideModalize());
  }

  return (
    <SearchMainView
      onShowAddPetModal={handleShowAddPetModal}
      onHideAddPetModal={handleHideAddPetModal}
    />
  );
};

export default SearchMainContainer;
