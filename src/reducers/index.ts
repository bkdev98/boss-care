import {combineReducers} from 'redux';

import app from './app';
import auth from './auth';
import movie from './movie';
import modalize from './modalize';
import pet from './pet';

export const rootReducer = combineReducers({
  app,
  auth,
  movie,
  modalize,
  pet,
});

export type RootState = ReturnType<typeof rootReducer>;
