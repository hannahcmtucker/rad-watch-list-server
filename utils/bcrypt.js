const bcrypt = require('bcrypt')
const { getUser } = require('../database/queries')

exports.checkUser = async (id, pw) => {
  const user = await getUser(id)
  return await bcrypt.compare(pw, user.password)
}
