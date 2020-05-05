const express = require('express')
const app = express()
const expressGraphQL = require('express-graphql')
const schema = require('./schema')

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
)

module.exports = app
