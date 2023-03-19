import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useAppContext} from '../../context';
import HomeHeader from './components/homeHeader';
import Categories from './components/categories';
import MostPopular from './components/mostPopular';

export default function Home() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.wrapper}>
      <HomeHeader />

      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.section}>
            <View style={[styles.sectionTitleContainer, styles.marginInline]}>
              <Text style={styles.sectionTitle}>Special Offers</Text>

              <Text style={styles.sectionRightActionText}>See all</Text>
            </View>

            <LinearGradient
              colors={['#1C1C25', '#5D4FB9']}
              style={[styles.specialOfferContainer, styles.marginInline]}
              start={{x: 0.2, y: 0}}
              end={{x: 1, y: 0.8}}>
              {/* <View style={[styles.specialOfferContainer, styles.marginInline]}> */}
              <View style={styles.specialOfferTop}>
                <Text style={styles.specialOfferPercentage}>30%</Text>

                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Explore offer</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.specialOfferTitle}>Todays Special!</Text>
              <Text style={styles.specialOfferDescription}>
                Get a discount for every order today
              </Text>
              {/* </View> */}
            </LinearGradient>
          </View>

          <View style={styles.section}>
            <View style={[styles.sectionTitleContainer, styles.marginInline]}>
              <Text style={styles.sectionTitle}>Categories</Text>

              <Text style={styles.sectionRightActionText}>See all</Text>
            </View>

            <Categories />
          </View>

          <View style={styles.section}>
            <View style={[styles.sectionTitleContainer, styles.marginInline]}>
              <Text style={styles.sectionTitle}>Most Popular</Text>

              <Text style={styles.sectionRightActionText}>See all</Text>
            </View>

            <MostPopular />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },

    mainContainer: {
      paddingBottom: 32,
    },

    marginInline: {
      marginHorizontal: 16,
    },

    section: {
      marginTop: 34,
    },
    sectionTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.dark,
    },
    sectionRightActionText: {
      color: Colors.blue,
      fontWeight: '300',
    },

    specialOfferContainer: {
      paddingHorizontal: 28,
      paddingVertical: 24,
      backgroundColor: Colors.darkBlue,
      borderRadius: 30,
      minHeight: 140,
    },

    specialOfferTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    specialOfferPercentage: {
      color: Colors.white,
      fontSize: 48,
      fontWeight: '500',
    },

    buttonContainer: {
      height: 35,
      paddingHorizontal: 14,
      backgroundColor: Colors.blue,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 15,
      fontWeight: '600',
    },
    specialOfferTitle: {
      marginTop: 10,
      color: Colors.white,
      fontSize: 17,
    },
    specialOfferDescription: {
      color: Colors.white,
      opacity: 0.7,
      fontSize: 15,
      marginTop: 8,
    },
  });
