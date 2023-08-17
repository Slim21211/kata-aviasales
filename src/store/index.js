import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { checkboxReducer } from './checkbox-reducer';
import { tabsReducer } from './tabs-reducer';

const rootReducer = combineReducers({
  checkboxReducer,
  tabsReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk));
