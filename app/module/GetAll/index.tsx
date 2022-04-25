/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from '@apollo/client';
import Todo from '../../component/Todo/Todo';
import {GET_TODOS} from '../../graphQl/queries';
import {styles} from './style';
// import EditData from './EditData';

type GetTodo = {
  __typename: string;
  completed: boolean;
  title: string;
  userId: number;
};
type GetAllData = {
  allData: GetTodo[];
};

const GetAll = () => {
  const {data, loading} = useQuery<GetAllData>(GET_TODOS);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <ScrollView>
            {loading ? (
              <ActivityIndicator color="red" />
            ) : (
              data &&
              data.getTodos.length > 0 &&
              data.getTodos.map((res: any) => {
                return <Todo key={res.id} todo={res} />;
              })
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default GetAll;
