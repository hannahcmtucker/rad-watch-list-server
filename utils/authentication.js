const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')
const { getUser } = require('../database/queries')
const { HttpUnauthorizedError } = require('../utils/errors')

exports.signIn = async (id, pw) => {
  const user = await getUser(id)
  if (!user) throw new HttpUnauthorizedError('User not found')

  const match = await bcrypt.compare(pw, user.password)
  if (!match) throw new HttpUnauthorizedError('Password not recongnised')

  const token = jwt.encode(user, process.env.SECRET)

  return token
}
