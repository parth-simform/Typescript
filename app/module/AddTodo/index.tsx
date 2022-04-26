/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';
interface DropdownValue {
  label: string;
  value: string;
}

const AddTodo = () => {
  const [todo, setTodo] = React.useState<any>([]);
  const [title, onChangeTitle] = React.useState<string>('');
  const [userId, onChangeUserId] = React.useState<string>('');
  const [CreateATodo, {data: addData, loading}] = useMutation(NEW_TODO);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<DropdownValue[]>([
    {label: 'true', value: 'true'},
    {label: 'false', value: 'false'},
  ]);

  useEffect(() => {
    if (addData) {
      setTodo([addData.addTodo, ...todo]);
      onChangeTitle('');
      onChangeUserId('');
      setValue('');
    }
  }, [addData]);

  const submitData = () => {
    CreateATodo({
      variables: {
        TodoData: {
          userId: parseInt(userId),
          title: title,
          completed: value === 'true' || value === 'True' ? true : false,
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

          <DropDownPicker
            open={open}
            value={value}
            placeholder={'Select Completed Status'}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.dropdownContainer}
            containerStyle={styles.containerStyle}
          />
          <TouchableOpacity style={styles.btn} onPress={submitData}>
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
