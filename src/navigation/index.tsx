import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootState} from '@reducers';
import LoginScreen from '@screens/Authentication/Login';
import SplashScreen from '@screens/Splash';
import OnboardingScreen from '@screens/Onboarding';
import HomeScreen from '@screens/Home';
import SettingScreen from 'screens/Setting';
import MovieDetailScreen from '@screens/MovieDetail';

import {navigationRef} from './service';

export const SCREENS = {
  SPLASH: 'Splash',
  ONBOARDING: 'Onboarding',
  AUTH: {
    LOGIN: 'Login',
  },
  HOME: 'Home',
  MOVIE_DETAIL: 'MovieDetail',
  SETTING: 'Setting',
};

const Stack = createStackNavigator();

const AppNavigation = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {!isAuth ? (
          <>
            <Stack.Screen name={SCREENS.SPLASH} component={SplashScreen} />
            <Stack.Screen name={SCREENS.ONBOARDING} component={OnboardingScreen} />
            <Stack.Screen name={SCREENS.AUTH.LOGIN} component={LoginScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
            <Stack.Screen name={SCREENS.SETTING} component={SettingScreen} />
            <Stack.Screen
              name={SCREENS.MOVIE_DETAIL}
              component={MovieDetailScreen}
              initialParams={{movie: null}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
