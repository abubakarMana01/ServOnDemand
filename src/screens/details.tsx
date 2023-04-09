import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppButton, Divider, GoBackButton} from '../components';
import {Colors} from '../constants';
import {useAppContext} from '../context';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ROUTES} from '../navigation';

export default function Details() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.dark} />

      <ImageBackground
        source={require('../assets/details/painting.png')}
        style={styles.imageBackground}
        resizeMode="cover">
        <SafeAreaView style={{marginLeft: 16}}>
          <GoBackButton />
        </SafeAreaView>
      </ImageBackground>

      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.header}>
              <Text style={styles.title}>Painting</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.HANDYMAN_REVIEWS)}>
                <Text style={styles.reviewsButton}>View reviews</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
              <Image
                source={require('../assets/user2.png')}
                resizeMode="cover"
                style={styles.userImg}
              />

              <View>
                <Text style={styles.username}>Ogunmekpon Johnson</Text>
                <View style={styles.userRatingContainer}>
                  <MaterialCommunityIcons
                    name="star"
                    color="#E38902"
                    size={18}
                  />
                  <Text style={styles.ratingText}>
                    4.8 / <Text style={styles.ratingCount}>(128 reviews)</Text>
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.infoIconContainer}>
                <Ionicons
                  name="location-outline"
                  size={24}
                  color={Colors.darkGrey}
                />
              </View>

              <Text style={styles.location}>Nile Street, Maitama, Abuja</Text>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.infoIconContainer}>
                <Ionicons
                  name="pricetag-outline"
                  size={20}
                  color={Colors.darkGrey}
                />
              </View>

              <Text style={styles.price}>
                ₦3000<Text style={styles.perHour}>/hr</Text>
              </Text>
            </View>

            <View style={styles.dividerContainer}>
              <Divider
                color={theme === 'dark' ? Colors.lightGrey : Colors.grey + '70'}
              />
            </View>

            <View>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet quam laborum ab quis nam. Reprehenderit, pariatur ipsa
                voluptatum vel id error voluptatem iste.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <SafeAreaView>
        <Divider
          color={theme === 'dark' ? Colors.lightGrey : Colors.grey + '70'}
        />
        <View style={styles.actionButtonsContainer}>
          <View style={styles.actionButton}>
            <AppButton
              title="Contact"
              onPress={() => {}}
              full
              customStyles={styles.messageButton}
              customTextStyles={styles.messageButtonText}
            />
          </View>
          <View style={styles.actionButton}>
            <AppButton title="Book now" onPress={() => {}} full />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      width: '100%',
      height: Dimensions.get('window').height / 3.5,
      maxHeight: 260,
      paddingTop: 16,
      overflow: 'hidden',
      backgroundColor: theme === 'dark' ? Colors.darkGrey : Colors.lightGrey,
    },
    main: {
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    reviewsButton: {
      color: theme === 'dark' ? Colors.blue : Colors.darkBlue,
      fontWeight: '500',
    },
    title: {
      fontSize: 32,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    infoContainer: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    userImg: {
      width: 43,
      height: 43,
      borderRadius: 21.5,
      marginRight: 10,
    },
    username: {
      fontWeight: '600',
      fontSize: 18,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    userRatingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 3,
    },
    ratingText: {
      marginLeft: 4,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    ratingCount: {
      color: Colors.darkGrey,
    },
    infoIconContainer: {
      backgroundColor: Colors.lightGrey,
      width: 43,
      height: 43,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    location: {
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    price: {
      fontSize: 32,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    perHour: {
      fontSize: 14,
      color: Colors.darkGrey,
    },
    dividerContainer: {
      paddingVertical: 25,
    },

    descriptionTitle: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 8,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    descriptionText: {
      color: theme === 'dark' ? Colors.white : Colors.black,
      opacity: 0.6,
    },

    actionButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom:
        Platform.OS === 'android'
          ? 12
          : Dimensions.get('window').height < 700
          ? 12
          : 0,
    },
    actionButton: {
      flex: 0.47,
    },
    messageButton: {
      backgroundColor: '#d8e2ff',
    },
    messageButtonText: {
      color: Colors.darkBlue,
    },
  });
