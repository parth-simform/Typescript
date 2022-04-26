import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  body: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    width: 350,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black,
    margin: 10,
  },
  sectionDescription: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '400',
    color: Colors.dark,
  },
});
