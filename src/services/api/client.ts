import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';

import { gql } from '@/types/api/gql';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT_URL,
  cache: new InMemoryCache(),
});

export { client, gql, useQuery };