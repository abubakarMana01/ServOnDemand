import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../context';

export default function AboutBooking() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.container}>
      <Text>AboutBooking</Text>
    </View>
  );
}

const styleSheet = ({}: IStyleSheet) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
