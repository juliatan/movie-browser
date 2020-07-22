export const fetchMovies = async () => {
  const response = await fetch('http://www.omdbapi.com/?apikey=340ef8c9&s=love')
  // const response = await fetch('https://randomuser.me/api/?results=10')
  const {Search} = await response.json()
  return Search
};