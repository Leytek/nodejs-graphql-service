import { User } from '../user';

export default {
  Query: {
    async user(_: null, { id }: { id: string }, { dataSources }: unknown) {
      return dataSources.usersAPI.getOne(id);
    },
    async jwt(_: null, user: User, { dataSources }: unknown) {
      user = {...user}
      return dataSources.usersAPI.getJwt(user);
    },
  },

  Mutation: {
    async register(_: null, { input }: unknown, { dataSources }: unknown) {
      input = {...input};
      return await dataSources.usersAPI.create(input as User);
    },
  },
};
