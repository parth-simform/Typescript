import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {string} from '../../utils/string';
import {Creators} from '../../redux/reduxSause';
import {styles} from './style';

const Login = (props: any) => {
  const dispetch = useDispatch();

  const goToDashboard = () => {
    dispetch(Creators.fetchTodoData());
    props.navigation.push('Dashboard');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToDashboard} style={styles.btn}>
        <Text style={styles.txt}>{string.goToDashBoard}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
