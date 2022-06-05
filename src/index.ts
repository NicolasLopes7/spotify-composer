import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildGraphQLSchema } from './graphql/buildSchema';

(async () => {
  const schema = await buildGraphQLSchema();
  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
})();
