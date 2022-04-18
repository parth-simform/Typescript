import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../Components/Button';

type Logindata = {
  status: 'success' | 'error' | 'loading';
  onPress: () => void;
  optional?: string; // optional value
};

const Login = (props: Logindata) => {
  const [counter, setCounter] = useState<number>(0);
  const increament = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  const CountDown = () => {
    setInterval(() => {
      setCounter(counter => counter + 1);
      console.log(counter, 'counter');
    }, 1000);
  };
  const Stop = () => {};
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>{counter}</Text>
      </View>
      <View style={styles.secondContainer}>
        <Button onPress={increament} name="Increment" />
        <Button onPress={reset} name="Reset" />
        <Button onPress={decrement} name="Decrement" />
        <Button onPress={CountDown} name="CountDown" />
        <Button onPress={Stop} name="Stop" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignSelf: 'center'},
  secondContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default Login;
