import { combineReducers } from 'redux'
import { SEARCH_TERM_SENT, NEW_RESULTS_RECEIVED, ADDITIONAL_RESULTS_RECEIVED, RESULTS_ERROR } from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

// This is listening for various dispatch "types" of actions. Depending on type, the reducer updates the state, so it can
// be accessed back in SearchScreen.js via the mapStateToProps function.
const resultsReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_RESULTS_RECEIVED:
      return merge(state, { movies: action.payload.movies, maxPages: action.payload.maxPages })
    case ADDITIONAL_RESULTS_RECEIVED:
      return {...state, movies: [...state.movies, ...action.payload.movies]}
    case RESULTS_ERROR:
      return merge(state, { resultsErr: action.payload })
    default:
      return state
  }
}

// "results" key is what mapStateToProps function reads as "state.results"
const reducer = combineReducers({
  results: resultsReducer
})

export default reducer