import { books } from './data.js';

export const resolvers = {
  Query: {
    books: (): typeof books => books
  }
};
