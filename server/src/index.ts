import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers.js';
import { readFile } from 'node:fs/promises';
import express from 'express';
import http from 'node:http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';

const typeDefs = await readFile('src/type-defs.graphql').then((buf) => buf.toString('utf-8'));

const port = 3000;
const server = express();
const httpServer = http.createServer(server);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

await apolloServer.start();

server.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(apolloServer, {
    context: async ({ req }) => ({ token: req.headers.token })
  })
);

await new Promise<void>((resolve) => httpServer.listen({ port: 3000 }, resolve));

console.log(`🚀  Server ready on port ${port}!`);
