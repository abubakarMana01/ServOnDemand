import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScreenHeaderBg} from '../../../components';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../../constants';
import {useAppContext} from '../../../context';
import SearchModal from './searchModal';

export default function HomeHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  const {theme, user} = useAppContext();

  const styles = styleSheet({theme});
  return (
    <ScreenHeaderBg customStyles={styles.screenHeader}>
      <View style={styles.headerUser}>
        <Image
          source={require('../../../assets/neymar.jpeg')}
          style={styles.userImage}
          resizeMode="cover"
        />

        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Welcome</Text>
          <View style={styles.nameAndNotification}>
            <Text style={styles.username}>{user?.lastName}</Text>

            <Pressable>
              <Feather name="bell" size={24} color={Colors.grey} />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <Feather name="search" size={30} color={Colors.white} />
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.searchInputContainer}>
          <Text style={styles.searchInputText}>Search...</Text>
        </Pressable>

        <Feather name="filter" size={24} color={Colors.purple} />
      </View>

      <SearchModal {...{modalVisible, setModalVisible}} />
    </ScreenHeaderBg>
  );
}

const styleSheet = ({}: IStyleSheet) =>
  StyleSheet.create({
    screenHeader: {
      zIndex: 10,
    },
    headerUser: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
      marginTop: Dimensions.get('window').height < 700 ? 16 : 0,
    },
    userInfo: {flex: 1},
    nameAndNotification: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    userImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 16,
    },
    greeting: {
      fontSize: 16,
      opacity: 0.7,
      color: Colors.white,
    },
    username: {
      fontSize: 28,
      fontWeight: '600',
      color: Colors.white,
      textTransform: 'capitalize',
    },

    searchBarContainer: {
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchInputContainer: {
      paddingHorizontal: 10,
      flex: 1,
      height: 40,
      justifyContent: 'center',
    },
    searchInputText: {
      marginLeft: 16,
      fontSize: 16,
      color: Colors.grey,
    },
    searchInput: {
      marginLeft: 16,
      fontSize: 16,
      height: 40,
      flex: 1,
      color: Colors.white,
    },
  });
