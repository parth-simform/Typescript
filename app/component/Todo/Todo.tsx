import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './style';

type Todo = {
  title: string;
  completed: boolean;
};
interface Props {
  key?: string;
  todo: Todo;
}
const Todo = (props: Props) => {
  const {todo} = props;

  return (
    <>
      <SafeAreaView key={props.key} style={styles.container}>
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
