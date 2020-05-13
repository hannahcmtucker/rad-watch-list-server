const { handleAsyncErrors, HttpBadRequestError } = require('../utils/errors')
const { signIn } = require('../utils/authentication')

exports.signIn = handleAsyncErrors(async ({ body }, res) => {
  const { id, pw } = body
  // TODO add validation
  if (!id || !pw) throw new HttpBadRequestError()

  const token = await signIn(id, pw)

  res.cookie('token', token, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  })
  res.send()
})
