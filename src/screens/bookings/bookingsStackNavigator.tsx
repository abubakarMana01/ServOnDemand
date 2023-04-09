import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AboutBooking, Bookings} from '..';
import {Platform} from 'react-native';
import {ROUTES} from '../../navigation';

const Stack = createNativeStackNavigator();

function BookingsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.BOOKINGS} component={Bookings} />
      <Stack.Screen
        name={ROUTES.ABOUT_BOOKING}
        component={AboutBooking}
        options={{
          presentation: Platform.OS === 'ios' ? 'modal' : 'card',
        }}
      />
    </Stack.Navigator>
  );
}

export default BookingsStackNavigator;
