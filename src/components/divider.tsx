import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: Colors.grey,
  },
});
