import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants';

export default function GoBackButton() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={styles.button} onPress={navigation.goBack}>
      <Ionicons name="arrow-back" color={Colors.black} size={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 37,
    height: 37,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
});
