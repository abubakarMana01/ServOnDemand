import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import HomeHeader from './components/homeHeader';
import MostPopular from './components/mostPopular';
import {SectionHeader} from '../../components';
import MostBookedServices from './components/mostBookedServices';
import BookAService from './components/bookAService';
import {useQuery} from '@tanstack/react-query';
import {getAllServices} from '../../utils/apiRequests';
import {useAppContext} from '../../context';
import {Colors} from '../../constants';

export default function Home() {
  const {token, theme} = useAppContext();

  const {data, status} = useQuery({
    queryKey: ['allServices'],
    queryFn: () => getAllServices(token),
  });

  return (
    <View style={styles.wrapper}>
      <HomeHeader />

      {status === 'loading' && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size={50}
            color={theme === 'dark' ? Colors.blue : Colors.darkBlue}
          />
        </View>
      )}

      {status === 'success' && (
        <View style={styles.scrollViewContainer}>
          <ScrollView bounces={true}>
            <View style={styles.mainContainer}>
              {/* <View style={[styles.section, {marginTop: 20}]}>
            <SectionHeader title="Categories" />
            <Categories />
          </View> */}

              {/* <View style={[styles.section, styles.sectionMinMarginTop]}>
              <SectionHeader title="Special Offers" />
              <SpecialOffer />
            </View> */}

              <View style={[styles.section, styles.sectionMinMarginTop]}>
                <SectionHeader title="Most Popular" />
                <MostPopular />
              </View>

              <View style={styles.section}>
                <SectionHeader title="Most booked services" />
                <MostBookedServices data={data} />
              </View>

              <View style={styles.section}>
                <SectionHeader title="Book a Service" />
                <BookAService data={data} />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: -40,
  },
  mainContainer: {
    paddingBottom: 32,
    paddingTop: 40,
  },
  section: {
    marginTop: 40,
  },
  sectionMinMarginTop: {
    marginTop: 30,
  },
});
