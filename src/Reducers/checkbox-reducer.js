import { TOGGLE_FILTER, SET_ALL_FILTERS, CLEAR_ALL_FILTERS } from '../Actions/checkbox-actions';

const initialState = {
  all: false,
  withoutStops: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
};

export const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case SET_ALL_FILTERS:
      return {
        ...state,
        all: true,
        withoutStops: true,
        oneStop: true,
        twoStops: true,
        threeStops: true,
      };
    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        all: false,
        withoutStops: false,
        oneStop: false,
        twoStops: false,
        threeStops: false,
      };
    default:
      return state;
  }
};
