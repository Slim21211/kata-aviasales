import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { App } from './Components/App/app';
import { ticketReducer } from './Reducers/get-ticket-reducer';

const rootReducer = combineReducers({
  ticketReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
