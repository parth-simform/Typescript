/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useMutation} from '@apollo/client';
import Todo from '../../component/Todo';
// import EditData from './EditData';
import NEW_TODO from '../../graphQl/mutation';

// type GetTodo = {
//   __typename: string;
//   completed: boolean;
//   title: string;
//   userId: number;
// };

const AddTodo = () => {
  const [todo, setTodo] = React.useState<any>([]);
  const [title, onChangeTitle] = React.useState('');
  const [userId, onChangeUserId] = React.useState('');
  const [completed, onChangeCompleted] = React.useState('');
  // useLazyQuery is use when getData() function is called not when app is load
  useEffect(() => {
    // getData({
    //   variables: {id: 18},
    // });
  }, []);
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
          <View style={{marginVertical: 10}}>
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

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bodyContainer: {borderWidth: 1, margin: 5},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
});

export default AddTodo;
