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
      'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    title: 'Painter',
    image:
      'https://images.pexels.com/photos/7218029/pexels-photo-7218029.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    title: 'Plumber',
    image:
      'https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    title: 'Electrician',
    image:
      'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    title: 'Haircut for men',
    image:
      'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
