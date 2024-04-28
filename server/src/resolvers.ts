import { books, user } from './data.js';

export const resolvers = {
  Query: {
    books: (): typeof books => books,
    loggedInUser: (): typeof user => user
  }
};
