import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {childB} from './type';

const ChildB = (props: childB) => {
  return (
    <SafeAreaView>
      <Text>{props?.variant}</Text>
      <Text>{props?.name}</Text>
    </SafeAreaView>
  );
};

export default ChildB;
