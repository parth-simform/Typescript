import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const EditData = (props: any) => {
  const [title, onChangeTitle] = React.useState('');
  const [userId, onChangeUserId] = React.useState('');
  const [completed, onChangeCompleted] = React.useState('');

  const submitData = () => {
    props.valueData({title, userId, completed});
    setTimeout(() => {
      props.onSubmit();
    }, 1500);
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder={'add title'}
        onChangeText={onChangeTitle}
        value={title}
      />
      <TextInput
        style={styles.input}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
});

export default EditData;
