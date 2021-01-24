import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {createFilter} from 'redux-persist-transform-filter';

import {rootReducer} from '@reducers';
import {CONSTANTS} from '@constants';

const persistConfig = {
  key: CONSTANTS.PERSIST_KEY,
  storage: AsyncStorage,
  whitelist: ['auth', 'app', 'pet'],
  transforms: [createFilter('auth', ['isAuth', 'userInfo', 'requestToken'])],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
