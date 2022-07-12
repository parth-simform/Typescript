/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationDataType} from '../../component/type';
import {detailData} from '../../utility/listData';

const {width} = Dimensions.get('screen');

const Detail = () => {
  const navigation: NavigationDataType = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.imgContainer}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.imgContainer}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Detail List</Text>
        <View />
      </View>
      <FlatList
        data={detailData}
        keyExtractor={(_, index) => `index${index}`}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.itemContainer}>
              <Image
                source={{uri: item?.image}}
                style={[StyleSheet.absoluteFillObject, {resizeMode: 'cover'}]}
              />
              <Text style={styles.itemText}>{item?.title}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default memo(Detail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050A30',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgContainer: {
    width: 50,
    height: 50,
  },
  text: {
    color: 'white',
    fontWeight: '900',
  },
  itemContainer: {
    margin: 10,
    width: width / 1.5,
    height: width / 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'red',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
  },
});

/*

const Detail = ({route}: DetailsScreenRouteProp) => {
  const {number} = route.params;
  console.log(number, route.params);
*/
