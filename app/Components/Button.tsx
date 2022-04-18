import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type btnTypes = {
  name: String;
  onPress: () => void;
};

const Button = (props: btnTypes) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={{marginRight: 10}}>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
