const pgp = require('pg-promise')()
require('dotenv').config()
const url = require('url')

if (!process.env.DATABASE_URL)
  throw new Error('Environment variable DATABASE_URL must be set')

const params = url.parse(process.env.DATABASE_URL)
const [username, password] = params.auth.split(':')
const ssl =
  params.hostname === 'localhost' ? false : { rejectUnauthorized: false }

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DATABASE_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl,
}

module.exports = pgp(options)
