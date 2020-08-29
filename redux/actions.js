import { fetchMovies } from '../api';

// action types -> done to prevent typos and for easier bug identification
export const SEARCH_TERM_SENT = 'SEARCH_TERM_SENT'
export const NEW_RESULTS_RECEIVED = 'NEW_RESULTS_RECEIVED'
export const ADDITIONAL_RESULTS_RECEIVED = 'ADDITIONAL_RESULTS_RECEIVED'
export const RESULTS_ERROR = 'RESULTS_ERROR'
export const CLEAR_RESULTS = 'CLEAR_RESULTS'

// async action creator

// invoked directly from SearchScreen.js. This dispatches various different "types" to reducer.js.
// Because dispatch is a function, we need to use 3rd party "redux-thunk" library and import "applyMiddleware" from redux in store.js.
export const returnResults = (searchTerm, pageNumber) => async dispatch => {
  dispatch({type: SEARCH_TERM_SENT})
  try {
    const response = await fetchMovies(searchTerm, pageNumber)
    const results = response.results

    const totalResults = response.totalResults
    const maxPages = Math.ceil(totalResults/10) // 10 results per page

    if (pageNumber === 1) {
      dispatch({type: NEW_RESULTS_RECEIVED, payload: { movies: results, maxPages: maxPages }})
    } else {
      dispatch({type: ADDITIONAL_RESULTS_RECEIVED, payload: { movies: results }})
    }

  } catch (err) {
    console.error('API error')
    dispatch({type: RESULTS_ERROR, payload: 'API error'})
  }
}

export const clearResults = () => dispatch => {
  dispatch({type: CLEAR_RESULTS})
}