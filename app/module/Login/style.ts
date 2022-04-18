import {StyleSheet} from 'react-native';
import {color} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  btn: {
    borderWidth: 1,
    backgroundColor: color.red,
    borderRadius: 15,
    padding: 15,
  },
  txt: {color: color.white, fontWeight: '900'},
});
