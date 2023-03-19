import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import useNavigationTheme from './useNavigationTheme';
import BottomTabsNavigation from './bottomTabsNavigation';

export default function RootNavigator() {
  const navigationTheme = useNavigationTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <BottomTabsNavigation />
    </NavigationContainer>
  );
}
