import React from 'react';
import {Linking} from 'react-native';
import {useDispatch} from 'react-redux';

import {logout} from '@actions';
import SettingView from './Setting.view';

const SettingContainer = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  function handlePressBack() {
    navigation.goBack();
  }

  function handlePressWebsite() {
    Linking.openURL('https://inapps.net');
  }

  return (
    <SettingView
      onPressBack={handlePressBack}
      onLogout={handleLogout}
      onPressWebsite={handlePressWebsite}
    />
  );
};

export default SettingContainer;
