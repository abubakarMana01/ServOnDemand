import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppContext} from '../../../context';
import ServiceCard from './serviceCard';

interface IBookService {
  data: IService[];
}

const BookService = ({data}: IBookService) => {
  const {theme} = useAppContext();
  const styles = stylesheet({theme});
  const [firstRow, setFirstRow] = useState<IService[]>([]);
  const [secondRow, setSecondRow] = useState<IService[]>([]);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (i < data.length / 2) {
        setFirstRow(prev => [...prev, data[i]]);
      } else {
        setSecondRow(prev => [...prev, data[i]]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row'}}>
            {firstRow.map((service, index) => (
              <ServiceCard
                bonus={{category: 'new', text: 'New'}}
                key={service._id}
                service={service}
                isFirst={!index}
              />
            ))}
          </View>

          <View style={{flexDirection: 'row', marginTop: 16}}>
            {secondRow.map((service, index) => (
              <ServiceCard
                bonus={{category: 'new', text: 'New'}}
                key={service._id}
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

export default BookService;

const stylesheet = ({}: IStyleSheet) =>
  StyleSheet.create({
    container: {},
  });

// const SERVICES_ROW_1 = [
//   {
//     id: '1',
//     title: 'Furniture Assembly',
//     image:
//       'https://images.pexels.com/photos/5217124/pexels-photo-5217124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: '2',
//     title: 'Henna Artist',
//     image:
//       'https://images.pexels.com/photos/2678412/pexels-photo-2678412.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '3',
//     title: 'Laptop repair',
//     image:
//       'https://images.pexels.com/photos/10562464/pexels-photo-10562464.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '4',
//     title: 'Women Hair Dressing',
//     image:
//       'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '5',
//     title: 'Manicure & Pedicure',
//     image:
//       'https://images.pexels.com/photos/14267567/pexels-photo-14267567.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '6',
//     title: 'Computer Repair',
//     image:
//       'https://images.unsplash.com/photo-1591238372338-22d30c883a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: '7',
//     title: 'Concrete Flooring',
//     image:
//       'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '8',
//     title: 'Security Camera installation',
//     image:
//       'https://images.unsplash.com/photo-1676630656246-3047520adfdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2058&q=80',
//   },
// ];

// const SERVICES_ROW_2 = [
//   {
//     id: '1',
//     title: 'Haircut for men',
//     image:
//       'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '2',
//     title: 'Vulcanizer',
//     image:
//       'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '3',
//     title: 'Solar panel installation',
//     image:
//       'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '4',
//     title: 'Solar panel installation',
//     image:
//       'https://images.unsplash.com/photo-1673865641469-34498379d8af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJpY2tsYXlpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: '5',
//     title: 'Tattoo Artist',
//     image:
//       'https://images.pexels.com/photos/2177016/pexels-photo-2177016.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '6',
//     title: 'Carpenter',
//     image:
//       'https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: '7',
//     title: 'Tiler',
//     image:
//       'https://images.pexels.com/photos/12924578/pexels-photo-12924578.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
// ];
