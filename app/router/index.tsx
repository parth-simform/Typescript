// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../module/Home';
import AddTodo from '../module/AddTodo';
import GetSingle from '../module/GetSingle';
import GetAll from '../module/GetAll';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        <Stack.Screen name="GetSingle" component={GetSingle} />
        <Stack.Screen name="GetAll" component={GetAll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
