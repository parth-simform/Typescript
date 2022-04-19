import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {string} from '../../utils/string';
import {styles} from './style';
import useFetch from '../../hooks/useFetch';

const Login = (props: any) => {
  const {goToDashboard} = useFetch(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToDashboard} style={styles.btn}>
        <Text style={styles.txt}>{string.goToDashBoard}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
