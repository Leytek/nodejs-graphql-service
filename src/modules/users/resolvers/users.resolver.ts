import { User } from '../user';

export default {
  Query: {
    async user(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return dataSources.usersAPI.getOne(id);
    },
    async jwt(_: null, { email, password }: unknown, { dataSources }: unknown) {
      return (await dataSources.usersAPI.getJwt(email, password)).items;
    },
  },

  Mutation: {
    async register(_: null, { input }: unknown, { dataSources }: unknown) {
      return await dataSources.usersAPI.create(input as User);
    },
  },
};
