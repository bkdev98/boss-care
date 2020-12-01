import {combineReducers} from 'redux';

import app from './app';
import auth from './auth';
import movie from './movie';

export const rootReducer = combineReducers({
  app,
  auth,
  movie,
});

export type RootState = ReturnType<typeof rootReducer>;
