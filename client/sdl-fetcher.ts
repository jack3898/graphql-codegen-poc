import { type GraphQLSchema, buildClientSchema, getIntrospectionQuery } from 'graphql';

export default async function sdlFetcher(): Promise<GraphQLSchema> {
  const introspectionQuery = getIntrospectionQuery();

  // Get auth cookie
  // Realistically you would pass username/password but this poc app is too secure for that
  const getCookieRes = await fetch('http://localhost:8000/login');

  const cookie = getCookieRes.headers
    .get('set-cookie')
    ?.match(/=([^;]+)/)
    ?.at(1);

  // Use auth cookie to fetch sdl
  const response = await fetch('http://localhost:8000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      credentials: 'include',
      cookie: `session=${cookie}`
    },
    body: JSON.stringify({ query: introspectionQuery })
  });

  const { data } = await response.json();

  return buildClientSchema(data);
}
