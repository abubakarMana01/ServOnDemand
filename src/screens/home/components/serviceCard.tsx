/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../navigation';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppContext} from '../../../context';
import {Colors} from '../../../constants';

interface IServiceCard {
  service: any;
  isFirst: boolean;
  bonus?: {
    category: 'new' | 'most booked';
    text: string;
  };
}

export default function ServiceCard({service, isFirst, bonus}: IServiceCard) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {theme} = useAppContext();
  const styles = stylesheet({theme});

  return (
    <TouchableOpacity
      key={service.id}
      style={[
        styles.card,
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
      {bonus?.category && (
        <View
          style={{
            position: 'absolute',
            backgroundColor: bonus?.category === 'new' ? 'brown' : 'green',
            paddingHorizontal: 3,
            paddingVertical: 1.5,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            left: 8,
          }}>
          <Text
            style={{
              fontSize: 8,
              color: Colors.white,
              textTransform: 'uppercase',
            }}>
            {bonus.text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

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
      backgroundColor: Colors.lightGrey,
    },
    cardText: {
      marginTop: 4,
      color: theme === 'dark' ? Colors.white : Colors.dark,
      fontSize: 12,
    },
  });
