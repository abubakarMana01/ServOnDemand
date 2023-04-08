import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Bookings, Calendar, Profile} from '../screens';
import StackNavigator from './stackNavigator';
import {Colors} from '../constants';
import {useAppContext} from '../context';
import {ROUTES} from '.';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation() {
  const {theme} = useAppContext();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme === 'dark' ? Colors.blue : Colors.darkBlue,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: theme === 'dark' ? '#333' : Colors.lightGrey,
        },
      }}>
      <Tab.Screen
        name={ROUTES.STACK_NAV}
        component={StackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.BOOKINGS}
        component={Bookings}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'newspaper' : 'newspaper-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CALENDAR}
        component={Calendar}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'calendar' : 'calendar-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
