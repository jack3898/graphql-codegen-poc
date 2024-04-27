export const typeDefs = `#graphql
  interface Book {
    id: Int!
    title: String!
    author: String!
  }

  type NormalBook implements Book {
    id: Int!
    title: String!
    author: String!
  }

  type LongBook implements Book {
    id: Int!
    title: String!
    author: String!
    whyitslong: String
  }

  type Query {
    books: [Book]
  }
`;
