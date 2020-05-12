const { handleAsyncErrors, HttpUnauthorizedError } = require('../utils/errors')
const { checkUser } = require('../utils/bcrypt')

exports.signIn = handleAsyncErrors(async ({ body }, res) => {
  const { id, pw } = body
  const match = await checkUser(id, pw)
  if (match) {
    // TODO send JWT
    res.json(match)
  } else {
    throw new HttpUnauthorizedError('Password not recongnised')
  }
})
