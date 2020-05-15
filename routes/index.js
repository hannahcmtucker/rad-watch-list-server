const router = require('express').Router()
const { signIn } = require('./authentication')
const { graphql } = require('./graphql')
const notFound = require('./notFound')

router.post('/signin', signIn)
router.use('/graphql', graphql)
router.use(notFound)

module.exports = router
