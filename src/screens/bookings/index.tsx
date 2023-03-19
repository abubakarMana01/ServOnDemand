import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenHeaderBg} from '../../components';
import {Colors} from '../../constants';
import BookingCard from './bookingCard';
import {useAppContext} from '../../context';

const MY_BOOKINGS = [
  {
    id: '1',
    title: 'Carpenter',
    date: new Date(),
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Painting',
    date: new Date(),
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Laundry',
    date: new Date(),
    status: 'completed',
  },
  {
    id: '5',
    title: 'A/C Repair',
    date: new Date(),
    status: 'cancelled',
  },
  {
    id: '6',
    title: 'Painting',
    date: new Date(),
    status: 'completed',
  },
  {
    id: '7',
    title: 'Mechanic',
    date: new Date(),
    status: 'upcoming',
  },
];

export default function Bookings() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.wrapper}>
      <ScreenHeaderBg>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Bookings</Text>
        </View>
      </ScreenHeaderBg>

      <View style={styles.main}>
        <FlatList
          style={styles.flatlist}
          data={MY_BOOKINGS}
          ItemSeparatorComponent={() => (
            <View style={styles.flatlistSeparator} />
          )}
          renderItem={({item}) => <BookingCard data={item} />}
        />
      </View>
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#121212' : 'transparent',
    },
    header: {
      paddingTop: 24,
      paddingBottom: 40,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: '600',
      color: Colors.white,
    },
    main: {
      marginTop: -35,
      flex: 1,
    },
    flatlist: {
      paddingHorizontal: 32,
      paddingBottom: 50,
    },
    flatlistSeparator: {
      height: 10,
    },
  });
