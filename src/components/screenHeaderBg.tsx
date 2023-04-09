import {
  Dimensions,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

export default function ScreenHeaderBg({
  children,
  customStyles,
}: {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.container, customStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    padding: 24,
    paddingTop:
      Platform.OS === 'android'
        ? 25
        : Dimensions.get('window').height < 700
        ? 25
        : 60,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
