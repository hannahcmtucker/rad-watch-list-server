const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = graphql
const { getMovies, getMovie } = require('../database/queries')
const { findMovies, findMovie } = require('../api')

const MovieType = require('./movie_type')
const MovieResultType = require('./movie_result_type')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    getMovies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return getMovies()
      },
    },
    getMovie: {
      type: MovieType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return getMovie(id)
      },
    },
    findMovies: {
      type: new GraphQLList(MovieResultType),
      args: { term: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { term }) {
        return findMovies(term)
      },
    },
    findMovie: {
      type: MovieResultType,
      args: { imdbID: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { imdbID }) {
        return findMovie(imdbID)
      },
    },
  }),
})

module.exports = RootQuery
