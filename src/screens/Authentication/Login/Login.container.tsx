import React from 'react';
import {Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ICredential} from '@entities/credential';
import {login} from '@actions';
import {RootState} from '@reducers';

import LoginView from './Login.view';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const {requestToken, beingAuth} = useSelector((state: RootState) => state.auth);

  function handleLogin(values: ICredential) {
    dispatch(login({...values, request_token: requestToken}));
  }

  function handleRegister() {
    Linking.openURL('https://www.themoviedb.org/signup');
  }

  return (
    <LoginView
      onLogin={handleLogin}
      onRegister={handleRegister}
      loading={!requestToken || beingAuth}
    />
  );
};

export default LoginContainer;
