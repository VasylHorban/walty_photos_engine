import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { rootSaga } from './rootSaga';
import searchReducer from './ducks/search';
import appReduser from './ducks/app';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ search: searchReducer, app: appReduser });
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
