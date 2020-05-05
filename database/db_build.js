const path = require('path')
const { QueryFile } = require('pg-promise')
const db = require('./db_connections')

const sql = (file) =>
  new QueryFile(path.join(__dirname, file), { minify: true })

const buildScript = sql('./db_build.sql')

module.exports = db
  .query(buildScript)
  .then((res) => {
    console.log('res', res) // eslint-disable-line no-console
  })
  .catch((e) => console.error('error', e)) // eslint-disable-line no-console
