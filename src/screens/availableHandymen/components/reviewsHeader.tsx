import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../../context';
import {Colors} from '../../../constants';
import StarRating from 'react-native-star-rating-widget';

export default function ReviewsHeader() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View>
      <View style={styles.reviewBasicInfo}>
        <Text style={styles.overallRating}>4.0</Text>
        <StarRating
          color="#ffb700"
          rating={4}
          animationConfig={{scale: 1}}
          starStyle={styles.starStyle}
          starSize={30}
          onChange={() => {}}
        />
        <Text style={styles.overallCount}>based on 23 reviews</Text>
      </View>
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    reviewBasicInfo: {
      alignItems: 'center',
    },
    overallRating: {
      fontSize: 56,
      fontWeight: '700',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    overallCount: {
      color: theme === 'dark' ? Colors.grey : Colors.darkGrey,
      marginTop: 4,
    },
    starStyle: {
      marginHorizontal: 1,
    },
  });
