import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import DashBoard from './app/module/Dashboard';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashBoard />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});
export default App;
