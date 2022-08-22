import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './style';

const index = (props: any) => {
  const {data} = props;
  return (
    <SafeAreaView key={data.id} style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>data.title</Text>
        <Text style={styles.sectionDescription}>
          Completed:{' '}
          {data.completed ? 'Yes, good work' : 'No, you have work data'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
