/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useQuery} from '@apollo/client';

import Todo from '../../component/Todo';
import {GET_TODOS} from '../../graphQl/queries';
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
  const [todo, setTodo] = React.useState<any>([]);

  const {data, loading} = useQuery<GetAllData>(GET_TODOS);
  console.log(data, 'data');

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

export default GetAll;
