import React from 'react';
// import {Linking} from 'react-native';
import {/**useDispatch, */ useSelector} from 'react-redux';

import {ISignInCredential} from '@entities/credential';
// import {login} from '@actions';
import {RootState} from '@reducers';
import {SCREENS} from '@navigation';

import LoginView from './Login.view';

const LoginContainer = ({navigation}: {navigation: any}) => {
  // const dispatch = useDispatch();
  const {beingAuth} = useSelector((state: RootState) => state.auth);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleRegister() {
    navigation.replace(SCREENS.AUTH.REGISTRATION_EMAIL);
  }

  function handleLogin(values: ISignInCredential) {
    console.log('login', values);
  }

  function handleContinueFacebook() {}

  function handleContinueGoogle() {}

  return (
    <LoginView
      onSignIn={handleLogin}
      loading={beingAuth}
      onGoBack={handleGoBack}
      onRegister={handleRegister}
      onContinueFacebook={handleContinueFacebook}
      onContinueGoogle={handleContinueGoogle}
    />
  );
};

export default LoginContainer;
