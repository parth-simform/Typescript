import {ApolloClient, InMemoryCache} from '@apollo/client';
import {URl} from '../utils/constant';
const client = new ApolloClient({
  uri: URl,
  cache: new InMemoryCache(),
});

export default client;
