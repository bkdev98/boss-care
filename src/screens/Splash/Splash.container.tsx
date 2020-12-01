import React from 'react';
import SplashView from './Splash.view';

import {SCREENS} from '@navigation';

const SplashContainer = ({navigation}: {navigation: any}) => {
  function handleFinish() {
    navigation.navigate(SCREENS.AUTH.LOGIN);
  }

  return <SplashView onFinish={handleFinish} />;
};

export default SplashContainer;
