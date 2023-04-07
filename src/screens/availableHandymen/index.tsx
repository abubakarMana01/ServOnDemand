import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../context';
import {Colors} from '../../constants';

const AvailableHandymen = () => {
  const {theme} = useAppContext();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? Colors.dark : Colors.white}
      />

      <Text>Available Handymen</Text>
    </View>
  );
};

export default AvailableHandymen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
