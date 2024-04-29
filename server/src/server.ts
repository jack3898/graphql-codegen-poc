import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers.js';
import { readFile } from 'node:fs/promises';
import express from 'express';
import http from 'node:http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

const typeDefs = await readFile('src/type-defs.graphql').then((buf) => buf.toString('utf-8'));

const port = 3000;
const expressServer = express();
const httpServer = http.createServer(expressServer);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

await apolloServer.start();
await new Promise<void>((resolve) => httpServer.listen({ port: 3000 }, resolve));

console.log(`🚀  Server ready on port ${port}!`);

export { expressServer, apolloServer };
