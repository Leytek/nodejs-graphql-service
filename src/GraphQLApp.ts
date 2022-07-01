import { ApolloServer } from 'apollo-server';
import GraphQLHub from './GraphQLHub';

export default class GraphQLApp {
  private readonly PORT;
  private server;

  constructor() {
    const graphQLHub = new GraphQLHub();
    const typeDefs = graphQLHub.typeDefs;
    const resolvers = graphQLHub.resolvers;
    const dataSources = graphQLHub.sources;

    this.PORT = process.env.PORT ?? 3000;
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources,
      context: ({ req }) => {
        const token = req.headers.authorization || "";
        return { token };
      },
    });
  }

  public run(): void {
    this.server.listen({ port: this.PORT }).then(() => {
      console.log(`
    🚀  Server is running!
    🔉  Listening on port ${this.PORT}
    📭  Query at http://localhost:${this.PORT}
      `);
    });
  }
}
