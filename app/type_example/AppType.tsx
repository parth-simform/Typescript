import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ChildA from './childA';
import ChildB from './childB';
import ChildC from './childC';
import {childA, childB, childC} from './type';

//for show only this props in types
type childAPick = Pick<childA, 'city' | 'variant' | 'message'>;

//for disable props which we don't need to show user
type childBOmit = Omit<childB, 'state'>;

type variant = childAPick | childBOmit | childC;

const Child = (props: variant) => {
  return (
    <SafeAreaView style={styles.container}>
      {props?.variant === 'A' ? (
        <ChildA {...props} />
      ) : props?.variant === 'B' ? (
        <ChildB {...props} />
      ) : (
        <ChildC {...props} />
      )}
    </SafeAreaView>
  );
};

const AppType = () => {
  return (
    <Child
      variant="C"
      city="anand"
      state="Gujarat"
      mobile_number={9854}
      age={25}
    />
  );
};

export default AppType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
