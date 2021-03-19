import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";

import searchReducer from "./redux/search.reducer";
import appReducer from "./redux/app.reducer";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { sagaWatcher } from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  search: searchReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
