import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

interface IDivider {
  color?: string;
}

export default function Divider({color}: IDivider) {
  return (
    <View style={[styles.divider, {backgroundColor: color || Colors.grey}]} />
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
  },
});
