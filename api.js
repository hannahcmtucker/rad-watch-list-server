const axios = require('axios')

const formatResult = (result) => ({
  title: result.Title,
  year: parseInt(result.Year),
  imdbID: result.imdbID,
  imageurl: result.Poster,
})

const findMovies = async (term) => {
  const apiKey = process.env.OMDB_API_KEY
  const fetchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${term}`

  try {
    const response = await axios.get(fetchUrl)
    return response.data.Search.map(formatResult)
  } catch (error) {
    throw new Error(`Movie search API error: ${String(error)}`)
  }
}

const findMovie = async (imdbID) => {
  const apiKey = process.env.OMDB_API_KEY
  const fetchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`

  try {
    const response = await axios.get(fetchUrl)
    return formatResult(response.data)
  } catch (error) {
    throw new Error(`Movie search API error: ${String(error)}`)
  }
}

module.exports = {
  findMovies,
  findMovie,
}
