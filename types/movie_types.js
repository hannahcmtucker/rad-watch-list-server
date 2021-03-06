const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql')
const { UserType } = require('./user_type')
const { getUserName } = require('../database/queries')

const MovieIdType = new GraphQLNonNull(GraphQLID)
const ImdbIdType = new GraphQLNonNull(GraphQLString)

const MovieResultType = new GraphQLObjectType({
  name: 'MovieResultType',
  fields: () => ({
    imdbid: { type: ImdbIdType },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    imageurl: { type: GraphQLString },
  }),
})

const MovieType = new GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    id: { type: MovieIdType },
    imdbid: { type: ImdbIdType },
    user: {
      type: UserType,
      resolve: (parentValue) => getUserName(parentValue.userid),
    },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    imageurl: { type: GraphQLString },
  }),
})

module.exports = { MovieIdType, ImdbIdType, MovieType, MovieResultType }
