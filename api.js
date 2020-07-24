export const login = async (username, password) => {
  const response = await fetch("http://localhost:8000", {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username, password}),
  })

  if (response.ok) {
    return true
  }

  const errorMessage = await response.text()
  throw new Error(errorMessage)
}

export const fetchMovies = async (searchTerm) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=340ef8c9&s=${searchTerm}`)

  // Argument has to be called Search because that's the name of the results property from the API endpoint
  const {Search} = await response.json()
  return Search
};