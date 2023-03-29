import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {ScreenHeaderBg, ScreenHeaderText, SectionHeader} from '../components';
import BookingCard from './bookings/bookingCard';
import {Calendar} from 'react-native-calendars';
import {Colors} from '../constants';
import {useAppContext} from '../context';

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
    status: 'upcoming',
  },
];

export default function CalendarView() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.wrapper}>
      <ScreenHeaderBg>
        <ScreenHeaderText title="Calendar" />
      </ScreenHeaderBg>

      <View style={styles.main}>
        <FlatList
          contentContainerStyle={styles.flatlist}
          data={MY_BOOKINGS}
          ListHeaderComponent={() => (
            <>
              <View style={styles.calendarContainer}>
                <Calendar
                  // Collection of dates that have to be marked. Default = {}
                  style={styles.calendar}
                  theme={{
                    arrowColor: Colors.blue,
                    dotColor: 'red',
                    indicatorColor: Colors.blue,
                    todayTextColor: Colors.blue,
                    textMonthFontWeight: '600',
                    textDayFontSize: 14,
                  }}
                  markedDates={{
                    '2023-03-16': {
                      selected: true,
                      // marked: true,
                      selectedColor: Colors.blue,
                    },
                    '2023-03-17': {marked: true, dotColor: Colors.blue},
                    '2023-03-18': {marked: true, dotColor: Colors.blue},
                  }}
                />
              </View>
              <SectionHeader
                withPaddingHorizontal={false}
                title="Booked Services"
              />
            </>
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.flatlistSeparator} />
          )}
          renderItem={({item}) => <BookingCard data={item} />}
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
    calendarContainer: {
      marginBottom: 24,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.2,
      elevation: 3,
    },
    calendar: {
      borderRadius: 24,
      overflow: 'hidden',
      // borderColor: '#333',
      // borderWidth: theme === 'dark' ? 1 : 0,
    },
    flatlist: {
      paddingHorizontal: 32,
      paddingBottom: 30,
    },
    flatlistSeparator: {
      height: 16,
    },
  });