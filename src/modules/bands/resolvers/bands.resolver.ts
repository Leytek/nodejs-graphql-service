import { Band } from '../band';

export default {
  Query: {
    async band(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return dataSources.bandsAPI.getOne(id);
    },
    async bands(_: null, { input }: unknown, { dataSources }: unknown) {
      return (await dataSources.bandsAPI.getAll(input)).items;
    },
  },

  Band: {
    async genres({ genresIds }: { genresIds: [] }, _: null, { dataSources }: unknown) {
      if (!genresIds.length) return;

      return genresIds.map(async (id: string) => {
        return await dataSources.genresAPI.getOne(id);
      });
    },
  },

  Mutation: {
    async createBand(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.bandsAPI.create(input as Band);
    },
    async deleteBand(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return await dataSources.bandsAPI.deleteOne(id);
    },
    async updateBand(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.bandsAPI.update(input as Band);
    },
  },
};
