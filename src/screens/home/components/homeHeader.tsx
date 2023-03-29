import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ScreenHeaderBg} from '../../../components';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../../constants';

export default function HomeHeader() {
  return (
    <ScreenHeaderBg>
      <View style={styles.headerUser}>
        <Image
          source={require('../../../assets/user.png')}
          style={styles.userImage}
          resizeMode="cover"
        />

        <View style={{flex: 1}}>
          <Text style={styles.greeting}>Good morning</Text>
          <View style={styles.nameAndNotification}>
            <Text style={styles.username}>Abubakar</Text>

            <Feather name="bell" size={24} color={Colors.grey} />
          </View>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <Feather name="search" size={30} color={Colors.white} />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          autoCorrect={false}
          placeholderTextColor={Colors.grey}
        />

        <Feather name="filter" size={24} color={Colors.purple} />
      </View>
    </ScreenHeaderBg>
  );
}

const styles = StyleSheet.create({
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  nameAndNotification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  greeting: {
    fontSize: 16,
    opacity: 0.7,
    color: Colors.white,
  },
  username: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.white,
  },

  searchBarContainer: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 16,
    fontSize: 16,
    height: 40,
    flex: 1,
    color: Colors.white,
  },
});
