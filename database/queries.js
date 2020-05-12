const db = require('./db_connections')

exports.getMovies = () => db.query('SELECT * FROM movies')

exports.getMovie = (id) =>
  db.query('SELECT * FROM movies WHERE id = $1', [id]).then((user) => user[0])

exports.getUser = (id) =>
  db.query('SELECT * FROM users WHERE id = $1', [id]).then((user) => user[0])

exports.addMovie = ({ imdbid, title, imageurl, year }) =>
  db
    .query(
      'INSERT INTO movies (imdbid, title, imageurl, year) VALUES ($1, $2, $3, $4) RETURNING ID, imdbid, TITLE, IMAGEURL, YEAR',
      [imdbid, title, imageurl, year]
    )
    .then((movie) => movie[0])
