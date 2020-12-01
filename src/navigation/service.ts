import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function push(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

function goBack() {
  navigationRef.current?.goBack();
}

export const getActiveRouteName = (state: any): string => {
  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
};

export default {
  navigate,
  goBack,
  getActiveRouteName,
  push,
};
