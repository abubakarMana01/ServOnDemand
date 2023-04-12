import {FlatList, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {ScreenHeaderBg, ScreenHeaderText} from '../../components';
import BookingCard from './bookingCard';
import {useAppContext} from '../../context';
import {useQuery} from '@tanstack/react-query';
import {getAllBookings} from '../../utils/apiRequests';

export default function Bookings() {
  const {theme, token} = useAppContext();
  const styles = styleSheet({theme});

  const {data: bookings, status} = useQuery({
    queryKey: ['allBookings'],
    queryFn: () => getAllBookings(token),
  });

  return (
    <View style={styles.wrapper}>
      <ScreenHeaderBg>
        <ScreenHeaderText title="My Bookings" />
      </ScreenHeaderBg>

      {status === 'loading' && <Text style={{marginTop: 50}}>Loading...</Text>}

      {status === 'success' && (
        <View style={styles.main}>
          <FlatList
            contentContainerStyle={styles.flatlist}
            data={bookings}
            ItemSeparatorComponent={() => (
              <View style={styles.flatlistSeparator} />
            )}
            renderItem={({item}) => <BookingCard data={item} showDropdown />}
          />
        </View>
      )}
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
