import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../constants';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.username}>Abubakar Mana</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>10 I.V.W Osisiogu Crescent, Abuja</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={Colors.dark}
          />
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <View style={styles.searchIconContainer}>
          <Feather name="search" size={20} color={Colors.darkGrey} />
        </View>
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
  },
  locationContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    color: Colors.darkGrey,
    opacity: 0.7,
    marginRight: 3,
  },
  searchBarContainer: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconContainer: {
    padding: 14,
  },
  searchInput: {},
});
