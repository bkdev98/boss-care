import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox, Platform, UIManager} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import AppNavigation from '@navigation';
import store, {persistor} from './store';

LogBox.ignoreLogs(['React.createFactory()', 'Require cycle:']);

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <StatusBar barStyle="dark-content" />
          <AppNavigation />
        </>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
