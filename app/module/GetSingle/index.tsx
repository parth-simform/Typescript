/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
  getTodo: GetTodo[];
};

const GetSingle = () => {
  const [userId, onChangeUserId] = React.useState('');
  // useLazyQuery is use when getData() function is called not when app is load
  const [getData, {data, loading}] = useLazyQuery<getSingle>(GET_TODO, {
    fetchPolicy: 'cache-and-network',
  });

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

          <View
            style={{
              marginTop: 20,
              marginHorizontal: 10,
            }}>
            {loading ? (
              <ActivityIndicator color="red" />
            ) : (
              data &&
              data.getTodo && (
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
              )
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default GetSingle;