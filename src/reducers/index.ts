import {combineReducers} from 'redux';

import app from './app';
import auth from './auth';
import movie from './movie';
import modalize from './modalize';

export const rootReducer = combineReducers({
  app,
  auth,
  movie,
  modalize,
});

export type RootState = ReturnType<typeof rootReducer>;
