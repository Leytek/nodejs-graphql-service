import {Album} from "../album";

export default {
  Query: {
    async album(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return dataSources.albumsAPI.getOne(id);
    },

    async albums(_: null, { limit, offset, _id, name, input }: unknown, { dataSources }: unknown) {
      return (await dataSources.albumsAPI.getAll({ limit, offset, _id, name, ...input })).items;
    }
  },

  Album: {
    async artists({ artistsIds }: { artistsIds: [] }, _: null, { dataSources }: unknown) {
      if (!artistsIds) return;

      return artistsIds.map(async (id: string) => {
        return await dataSources.artistsAPI.getArtist(id);
      });
    },
    async bands({ bandsIds }: { bandsIds: [] }, _: null, { dataSources }: unknown) {
      if (!bandsIds) return;

      return  bandsIds.map(async (id: string) => {
        return await dataSources.bandsAPI.getBand(id);
      });
    },
    async tracks({ trackIds }: { trackIds: [] }, _: null, { dataSources }: unknown) {
      if (!trackIds.length) return;

      return trackIds.map(async (id: string) => {
        return await dataSources.tracksAPI.getTrack(id);
      });
    },
    async genres ({ genresIds }: { genresIds: [] }, _: null, { dataSources }: unknown) {
      if (!genresIds.length) return;

      return genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getGenre(id);
      });
    },
  },

  Mutation: {
    async createAlbum(_: null, { name, input }: unknown, { dataSources }: unknown) {
      return await dataSources.albumsAPI.create({ name, ...input } as Album);
    },

    async deleteAlbum(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return await dataSources.albumsAPI.deleteOne(id);
    },

    async updateAlbum(_: null, { id, name, input }: unknown, { dataSources }: unknown) {
      return await dataSources.albumsAPI.update({ id, name, ...input } as Album);
    }
  }
}
