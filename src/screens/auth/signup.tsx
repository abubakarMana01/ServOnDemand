import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {AppTextInput, AppButton} from '../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '../../constants';

export default function Signup() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
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
            isLoading={false}
            onPress={() => {}}
            full
          />
          <TouchableOpacity
            style={styles.bottomTextContainer}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.bottomText}>
              Already have an account?{' '}
              <Text style={styles.bottomTextLink}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontWeight: '500',
    color: Colors.dark,
  },
  bottomTextLink: {
    color: Colors.darkBlue,
    fontWeight: '600',
  },
});
