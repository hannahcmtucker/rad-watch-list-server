const db = require('./db_connections')

exports.getMovies = () => db.query('SELECT * FROM movies')

exports.getMovie = (id) =>
  db.query('SELECT * FROM movies WHERE id = $1', [id]).then((user) => user[0])

exports.getUser = (id) =>
  db.query('SELECT * FROM users WHERE id = $1', [id]).then((user) => user[0])
