import {StyleSheet} from 'react-native';
import {color} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: color.black,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  txtContainer: {flex: 0.7},
  deleteContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  txt: {color: color.red},
});
