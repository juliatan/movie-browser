import * as actions from './actions'

test('clearResults returns an action', () => {
  expect(actions.clearResults()).toEqual({
    type: actions.CLEAR_RESULTS
  })
})

describe('returnResults returns actions', () => {
  const fakeFetchedObject = {results: [], totalResults: 20}
  const fakeResultsObject1 = {movies: [], maxPages: 2}
  const fakeResultsObject2 = {movies: []}
  const errMessage = 'API error'
  const mockFetch = (searchTerm, pageNumber) => {
    if (searchTerm === 'test' && pageNumber === 1) {
      return fakeFetchedObject
    }

    if (searchTerm === 'test' && pageNumber === 2) {
      return fakeFetchedObject
    }

    throw new Error(errMessage)
  }

  it('dispatches SEARCH_TERM_SENT', async () => {
    const mockDispatch = jest.fn()
    await actions.returnResults('', '')(mockDispatch)
      // mockDispatch.mock.calls all the args that the mock fn was invoked on
    expect(mockDispatch.mock.calls[0][0]).toEqual({type: actions.SEARCH_TERM_SENT})
  })

  it('dispatches NEW_RESULTS_RECEIVED with search term and page 1', async () => {
    const mockDispatch = jest.fn()
    await actions.returnResults('test', 1, mockFetch)(mockDispatch)
    expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.NEW_RESULTS_RECEIVED, payload: fakeResultsObject1})
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
  })

  it('dispatches ADDITIONAL_RESULTS_RECEIVED with search term and page 2', async () => {
    const mockDispatch = jest.fn()
    await actions.returnResults('test', 2, mockFetch)(mockDispatch)

    expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.ADDITIONAL_RESULTS_RECEIVED, payload: fakeResultsObject2})
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
  })

  it('dispatches RESULTS_ERROR with incorrect arguments', async () => {
    const mockDispatch = jest.fn()
    await actions.returnResults(test, 1000, mockFetch)(mockDispatch)

    expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.RESULTS_ERROR, payload: errMessage})
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
  })
})