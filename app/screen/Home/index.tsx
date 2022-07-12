import {useNavigation} from '@react-navigation/native';
import React, {memo, useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Image,
  Animated,
  Pressable,
} from 'react-native';
import {NavigationDataType} from '../../component/type';
import {data} from '../../utility/listData';

const {width} = Dimensions.get('screen');

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const Home = () => {
  const scrollx = useRef(new Animated.Value(0)).current;
  const navigation: NavigationDataType = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width, // next
            index * width, // current
            (index + 1) * width, // previous
          ];

          const opacity = scrollx.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={{uri: item as string}}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity,
                },
              ]}
              blurRadius={10}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollx}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('DetailsStack', {
                  number: index,
                  data: 'parth',
                })
              }
              hitSlop={{top: -300, bottom: -180, left: -50, right: -50}}
              style={({pressed}) => [
                styles.listView,
                pressed ? {opacity: 0.2} : {},
              ]}>
              <Image source={{uri: item}} style={styles.listImage} />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  listView: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 20,
  },
  listImage: {
    width: imageW,
    height: imageH,
    resizeMode: 'cover',
    borderRadius: 16,
  },
});
