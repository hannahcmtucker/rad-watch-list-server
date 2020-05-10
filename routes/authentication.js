const { checkUser } = require('../utils/bcrypt')

exports.signIn = async ({ body }, res) => {
  const { id, pw } = body
  const match = await checkUser(id, pw)
  if (match) {
    // TODO send JWT
    res.json(match)
  } else {
    throw new Error('Password not recongnised')
  }
}
