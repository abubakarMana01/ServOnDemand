import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AvailableHandymen, Details, Home} from '../screens';
import {Platform} from 'react-native';
import {ROUTES} from '.';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.DETAILS}
        component={Details}
        options={{
          headerShown: false,
          presentation: Platform.OS === 'ios' ? 'modal' : 'card',
        }}
      />
      <Stack.Screen
        name={ROUTES.AVAILABLE_HANDYMEN}
        component={AvailableHandymen}
        options={{
          headerTitle: 'Available',
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
