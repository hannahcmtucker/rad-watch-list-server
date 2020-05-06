const express = require('express')
const app = express()
const expressGraphQL = require('express-graphql')
const schema = require('./schema')
require('dotenv').config()

app.use(
  '/',
  expressGraphQL({
    schema,
    graphiql: true,
  })
)

module.exports = app
