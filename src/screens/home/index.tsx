import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useAppContext} from '../../context';
import {ScreenHeaderBg} from '../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Home() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.wrapper}>
      <ScreenHeaderBg>
        <View style={styles.headerUser}>
          <Image
            source={require('../../assets/user.png')}
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

      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.section}>
            <View style={[styles.sectionTitleContainer, styles.marginInline]}>
              <Text style={styles.sectionTitle}>Special Offers</Text>

              <Text style={styles.sectionRightActionText}>See all</Text>
            </View>

            <LinearGradient
              colors={['#1C1C25', '#5D4FB9']}
              style={[styles.specialOfferContainer, styles.marginInline]}
              start={{x: 0.2, y: 0}}
              end={{x: 1, y: 0.8}}>
              {/* <View style={[styles.specialOfferContainer, styles.marginInline]}> */}
              <View style={styles.specialOfferTop}>
                <Text style={styles.specialOfferPercentage}>30%</Text>

                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Explore offer</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.specialOfferTitle}>Todays Special!</Text>
              <Text style={styles.specialOfferDescription}>
                Get a discount for every order today
              </Text>
              {/* </View> */}
            </LinearGradient>
          </View>

          <View style={styles.section}>
            <View style={[styles.sectionTitleContainer, styles.marginInline]}>
              <Text style={styles.sectionTitle}>Categories</Text>

              <Text style={styles.sectionRightActionText}>See all</Text>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Pressable
                  onPress={() => navigation.navigate('Details')}
                  style={[
                    styles.categoryCard,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {backgroundColor: '#FAC3E2', ...styles.marginInline},
                  ]}>
                  <MaterialCommunityIcons
                    name="broom"
                    size={45}
                    color={Colors.dark}
                  />
                  <Text style={styles.categoryText}>Cleaning</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate('Details')}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    ...styles.categoryCard,
                    backgroundColor: '#D4D1FE',
                  }}>
                  <Entypo name="tools" size={45} color={Colors.dark} />
                  <Text style={styles.categoryText}>Repairs</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate('Details')}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    ...styles.categoryCard,
                    backgroundColor: '#FFEAC9',
                  }}>
                  <MaterialCommunityIcons
                    name="format-paint"
                    size={45}
                    color={Colors.dark}
                  />
                  <Text style={styles.categoryText}>Painting</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate('Details')}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={[styles.categoryCard, {backgroundColor: '#E9E9F6'}]}>
                  <MaterialCommunityIcons
                    name="washing-machine"
                    size={45}
                    color={Colors.dark}
                  />
                  <Text style={styles.categoryText}>Laundry</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate('Details')}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={[styles.categoryCard, {backgroundColor: '#FAC3E2'}]}>
                  <MaterialIcons
                    name="car-repair"
                    size={45}
                    color={Colors.dark}
                  />
                  <Text style={styles.categoryText}>Mechanic</Text>
                </Pressable>
              </ScrollView>
            </View>
          </View>

          <View style={styles.section}>
            <View style={[styles.sectionTitleContainer, styles.marginInline]}>
              <Text style={styles.sectionTitle}>Most Popular</Text>

              <Text style={styles.sectionRightActionText}>See all</Text>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 24,
                    paddingVertical: 8,
                    borderRadius: 8,
                    ...styles.marginInline,
                    marginRight: 10,
                    backgroundColor: Colors.blue,
                  }}>
                  <Text style={{color: Colors.white, fontSize: 16}}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popularItemContainer}>
                  <Text style={styles.popularItemText}>Cleaning</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popularItemContainer}>
                  <Text style={styles.popularItemText}>Repairing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popularItemContainer}>
                  <Text style={styles.popularItemText}>Painting</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popularItemContainer}>
                  <Text style={styles.popularItemText}>Laundry</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

interface IStyleSheet {
  theme: IAppContext['theme'];
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
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

    mainContainer: {
      paddingBottom: 16,
    },

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
      color: theme === 'dark' ? Colors.white : Colors.dark,
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

    categoryCard: {
      width: 93,
      height: 120,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    categoryText: {
      textAlign: 'center',
      marginTop: 5,
    },

    popularItemContainer: {
      paddingHorizontal: 24,
      paddingVertical: 8,
      borderRadius: 8,
      marginRight: 10,
      borderWidth: 1,
      borderColor: Colors.grey,
    },
    popularItemText: {
      fontSize: 16,
      color: theme === 'dark' ? Colors.white : Colors.dark,
    },
  });
