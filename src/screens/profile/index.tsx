import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useAppContext} from '../../context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AppButton,
  Divider,
  ScreenHeaderBg,
  ScreenHeaderText,
} from '../../components';
import {Colors} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile() {
  const {theme, setUser} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.container}>
      <ScreenHeaderBg>
        <ScreenHeaderText title="Profile" />
      </ScreenHeaderBg>

      <View style={styles.main}>
        <View style={styles.userInfo}>
          <Image
            source={require('../../assets/neymar.jpeg')}
            style={styles.userImg}
          />
          <Text style={styles.userName}>Abubakar Mana</Text>
          <Text style={styles.userEmail}>ym.abubakr8@gmail.com</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>
          <Pressable style={styles.options}>
            <Ionicons
              name="person-outline"
              size={24}
              color={theme === 'dark' ? Colors.white : Colors.black}
            />
            <Text style={styles.optionText}>Edit Profile</Text>
          </Pressable>
          <Divider
            color={theme === 'dark' ? Colors.lightGrey : Colors.grey + '70'}
          />
          <Pressable style={styles.options}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={theme === 'dark' ? Colors.white : Colors.black}
            />
            <Text style={styles.optionText}>Notifications</Text>
          </Pressable>
          <Divider
            color={theme === 'dark' ? Colors.lightGrey : Colors.grey + '70'}
          />
          <Pressable style={styles.options}>
            <Ionicons
              name="settings-outline"
              size={24}
              color={theme === 'dark' ? Colors.white : Colors.black}
            />
            <Text style={styles.optionText}>Settings</Text>
          </Pressable>
        </ScrollView>

        <AppButton
          title="Logout"
          onPress={() => setUser(null)}
          full
          icon={
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color={Colors.white}
            />
          }
          customStyles={styles.logoutButton}
        />
      </View>
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    main: {
      marginTop: -50,
      flex: 1,
      padding: 16,
    },
    scrollView: {
      marginTop: 32,
    },

    userInfo: {
      alignItems: 'center',
      // paddingTop: 16,
    },
    userImg: {
      width: Dimensions.get('window').height < 700 ? 100 : 130,
      height: Dimensions.get('window').height < 700 ? 100 : 130,
      borderRadius: 65,
      borderWidth: 5,
      borderColor: theme === 'dark' ? Colors.darkGrey : Colors.grey,
    },
    userName: {
      fontSize: 24,
      fontWeight: '700',
      marginTop: 8,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    userEmail: {
      marginTop: 2,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },

    options: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionText: {
      color: theme === 'dark' ? Colors.white : Colors.black,
      marginLeft: 16,
      fontSize: 16,
      fontWeight: '500',
    },
    logoutButton: {
      marginBottom: Dimensions.get('window').height < 700 ? 0 : 8,
    },
  });
