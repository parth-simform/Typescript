import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [pin, setPin] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [loding, setloading] = useState<boolean>(false);
  const [show, setShow] = useState<number>(5);

  const onData = () => {
    setShow(1);
    setloading(true);
    setTimeout(() => {
      if (email === '' || pin === '') {
        setloading(false);
        Alert.alert('Please fill email and password');
      } else {
        setloading(false);
        Alert.alert('Email and Pin added successfully');
        console.log(email, ' ', pin);
      }
    }, 4000);
  };
  const onShow = () => {
    setShow(0);
    setloading(true);
    setTimeout(() => {
      if (email === '' || pin === '') {
        setloading(false);
        Alert.alert('Please fill email and Pin');
      } else {
        setloading(false);
        setVisible(!visible);
      }
    }, 4000);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={'enter email'}
        placeholderTextColor="black"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder={'enter pin'}
        placeholderTextColor="black"
        onChangeText={setPin}
        value={pin}
      />
      <View style={styles.btnView}>
        <SpinnerButton
          buttonStyle={styles.buttonStyle}
          isLoading={show == 1 && loding}
          onPress={onData}
          spinnerType={'SkypeIndicator'}
          indicatorCount={10}>
          <Text style={styles.txt}>Done</Text>
        </SpinnerButton>

        <SpinnerButton
          buttonStyle={[styles.buttonStyle, {backgroundColor: 'purple'}]}
          isLoading={show == 0 && loding}
          onPress={onShow}
          indicatorCount={10}>
          <Text style={styles.txt}>{visible ? 'Hide' : 'Show'}</Text>
        </SpinnerButton>
      </View>
      {visible && <Text>{`${email} and pin is ${pin}`}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignSelf: 'center'},
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  btnView: {flexDirection: 'row', justifyContent: 'space-around'},
  btn: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'purple',
  },
  txt: {color: 'white', fontWeight: 'bold'},
  buttonStyle: {
    backgroundColor: 'red',
    width: 100,
    borderRadius: 15,
  },
});

export default Login;
