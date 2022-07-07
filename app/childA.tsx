/* eslint-disable react-native/no-inline-styles */
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {childA} from './type';

const ChildA = (props: childA) => {
  const addFun = <T extends {}>(name: T) => {
    console.log(name);
    return name;
  };

  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props?.variant}</Text>
      <Text>{props?.message}</Text>
      <TouchableOpacity
        onPress={() => addFun(['Hello', 12, 25, 41, {name: 'parth'}])}
        style={{padding: 10, backgroundColor: 'brown', borderRadius: 10}}>
        <Text style={{color: 'white', fontWeight: '700'}}>
          Please click on this text
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChildA;
