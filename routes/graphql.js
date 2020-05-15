const expressGraphQL = require('express-graphql')
const schema = require('../schema')

exports.graphql = expressGraphQL({
  schema,
  graphiql: true,
})
