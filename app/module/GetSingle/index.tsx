import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useLazyQuery} from '@apollo/client';
import {GET_TODO} from '../../graphQl/queries';
import {styles} from './style';
interface GetTodo {
  __typename: string;
  completed: boolean;
  title: string;
  userId: number;
}
type getSingle = {
  getTodo: GetTodo;
};

const GetSingle = () => {
  const [userId, onChangeUserId] = React.useState('');
  // useLazyQuery is use when getData() function is called not when app is load
  const [getData, {data, loading}] = useLazyQuery<getSingle>(GET_TODO);

  const submitData = () => {
    console.log(userId);
    getData({
      variables: {id: userId},
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder={'add userID'}
            onChangeText={onChangeUserId}
            value={userId}
          />

          <TouchableOpacity onPress={submitData}>
            <Text>Submit</Text>
          </TouchableOpacity>

          <View style={styles.secondContainer}>
            {loading ? (
              <ActivityIndicator color="red" />
            ) : data && data.getTodo.userId ? (
              <View>
                <Text>
                  {' \n'}
                  userId : {data.getTodo.userId}
                </Text>
                <Text>
                  {' \n'}
                  Title : {data.getTodo.title}
                </Text>
                <Text>
                  {' \n'}
                  completed status :{data.getTodo.completed.toString()}
                </Text>
              </View>
            ) : (
              <Text>No data Found</Text>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default GetSingle;
