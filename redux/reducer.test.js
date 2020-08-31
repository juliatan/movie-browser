import reducer from './reducer'
import * as actions from './actions'

const DEFAULT_STATE = {
  movies: null,
  maxPages: null
}

describe ('results reducer', () => {
  // note run for the first time to save snapshot that takes the form you want it to be
  it('successfully receives new results', () => {
    expect(reducer(DEFAULT_STATE, actions.returnResults({
      movies: [],
      maxPages: 2
    }))).toMatchSnapshot()
  })
})