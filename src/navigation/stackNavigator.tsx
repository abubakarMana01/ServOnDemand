// In App.js in a new project

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Home} from '../screens';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
