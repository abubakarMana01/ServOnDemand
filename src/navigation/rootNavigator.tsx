import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import StackNavigator from './stackNavigator';
import {useAppContext} from '../context';

export default function RootNavigator() {
  const {theme} = useAppContext();

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}
