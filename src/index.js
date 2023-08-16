import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { App } from './Components/App/app';

const defaultState = {
  filters: [
    { title: 'Все', id: 1, isActive: false },
    { title: 'Без пересадок', id: 2, isActive: false },
    { title: '1 пересадка', id: 3, isActive: false },
    { title: '2 пересадки', id: 4, isActive: false },
    { title: '3 пересадки', id: 5, isActive: false },
  ],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_ONE':
      if (action.payload === 1 && !state.filters[0].isActive) {
        return {
          ...state,
          filters: state.filters.map((item) =>
            item.id !== 2 ? Object.assign({}, { title: item.title, id: item.id, isActive: true }) : item
          ),
        };
      }
      if (action.payload === 1 && state.filters[0].isActive) {
        return {
          ...state,
          filters: state.filters.map((item) => Object.assign({}, { title: item.title, id: item.id, isActive: false })),
        };
      }
      if (action.payload === 2 && !state.filters[1].isActive) {
        return {
          ...state,
          filters: state.filters.map((item) =>
            item.id !== 2
              ? Object.assign({}, { title: item.title, id: item.id, isActive: false })
              : Object.assign({}, { title: item.title, id: item.id, isActive: true })
          ),
        };
      }
      if (action.payload === 2 && state.filters[1].isActive) {
        return {
          ...state,
          filters: state.filters.map((item) =>
            item.id === 2 ? Object.assign({}, { title: item.title, id: item.id, isActive: false }) : item
          ),
        };
      }
      return {
        ...state,
        filters: state.filters.map((item) =>
          item.id === action.payload
            ? Object.assign({}, { title: item.title, id: item.id, isActive: !item.isActive })
            : item
        ),
      };
    case 'SWITCH_ALL':
      return { ...state, allUnActive: 1000 };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
