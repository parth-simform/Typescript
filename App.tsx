import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ChildA from './app/childA';
import ChildB from './app/childB';
import ChildC from './app/childC';
import {childA, childB, childC} from './app/type';

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

const App = () => {
  return <Child variant="B" city="anand" name="Hello" />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
