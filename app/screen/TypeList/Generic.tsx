import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React, {memo} from 'react';

interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

// <TItem,> is generic type to access all the types without declare in TableProps
export const Table = <TItem,>(_props: TableProps<TItem>) => {
  return null;
};

const Generic = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Table
        items={[{id: '1', firstName: 'parth'}]}
        renderItem={item => {
          return <Text>{item?.id}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default memo(Generic);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: 'darkblue',
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  txt: {color: 'white', fontWeight: '900'},
});
