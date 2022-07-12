import {StyleSheet, Text, TextInput, View, TextInputProps} from 'react-native';
import React from 'react';

type inputProps = TextInputProps & {
  label: string;
};

type props = inputProps;

const InputText = (props: props) => {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>{props.label as string}</Text>

      <TextInput
        autoCapitalize="none"
        onChangeText={props.onChangeText}
        autoCorrect={false}
        value={props.value}
        keyboardType={props.keyboardType}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    backgroundColor: 'rgb(58, 58, 60)',
    borderRadius: 8,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    margin: 16,
  },
  label: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
  },
  textInput: {
    color: '#FFFFFF',
    flex: 1,
    height: 30,
  },
});
