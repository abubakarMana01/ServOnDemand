/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useAppContext} from '../../../context';
import {Colors} from '../../../constants';

const MostBookedServices = () => {
  const {theme} = useAppContext();
  const styles = stylesheet({theme});

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* <View style={styles.card}>
          <Pressable>
            <Image style={styles.image} />
          </Pressable>
          <Text style={styles.cardText}>AC Service and Repair</Text>
        </View> */}
        {MOST_BOOKED_SERVICES.map((service, index) => (
          <View
            key={service.id}
            style={[
              styles.card,
              {
                marginRight: 16,
                marginLeft: !index ? 16 : 0,
              },
            ]}>
            <Pressable>
              <Image source={{uri: service.image}} style={styles.image} />
            </Pressable>
            <Text numberOfLines={2} style={styles.cardText}>
              {service.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MostBookedServices;

const stylesheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    marginInline: {
      marginHorizontal: 16,
    },
    card: {
      width: 100,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      backgroundColor: '#eee',
    },
    cardText: {
      marginTop: 8,
      color: theme === 'dark' ? Colors.white : Colors.dark,
    },
  });

const MOST_BOOKED_SERVICES = [
  {
    id: '1',
    title: 'AC Service and Repair',
    image:
      'https://images.unsplash.com/photo-1558919047-80f932b017cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWMlMjByZXBhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    title: 'Security Camera installation',
    image:
      'https://images.unsplash.com/photo-1676630656246-3047520adfdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2058&q=80',
  },
  {
    id: '3',
    title: 'Water Purifier',
    image:
      'https://images.unsplash.com/photo-1629969337555-e384ed2d1439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXIlMjBwdXJpZmllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '4',
    title: 'Computer Repair',
    image:
      'https://images.unsplash.com/photo-1591238372338-22d30c883a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];
