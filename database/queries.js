const db = require('./db_connections')

// Helper
const getFirst = (arr) => arr[0]

exports.getMovies = () => db.query('SELECT * FROM movies')

exports.getMovie = (id) =>
  db.query('SELECT * FROM movies WHERE id = $1', [id]).then(getFirst)

exports.getMovieByImdbid = (imdbid) =>
  db.query('SELECT * FROM movies WHERE imdbid = $1', [imdbid]).then(getFirst)

exports.getUser = (id) =>
  db.query('SELECT * FROM users WHERE id = $1', [id]).then(getFirst)

exports.getUserName = (id) =>
  db.query('SELECT ID, NAME FROM users WHERE id = $1', [id]).then(getFirst)

exports.addMovie = ({ imdbid, userid, title, imageurl, year }) =>
  db
    .query(
      'INSERT INTO movies (imdbid, userid, title, imageurl, year) VALUES ($1, $2, $3, $4, $5) RETURNING ID, IMDBID, USERID, TITLE, IMAGEURL, YEAR',
      [imdbid, userid, title, imageurl, year]
    )
    .then(getFirst)
