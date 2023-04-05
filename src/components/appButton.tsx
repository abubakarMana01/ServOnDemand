import React from 'react';
import {ActivityIndicator, StyleSheet, Text, Pressable} from 'react-native';
import {Colors} from '../constants';

interface IAuthButton {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  full?: boolean;
}

export default function AppButton({
  title,
  onPress,
  isLoading = false,
  full = false,
}: IAuthButton) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, {maxWidth: full ? '100%' : 263}]}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 54,
    backgroundColor: Colors.darkBlue,
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});
