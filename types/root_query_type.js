const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql')

const { getMovies, getMovie } = require('../database/queries')
const { findMovies, findMovie } = require('../api')

const {
  MovieIdType,
  ImdbIdType,
  MovieType,
  MovieResultType,
} = require('./movie_types')

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
      args: { id: { type: MovieIdType } },
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
      args: { imdbid: { type: ImdbIdType } },
      resolve(parentValue, { imdbid }) {
        return findMovie(imdbid)
      },
    },
  }),
})

module.exports = RootQuery
