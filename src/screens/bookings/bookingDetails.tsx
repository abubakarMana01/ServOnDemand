import {
  Dimensions,
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
import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function BookingDetails() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();

  const {service} = route.params as {service: IService};
  console.log(route.params);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && (
          <StatusBar
            barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          />
        )}

        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: service.picture,
          }}>
          <SafeAreaView style={{marginLeft: 16, marginTop: 16}}>
            <GoBackButton />
          </SafeAreaView>
        </ImageBackground>

        <View style={styles.main}>
          <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
            <View style={styles.detailsTop}>
              <View style={{flex: 1}}>
                <Text style={styles.title} numberOfLines={2}>
                  {service.title}
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

            <View>
              <Text style={styles.descriptionTitle}>About Service</Text>
              <Text style={styles.descriptionText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet quam laborum ab quis nam. Reprehenderit, pariatur ipsa
                voluptatum vel id error voluptatem iste.
              </Text>
            </View>
          </ScrollView>

          <AppButton
            title="Write a review"
            onPress={() => navigation.navigate(ROUTES.WRITE_BOOKING_REVIEW)}
            full
            customStyles={{marginTop: 8}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: Dimensions.get('window').height < 700 ? 0.5 : 0.6,
      backgroundColor: theme === 'dark' ? Colors.darkGrey : Colors.lightGrey,
    },
    main: {
      flex: Dimensions.get('window').height < 700 ? 0.5 : 0.4,
      padding: 16,
      paddingTop: 0,
    },
    detailsTop: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingTop: 16,
    },
    separator: {
      paddingVertical: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
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
      color: theme === 'dark' ? Colors.grey : Colors.darkGrey,
    },
    descriptionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    descriptionText: {
      color: theme === 'dark' ? Colors.grey : Colors.darkGrey,
      marginTop: 8,
      paddingBottom: 12,
    },
  });
