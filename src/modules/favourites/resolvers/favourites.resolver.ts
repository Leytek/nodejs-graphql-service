export default {
  Query: {
    async favourites(_: null, __: null, { dataSources }: unknown) {
      return dataSources.favouritesAPI.getAll();
    },
  },

  Mutation: {
    async addTrackToFavourites(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return await dataSources.favouritesAPI.addToFavourites('tracks', id);
    },
    async addBandToFavourites(_: null, { id }: { id: string }, { dataSources }: unknown)  {
      return await dataSources.favouritesAPI.addToFavourites('bands', id);
    },
    async addArtistToFavourites(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return await dataSources.favouritesAPI.addToFavourites('artists', id);
    },
    async addGenreToFavourites(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return await dataSources.favouritesAPI.addToFavourites('genres', id);
    },
  },
};
