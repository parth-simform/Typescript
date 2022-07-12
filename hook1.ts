import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
const CircularAnimatedCheckMark = () => {
  let animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 800,
      useNativeDriver: false,
    }).start();
  });
  const topRightViewAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 2],
          outputRange: ['-45deg', '90deg'],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };
  const bottomRightViewAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 2],
          outputRange: ['-45deg', '90deg'],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };
  const bottomLeftViewAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 2],
          outputRange: ['-135deg', '90deg'],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };
  const topLeftViewAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 2],
          outputRange: ['-225deg', '90deg'],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };
  const imageAnimation = {
    // opacity: animation.interpolate({
    //   inputRange: [0, 0.5, 1, 1.5, 1.7, 2],
    //   outputRange: [0, 0.1, 0.2, 0.3, 1.5, 2],
    // }),
    height: 100,
  };
  const checkMarkAnimation = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 2],
          outputRange: [10, 110],
          extrapolateRight: 'clamp',
        }),
      },
    ],
    // backgroundColor: animation.interpolate({
    //   inputRange: [0, 2],
    //   outputRange: ['red', 'transparent'],
    //   extrapolateRight: 'clamp',
    // }),
  };
  return {
    topRightViewAnimation,
    bottomRightViewAnimation,
    bottomLeftViewAnimation,
    topLeftViewAnimation,
    imageAnimation,
    checkMarkAnimation,
  };
};
export default CircularAnimatedCheckMark;
const styles = StyleSheet.create({});
