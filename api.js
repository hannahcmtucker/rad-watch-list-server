const axios = require('axios')

const formatResult = (result) => ({
  title: result.Title,
  year: parseInt(result.Year),
  imdbid: result.imdbID,
  imageurl: result.Poster,
})

exports.findMovies = async (term) => {
  const apiKey = process.env.OMDB_API_KEY
  const fetchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${term}`

  try {
    const response = await axios.get(fetchUrl)
    return response.data.Search.map(formatResult)
  } catch (error) {
    throw new Error(`Movie search API error: ${String(error)}`)
  }
}

exports.findMovie = async (imdbid) => {
  const apiKey = process.env.OMDB_API_KEY
  const fetchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbid}`

  try {
    const response = await axios.get(fetchUrl)
    return formatResult(response.data)
  } catch (error) {
    throw new Error(`Movie search API error: ${String(error)}`)
  }
}
