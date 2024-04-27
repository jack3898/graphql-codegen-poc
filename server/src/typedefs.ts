export const typeDefs = `#graphql
  type Book {
    id: Int
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
