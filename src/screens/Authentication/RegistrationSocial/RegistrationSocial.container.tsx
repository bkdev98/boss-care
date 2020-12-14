import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// import {ICredential} from '@entities/credential';
import {authSocial} from '@actions';
import {RootState} from '@reducers';
import {SCREENS} from '@navigation';

import RegistrationSocialView from './RegistrationSocial.view';

const RegistrationSocialContainer = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const {beingAuth} = useSelector((state: RootState) => state.auth);

  function handleSignIn() {
    navigation.push(SCREENS.AUTH.LOGIN);
  }

  function handleContinueFacebook() {
    dispatch(authSocial());
  }

  function handleContinueGoogle() {}

  function handleRegisterEmail() {
    navigation.push(SCREENS.AUTH.REGISTRATION_EMAIL);
  }

  return (
    <RegistrationSocialView
      onSignIn={handleSignIn}
      onContinueFacebook={handleContinueFacebook}
      onContinueGoogle={handleContinueGoogle}
      onRegisterEmail={handleRegisterEmail}
      loading={beingAuth}
    />
  );
};

export default RegistrationSocialContainer;
