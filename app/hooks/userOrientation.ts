/* eslint-disable @typescript-eslint/no-shadow */
import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const screen = Dimensions.get('screen');
const window = Dimensions.get('window');

export default function useOrientation() {
  const [dimensions, setDimensions] = useState({screen, window});
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription.remove();
  });
  return {
    ...dimensions.screen,
    isPortrait: dimensions.screen
      ? dimensions.screen.height > dimensions.screen.width
      : 'true',
  };
}
