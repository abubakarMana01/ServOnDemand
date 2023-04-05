import React, {useState} from 'react';
import {
  Keyboard,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AppTextInput, AppButton} from '../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '../../constants';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // const [isLoading, setIsLoading] = useState(false);
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Hi, Welcome Back!👋</Text>
            <Text style={styles.subtitle}>
              You&apos;ve been missed. Please login!
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <AppTextInput
                label="Email address"
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <AppTextInput
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            <View style={styles.forgotPasswordContainer}>
              <Pressable
                style={styles.forgotPasswordCheckBox}
                onPress={() => setIsRememberMeChecked(prev => !prev)}>
                <Ionicons
                  name={isRememberMeChecked ? 'checkbox' : 'checkbox-outline'}
                  size={24}
                  color={Colors.darkBlue}
                />
                <Text style={styles.remeberMeText}>Remember me</Text>
              </Pressable>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottom}>
            <AppButton
              title="Log in"
              isLoading={false}
              onPress={() => {}}
              full
            />
            <TouchableOpacity
              style={styles.bottomTextContainer}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.bottomText}>
                Don't have an account?{' '}
                <Text style={styles.bottomTextLink}>Create one</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
  },
  header: {
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    fontWeight: Platform.OS === 'ios' ? '500' : '600',
    color: Colors.dark,
    opacity: 0.5,
  },
  animationContainer: {
    alignItems: 'center',
  },
  animation: {
    width: 180,
    height: 180,
  },
  form: {
    marginVertical: 50,
  },
  inputContainer: {
    marginBottom: 24,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPasswordCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remeberMeText: {
    marginLeft: 4,
  },
  forgotPasswordText: {
    color: 'red',
    fontSize: 12,
    fontWeight: '500',
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  bottomTextContainer: {
    alignSelf: 'center',
  },
  bottomText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '500',
    color: Colors.dark,
  },
  bottomTextLink: {
    color: Colors.darkBlue,
    fontWeight: '600',
  },
});
