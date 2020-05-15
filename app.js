const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const routes = require('./routes')
const errors = require('./middleware/errors')
const authentication = require('./middleware/authentication')

app.use(bodyParser.json())
app.use(cookieParser())

app.use(authentication)
app.use(routes)

app.use(errors)

module.exports = app
