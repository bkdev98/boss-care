import React from 'react';
import {useDispatch} from 'react-redux';
import OnboardingView from './Onboarding.view';

import {SCREENS} from '@navigation';
import {finishOnboarding} from '@actions';

const OnboardingContainer = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();

  function handleFinish() {
    dispatch(finishOnboarding());
    navigation.replace(SCREENS.AUTH.LOGIN);
  }

  return <OnboardingView onFinish={handleFinish} onLogin={handleFinish} />;
};

export default OnboardingContainer;
