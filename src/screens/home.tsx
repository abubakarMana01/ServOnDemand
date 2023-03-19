/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../constants';

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.headerUser}>
          <Image
            source={require('../assets/user.png')}
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
      </View>

      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.section}>
            <View style={[styles.sectionTitleContainer, styles.marginInline]}>
              <Text style={styles.sectionTitle}>Special Offers</Text>

              <Text style={styles.sectionRightActionText}>See all</Text>
            </View>

            <View style={[styles.specialOfferContainer, styles.marginInline]}>
              <View style={styles.specialOfferTop}>
                <Text style={styles.specialOfferPercentage}>30%</Text>

                <Pressable style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Explore offer</Text>
                </Pressable>
              </View>

              <Text style={styles.specialOfferTitle}>Todays Special!</Text>
              <Text style={styles.specialOfferDescription}>
                Get a discount for every order today
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={[styles.sectionTitleContainer, styles.marginInline]}>
              <Text style={styles.sectionTitle}>Categories</Text>

              <Text style={styles.sectionRightActionText}>See all</Text>
            </View>

            <View style={[styles.marginInline, {marginRight: 0}]}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    width: 93,
                    height: 120,
                    backgroundColor: '#FAC3E2',
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="broom"
                    size={45}
                    color={Colors.dark}
                  />
                  <Text style={{textAlign: 'center', marginTop: 5}}>
                    Cleaning
                  </Text>
                </View>
                <View
                  style={{
                    width: 93,
                    height: 120,
                    backgroundColor: '#D4D1FE',
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <Entypo name="tools" size={45} color={Colors.dark} />
                  <Text style={{textAlign: 'center', marginTop: 5}}>
                    Repairs
                  </Text>
                </View>
                <View
                  style={{
                    width: 93,
                    height: 120,
                    backgroundColor: '#FFEAC9',
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <MaterialCommunityIcons
                    name="format-paint"
                    size={45}
                    color={Colors.dark}
                  />
                  <Text style={{textAlign: 'center', marginTop: 5}}>
                    Painting
                  </Text>
                </View>
                <View
                  style={{
                    width: 93,
                    height: 120,
                    backgroundColor: '#E9E9F6',
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <MaterialCommunityIcons
                    name="washing-machine"
                    size={45}
                    color={Colors.dark}
                  />
                  <Text style={{textAlign: 'center', marginTop: 5}}>
                    Laundry
                  </Text>
                </View>
                <View
                  style={{
                    width: 93,
                    height: 120,
                    backgroundColor: '#FAC3E2',
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <MaterialIcons
                    name="car-repair"
                    size={45}
                    color={Colors.dark}
                  />
                  <Text style={{textAlign: 'center', marginTop: 5}}>
                    Mechanic
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.darkBlue,
    padding: 24,
    paddingTop: Platform.OS === 'android' ? 25 : 60,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    flex: 1,
  },

  mainContainer: {},

  marginInline: {
    marginHorizontal: 16,
  },

  section: {
    marginTop: 34,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionRightActionText: {
    color: Colors.blue,
    fontWeight: '300',
  },

  specialOfferContainer: {
    paddingHorizontal: 28,
    paddingVertical: 24,
    backgroundColor: Colors.darkBlue,
    borderRadius: 30,
    minHeight: 140,
  },

  specialOfferTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specialOfferPercentage: {
    color: Colors.white,
    fontSize: 48,
    fontWeight: '500',
  },

  buttonContainer: {
    height: 35,
    paddingHorizontal: 14,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  specialOfferTitle: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 17,
  },
  specialOfferDescription: {
    color: Colors.white,
    opacity: 0.7,
    fontSize: 15,
    marginTop: 8,
  },
});
