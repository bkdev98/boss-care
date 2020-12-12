import React from 'react';
// import {Linking} from 'react-native';
import {/**useDispatch, */ useSelector} from 'react-redux';

import {IRegisterCredential} from '@entities/credential';
// import {login} from '@actions';
import {RootState} from '@reducers';
import {SCREENS} from '@navigation';

import RegistrationEmailView from './RegistrationEmail.view';

const RegistrationEmailContainer = ({navigation}: {navigation: any}) => {
  // const dispatch = useDispatch();
  const {beingAuth} = useSelector((state: RootState) => state.auth);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignIn() {
    navigation.replace(SCREENS.AUTH.LOGIN);
  }

  function handleRegister(values: IRegisterCredential) {
    console.log('register', values);
  }

  function handleContinueFacebook() {}

  function handleContinueGoogle() {}

  return (
    <RegistrationEmailView
      onRegister={handleRegister}
      loading={beingAuth}
      onGoBack={handleGoBack}
      onSignIn={handleSignIn}
      onContinueFacebook={handleContinueFacebook}
      onContinueGoogle={handleContinueGoogle}
    />
  );
};

export default RegistrationEmailContainer;
