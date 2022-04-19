import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {string} from '../../utils/string';

type tableIndex = {
  title: string;
  completed: string;
  onPress: () => void;
  onPressDelete: () => void;
  isPotrait: boolean | string;
};

const TabelIndex = (props: tableIndex) => {
  const isPotrait = props.isPotrait;
  return (
    <View style={[styles.container, {width: isPotrait ? 380 : 700}]}>
      <TouchableOpacity style={styles.txtContainer} onPress={props.onPress}>
        <Text>{props.title}</Text>
        <Text>{props.completed}</Text>
      </TouchableOpacity>
      <View
        style={[styles.deleteContainer, {marginRight: isPotrait ? 15 : 30}]}>
        <TouchableOpacity onPress={props.onPressDelete}>
          <Text style={styles.txt}>{string.delete}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabelIndex;
