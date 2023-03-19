import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenHeaderBg} from '../components';
import {Colors} from '../constants';

export default function Bookings() {
  return (
    <View>
      <ScreenHeaderBg>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Bookings</Text>
        </View>
      </ScreenHeaderBg>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.white,
  },
});
