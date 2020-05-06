const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql

const MovieType = new GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    imageurl: { type: GraphQLString },
  }),
})

module.exports = MovieType
