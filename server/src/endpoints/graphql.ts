import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import { apolloServer, expressServer } from '../server.js';
import cookieParser from 'cookie-parser';
import { GraphQLError } from 'graphql';

expressServer.use(
  '/graphql',
  cors<cors.CorsRequest>({
    origin: 'http://localhost:5173',
    credentials: true
  }),
  express.json(),
  cookieParser(),
  expressMiddleware(apolloServer, {
    context: async ({ req }) => {
      if (req.cookies.session !== 'pretend-I-am-secure-lol') {
        throw new GraphQLError('You are not logged in 😡', {
          extensions: {
            code: 'UNAUTHENTICATED',
            http: { status: 401 }
          }
        });
      }

      return {};
    }
  })
);
