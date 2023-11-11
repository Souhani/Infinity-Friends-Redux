import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import {
  searcheRobots,
  requestRobots,
  createRobots,
  createRobotPage,
  allRobots,
  selectAvatars,
} from "./reducers";

const rootReducer = combineReducers({
  searcheRobots,
  requestRobots,
  createRobots,
  createRobotPage,
  allRobots,
  selectAvatars,
});
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware, logger),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
