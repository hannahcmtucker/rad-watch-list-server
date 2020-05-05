const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql

const MovieResultType = new GraphQLObjectType({
  name: 'MovieResultType',
  fields: () => ({
    Title: { type: GraphQLString },
    Year: { type: GraphQLString },
    Poster: { type: GraphQLString },
  }),
})

module.exports = MovieResultType
