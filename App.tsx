/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import {CountryPickerModal} from 'react-native-country-code-select';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textView}>
          {JSON.stringify(selectedValue, null, 2)}
        </Text>
        <Text style={styles.separator}>{'-- --'}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.selectCountryButton}
          onPress={() => setIsVisible(oldStatus => !oldStatus)}>
          <Text style={styles.selectCountry}>Select Country</Text>
        </TouchableOpacity>
        <CountryPickerModal
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          {...{onSelect: setSelectedValue}}
          // emptyTextStyle={{
          //   backgroundColor: 'red',
          //   color: 'white',
          //   fontSize: 30,
          // }}
          // emptyText="No list....."
          customAlphabetsStyles={{
            color: 'green',
            marginLeft: 10,
            fontSize: 11,
            fontWeight: '900',
          }}
          // customRowStyle={{backgroundColor: 'red', margin: 10}}
          // modalContainerStyle={{backgroundColor: 'red', margin: 10}}
          // modalContentStyle={{backgroundColor: 'red', margin: 10}}
          // countryListTitleStyle={{backgroundColor: 'red', fontSize: 20}}
          // searchHeaderInputStyle={{backgroundColor: 'red', borderRadius: 10,marginLeft:10}}
          // isSearchInputVisible={false}
          isCloseButtonVisible
          customBackImageSource={{
            uri: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-facebook-social-media-icon-design-template-vector-png-image_3654755.png',
          }}
          customBackImageStyle={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          }}
          // isFlagVisible={false}
          // isAlphabetsVisible={false}
          // headerSearchPlaceholder="Enter country code"
          // renderSearchInputClear={({setFilterString}) => {
          //   return (
          //     <Pressable onPress={() => setFilterString('')}>
          //       <Text>x</Text>
          //     </Pressable>
          //   );
          // }}
          // renderCustomSearchInput={({setFilterString, filterString}) => {
          //   return (
          //     <TextInput
          //       style={styles.input}
          //       onChangeText={setFilterString}
          //       value={filterString}
          //     />
          //   );
          // }}
          // customCloseButton={() => {
          //   return (
          //     <Pressable onPress={() => setIsVisible(false)}>
          //       <Text>Hello</Text>
          //     </Pressable>
          //   );
          // }}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6d7b8',
  },
  textView: {
    width: '60%',
    backgroundColor: '#261a08',
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    color: '#ffffff',
    fontWeight: '500',
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  selectCountryButton: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#261a08',
    borderRadius: 20,
  },
  selectCountry: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    marginVertical: 20,
    letterSpacing: 2,
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '50%',
  },
});

export default App;
