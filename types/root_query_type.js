const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql')
const { checkUser } = require('../utils/authentication')
const { getMovies, getMovie, getUserName } = require('../database/queries')
const { findMovies, findMovie } = require('../api')

const {
  MovieIdType,
  ImdbIdType,
  MovieType,
  MovieResultType,
} = require('./movie_types')
const { UserType } = require('./user_type')

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
    me: {
      type: UserType,
      resolve: async (parentValue, args, { user }) => {
        await checkUser(user)
        return getUserName(user.id)
      },
    },
  }),
})

module.exports = RootQuery
