const jwt = require('jwt-simple')

const authenticateUser = (req, res, next) => {
  const { cookies } = req
  let user = null

  try {
    user = jwt.decode(cookies.token, process.env.SECRET)
  } catch (err) {
    // Don't throw here, instead user = null
    console.warn(err.message)
  }
  req.user = user
  next()
}

module.exports = authenticateUser
