// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const middleWares = applyMiddleware(logger, reduxPromise)
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middleWares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
