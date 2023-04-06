import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Divider, GoBackButton} from '../components';
import {Colors} from '../constants';
import {useAppContext} from '../context';

export default function Details() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/details/painting.png')}
        style={styles.imageBackground}
        resizeMode="cover">
        <SafeAreaView style={{marginLeft: 16}}>
          <GoBackButton />
        </SafeAreaView>
      </ImageBackground>

      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Painting</Text>

          <View style={styles.infoContainer}>
            <Image
              source={require('../assets/user2.png')}
              resizeMode="cover"
              style={styles.userImg}
            />

            <View>
              <Text style={styles.username}>Ogunmekpon Johnson</Text>
              <View style={styles.userRatingContainer}>
                <MaterialCommunityIcons name="star" color="#E38902" size={18} />
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
              ₦3000 <Text style={styles.perHour}>/hr</Text>
            </Text>
          </View>

          <View style={styles.dividerContainer}>
            <Divider />
          </View>

          <View>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              quam laborum ab quis nam. Reprehenderit, pariatur ipsa voluptatum
              vel id error voluptatem iste.{'\n'}Aperiam ab, facilis autem quam
              quia nesciunt quam laborum ab quis nam. Reprehenderit, pariatur
              ipsa voluptatum vel id error voluptatem iste. Aperiam ab, facilis
              autem quam quia nesciunt.
            </Text>
          </View>
        </View>
      </ScrollView>
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
      height: 260,
      // paddingTop: Platform.OS === 'android' ? 16 : 0,
      paddingTop: 16,
    },
    main: {
      padding: 16,
    },
    title: {
      fontSize: 32,
      fontWeight: '600',
      marginTop: 16,
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
      paddingVertical: 35,
    },

    descriptionTitle: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 16,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    descriptionText: {
      fontSize: 16,
      color: theme === 'dark' ? Colors.white : Colors.black,
      opacity: 0.6,
    },
  });
