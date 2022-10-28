import {LogBox, SafeAreaView, StyleSheet} from 'react-native';
import {ReactionProvider} from 'react-native-reactions';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import Router from './app/router';
const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaView style={style.container}>
      <Provider store={store}>
        <ReactionProvider>
          <Router />
        </ReactionProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {flex: 1},
});
