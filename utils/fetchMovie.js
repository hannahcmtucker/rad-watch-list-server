const { HttpBadRequestError } = require('./errors')
const { findMovie } = require('../api')
const { getMovieByImdbid } = require('../database/queries')

const fetchMovie = async (imdbid) => {
  const existingEntry = await getMovieByImdbid(imdbid)
  if (existingEntry) throw new HttpBadRequestError('Entry already exists')
  return await findMovie(imdbid)
}

module.exports = fetchMovie
