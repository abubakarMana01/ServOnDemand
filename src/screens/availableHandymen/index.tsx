import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppContext} from '../../context';
import {Colors} from '../../constants';
import HandymanItem from './components/handymanItem';
import {Divider} from '../../components';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const AvailableHandymen = () => {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});
  const navigation = useNavigation();
  const {params} = useRoute<
    RouteProp<ParamListBase> & {params: {title: string}}
  >();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: params?.title,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Divider
              color={theme === 'dark' ? Colors.lightGrey : Colors.grey + '50'}
            />
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
      paddingVertical: 12,
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
