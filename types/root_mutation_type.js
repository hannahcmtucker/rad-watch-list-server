const { GraphQLObjectType } = require('graphql')

const { MovieType, ImdbIdType } = require('./movie_types')
const { findMovie } = require('../api')
const { addMovie } = require('../database/queries')

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    addMovie: {
      type: MovieType,
      args: { imdbid: { type: ImdbIdType } },
      resolve: async (parentValue, { imdbid }) => {
        const movie = await findMovie(imdbid)
        return addMovie({ ...movie })
      },
    },
  }),
})

module.exports = RootMutation
