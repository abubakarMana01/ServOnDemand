import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../navigation';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppContext} from '../../../context';
import {Colors} from '../../../constants';

interface IServiceCard {
  service: any;
  isFirst: boolean;
}

export default function ServiceCard({service, isFirst}: IServiceCard) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {theme} = useAppContext();
  const styles = stylesheet({theme});

  return (
    <Pressable
      key={service.id}
      style={[
        styles.card,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginRight: 16,
          marginLeft: isFirst ? 16 : 0,
        },
      ]}
      onPress={() => navigation.navigate(ROUTES.AVAILABLE_HANDYMEN)}>
      <Image source={{uri: service.image}} style={styles.image} />
      <Text numberOfLines={2} style={styles.cardText}>
        {service.title}
      </Text>
    </Pressable>
  );
}

const stylesheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    marginInline: {
      marginHorizontal: 16,
    },
    card: {
      width: 90,
    },
    image: {
      width: 90,
      height: 90,
      borderRadius: 10,
      backgroundColor: '#eeeeee',
    },
    cardText: {
      marginTop: 10,
      color: theme === 'dark' ? Colors.white : Colors.dark,
      fontSize: 13,
    },
  });
