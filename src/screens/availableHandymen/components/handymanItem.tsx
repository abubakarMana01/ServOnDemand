import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants';
import {AppButton} from '../../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppContext} from '../../../context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROUTES} from '../../../navigation';

interface IHandymanItem {
  data: IHandyMan;
}

export default function HandymanItem({data}: IHandymanItem) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={styles.infoContainer}>
      <Image
        source={{uri: data.picture}}
        resizeMode="cover"
        style={styles.userImg}
      />

      <View style={styles.userDetails}>
        <Text style={styles.username} numberOfLines={1}>
          {data.name}
        </Text>
        <View style={styles.userRatingContainer}>
          <MaterialCommunityIcons name="star" color="#E38902" size={18} />
          <Text style={styles.ratingText}>
            {data.rating}{' '}
            <Text style={styles.ratingCount}>
              ({data.reviewsCount} reviews)
            </Text>
          </Text>
        </View>
      </View>

      {/* <AppButton
        title="Details"
        onPress={() => navigation.navigate(ROUTES.DETAILS)}
        customStyles={[
          styles.selectButtonCustom,
          {backgroundColor: 'transparent'},
        ]}
        customTextStyles={{
          color: theme === 'dark' ? Colors.blue : Colors.darkBlue,
        }}
      /> */}
      <AppButton
        title="Details"
        onPress={() => navigation.navigate(ROUTES.DETAILS)}
        customStyles={styles.selectButtonCustom}
        customTextStyles={styles.selectButtonCustomText}
      />
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userImg: {
      width: 43,
      height: 43,
      borderRadius: 21.5,
      marginRight: 8,
      backgroundColor: Colors.lightGrey,
    },
    userDetails: {
      flex: 1,
    },
    username: {
      fontWeight: '500',
      fontSize: 16,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    userRatingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 3,
    },
    ratingText: {
      marginLeft: 4,
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    ratingCount: {
      color: Colors.darkGrey,
    },
    selectButtonCustom: {
      maxWidth: 65,
      height: 28,
      borderRadius: 6,
    },
    selectButtonCustomText: {
      fontWeight: '500',
      fontSize: 14,
    },
  });
