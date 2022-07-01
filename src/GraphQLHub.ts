import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

export default class GraphQLHub {
  public typeDefs;
  public resolvers;

  constructor() {
    const typesArray = loadFilesSync('./**/*.graphql');
    const resolversArray = loadFilesSync('./**/*.resolver.ts');
    this.typeDefs = mergeTypeDefs(typesArray);
    this.resolvers = mergeResolvers(resolversArray);
  }

  public sources() {
    return {

    }
  }
}
