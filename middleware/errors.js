const errors = (err, req, res, next) => {
  if (res.headersSent) return next(err)
  const status = err.statusCode || 500
  res.status(status).send(err.message)
}

module.exports = errors
