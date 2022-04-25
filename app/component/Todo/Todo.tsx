import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './style';
const Todo = (props: any) => {
  const {todo} = props;

  return (
    <>
      <SafeAreaView key={todo.id} style={styles.container}>
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

export default Todo;
