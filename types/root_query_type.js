const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} = graphql
const { getMovieSearchResults } = require('../api')

const MovieResultType = require('./movie_result_type')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    movieSearchResults: {
      type: new GraphQLList(MovieResultType),
      args: { searchTerm: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { searchTerm }) {
        return getMovieSearchResults(searchTerm)
      },
    },
  }),
})

module.exports = RootQuery
