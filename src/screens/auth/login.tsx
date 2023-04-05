import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
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
import {useAppContext} from '../../context';

export default function Login() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setUser} = useAppContext();

  const [isLoading, setIsLoading] = useState(false);
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(true);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({});
    }, 2500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <>
            {/* <View style={{flex: 1}} /> */}

            <View style={styles.header}>
              <Text style={styles.title}>Welcome Back! 👋</Text>
              <Text style={styles.subtitle}>
                You've been missed. Please login!
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
                    color={theme === 'dark' ? Colors.blue : Colors.darkBlue}
                  />
                  <Text style={styles.remeberMeText}>Remember me</Text>
                </Pressable>
                <TouchableOpacity>
                  <Text style={styles.forgotPasswordText}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex: 1}} />

            <View style={styles.bottom}>
              <AppButton
                title="Log in"
                isLoading={isLoading}
                onPress={handleLogin}
                full
              />
              <Pressable
                style={styles.bottomTextContainer}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.bottomText}>
                  Don't have an account?{' '}
                  <Text style={styles.bottomTextLink}>Create one</Text>
                </Text>
              </Pressable>
            </View>
          </>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 16,
      flex: 1,
    },
    header: {
      marginTop: 16,
    },
    title: {
      fontSize: 30,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    subtitle: {
      fontWeight: Platform.OS === 'ios' ? '500' : '600',
      opacity: 0.5,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    form: {
      marginTop: 50,
      marginBottom: 20,
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
      color: theme === 'dark' ? Colors.white : Colors.dark,
    },
    forgotPasswordText: {
      color: theme === 'dark' ? Colors.blue : Colors.darkBlue,
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
      color: theme === 'dark' ? Colors.white : Colors.dark,
    },
    bottomTextLink: {
      fontWeight: '600',
      color: theme === 'dark' ? Colors.blue : Colors.darkBlue,
    },
  });
