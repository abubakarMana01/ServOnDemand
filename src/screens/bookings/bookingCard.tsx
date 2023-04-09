import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../constants';
import {useAppContext} from '../../context';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {ROUTES} from '../../navigation';

interface IBookingCard {
  data: any;
  showDropdown?: boolean;
}

export default function BookingCard({
  data,
  showDropdown = false,
}: IBookingCard) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          source={require('../../assets/bookings/booking1.png')}
          style={styles.image}
        />

        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.date}>{data.date.toLocaleDateString()}</Text>

          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  data.status === 'completed'
                    ? styles.completedStatus.backgroundColor
                    : data.status === 'cancelled'
                    ? styles.cancelledStatus.backgroundColor
                    : styles.upcomingStatus.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.statusText,
                {
                  color:
                    data.status === 'completed'
                      ? styles.completedStatus.color
                      : data.status === 'cancelled'
                      ? styles.cancelledStatus.color
                      : styles.upcomingStatus.color,
                },
              ]}>
              {data.status}
            </Text>
          </View>
        </View>
      </View>

      {showDropdown && (
        <Pressable
          onPress={() => navigation.navigate(ROUTES.ABOUT_BOOKING)}
          style={styles.dropArea}>
          <MaterialCommunityIcons
            name="chevron-down"
            color={theme === 'dark' ? Colors.white : Colors.black}
            size={24}
          />
        </Pressable>
      )}
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    container: {
      // backgroundColor: theme === 'dark' ? #121212 : Colors.white,
      backgroundColor: theme === 'dark' ? Colors.dark : Colors.white,
      borderRadius: 16,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.2,
      borderColor: '#333',
      elevation: 3,
      borderWidth: theme === 'dark' ? 1 : 0,
    },
    infoContainer: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 12,
      marginRight: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    date: {
      marginTop: 3,
      marginBottom: 10,
      color: theme === 'dark' ? Colors.white : Colors.black,
      opacity: 0.7,
      fontSize: 12,
    },
    statusContainer: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: 8,
    },
    statusText: {
      textTransform: 'capitalize',
    },
    upcomingStatus: {
      backgroundColor: theme === 'dark' ? '#1343ED' : '#1343ED30',
      color: theme === 'dark' ? Colors.lightGrey : '#1343ED',
    },
    completedStatus: {
      backgroundColor: theme === 'dark' ? '#00A660' : '#00A66030',
      color: theme === 'dark' ? Colors.lightGrey : '#00A660',
    },
    cancelledStatus: {
      backgroundColor: theme === 'dark' ? '#ED1313' : '#ED131320',
      color: theme === 'dark' ? Colors.lightGrey : '#ED1313',
    },
    dropArea: {
      borderTopWidth: 1,
      borderColor: theme === 'dark' ? '#333' : Colors.lightGrey,
      padding: 8,
      alignItems: 'center',
    },
  });
