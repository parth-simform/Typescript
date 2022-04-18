import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import Router from './app/router';
const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {flex: 1},
});
