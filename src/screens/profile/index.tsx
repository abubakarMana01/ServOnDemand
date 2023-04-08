import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../context';
import {AppButton, ScreenHeaderBg, ScreenHeaderText} from '../../components';
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

        <ScrollView contentContainerStyle={styles.scrollView}></ScrollView>

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
    scrollView: {},

    userInfo: {
      alignItems: 'center',
      // paddingTop: 16,
    },
    userImg: {
      width: 130,
      height: 130,
      borderRadius: 65,
      borderWidth: 5,
      borderColor: theme === 'dark' ? Colors.darkGrey : Colors.grey,
    },
    userName: {
      fontSize: 24,
      fontWeight: '700',
      marginTop: 8,
    },
    userEmail: {
      marginTop: 4,
    },
  });
