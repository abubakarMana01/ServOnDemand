import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {ScreenHeaderBg, ScreenHeaderText} from '../../components';
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
        <ScreenHeaderText title="My Bookings" />
      </ScreenHeaderBg>

      <View style={styles.main}>
        <FlatList
          contentContainerStyle={styles.flatlist}
          data={MY_BOOKINGS}
          ItemSeparatorComponent={() => (
            <View style={styles.flatlistSeparator} />
          )}
          renderItem={({item}) => <BookingCard data={item} showDropdown />}
        />
      </View>
    </View>
  );
}

const styleSheet = ({}: IStyleSheet) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    main: {
      marginTop: -35,
      flex: 1,
    },
    flatlist: {
      paddingHorizontal: 24,
      paddingBottom: 30,
    },
    flatlistSeparator: {
      height: 16,
    },
  });
