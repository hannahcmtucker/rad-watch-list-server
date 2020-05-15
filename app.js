const express = require('express')
const app = express()
const expressGraphQL = require('express-graphql')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const schema = require('./schema')
const routes = require('./routes')
const errors = require('./middleware/errors')
const authentication = require('./middleware/authentication')

app.use(bodyParser.json())
app.use(cookieParser())

app.use(routes)
app.use(authentication)

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
)

app.use(errors)

module.exports = app
