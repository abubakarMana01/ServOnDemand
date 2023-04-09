import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../context';
import {Colors} from '../../constants';
import ReviewsHeader from './components/reviewsHeader';
import {Divider} from '../../components';
import ReviewCard from './components/reviewCard';

export default function HandymanReviews() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
      ListHeaderComponent={() => (
        <>
          <ReviewsHeader />

          <View style={styles.separator}>
            <Divider
              color={theme === 'dark' ? Colors.lightGrey : Colors.grey + '70'}
            />
          </View>
        </>
      )}
      ItemSeparatorComponent={() => <View style={{height: 32}} />}
      data={REVIEWS_DATA}
      renderItem={({item}) => <ReviewCard data={item} />}
    />
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
    separator: {
      marginVertical: 24,
    },
    scrollView: {
      padding: 16,
    },
  });

const REVIEWS_DATA = [
  {
    id: '1',
    author: 'Joan Perkins',
    rating: '4.5',
    date: '1 day ago',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam dolor non, ipsum obcaecati autem sunt eius in, commodi natus eligendi magnam minus. Sapiente dicta eligendi aut recusanda.',
  },
  {
    id: '2',
    author: 'Frank Garrett',
    rating: '5.0',
    date: '2 days ago',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam dolor non, ipsum obcaecati autem sunt eius in, commodi natus eligendi magnam minus. Sapiente dicta eligendi aut recusandae, magnitude.',
  },
  {
    id: '3',
    author: 'Randy Palmer',
    rating: '3.0',
    date: '3 days ago',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam dolor non, ipsum obcaecati autem sunt eius in, commodi natus eligendi magnam minus. Sapiente dicta fapiente dicta eligendi aut recusandae.',
  },
  {
    id: '4',
    author: 'Randy Palmer',
    rating: '3.0',
    date: '3 days ago',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam dolor non, ipsum obcaecati autem sunt eius in, commodi natus eligendi magnam minus. Sapiente dicta fapiente dicta eligendi aut recusandae.',
  },
];
