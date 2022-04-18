import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

type tableIndex = {
  title: string;
  completed: string;
  onPress: () => void;
};

const TabelIndex = (props: tableIndex) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text>{props.title}</Text>
      <Text>{props.completed}</Text>
    </TouchableOpacity>
  );
};

export default TabelIndex;
