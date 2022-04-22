import {SafeAreaView} from 'react-native';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import Home from './app/module/Home';
import client from './app/graphQl/ApolloClient';
import Router from './app/router';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ApolloProvider client={client}>
        {/* <Home /> */}
        <Router />
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
