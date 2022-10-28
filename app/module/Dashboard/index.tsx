import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../../components/Card';
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

  const isCardOPen = useSelector(
    (state: any) => state.Todos.isOpenCard ?? true,
  );

  const renderItem = ({item}: any) => <Card index={0} />;

  return (
    <View style={Style.container}>
      {loader ? (
        <ActivityIndicator size="large" color={color.loader} />
      ) : (
        <FlatList
          scrollEnabled={isCardOPen}
          data={todosData}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default DashBoard;
