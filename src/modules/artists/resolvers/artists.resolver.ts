import { Artist } from '../artist';

export default {
  Query: {
    async artist(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return dataSources.artistsAPI.getOne(id);
    },
    async artists(_: null, { input }: unknown, { dataSources }: unknown) {
      return (await dataSources.artistsAPI.getAll(input)).items;
    },
  },

  Artist: {
    async bands({ bandsIds }: { bandsIds: [] }, _: null, { dataSources }: unknown) {
      if (!bandsIds.length) return;

      return bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getOne(id);
      });
    },
  },

  Mutation: {
    async createArtist(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.artistsAPI.create(input as Artist);
    },
    async deleteArtist(_: null, { id }: { id: string }, { dataSources }: unknown
    )  {
      return await dataSources.artistsAPI.deleteOne(id);
    },
    async updateArtist(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.artistsAPI.update(input as Artist);
    },
  },
};
