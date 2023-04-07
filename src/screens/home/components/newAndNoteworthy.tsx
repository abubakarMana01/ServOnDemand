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
  {
    id: '5',
    title: 'Water Purifier',
    image:
      'https://images.unsplash.com/photo-1629969337555-e384ed2d1439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXIlMjBwdXJpZmllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '6',
    title: 'Computer Repair',
    image:
      'https://images.unsplash.com/photo-1591238372338-22d30c883a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];

const NEW_AND_NOTEWORTHY_SERVICES_ROW_2 = [
  {
    id: '1',
    title: 'Water Purifier',
    image:
      'https://images.unsplash.com/photo-1629969337555-e384ed2d1439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXIlMjBwdXJpZmllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    title: 'Computer Repair',
    image:
      'https://images.unsplash.com/photo-1591238372338-22d30c883a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    title: 'AC Service and Repairs',
    image:
      'https://images.unsplash.com/photo-1558919047-80f932b017cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWMlMjByZXBhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '4',
    title: 'Security Camera installation',
    image:
      'https://images.unsplash.com/photo-1676630656246-3047520adfdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2058&q=80',
  },
  {
    id: '5',
    title: 'AC Service and Repairs',
    image:
      'https://images.unsplash.com/photo-1558919047-80f932b017cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWMlMjByZXBhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];
