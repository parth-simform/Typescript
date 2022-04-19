import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import TabelIndex from '../../components/TableIndex.tsx';
import {saveTodos} from '../../redux/reduxSause';
import {color} from '../../utils/color';
import {Style} from './style';
interface saveData {
  todosData: saveTodos;
  loading: boolean;
}

const DashBoard = () => {
  const todosData: any = useSelector((state: saveData) => state.todosData);
  const loader = useSelector((state: saveData) => state.loading);

  const renderItem = ({item}: any) => (
    <TabelIndex
      completed={item.completed}
      onPress={() => console.log(item.id)}
      title={item.title}
      onPressDelete={() => console.log(item.id)}
    />
  );

  return (
    <View style={Style.container}>
      {loader ? (
        <ActivityIndicator size="large" color={color.black} />
      ) : (
        <FlatList data={todosData} renderItem={renderItem} />
      )}
    </View>
  );
};

export default DashBoard;
