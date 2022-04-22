import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {ApolloConsumer} from '@apollo/client';
import GET_TODOS from '../graphQl/queries';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type TodoList = {
  __typename: string;
  title: string;
  completed: boolean;
  id: string;
  userId: number;
};
type RenderItem = {
  item: TodoList;
};
// type Props = {
//   handler?: (item: string) => void;
// };
const Search = (props: any) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setResults] = useState([]);

  const search = async (value: string, client: any) => {
    setSearchKeyword(value);
    setShowResults(true);

    if (value.length > 0) {
      const {data} = await client.query({
        query: GET_TODOS,
      });

      if (data) {
        const results = data.getTodos.filter((element: any) => {
          return element.title.includes(value.toLowerCase());
        });
        const newItems = results.length > 0 ? results : searchResults;
        setResults(newItems);
      }
    }
  };

  const handleSelect = (item: TodoList) => {
    setSearchKeyword(item.title);
    setShowResults(false);
    props.handler(item);
  };

  return (
    <ApolloConsumer>
      {client => (
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Search todos</Text>
            <TextInput
              placeholder="Search "
              placeholderTextColor="#000"
              style={styles.searchBox}
              onChangeText={text => search(text, client)}
              value={searchKeyword}
            />
          </View>
          <View style={styles.sectionContainer}>
            {showResults && (
              <FlatList
                data={searchResults}
                renderItem={({item}: RenderItem) => {
                  return (
                    <TouchableOpacity
                      style={styles.resultItem}
                      onPress={() => handleSelect(item)}>
                      <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item: TodoList) => item.id}
                style={styles.searchResultsContainer}
              />
            )}
          </View>
        </View>
      )}
    </ApolloConsumer>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    zIndex: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    margin: 10,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    color: 'gray',
  },
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: '#aaa',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    paddingLeft: 15,
  },
  searchResultsContainer: {
    width: 340,
    height: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    top: -30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  resultItem: {
    width: '100%',
    justifyContent: 'center',
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
});

export default Search;
