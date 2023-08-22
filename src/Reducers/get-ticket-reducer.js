import {
  FETCH_SEARCH_ID_REQUEST,
  FETCH_SEARCH_ID_SUCCESS,
  FETCH_SEARCH_ID_FAILURE,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from '../Actions/ticket-actions';
import { TOGGLE_FILTER, SET_ALL_FILTERS, CLEAR_ALL_FILTERS } from '../Actions/checkbox-actions';
import { SET_SORTING } from '../Actions/sorting-actions';

const initialState = {
  searchId: null,
  tickets: [],
  loadingSearchId: false,
  loadingTickets: false,
  error: null,
  filters: {
    all: false,
    withoutStops: false,
    oneStop: false,
    twoStops: false,
    threeStops: false,
  },
  sorting: 'cheapest',
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_ID_REQUEST:
      return { ...state, loadingSearchId: true, error: null };
    case FETCH_SEARCH_ID_SUCCESS:
      return { ...state, loadingSearchId: false, searchId: action.payload, error: null };
    case FETCH_SEARCH_ID_FAILURE:
      return { ...state, loadingSearchId: false, error: action.payload };
    case FETCH_TICKETS_REQUEST:
      return { ...state, loadingTickets: true, error: null };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        loadingTickets: false,
        tickets: [...state.tickets, ...action.payload],
        error: null,
      };
    case FETCH_TICKETS_FAILURE:
      return { ...state, loadingTickets: false, error: action.payload };
    case TOGGLE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, [action.payload]: !state.filters[action.payload] },
      };
    case SET_ALL_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, all: true, withoutStops: true, oneStop: true, twoStops: true, threeStops: true },
      };
    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          all: false,
          withoutStops: false,
          oneStop: false,
          twoStops: false,
          threeStops: false,
        },
      };
    case SET_SORTING:
      return { ...state, sorting: action.payload };
    default:
      return state;
  }
};
