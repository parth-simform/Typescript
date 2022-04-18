import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

type dataTypes = {
  onChangeText: (text: string) => void;
  number: string;
};
const InputField = (props: dataTypes) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.number}
        placeholder="useless placeholder"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
});
