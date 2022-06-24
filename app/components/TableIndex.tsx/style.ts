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
    width: 350,
  },
  txtContainer: {flex: 0.7},
  deleteContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
    marginRight: 15,
  },
  txt: {color: color.red},
});
