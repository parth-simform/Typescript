/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';
import Todo from '../../component/Todo/Todo';
import NEW_TODO from '../../graphQl/mutation';
import {styles} from './style';
const AddTodo = () => {
  const [todo, setTodo] = React.useState<any>([]);
  const [title, onChangeTitle] = React.useState<string>('');
  const [userId, onChangeUserId] = React.useState<string>('');
  const [completed, onChangeCompleted] = React.useState<string>('');
  const [CreateATodo, {data: addData, loading}] = useMutation(NEW_TODO);

  useEffect(() => {
    if (addData) {
      setTodo([addData.addTodo, ...todo]);
      onChangeTitle('');
      onChangeUserId('');
      onChangeCompleted('');
    }
  }, [addData]);

  const submitData = () => {
    CreateATodo({
      variables: {
        TodoData: {
          userId: parseInt(userId),
          title: title,
          completed:
            completed === 'true' || completed === 'True' ? true : false,
        },
      },
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder={'add title'}
            onChangeText={onChangeTitle}
            value={title}
          />
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder={'add userID'}
            onChangeText={onChangeUserId}
            value={userId}
          />
          <TextInput
            style={styles.input}
            placeholder={'add Complete'}
            onChangeText={onChangeCompleted}
            value={completed}
          />
          <TouchableOpacity onPress={submitData}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <View style={styles.todoList}>
            {todo.title && (
              <Text>
                The title is {todo.title} and completed status{' '}
                {todo.completed.toString()}
              </Text>
            )}
          </View>
          <ScrollView>
            {loading ? (
              <ActivityIndicator color="red" />
            ) : (
              todo &&
              todo.length > 0 &&
              todo.map((res: any) => {
                return <Todo todo={res} />;
              })
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AddTodo;
