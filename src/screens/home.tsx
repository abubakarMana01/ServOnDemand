import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {},
});
