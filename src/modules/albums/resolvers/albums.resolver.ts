import { Album } from '../album';

export default {
  Query: {
    async album(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return dataSources.albumsAPI.getOne(id);
    },

    async albums(_: null, { input }: unknown, { dataSources }: unknown) {
      return (await dataSources.albumsAPI.getAll(input)).items;
    }
  },

  Album: {
    async artists({ artistsIds }: { artistsIds: [] }, _: null, { dataSources }: unknown) {
      if (!artistsIds) return;

      return artistsIds.map(async (id: string) => {
        return await dataSources.artistsAPI.getOne(id);
      });
    },
    async bands({ bandsIds }: { bandsIds: [] }, _: null, { dataSources }: unknown) {
      if (!bandsIds) return;

      return  bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getOne(id);
      });
    },
    async tracks({ trackIds }: { trackIds: [] }, _: null, { dataSources }: unknown) {
      if (!trackIds) return;

      return trackIds.map(async (id: string) => {
        return await dataSources.tracksAPI.getOne(id);
      });
    },
    async genres ({ genresIds }: { genresIds: [] }, _: null, { dataSources }: unknown) {
      if (!genresIds) return;

      return genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getOne(id);
      });
    },
  },

  Mutation: {
    async createAlbum(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.albumsAPI.create(input as Album);
    },

    async deleteAlbum(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return await dataSources.albumsAPI.deleteOne(id);
    },

    async updateAlbum(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.albumsAPI.update(input as Album);
    }
  }
}
