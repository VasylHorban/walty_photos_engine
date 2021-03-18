import React from "react";
import ReactDOM from "react-dom";
import { Provider, applyMiddleware } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore } from "redux";

import searchReducer from "./search.reducer";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from "./redux/store";
import { sagaWatcher } from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  search: searchReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
