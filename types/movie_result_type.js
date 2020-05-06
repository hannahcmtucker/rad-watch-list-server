const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

const MovieResultType = new GraphQLObjectType({
  name: 'MovieResultType',
  fields: () => ({
    imdbID: { type: GraphQLString },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    imageurl: { type: GraphQLString },
  }),
})

module.exports = MovieResultType
