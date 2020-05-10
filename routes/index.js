const router = require('express').Router()
const { signIn } = require('./authentication')

router.post('/signin', signIn)

module.exports = router
