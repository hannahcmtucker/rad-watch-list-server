// Catch and next() rejected promises
const handleAsyncErrors = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

// Custom error constructors
class HttpError extends Error {
  constructor({ message, name, statusCode }) {
    super(message)
    this.name = name
    this.statusCode = statusCode
    Error.captureStackTrace(this, HttpError)
  }
}

class HttpUnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized') {
    super({
      message,
      name: 'HttpUnauthorized',
      statusCode: 401,
    })
  }
}

class HttpBadRequestError extends HttpError {
  constructor(message = 'Bad Request') {
    super({
      message,
      name: 'HttpBadRequest',
      statusCode: 400,
    })
  }
}

module.exports = {
  handleAsyncErrors,
  HttpUnauthorizedError,
  HttpBadRequestError,
}
