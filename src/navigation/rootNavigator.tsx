import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stackNavigator';
import useNavigationTheme from './useNavigationTheme';

export default function RootNavigator() {
  const navigationTheme = useNavigationTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}
