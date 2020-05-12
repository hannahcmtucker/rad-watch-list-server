const { GraphQLSchema } = require('graphql')

const RootQueryType = require('./types/root_query_type')
const RootMutationType = require('./types/root_mutation_type')

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
})
