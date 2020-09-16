import { fetchMovies } from '../api';

// action types -> done to prevent typos and for easier bug identification
export const SEARCH_TERM_SENT = 'SEARCH_TERM_SENT';
export const NEW_RESULTS_RECEIVED = 'NEW_RESULTS_RECEIVED';
export const ADDITIONAL_RESULTS_RECEIVED = 'ADDITIONAL_RESULTS_RECEIVED';
export const RESULTS_ERROR = 'RESULTS_ERROR';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';

// action creators
export const clearResults = () => ({
  type: CLEAR_RESULTS,
});

// async action creator

// invoked directly from SearchScreen.js. This dispatches various different "types" to reducer.js.
// Because dispatch is a function, we need to use 3rd party "redux-thunk" library and import "applyMiddleware" from redux in store.js.
// Note: added 3rd argument fetchFn as part of Jest testing => defaults to fetchMovies if no 3rd argument
export const returnResults = (
  searchTerm,
  pageNumber,
  fetchFn = fetchMovies,
) => async (dispatch) => {
  dispatch({ type: SEARCH_TERM_SENT });
  try {
    const response = await fetchFn(searchTerm, pageNumber);
    const results = response.results;

    const totalResults = response.totalResults;
    const maxPages = Math.ceil(totalResults / 10); // 10 results per page

    if (pageNumber === 1) {
      dispatch({
        type: NEW_RESULTS_RECEIVED,
        payload: { movies: results, maxPages: maxPages },
      });
    } else {
      dispatch({
        type: ADDITIONAL_RESULTS_RECEIVED,
        payload: { movies: results },
      });
    }
  } catch (err) {
    console.error('API error');
    dispatch({ type: RESULTS_ERROR, payload: 'API error' });
  }
};
