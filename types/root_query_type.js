const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = graphql
const { getMovies, getMovieById } = require('../database/queries')
const { getMovieSearchResults } = require('../api')

const MovieType = require('./movie_type')
const MovieResultType = require('./movie_result_type')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return getMovies()
      },
    },
    movie: {
      type: MovieType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return getMovieById(id)
      },
    },
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
