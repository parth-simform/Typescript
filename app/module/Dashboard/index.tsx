import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import TabelIndex from '../../components/TableIndex.tsx';
import {saveTodos} from '../../redux/actions/Actions';
import {color} from '../../utils/color';
import {Style} from './style';

type reducreType = {
  todosData: saveTodos;
  loading: boolean;
};

interface saveData {
  Todos: reducreType;
}

const DashBoard = () => {
  const todosData: any = useSelector(
    (state: saveData) => state.Todos.todosData,
  );
  const loader = useSelector((state: saveData) => state.Todos.loading);

  const renderItem = ({item}: any) => (
    <TabelIndex
      completed={item.completed}
      onPress={() => console.log(item.id)}
      title={item.title}
    />
  );

  return (
    <View style={Style.container}>
      {loader ? (
        <ActivityIndicator size="large" color={color.loader} />
      ) : (
        <FlatList data={todosData} renderItem={renderItem} />
      )}
    </View>
  );
};

export default DashBoard;
