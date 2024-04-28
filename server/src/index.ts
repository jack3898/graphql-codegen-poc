import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers.js';
import { readFile } from 'node:fs/promises';

const typeDefs = await readFile('src/type-defs.graphql').then((buf) => buf.toString('utf-8'));

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 }
});

console.log(`🚀  Server ready at: ${url}`);
