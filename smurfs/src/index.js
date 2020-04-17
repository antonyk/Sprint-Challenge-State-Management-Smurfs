import React from "react";
import ReactDOM from "react-dom";
// DATA LAYER - STATE
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import { smurfReducers } from './store/smurfReducers'
// MIDDLEWARE
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
// VIEW LAYER - COMPONENTS
import "./index.css";
import App from "./components/App";


const store = createStore(smurfReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);
