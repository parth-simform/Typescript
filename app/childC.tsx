import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {childC} from './type';

const ChildC = (props: childC) => {
  return (
    <SafeAreaView>
      <Text>{props?.variant}</Text>
      <Text>{props?.mobile_number}</Text>
    </SafeAreaView>
  );
};

export default ChildC;
