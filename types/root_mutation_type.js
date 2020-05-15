const { GraphQLObjectType } = require('graphql')
const { checkUser } = require('../utils/authentication')
const fetchMovie = require('../utils/fetchMovie')
const { MovieType, ImdbIdType } = require('./movie_types')
const { addMovie } = require('../database/queries')

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    addMovie: {
      type: MovieType,
      args: { imdbid: { type: ImdbIdType } },
      resolve: async (parentValue, { imdbid }, { user }) => {
        await checkUser(user)
        const movie = await fetchMovie(imdbid)
        return addMovie({ ...movie, userid: user.id })
      },
    },
  }),
})

module.exports = RootMutation
