import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache
});

export function GraphQLProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
