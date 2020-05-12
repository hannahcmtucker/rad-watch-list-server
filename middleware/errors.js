const errors = (err, req, res, next) => {
  if (res.headersSent) return next(err)
  res.status(err.statusCode).send(err.message)
}

module.exports = errors
