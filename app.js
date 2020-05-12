const express = require('express')
const app = express()
const expressGraphQL = require('express-graphql')
const bodyParser = require('body-parser')
require('dotenv').config()

const schema = require('./schema')
const routes = require('./routes')
const errors = require('./middleware/errors')

app.use(bodyParser.json())

app.use(routes)

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
)

app.use(errors)

module.exports = app
