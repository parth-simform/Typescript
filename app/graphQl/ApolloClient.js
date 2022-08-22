import {ApolloClient, InMemoryCache} from '@apollo/client';
import gql from 'graphql-tag';
const client = new ApolloClient({
  // uri: 'http://localhost:4000/',
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
