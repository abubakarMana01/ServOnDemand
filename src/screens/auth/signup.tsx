import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {AppTextInput, AppButton} from '../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '../../constants';
import {Pressable} from 'react-native';
import {useAppContext} from '../../context';

export default function Signup() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [isLoading, setIsLoading] = useState(false);
  const {setUser} = useAppContext();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({});
    }, 2500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior="padding"
        keyboardVerticalOffset={0}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subtitle}>
              Please fill in the form to register
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <AppTextInput
                label="First Name"
                placeholder="First Name"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

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
          </View>

          <View style={styles.bottom}>
            <AppButton
              title="Sign up"
              isLoading={isLoading}
              onPress={handleLogin}
              full
            />
            <Pressable
              style={styles.bottomTextContainer}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.bottomText}>
                Already have an account?{' '}
                <Text style={styles.bottomTextLink}>Log in</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    keyboardAvoidingView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
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
      color: theme === 'dark' ? Colors.white : Colors.black,
      opacity: 0.5,
      marginTop: 3,
    },
    animationContainer: {
      alignItems: 'center',
    },
    animation: {
      width: 180,
      height: 180,
    },
    form: {
      marginVertical: 40,
    },
    inputContainer: {
      marginBottom: 24,
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
