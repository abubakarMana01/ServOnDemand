import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import HomeHeader from './components/homeHeader';
import MostPopular from './components/mostPopular';
import {SectionHeader} from '../../components';
import MostBookedServices from './components/mostBookedServices';
import NewAndNoteWorthy from './components/newAndNoteworthy';

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <HomeHeader />

      <ScrollView bounces={true}>
        <View style={styles.mainContainer}>
          {/* <View style={[styles.section, {marginTop: 20}]}>
            <SectionHeader title="Categories" />
            <Categories />
          </View> */}

          <View style={[styles.section, styles.sectionMinMarginTop]}>
            <SectionHeader title="Most Popular" />
            <MostPopular />
          </View>

          {/* <View style={[styles.section, styles.sectionMinMarginTop]}>
            <SectionHeader title="Special Offers" />
            <SpecialOffer />
          </View> */}

          <View style={styles.section}>
            <SectionHeader title="Most booked services" />
            <MostBookedServices />
          </View>

          <View style={styles.section}>
            <SectionHeader title="New and Noteworthy" />
            <NewAndNoteWorthy />
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
    marginTop: 40,
  },
  sectionMinMarginTop: {
    marginTop: 30,
  },
});
