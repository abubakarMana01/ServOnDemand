import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../constants';

interface IAuthButton {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  full?: boolean;
  customStyles?: object;
  customTextStyles?: object;
}

export default function AppButton({
  title,
  onPress,
  isLoading = false,
  full = false,
  customStyles = {},
  customTextStyles = {},
}: IAuthButton) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {maxWidth: full ? '100%' : 263}, customStyles]}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={[styles.text, customTextStyles]}>{title}</Text>
      )}
    </TouchableOpacity>
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
