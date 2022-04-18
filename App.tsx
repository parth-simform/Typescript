import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Login from './app/module/Login';

export const Context1 = React.createContext('');

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login status="success" onPress={() => console.log('4545')} />
    </SafeAreaView>
  );
};

export default App;
