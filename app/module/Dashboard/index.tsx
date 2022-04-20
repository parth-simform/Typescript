import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TabelIndex from '../../components/TableIndex.tsx';
import useFetch from '../../hooks/useFetch';
import useOrientation from '../../hooks/userOrientation';
import {Creators, saveTodos} from '../../redux/reduxSause';
import {Style} from './style';
interface saveData {
  todosData: saveTodos;
  loading: boolean;
}

const DashBoard = (props: any) => {
  const disptch = useDispatch();
  const {isPortrait} = useOrientation();
  const {todosData, colors} = useFetch(props);
  const loader = useSelector((state: saveData) => state.loading);

  const renderItem = ({item}: any) => (
    <TabelIndex
      isPotrait={isPortrait}
      completed={item.completed}
      onPress={() => console.log(item.id)}
      title={item.title}
      onPressDelete={() => disptch(Creators.deleteTodo(item.id))}
    />
  );

  return (
    <View style={Style.container}>
      {loader ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          data={todosData}
          renderItem={renderItem}
          refreshing={false}
          onRefresh={() => disptch(Creators.fetchTodoData())}
        />
      )}
    </View>
  );
};

export default DashBoard;
