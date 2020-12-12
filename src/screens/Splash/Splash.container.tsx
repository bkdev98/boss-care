import React from 'react';
import {useSelector} from 'react-redux';
import SplashView from './Splash.view';

import {SCREENS} from '@navigation';
import {RootState} from '@reducers';

const SplashContainer = ({navigation}: {navigation: any}) => {
  const onboardingFinished = useSelector((state: RootState) => state.app.onboardingFinished);

  function handleFinish() {
    if (!onboardingFinished) {
      navigation.replace(SCREENS.ONBOARDING);
    } else {
      navigation.replace(SCREENS.AUTH.REGISTRATION_SOCIAL);
    }
  }

  return <SplashView onFinish={handleFinish} />;
};

export default SplashContainer;
