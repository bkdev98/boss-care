import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootState} from '@reducers';
import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

import SplashScreen from '@screens/Splash';
import OnboardingScreen from '@screens/Onboarding';
import RegistrationSocialScreen from '@screens/Authentication/RegistrationSocial';
import RegistrationEmailScreen from '@screens/Authentication/RegistrationEmail';
import LoginScreen from '@screens/Authentication/Login';
import SearchMainScreen from '@screens/SearchMain';
import ProfileScreen from '@screens/Profile';
import AddPetDetailScreen from '@screens/AddPetDetail';
import MyPetsScreen from '@screens/MyPets';
import SearchResultScreen from '@screens/SearchResult';
import ServiceDetailScreen from '@screens/ServiceDetail';
import BookResultScreen from '@screens/BookResult';
import AppointmentsScreen from '@screens/Appointments';

import TabSearchIcon from '@components/Icon/TabSearch';
import TabAppointmentsIcon from '@components/Icon/TabAppointments';
import TabExploreIcon from '@components/Icon/TabExplore';
import TabProfileIcon from '@components/Icon/TabProfile';

import {navigationRef} from './service';

export const SCREENS = {
  SPLASH: 'Splash',
  ONBOARDING: 'Onboarding',
  AUTH: {
    REGISTRATION_SOCIAL: 'RegistrationSocial',
    REGISTRATION_EMAIL: 'RegistrationEmail',
    LOGIN: 'Login',
  },
  APP_TAB: 'AppTab',
  SEARCH_MAIN: 'Search',
  APPOINTMENTS: 'Appointments',
  EXPLORE: 'Explore',
  PROFILE: 'Profile',
  ADD_PET_DETAIL: 'AddPetDetail',
  MY_PETS: 'MyPets',
  SEARCH_RESULT: 'SearchResult',
  SERVICE_DETAIL: 'ServiceDetail',
  BOOK_RESULT: 'BookResult',
};

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case SCREENS.SEARCH_MAIN:
              return <TabSearchIcon focused={focused} />;
            case SCREENS.APPOINTMENTS:
              return <TabAppointmentsIcon focused={focused} />;
            case SCREENS.EXPLORE:
              return <TabExploreIcon focused={focused} />;
            case SCREENS.PROFILE:
              return <TabProfileIcon focused={focused} />;
            default:
              return null;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.violet,
        inactiveTintColor: '#BBC3CE',
        labelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: getScalableSize.f(10),
          letterSpacing: 0.4,
        },
      }}>
      <Tab.Screen name={SCREENS.SEARCH_MAIN} component={SearchMainScreen} />
      <Tab.Screen name={SCREENS.APPOINTMENTS} component={AppointmentsScreen} />
      <Tab.Screen name={SCREENS.EXPLORE} component={SearchMainScreen} />
      <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
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
            <Stack.Screen
              name={SCREENS.AUTH.REGISTRATION_SOCIAL}
              component={RegistrationSocialScreen}
            />
            <Stack.Screen
              name={SCREENS.AUTH.REGISTRATION_EMAIL}
              component={RegistrationEmailScreen}
            />
            <Stack.Screen name={SCREENS.AUTH.LOGIN} component={LoginScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name={SCREENS.APP_TAB} component={AppTab} />
            <Stack.Screen
              name={SCREENS.ADD_PET_DETAIL}
              component={AddPetDetailScreen}
              initialParams={{initial: false}}
            />
            <Stack.Screen name={SCREENS.MY_PETS} component={MyPetsScreen} />
            <Stack.Screen name={SCREENS.SEARCH_RESULT} component={SearchResultScreen} />
            <Stack.Screen
              name={SCREENS.SERVICE_DETAIL}
              component={ServiceDetailScreen}
              initialParams={{data: null}}
            />
            <Stack.Screen
              name={SCREENS.BOOK_RESULT}
              component={BookResultScreen}
              initialParams={{appointment: null}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
