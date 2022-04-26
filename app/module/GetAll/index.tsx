import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {useQuery} from '@apollo/client';
import Todo from '../../component/Todo/Todo';
import {GET_TODOS} from '../../graphQl/queries';
import {styles} from './style';

type GetTodo = {
  __typename: string;
  completed: boolean;
  title: string;
  userId: string;
};

interface GetAllData {
  getTodos: GetTodo;
}

const GetAll = () => {
  const {data, loading} = useQuery<GetAllData | any>(GET_TODOS);

  const renderItem = ({item}: ListRenderItemInfo<GetTodo>) => (
    <Todo todo={item} />
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          {loading ? (
            <ActivityIndicator color="red" />
          ) : (
            data &&
            data.getTodos && (
              <FlatList data={data.getTodos} renderItem={renderItem} />
            )
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default GetAll;
