import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchTodoData} from '../../redux/actions/Actions';
import {styles} from './style';
import {string} from '../../utils/string';

const Login = (props: any) => {
  const dispetch = useDispatch();

  const goToDashboard = () => {
    dispetch(fetchTodoData());
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
