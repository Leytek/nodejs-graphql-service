import { Track } from '../track';

export default {
  Query: {
    async track(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return dataSources.tracksAPI.getOne(id);
    },
    async tracks(_: null, { input }: unknown, { dataSources }: unknown) {
      return (await dataSources.tracksAPI.getAll(input)).items;
    },
  },

  Track: {
    async bands({ bandsIds }: { bandsIds: [] }, _: null, { dataSources }: unknown) {
      if (!bandsIds.length) return;

      return bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getOne(id);
      });
    },
    async genres({ genresIds }: { genresIds: [] }, _: null, { dataSources }: unknown) {
      if (!genresIds.length) return;

      return genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getOne(id);
      });
    },
    async artists({ artistsIds }: { artistsIds: [] }, _: null, { dataSources }: unknown) {
      if (!artistsIds.length) return;

      return artistsIds.map(async (id: string) => {
        return await dataSources.artistsAPI.getOne(id);
      });
    },
  },

  Mutation: {
    async createTrack(_: null, { input }: unknown, { dataSources }: unknown) {
      return await dataSources.tracksAPI.create(input as Track);
    },
    async deleteTrack(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return await dataSources.tracksAPI.deleteOne(id);
    },
    async updateTrack(_: null, { input }: unknown, { dataSources }: unknown) {
      return await dataSources.tracksAPI.update(input as Track);
    },
  },
};
