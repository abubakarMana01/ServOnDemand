import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../../context';
import ServiceCard from './serviceCard';

const MostBookedServices = () => {
  const {theme} = useAppContext();
  const styles = stylesheet({theme});

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {MOST_BOOKED_SERVICES.map((service, index) => (
          <ServiceCard
            bonus={{category: 'most booked', text: '17% off'}}
            key={service.id}
            service={service}
            isFirst={!index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MostBookedServices;

const stylesheet = ({}: IStyleSheet) =>
  StyleSheet.create({
    container: {},
  });

const MOST_BOOKED_SERVICES = [
  {
    id: '1',
    title: 'AC Service and Repairs',
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
