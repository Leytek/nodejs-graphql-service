import { Genre } from '../genre';

export default {
  Query: {
    async genre(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return dataSources.genresAPI.getOne(id);
    },
    async genres(_: null, { input }: unknown, { dataSources }: unknown) {
      return (await dataSources.genresAPI.getAll(input)).items;
    },
  },

  Mutation: {
    async createGenre(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.genresAPI.create(input as Genre);
    },
    async deleteGenre(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return await dataSources.genresAPI.deleteOne(id);
    },
    async updateGenre(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.genresAPI.update(input as Genre);
    },
  },
};
