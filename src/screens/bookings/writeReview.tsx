import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../context';

export default function WriteReview() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.container}>
      <Text>Write review</Text>
    </View>
  );
}

const styleSheet = ({}: IStyleSheet) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
