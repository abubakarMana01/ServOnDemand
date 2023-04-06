import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import HomeHeader from './components/homeHeader';
import Categories from './components/categories';
import MostPopular from './components/mostPopular';
import {SectionHeader} from '../../components';
import MostBookedServices from './components/mostBookedServices';

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <HomeHeader />

      <ScrollView bounces={false}>
        <View style={styles.mainContainer}>
          {/* <View style={styles.section}>
            <SectionHeader title="Special Offers" />
            <SpecialOffer />
          </View> */}

          <View style={styles.section}>
            <SectionHeader title="Categories" />
            <Categories />
          </View>

          <View style={styles.section}>
            <SectionHeader title="Most booked services" />
            {/* <Categories /> */}
            <MostBookedServices />
          </View>

          <View style={styles.section}>
            <SectionHeader title="Most Popular" />
            <MostPopular />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  mainContainer: {
    paddingBottom: 32,
  },
  section: {
    marginTop: 34,
  },
});
