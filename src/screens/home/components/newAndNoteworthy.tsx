import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../../context';
import ServiceCard from './serviceCard';

const NewAndNoteWorthy = () => {
  const {theme} = useAppContext();
  const styles = stylesheet({theme});

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row'}}>
            {NEW_AND_NOTEWORTHY_SERVICES_ROW_1.map((service, index) => (
              <ServiceCard
                bonus={{category: 'new', text: 'New'}}
                key={service.id}
                service={service}
                isFirst={!index}
              />
            ))}
          </View>

          <View style={{flexDirection: 'row', marginTop: 16}}>
            {NEW_AND_NOTEWORTHY_SERVICES_ROW_2.map((service, index) => (
              <ServiceCard
                bonus={{category: 'new', text: 'New'}}
                key={service.id}
                service={service}
                isFirst={!index}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewAndNoteWorthy;

const stylesheet = ({}: IStyleSheet) =>
  StyleSheet.create({
    container: {},
  });

const NEW_AND_NOTEWORTHY_SERVICES_ROW_1 = [
  {
    id: '1',
    title: 'Furniture Assembly',
    image:
      'https://images.pexels.com/photos/5217124/pexels-photo-5217124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Henna Artist',
    image:
      'https://images.pexels.com/photos/2678412/pexels-photo-2678412.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    title: 'Laptop repair',
    image:
      'https://images.pexels.com/photos/10562464/pexels-photo-10562464.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    title: 'Women Hair Dressing',
    image:
      'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    title: 'Manicure & Pedicure',
    image:
      'https://images.pexels.com/photos/14267567/pexels-photo-14267567.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    title: 'Haircut for men',
    image:
      'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '7',
    title: 'Concrete Flooring',
    image:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const NEW_AND_NOTEWORTHY_SERVICES_ROW_2 = [
  {
    id: '1',
    title: 'Car Mechanic',
    image:
      'https://images.pexels.com/photos/1388278/pexels-photo-1388278.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    title: 'Vulcanizer',
    image:
      'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    title: 'Solar panel installation',
    image:
      'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    title: 'Solar panel installation',
    image:
      'https://images.unsplash.com/photo-1673865641469-34498379d8af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJpY2tsYXlpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '5',
    title: 'Tattoo Artist',
    image:
      'https://images.pexels.com/photos/2177016/pexels-photo-2177016.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    title: 'Carpenter',
    image:
      'https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '7',
    title: 'Tiler',
    image:
      'https://images.pexels.com/photos/12924578/pexels-photo-12924578.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
