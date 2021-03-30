import { combineReducers } from 'redux';

import appReducer from './app';
import searchReducer from './search';

export const rootReducer = combineReducers({
  search: searchReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
