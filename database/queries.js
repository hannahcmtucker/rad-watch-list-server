const db = require('./db_connections')

const getMovies = () => db.query('SELECT * FROM movies')

const getMovie = (id) =>
  db.query('SELECT * FROM movies WHERE id = $1', [id]).then((user) => user[0])

module.exports = {
  getMovies,
  getMovie,
}
