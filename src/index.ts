import { gql, ApolloServer } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      books: () => [{ title: 'a', author: 'b' }],
    },
  },
});

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
