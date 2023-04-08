import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../context';
import {Colors} from '../../constants';
import HandymanItem from './components/handymanItem';
import {Divider} from '../../components';

const AvailableHandymen = () => {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? Colors.dark : Colors.white}
      />
      <FlatList
        contentContainerStyle={styles.flatList}
        ItemSeparatorComponent={() => (
          <View style={styles.separator}>
            <Divider color="#d7d7d7c2" />
          </View>
        )}
        data={AVAILABLE_HANDYMEN}
        renderItem={({item}) => <HandymanItem data={item} />}
      />
    </View>
  );
};

export default AvailableHandymen;

const styleSheet = ({}: IStyleSheet) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    flatList: {
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    separator: {
      paddingVertical: 14,
    },
  });

const AVAILABLE_HANDYMEN = [
  {
    id: '1',
    name: 'Aliyu Idris',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '2',
    name: 'Innocent Collins',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '3',
    name: 'Abayomi Akinsola',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '4',
    name: 'Idrissa Gana Gueye',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '5',
    name: 'Faruq Musa',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '6',
    name: 'Tammy Abraham',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '7',
    name: 'Mohammed Ahmed',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '8',
    name: 'John the Baptist',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '9',
    name: 'Oyelowo Moses',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '10',
    name: 'Chinedu Victor',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '11',
    name: 'Chidubem Isaac',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
  {
    id: '12',
    name: 'Christopher Michael',
    rating: 4.7,
    reviewsCount: 123,
    picture: 'https://source.unsplash.com/random/100x100/?$avatar',
  },
];
