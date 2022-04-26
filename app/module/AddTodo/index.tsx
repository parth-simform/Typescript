/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  ListRenderItemInfo,
  FlatList,
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

type GetTodo = {
  __typename: string;
  completed: boolean;
  title: string;
  userId: string;
};

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
  const renderItem = ({item}: ListRenderItemInfo<GetTodo>) => (
    <Todo todo={item} />
  );
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
          {loading ? (
            <ActivityIndicator color="red" />
          ) : (
            todo && <FlatList data={todo} renderItem={renderItem} />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default AddTodo;
