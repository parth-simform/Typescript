import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
const Home = (props: any) => {
  const gotoScreen = (value: string) => {
    props.navigation.push(value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => gotoScreen('AddTodo')}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => gotoScreen('GetSingle')}>
        <Text>Fetch Single Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => gotoScreen('GetAll')}>
        <Text>Get All Todos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
