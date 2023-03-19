import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

export default function ScreenHeaderBg({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    padding: 24,
    paddingTop: Platform.OS === 'android' ? 25 : 60,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
