import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox, Platform, UIManager} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Host} from 'react-native-portalize';

import AppNavigation from '@navigation';
import Modalization from '@components/Modalization';
import store, {persistor} from './store';

LogBox.ignoreLogs([
  'React.createFactory()',
  'Require cycle:',
  'Sending `onAnimated',
  'VirtualizedLists',
]);

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Host>
            <>
              <StatusBar barStyle="dark-content" />
              <AppNavigation />
              <Modalization />
            </>
          </Host>
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
