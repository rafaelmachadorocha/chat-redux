// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import App from './components/app';
import messageListReducer from './reducers/message_list_reducer';
import channelListReducer from './reducers/channel_list_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import userNameReducer from './reducers/user_name_reducer';
import '../assets/stylesheets/application.scss';

// State and reducers
const middleWares = applyMiddleware(reduxPromise);

const reducers = combineReducers({
  messageList: messageListReducer,
  channelList: channelListReducer,
  selectedChannel: selectedChannelReducer,
  userName: userNameReducer
});

const initialState = {
  messageList: [],
  channelList: ['general', 'react', 'brazil'],
  selectedChannel: 'general',
  userName: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
}

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middleWares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
