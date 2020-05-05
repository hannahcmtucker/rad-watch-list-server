const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

const MovieType = new GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    imageurl: { type: GraphQLString },
  }),
})

module.exports = MovieType
