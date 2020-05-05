const axios = require('axios')

const getMovieSearchResults = async (searchTerm) => {
  const apiKey = process.env.OMDB_API_KEY
  const fetchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`

  try {
    const response = await axios.get(fetchUrl)
    return response.data.Search
  } catch (error) {
    throw new Error(`Movie search API error: ${String(error)}`)
  }
}

module.exports = {
  getMovieSearchResults,
}
