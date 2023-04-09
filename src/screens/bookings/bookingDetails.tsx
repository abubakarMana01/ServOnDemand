import {
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useAppContext} from '../../context';
import {Colors} from '../../constants';
import {AppButton, Divider, GoBackButton} from '../../components';
import {ROUTES} from '../../navigation';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function BookingDetails() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: 'https://images.pexels.com/photos/5217124/pexels-photo-5217124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}>
        <SafeAreaView style={{marginLeft: 16, marginTop: 16}}>
          <GoBackButton />
        </SafeAreaView>
      </ImageBackground>

      <SafeAreaView style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.detailsTop}>
            <View style={{flex: 1}}>
              <Text style={styles.title} numberOfLines={2}>
                Haircut for Men
              </Text>
              <Text style={styles.handymanName}>Michael Charles</Text>
            </View>
            <Text style={styles.price}>
              ₦3000<Text style={styles.perHour}>/hr</Text>
            </Text>
          </View>

          <View style={styles.separator}>
            <Divider
              color={theme === 'dark' ? Colors.lightGrey : Colors.grey + '70'}
            />
          </View>

          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <Text style={styles.descriptionTitle}>About Service</Text>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              quam laborum ab quis nam. Reprehenderit, pariatur ipsa voluptatum
              vel id error voluptatem iste.
            </Text>
          </ScrollView>

          <AppButton
            title="Write a Review"
            onPress={() => navigation.navigate(ROUTES.WRITE_BOOKING_REVIEW)}
            full
          />
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
      flex: 0.6,
      backgroundColor: theme === 'dark' ? Colors.darkGrey : Colors.lightGrey,
    },
    wrapper: {
      flex: 0.4,
    },
    main: {
      flex: 1,
      padding: 16,
    },
    detailsTop: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    separator: {
      paddingVertical: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    handymanName: {
      fontSize: 16,
      marginTop: 2,
      color: theme === 'dark' ? Colors.grey : Colors.darkGrey,
    },
    price: {
      fontSize: 30,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.blue : Colors.darkBlue,
    },
    perHour: {
      fontSize: 14,
      color: Colors.darkGrey,
    },
    descriptionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    descriptionText: {
      color: theme === 'dark' ? Colors.grey : Colors.darkGrey,
      marginTop: 8,
    },
  });
