export const FETCH_SEARCH_ID_REQUEST = 'FETCH_SEARCH_ID_REQUEST';
export const FETCH_SEARCH_ID_SUCCESS = 'FETCH_SEARCH_ID_SUCCESS';
export const FETCH_SEARCH_ID_FAILURE = 'FETCH_SEARCH_ID_FAILURE';

export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';

const getSessionID = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SEARCH_ID_REQUEST });

    fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        const searchId = data.searchId;
        dispatch({ type: FETCH_SEARCH_ID_SUCCESS, payload: searchId });
        dispatch(fetchTickets(searchId));
      })
      .catch((error) => {
        dispatch({ type: FETCH_SEARCH_ID_FAILURE, payload: error.message });
      });
  };
};

export const fetchTickets = (searchId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_TICKETS_REQUEST });

    const fetchMoreTickets = () => {
      fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((data) => {
          const tickets = data.tickets;
          dispatch({ type: FETCH_TICKETS_SUCCESS, payload: tickets });

          if (!data.stop) {
            fetchMoreTickets();
          }
        })
        .catch((error) => {
          dispatch({ type: FETCH_TICKETS_FAILURE, payload: error.message });
        });
    };

    fetchMoreTickets();
  };
};

export default getSessionID;
