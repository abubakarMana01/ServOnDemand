import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating-widget';
import {useAppContext} from '../../../context';
import {Colors} from '../../../constants';

export default function ReviewCard({data}: {data: any}) {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require('../../../assets/user2.png')}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{data.author}</Text>
          <View style={styles.infoFlex}>
            <StarRating
              color="#ffb700"
              rating={+data.rating}
              animationConfig={{scale: 1}}
              starStyle={styles.starStyle}
              starSize={18}
              onChange={rating => {
                console.log(rating);
              }}
            />
            <Text style={styles.rating}>{data.rating}</Text>

            <Text style={styles.time}>{data.date}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.reviewText}>{data.review}</Text>
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    container: {},
    userInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userInfo: {
      flex: 1,
    },
    username: {
      fontSize: 16,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    infoFlex: {
      marginTop: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 45,
      height: 45,
      borderRadius: 22.5,
      marginRight: 16,
    },
    starStyle: {
      marginHorizontal: -1,
    },
    rating: {
      fontWeight: '500',
      marginLeft: 8,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    time: {
      marginLeft: 'auto',
      color: theme === 'dark' ? Colors.grey : Colors.darkGrey,
    },
    reviewText: {
      marginTop: 8,
      color: theme === 'dark' ? Colors.grey : Colors.darkGrey,
    },
  });
