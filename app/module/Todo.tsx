import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Todo = (props: any) => {
  const {todo} = props;

  return (
    <>
      <SafeAreaView key={todo.id} style={{flex: 1}}>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>{todo.title}</Text>
          <Text style={styles.sectionDescription}>
            Completed:{' '}
            {todo.completed ? 'Yes, good work' : 'No, you have work todo'}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    // display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    width: 350,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black,
    margin: 10,
  },
  sectionDescription: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '400',
    color: Colors.dark,
  },
});
export default Todo;
