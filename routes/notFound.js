const { handleAsyncErrors, HttpNotFoundError } = require('../utils/errors')

const notFound = handleAsyncErrors(() => {
  throw new HttpNotFoundError()
})

module.exports = notFound
